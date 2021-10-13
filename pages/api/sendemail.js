export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    const resulting = await fetch(process.env.WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "New Contact Message",
        embeds: [
          {
            description: "New Message",
            fields: [
              { name: "Name", value: body.name, inline: true },
              { name: "Email", value: body.email, inline: true },
              { name: "Message", value: body.message, inline: true },
            ],
          },
        ],
      }),
    });
    res.status(200).json({ message: "received" });
  }
}
