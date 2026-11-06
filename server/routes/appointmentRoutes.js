const express = require("express");
const router = express.Router();
const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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
    doctor = "",
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

  if (
    !resolvedName?.trim() ||
    !phone?.trim() ||
    !resolvedDept?.trim() ||
    !resolvedDate
  ) {
    return res.status(400).json({
      message: "Name, phone, department/treatment, and date are required",
    });
  }

  // 1. Save to Supabase using the official client
  const { data, error } = await supabase
    .from("appointments")
    .insert([{
      patient_name: resolvedName.trim(),
      email: email ? email.trim().toLowerCase() : "",
      phone: phone.trim(),
      department: resolvedDept.trim(),
      doctor,
      appointment_date: resolvedDate,
      appointment_time: resolvedTime,
      message,
    }])
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error.message);
    return res.status(400).json({ message: error.message });
  }

  // 2. Send WhatsApp Notification to Doctor via Sandbox Content API
  try {
    if (process.env.TWILIO_ACCOUNT_SID && process.env.DOCTOR_PHONE_NUMBER) {
      await client.messages.create({
        contentSid: "HXfe5ab5f00277942d4d4200328b4d403c",
        contentVariables: JSON.stringify({
          1: `Patient: ${resolvedName}`,
          2: `Phone: ${phone}`,
          3: `Department: ${resolvedDept}`,
          4: `Date & Time: ${resolvedDate} at ${resolvedTime}`
        }),
        from: "whatsapp:+17372508034",
        to: `whatsapp:${process.env.DOCTOR_PHONE_NUMBER}`,
      });
    }
  } catch (smsError) {
    console.error("Failed to send doctor WhatsApp notification:", smsError.message);
  }

  return res.status(201).json(formatAppointment(data));
});

module.exports = router;