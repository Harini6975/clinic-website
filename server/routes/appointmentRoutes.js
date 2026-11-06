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

  // 4. Validate Department / Treatment
  if (!resolvedDept || typeof resolvedDept !== "string" || !resolvedDept.trim()) {
    errors.treatment = "Please select a valid primary concern or department.";
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

  // 7. Save Verified Data to Supabase
  const { data, error } = await supabase
    .from("appointments")
    .insert([{
      patient_name: resolvedName.trim(),
      email: trimmedEmail,
      phone: cleanPhone,
      department: resolvedDept.trim(),
      doctor: doctor ? doctor.trim() : "",
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

  // 8. Send Notification via Twilio
  try {
    if (process.env.TWILIO_ACCOUNT_SID && process.env.DOCTOR_PHONE_NUMBER) {
      const customMessage = `🚨 New Appointment Booked!\nPatient: ${resolvedName}\nPhone: ${cleanPhone}\nDepartment: ${resolvedDept}\nDate: ${resolvedDate} at ${resolvedTime}`;

      await client.messages.create({
        body: customMessage,
        from: "whatsapp:+17372508034",
        to: `whatsapp:${process.env.DOCTOR_PHONE_NUMBER}`,
      });
    }
  } catch (err) {
    console.error("Notification error:", err.message);
  }

  return res.status(201).json(formatAppointment(data));
});

module.exports = router;