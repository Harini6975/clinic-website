import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const {
      patient_name,
      phone,
      email,
      treatment,
      preferred_date,
      preferred_time,
      message,
    } = req.body;

    if (!patient_name || !phone || !treatment || !preferred_date || !preferred_time) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    const cleanPhone = phone.trim().replace(/\D/g, "");

    // 1. Save to Supabase
    const { data, error } = await supabase
      .from("appointments")
      .insert([{
        patient_name: patient_name.trim(),
        email: email ? email.trim().toLowerCase() : null,
        phone: cleanPhone,
        reason_for_visit: treatment.trim(),
        appointment_date: preferred_date,
        appointment_time: preferred_time.trim(),
        message: message ? message.trim() : null,
      }])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error.message);
      return res.status(400).json({ message: error.message });
    }

    // 2. Send Telegram Notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN || process.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || process.env.VITE_TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramText = `🔔 *New Appointment Alert*\n\n` +
        `📅 *Date:* ${preferred_date}\n` +
        `⏰ *Time:* ${preferred_time}\n` +
        `👤 *Patient Name:* ${patient_name.trim()}\n` +
        `📞 *Phone:* ${cleanPhone}\n` +
        `🩺 *Reason for Visit:* ${treatment}\n` +
        `📝 *Notes:* ${message ? message.trim() : "None"}`;

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
          parse_mode: "Markdown",
        }),
      });
    }

    return res.status(201).json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err.message);
    return res.status(500).json({ message: err.message });
  }
}