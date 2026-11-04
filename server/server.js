
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 5000;

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing Supabase settings in server/.env");
  process.exit(1);
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.locals.supabase = supabase;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HospitalCare API is running");
});

app.get("/api/health", async (req, res) => {
  const { error } = await supabase
    .from("doctors")
    .select("id")
    .limit(1);

  if (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }

  res.json({
    status: "OK",
    message: "HospitalCare Supabase connection successful",
  });
});

app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

app.listen(PORT, () => {
  console.log(`HospitalCare server running on http://localhost:${PORT}`);
});
