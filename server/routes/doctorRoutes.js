
const express = require("express");
const router = express.Router();

function formatDoctor(doctor) {
  if (!doctor) return doctor;

  return {
    ...doctor,
    _id: String(doctor.id),
    createdAt: doctor.created_at,
  };
}

// GET all doctors
router.get("/", async (req, res) => {
  const supabase = req.app.locals.supabase;

  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  res.json(data.map(formatDoctor));
});

// GET one doctor
router.get("/:id", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid doctor ID" });
  }

  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  if (!data) {
    return res.status(404).json({ message: "Doctor not found" });
  }

  res.json(formatDoctor(data));
});

// ADD doctor
router.post("/", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const { name, speciality, qualification = "", experience = 0,
    available = true } = req.body;

  if (!name?.trim() || !speciality?.trim()) {
    return res.status(400).json({
      message: "Doctor name and speciality are required",
    });
  }

  const years = Number(experience);

  if (!Number.isInteger(years) || years < 0) {
    return res.status(400).json({
      message: "Experience must be a non-negative whole number",
    });
  }

  const { data, error } = await supabase
    .from("doctors")
    .insert([{
      name: name.trim(),
      speciality: speciality.trim(),
      qualification,
      experience: years,
      available: Boolean(available),
    }])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  res.status(201).json(formatDoctor(data));
});

// UPDATE doctor
router.put("/:id", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const id = Number(req.params.id);
  const { name, speciality, qualification, experience, available } = req.body;

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid doctor ID" });
  }

  const updates = {};

  if (name !== undefined) updates.name = name.trim();
  if (speciality !== undefined) updates.speciality = speciality.trim();
  if (qualification !== undefined) updates.qualification = qualification;
  if (experience !== undefined) {
    const years = Number(experience);
    if (!Number.isInteger(years) || years < 0) {
      return res.status(400).json({
        message: "Experience must be a non-negative whole number",
      });
    }
    updates.experience = years;
  }
  if (available !== undefined) updates.available = Boolean(available);

  if (updates.name === "" || updates.speciality === "") {
    return res.status(400).json({
      message: "Doctor name and speciality cannot be empty",
    });
  }

  const { data, error } = await supabase
    .from("doctors")
    .update(updates)
    .eq("id", id)
    .select()
    .maybeSingle();

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  if (!data) {
    return res.status(404).json({ message: "Doctor not found" });
  }

  res.json(formatDoctor(data));
});

// DELETE doctor
router.delete("/:id", async (req, res) => {
  const supabase = req.app.locals.supabase;
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid doctor ID" });
  }

  const { data, error } = await supabase
    .from("doctors")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  if (!data) {
    return res.status(404).json({ message: "Doctor not found" });
  }

  res.json({ message: "Doctor deleted successfully" });
});

module.exports = router;
