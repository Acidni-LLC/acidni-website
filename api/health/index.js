module.exports = async function (context, req) {
  const version = process.env.APP_VERSION || "unknown";

  context.res = {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "X-App-Version": version,
    },
    body: {
      status: "healthy",
      service: "acidni-website",
      version: version,
      timestamp: new Date().toISOString(),
      subsystems: {
        frontend: { status: "healthy" },
        contact_api: { status: "healthy" },
        feedback_api: { status: "healthy" },
        support_api: { status: "healthy" },
      },
    },
  };
};
