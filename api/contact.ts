import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // keep this for now
      to: ["prajwalaiet@gmail.com"], // ✅ your email
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ✅ VERY IMPORTANT (for debugging)
    console.log("RESEND RESPONSE:", response);

    return res.status(200).json({ success: true });

  } catch (error) {
    // ✅ VERY IMPORTANT (for debugging)
    console.error("RESEND ERROR:", error);

    return res.status(500).json({ error: "Email failed" });
  }
}