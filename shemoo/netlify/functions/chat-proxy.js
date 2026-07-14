exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const response = await fetch(
      "https://aarya-n8n.app.n8n.cloud/webhook/e6c87845-aeb7-41ba-8103-b8eb59cdd7ff/chat",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: event.body,
      }
    );

    const data = await response.text();

    return {
      statusCode: response.status,
      headers: { "Content-Type": "application/json" },
      body: data,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};