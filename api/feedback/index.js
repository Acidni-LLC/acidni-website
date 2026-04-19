const azdev = require("azure-devops-node-api");
const axios = require("axios");

async function verifyRecaptcha(token) {
  if (!token) {
    return { success: false, error: "No reCAPTCHA token provided" };
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not configured, skipping verification");
    return { success: true };
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
      error: "reCAPTCHA verification failed",
      score: response.data.score,
    };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false, error: "reCAPTCHA verification error" };
  }
}

const WORK_ITEM_TYPE_MAP = {
  bug: "Bug",
  feedback: "Task",
  feature: "Feature",
};

const WORK_ITEM_TAG_MAP = {
  bug: "customer-reported;bug",
  feedback: "customer-feedback",
  feature: "feature-request;customer-submitted",
};

module.exports = async function (context, req) {
  context.log("Feedback submission received");

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers };
    return;
  }

  try {
    const body = req.body;

    if (!body.type || !body.title || !body.description) {
      context.res = {
        status: 400,
        headers,
        body: {
          error:
            "Missing required fields: type, title, and description are required",
        },
      };
      return;
    }

    if (!["bug", "feedback", "feature"].includes(body.type)) {
      context.res = {
        status: 400,
        headers,
        body: { error: "Invalid type. Must be: bug, feedback, or feature" },
      };
      return;
    }

    if (body.type === "feature" && !body.acceptTerms) {
      context.res = {
        status: 400,
        headers,
        body: { error: "Feature requests require acceptance of terms" },
      };
      return;
    }

    const orgUrl = process.env.AZURE_DEVOPS_ORG_URL;
    const token = process.env.AZURE_DEVOPS_PAT;
    const project = process.env.AZURE_DEVOPS_PROJECT;

    if (!orgUrl || !token || !project) {
      context.log.error("Azure DevOps configuration missing");
      context.res = {
        status: 500,
        headers,
        body: { error: "Server configuration error" },
      };
      return;
    }

    const authHandler = azdev.getPersonalAccessTokenHandler(token);
    const connection = new azdev.WebApi(orgUrl, authHandler);
    const workItemApi = await connection.getWorkItemTrackingApi();

    const workItemType = WORK_ITEM_TYPE_MAP[body.type];
    const tags = WORK_ITEM_TAG_MAP[body.type];
    const fullDescription = buildDescription(body);

    const document = [
      {
        op: "add",
        path: "/fields/System.Title",
        value: `[${body.metadata.app}] ${body.title}`,
      },
      {
        op: "add",
        path: "/fields/System.Description",
        value: fullDescription,
      },
      {
        op: "add",
        path: "/fields/System.Tags",
        value: tags,
      },
      {
        op: "add",
        path: "/fields/Microsoft.VSTS.Common.Priority",
        value: body.type === "bug" ? 2 : 3,
      },
    ];

    const appAreaMap = {
      ACCM: "Acidni Website\\ACCM",
      "Copilot Chat Manager": "Acidni Website\\ACCM",
      Terprint: "Acidni Website\\Terprint",
      Website: "Acidni Website\\Website",
    };
    const areaPath =
      appAreaMap[body.metadata.app] || "Acidni Website\\Other";
    document.push({
      op: "add",
      path: "/fields/System.AreaPath",
      value: areaPath,
    });

    const workItem = await workItemApi.createWorkItem(
      null,
      document,
      project,
      workItemType
    );

    const ticketId = `${body.metadata.app
      .toUpperCase()
      .replace(/\s+/g, "")}-${workItem.id}`;

    context.log(`Work item created: ${workItem.id}`);

    await sendNotificationEmail(context, body, ticketId, workItem.id);

    context.log({
      event: "FeedbackWorkItemCreated",
      type: body.type,
      app: body.metadata.app,
      version: body.metadata.version,
      workItemId: workItem.id,
      ticketId,
    });

    context.res = {
      status: 200,
      headers,
      body: {
        success: true,
        ticketId,
        workItemId: workItem.id,
        message: "Feedback submitted successfully",
      },
    };
  } catch (error) {
    context.log.error("Error processing feedback:", error);
    context.res = {
      status: 500,
      headers,
      body: { error: "Failed to process feedback submission" },
    };
  }
};

