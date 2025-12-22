const { app } = require('@azure/functions');
const axios = require('axios');

// reCAPTCHA verification
async function verifyRecaptcha(token) {
  if (!token) {
    return { success: false, error: 'No reCAPTCHA token provided' };
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY not configured, skipping verification');
    return { success: true }; // Allow in dev if not configured
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    if (response.data.success && response.data.score >= 0.5) {
      return { success: true, score: response.data.score };
    }

    return {
      success: false,
      error: 'reCAPTCHA verification failed',
      score: response.data.score,
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, error: 'reCAPTCHA verification error' };
  }
}

// Azure DevOps work item creation
async function createSupportWorkItem(data) {
  const orgUrl = process.env.DEVOPS_ORG_URL;
  const project = process.env.DEVOPS_PROJECT;
  const pat = process.env.DEVOPS_PAT;

  if (!orgUrl || !project || !pat) {
    throw new Error('Azure DevOps configuration missing');
  }

  const workItemUrl = `${orgUrl}/${project}/_apis/wit/workitems/$Issue?api-version=7.0`;

  const priorityMap = {
    low: 4,
    medium: 3,
    high: 2,
    urgent: 1,
  };

  const workItemData = [
    {
      op: 'add',
      path: '/fields/System.Title',
      value: `[Support] ${data.subject}`,
    },
    {
      op: 'add',
      path: '/fields/System.Description',
      value: `<div>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Category:</strong> ${data.category}</p>
        <p><strong>Priority:</strong> ${data.priority}</p>
        <hr/>
        <p>${data.description.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p><em>User Agent: ${data.userAgent}</em></p>
        <p><em>Submitted: ${data.timestamp}</em></p>
      </div>`,
    },
    {
      op: 'add',
      path: '/fields/System.Tags',
      value: `support; ${data.category}; ${data.priority}`,
    },
    {
      op: 'add',
      path: '/fields/Microsoft.VSTS.Common.Priority',
      value: priorityMap[data.priority] || 3,
    },
    {
      op: 'add',
      path: '/fields/System.AreaPath',
      value: `${project}\\Support`,
    },
  ];

  const response = await axios.post(workItemUrl, workItemData, {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Basic ${Buffer.from(`:${pat}`).toString('base64')}`,
    },
  });

  return response.data;
}

// Send email notification via APIM
async function sendSupportNotification(data, workItemId) {
  const apimUrl = process.env.APIM_EMAIL_ENDPOINT;
  const apimKey = process.env.APIM_SUBSCRIPTION_KEY;

  if (!apimUrl || !apimKey) {
    console.warn('Email notification not configured');
    return;
  }

  const emailData = {
    to: 'support@acidni.net',
    subject: `New Support Request: ${data.subject}`,
    body: `
      <h2>New Support Request</h2>
      <p><strong>From:</strong> ${data.name} (${data.email})</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      <p><strong>Category:</strong> ${data.category}</p>
      <p><strong>Priority:</strong> ${data.priority}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <hr/>
      <p>${data.description.replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p><strong>Work Item ID:</strong> ${workItemId}</p>
      <p><em>Submitted: ${data.timestamp}</em></p>
    `,
  };

  try {
    await axios.post(apimUrl, emailData, {
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apimKey,
      },
    });
  } catch (error) {
    console.error('Email notification error:', error.message);
  }
}

app.http('support', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log('Support request received');

    try {
      const body = await request.json();
      const {
        name,
        email,
        company,
        phone,
        category,
        priority,
        subject,
        description,
        recaptchaToken,
        userAgent,
        timestamp,
      } = body;

      // Validation
      if (!name || !email || !category || !priority || !subject || !description) {
        return {
          status: 400,
          jsonBody: {
            error: 'Missing required fields',
          },
        };
      }

      if (description.length < 20) {
        return {
          status: 400,
          jsonBody: {
            error: 'Description must be at least 20 characters',
          },
        };
      }

      // Verify reCAPTCHA
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.success) {
        context.log('reCAPTCHA verification failed:', recaptchaResult.error);
        return {
          status: 400,
          jsonBody: {
            error: 'reCAPTCHA verification failed. Please try again.',
          },
        };
      }

      // Create Azure DevOps work item
      const workItem = await createSupportWorkItem({
        name,
        email,
        company,
        phone,
        category,
        priority,
        subject,
        description,
        userAgent,
        timestamp,
      });

      context.log('Work item created:', workItem.id);

      // Send email notification
      await sendSupportNotification(
        {
          name,
          email,
          company,
          phone,
          category,
          priority,
          subject,
          description,
          timestamp,
        },
        workItem.id
      );

      // Track in App Insights
      context.log('Support request submitted', {
        workItemId: workItem.id,
        category,
        priority,
        recaptchaScore: recaptchaResult.score,
      });

      return {
        status: 200,
        jsonBody: {
          success: true,
          message: 'Support request submitted successfully',
          workItemId: workItem.id,
        },
      };
    } catch (error) {
      context.error('Support request error:', error);
      return {
        status: 500,
        jsonBody: {
          error: 'An error occurred processing your request',
        },
      };
    }
  },
});
