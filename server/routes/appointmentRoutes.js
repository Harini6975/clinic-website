
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

const allowedStatuses = [
  "Pending",
  "Approved",
  "Completed",
  "Cancelled",
];

// GET all appointments
router.get("/", async (req, res) => {
  const supabase = req.app.locals.supabase;

  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  res.json(data.map(formatAppointment));
});

// GET one appointment
router.get("/:id", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid appointment ID" });
  }

  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  if (!data) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  res.json(formatAppointment(data));
});

// CREATE appointment
router.post("/", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const {
    patientName,
    email,
    phone,
    department,
    doctor = "",
    appointmentDate,
    appointmentTime = "",
    message = "",
  } = req.body;

  if (
    !patientName?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !department?.trim() ||
    !appointmentDate
  ) {
    return res.status(400).json({
      message: "Name, email, phone, department, and date are required",
    });
  }

  const { data, error } = await supabase
    .from("appointments")
    .insert([{
      patient_name: patientName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      department: department.trim(),
      doctor,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      message,
    }])
    .select()
    .single();

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  res.status(201).json(formatAppointment(data));
});

// UPDATE appointment
router.put("/:id", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const id = Number(req.params.id);
  const updates = {};

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid appointment ID" });
  }

  const fields = {
    patientName: "patient_name",
    email: "email",
    phone: "phone",
    department: "department",
    doctor: "doctor",
    appointmentDate: "appointment_date",
    appointmentTime: "appointment_time",
    message: "message",
    status: "status",
  };

  for (const [input, column] of Object.entries(fields)) {
    if (req.body[input] !== undefined) {
      updates[column] = req.body[input];
    }
  }

  if (
    updates.status !== undefined &&
    !allowedStatuses.includes(updates.status)
  ) {
    return res.status(400).json({ message: "Invalid appointment status" });
  }

  const { data, error } = await supabase
    .from("appointments")
    .update(updates)
    .eq("id", id)
    .select()
    .maybeSingle();

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  if (!data) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  res.json(formatAppointment(data));
});

// DELETE appointment
router.delete("/:id", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid appointment ID" });
  }

  const { data, error } = await supabase
    .from("appointments")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  if (!data) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  res.json({ message: "Appointment deleted successfully" });
});

module.exports = router;