function buildDescription(body) {
  const { metadata } = body;

  let html = `<div>
<h2>User Submission</h2>
<p>${escapeHtml(body.description)}</p>

<h2>Contact</h2>
<p><strong>Email:</strong> ${body.email || "Not provided"}</p>
<p><strong>User ID:</strong> ${metadata.userId}</p>

<h2>Application Details</h2>
<table>
<tr><td><strong>Application:</strong></td><td>${metadata.app}</td></tr>
<tr><td><strong>Version:</strong></td><td>${metadata.version}</td></tr>
<tr><td><strong>Platform:</strong></td><td>${metadata.platform}</td></tr>
<tr><td><strong>Session ID:</strong></td><td>${metadata.sessionId}</td></tr>
</table>

<h2>Environment</h2>
<table>
<tr><td><strong>User Agent:</strong></td><td>${escapeHtml(
    metadata.userAgent
  )}</td></tr>
<tr><td><strong>Screen Resolution:</strong></td><td>${
    metadata.screenResolution
  }</td></tr>
<tr><td><strong>Referrer:</strong></td><td>${
    metadata.referrer || "Direct"
  }</td></tr>
<tr><td><strong>Submitted:</strong></td><td>${metadata.timestamp}</td></tr>
</table>`;

  const standardKeys = [
    "app",
    "version",
    "userId",
    "platform",
    "sessionId",
    "userAgent",
    "screenResolution",
    "timestamp",
    "referrer",
  ];
  const customMetadata = Object.entries(metadata).filter(
    ([key]) => !standardKeys.includes(key)
  );

  if (customMetadata.length > 0) {
    html += `
<h2>Additional Metadata</h2>
<table>`;
    for (const [key, value] of customMetadata) {
      html += `<tr><td><strong>${escapeHtml(
        key
      )}:</strong></td><td>${escapeHtml(value)}</td></tr>`;
    }
    html += `</table>`;
  }

  if (body.type === "feature") {
    html += `
<h2>Legal</h2>
<p>User accepted IP release terms at ${metadata.timestamp}</p>`;
  }

  html += `</div>`;

  return html;
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendNotificationEmail(context, body, ticketId, workItemId) {
  const emailEndpoint = process.env.EMAIL_NOTIFICATION_ENDPOINT;
  const notificationEmail =
    process.env.NOTIFICATION_EMAIL || "contact@acidni.net";

  if (!emailEndpoint) {
    context.log(
      "Email notification endpoint not configured, skipping notification"
    );
    return;
  }

  const typeEmoji = {
    bug: "Bug",
    feedback: "Feedback",
    feature: "Feature",
  };

  const typeLabel = {
    bug: "Bug Report",
    feedback: "Feedback",
    feature: "Feature Request",
  };

  try {
    await fetch(emailEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: notificationEmail,
        subject: `${typeEmoji[body.type]} New ${typeLabel[body.type]}: ${body.title} [${ticketId}]`,
        html: `
<h2>${typeEmoji[body.type]} New ${typeLabel[body.type]} Submitted</h2>

<p><strong>Ticket ID:</strong> ${ticketId}</p>
<p><strong>Work Item:</strong> #${workItemId}</p>
<p><strong>App:</strong> ${body.metadata.app} v${body.metadata.version}</p>
<p><strong>From:</strong> ${body.email || "Anonymous"} (${body.metadata.userId})</p>

<h3>Title</h3>
<p>${body.title}</p>

<h3>Description</h3>
<p>${body.description}</p>

<hr>
<p><a href="${process.env.AZURE_DEVOPS_ORG_URL}/${process.env.AZURE_DEVOPS_PROJECT}/_workitems/edit/${workItemId}">View in Azure DevOps</a></p>
        `,
      }),
    });
    context.log("Notification email sent");
  } catch (error) {
    context.log.warn("Failed to send notification email:", error);
  }
}
