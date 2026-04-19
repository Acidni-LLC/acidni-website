const https = require('https');
const { EmailClient } = require('@azure/communication-email');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async function (context, req) {
  context.log('Contact form submission received');

  // Only allow POST
  if (req.method !== 'POST') {
    context.res = {
      status: 405,
      body: { error: 'Method not allowed' }
    };
    return;
  }

  const { name, email, company, service, message, recaptchaToken } = req.body || {};

  // Validate required fields
  if (!name || !email || !message) {
    context.res = {
      status: 400,
      body: { error: 'Missing required fields: name, email, message' }
    };
    return;
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    context.res = {
      status: 400,
      body: { error: 'Invalid email format' }
    };
    return;
  }

  // Verify reCAPTCHA if token provided
  if (recaptchaToken) {
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      try {
        const verifyResponse = await new Promise((resolve, reject) => {
          const payload = JSON.stringify({
            secret: recaptchaSecret,
            response: recaptchaToken,
          });

          const options = {
            hostname: 'www.google.com',
            port: 443,
            path: '/recaptcha/api/siteverify',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload),
            },
          };

          const verifyReq = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
              try {
                resolve(JSON.parse(data));
              } catch (e) {
                reject(e);
              }
            });
          });

          verifyReq.on('error', reject);
          verifyReq.write(payload);
          verifyReq.end();
        });

        if (!verifyResponse.success || verifyResponse.score < 0.5) {
          context.log('reCAPTCHA verification failed:', verifyResponse);
          context.res = {
            status: 400,
            body: { error: 'reCAPTCHA verification failed' }
          };
          return;
        }
      } catch (error) {
        context.log.error('reCAPTCHA verification error:', error.message);
        // Continue anyway if verification fails (graceful degradation)
      }
    }
  }

  // Get ACS connection string from environment
  const connectionString = process.env.ACS_CONNECTION_STRING;

  if (!connectionString) {
    context.log.error('ACS_CONNECTION_STRING environment variable not set');
    context.res = {
      status: 500,
      body: { error: 'Server configuration error' }
    };
    return;
  }

  // Build email content
  const plainTextBody = `
New Contact Form Submission from Acidni.net

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Message:
${message}

---
Sent from acidni.net contact form
  `.trim();

  const htmlBody = `
<h2>New Contact Form Submission</h2>
<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
  <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(name)}</td></tr>
  <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
  <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Company</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(company || 'Not provided')}</td></tr>
  <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Service</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(service || 'Not specified')}</td></tr>
</table>
<h3>Message</h3>
<p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
<hr/>
<p style="color: #888; font-size: 12px;">Sent from acidni.net contact form</p>
  `.trim();

  try {
    const emailClient = new EmailClient(connectionString);

    const emailMessage = {
      senderAddress: 'contact@acidni.net',
      content: {
        subject: `[Acidni.net] Contact from ${name} - ${service || 'General Inquiry'}`,
        plainText: plainTextBody,
        html: htmlBody,
      },
      recipients: {
        to: [{ address: 'contact@acidni.net', displayName: 'Acidni LLC' }],
      },
      replyTo: [{ address: email, displayName: name }],
    };

    const poller = await emailClient.beginSend(emailMessage);
    const result = await poller.pollUntilDone();

    if (result.status === 'Succeeded') {
      context.log('Email sent successfully via ACS');
      context.res = {
        status: 200,
        body: { success: true, message: 'Message sent successfully' }
      };
    } else {
      context.log.error('ACS email send failed:', JSON.stringify(result));
      context.res = {
        status: 500,
        body: { error: 'Failed to send email' }
      };
    }
  } catch (error) {
    context.log.error('Error sending email via ACS:', error.message);
    context.res = {
      status: 500,
      body: { error: 'Failed to send email' }
    };
  }
};
