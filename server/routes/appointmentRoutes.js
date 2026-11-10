const express = require("express");
const router = express.Router();

function formatAppointment(item) {
  if (!item) return item;
  return {
    ...item,
    _id: String(item.id),
    patientName: item.patient_name,
    appointmentDate: item.appointment_date,
    appointmentTime: item.appointment_time,
    createdAt: item.created_at,
  };
}

router.post("/", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const {
    patient_name,
    patientName,
    email = "",
    phone,
    treatment,
    department,
    preferred_date,
    appointmentDate,
    preferred_time,
    appointmentTime = "",
    message = "",
  } = req.body;

  const resolvedName = patientName || patient_name;
  const resolvedDept = department || treatment;
  const resolvedDate = appointmentDate || preferred_date;
  const resolvedTime = appointmentTime || preferred_time || "";

  const errors = {};

  // 1. Validate Patient Name
  if (!resolvedName || typeof resolvedName !== "string" || resolvedName.trim().length < 2) {
    errors.patient_name = "Please enter a valid patient name (at least 2 characters).";
  } else {
    const nameRegex = /^[a-zA-Z\s.]+$/;
    if (!nameRegex.test(resolvedName.trim())) {
      errors.patient_name = "Patient name can only contain letters and spaces.";
    }
  }

  // 2. Validate Phone Number
  if (!phone || typeof phone !== "string") {
    errors.phone = "Phone number is required.";
  } else {
    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }
  }

  // 3. Validate Email Format (Optional)
  const trimmedEmail = email ? email.trim().toLowerCase() : "";
  if (trimmedEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      errors.email = "Please enter a correct email address format.";
    }
  }

  // 4. Validate Reason for Visit / Treatment
  if (!resolvedDept || typeof resolvedDept !== "string" || !resolvedDept.trim()) {
    errors.treatment = "Please select a valid primary concern or reason for visit.";
  }

  // 5. Validate Preferred Date
  if (!resolvedDate) {
    errors.preferred_date = "Preferred date is required.";
  } else {
    const parsedDate = new Date(resolvedDate);
    if (isNaN(parsedDate.getTime())) {
      errors.preferred_date = "Please enter a valid calendar date.";
    }
  }

  // 6. Validate Preferred Time Slot
  if (!resolvedTime || typeof resolvedTime !== "string" || !resolvedTime.trim()) {
    errors.preferred_time = "Please select a valid time slot.";
  }

  // If any field failed, block submission and return error details
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ 
      message: "Failed to submit because of wrongly entered fields.",
      errors 
    });
  }

  const cleanPhone = phone.trim().replace(/\D/g, "");

  // 7. Save Verified Data to Supabase (without doctor column)
  const { data, error } = await supabase
    .from("appointments")
    .insert([{
      patient_name: resolvedName.trim(),
      email: trimmedEmail,
      phone: cleanPhone,
      reason_for_visit: resolvedDept.trim(),
      appointment_date: resolvedDate,
      appointment_time: resolvedTime.trim(),
      message: message ? message.trim() : "",
    }])
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error.message);
    return res.status(400).json({ errors: { form: error.message } });
  }

  // 8. Send Notification via Telegram
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramText = `🔔 *New Appointment Alert*\n\n` +
        `📅 *Date:* ${resolvedDate}\n` +
        `⏰ *Time:* ${resolvedTime}\n` +
        `👤 *Patient Name:* ${resolvedName.trim()}\n` +
        `📞 *Phone:* ${cleanPhone}\n` +
        `🩺 *Reason for Visit:* ${resolvedDept}\n` +
        `📝 *Notes:* ${message ? message.trim() : "None"}`;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
          parse_mode: "Markdown",
        }),
      });

      const result = await response.json();
      if (!result.ok) {
        console.error("Telegram API Error:", result.description);
      } else {
        console.log("Telegram notification sent successfully!");
      }
    }
  } catch (err) {
    console.error("Telegram fetch failed:", err.message);
  }

  return res.status(201).json(formatAppointment(data));
});

module.exports = router;