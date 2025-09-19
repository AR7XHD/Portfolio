import express from "express";
import ContactMessage from "../models/ContactMessage.js";
import { createTransporter } from "../lib/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email and message are required" });
    }

    // Save to DB
    const saved = await ContactMessage.create({ name, email, message });

    // Send email (plain text)
    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_USER, // sender (your smtp account)
      to: process.env.CONTACT_RECEIVER, // your inbox
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email // so Reply in your inbox goes to the visitor
    });

    return res.json({ ok: true, id: saved._id });
  } catch (err) {
    console.error("Contact route error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
