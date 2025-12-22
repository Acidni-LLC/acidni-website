const https = require('https');

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

  // Build email content
  const emailBody = `
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

  const payload = JSON.stringify({
    to: 'contact@acidni.net',
    subject: `[Acidni.net] Contact from ${name} - ${service || 'General Inquiry'}`,
    body: emailBody,
  });

  // Get API key from environment variable
  const apiKey = process.env.COMMS_API_KEY;
  
  if (!apiKey) {
    context.log.error('COMMS_API_KEY environment variable not set');
    context.res = {
      status: 500,
      body: { error: 'Server configuration error' }
    };
    return;
  }

  try {
    const response = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'apim-terprint-dev.azure-api.net',
        port: 443,
        path: '/communications/send-email',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': apiKey,
          'Content-Length': Buffer.byteLength(payload),
        },
      };

      const apiReq = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          resolve({ status: res.statusCode, data });
        });
      });

      apiReq.on('error', reject);
      apiReq.write(payload);
      apiReq.end();
    });

    if (response.status >= 200 && response.status < 300) {
      context.log('Email sent successfully');
      context.res = {
        status: 200,
        body: { success: true, message: 'Message sent successfully' }
      };
    } else {
      context.log.error(`API returned status ${response.status}: ${response.data}`);
      context.res = {
        status: 500,
        body: { error: 'Failed to send email' }
      };
    }
  } catch (error) {
    context.log.error('Error sending email:', error.message);
    context.res = {
      status: 500,
      body: { error: 'Failed to send email' }
    };
  }
};
