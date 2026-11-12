require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cron = require("node-cron");
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

// ==========================================
// AUTOMATED TODAY'S APPOINTMENT SUMMARY CRON JOB
// Runs every day at 5:10 PM (10 17 * * *)
// ==========================================
cron.schedule("10 17 * * *", async () => {
  try {
    const today = new Date();
    const targetDate = today.toISOString().split("T")[0];

    const { data: appointments, error } = await supabase
      .from("appointments")
      .select("*")
      .eq("preferred_date", targetDate);

    if (error) {
      console.error("Cron job error fetching appointments:", error);
      return;
    }

    if (!appointments || appointments.length === 0) {
      console.log(`No appointments scheduled for today (${targetDate}).`);
      return;
    }

    let summaryText = `📋 *Today's Appointment Summary (5:30 PM - 9:00 PM session)*\n📅 *Date:* ${targetDate}\n*Total Bookings:* ${appointments.length}\n\n`;

    appointments.forEach((appt, index) => {
      summaryText += `${index + 1}. *Time:* ${appt.preferred_time}\n` +
                     `   *Patient:* ${appt.patient_name}\n` +
                     `   *Phone:* ${appt.phone}\n` +
                     `   *Concern:* ${appt.treatment}\n\n`;
    });

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.DOCTOR_TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: summaryText,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        console.log("Today's appointment summary successfully sent to Dr. Kalaivanan via Telegram!");
      } else {
        console.error("Failed to send Telegram summary.");
      }
    }
  } catch (err) {
    console.error("Error in daily appointment cron job:", err);
  }
});

// Manual trigger endpoint to test summary instantly anytime via browser/Postman
app.get("/api/test-summary", async (req, res) => {
  try {
    const today = new Date();
    const targetDate = today.toISOString().split("T")[0];

    const { data: appointments, error } = await supabase
      .from("appointments")
      .select("*")
      .eq("preferred_date", targetDate);

    if (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }

    if (!appointments || appointments.length === 0) {
      return res.json({ status: "OK", message: `No appointments found for today (${targetDate}).` });
    }

    let summaryText = `📋 *Today's Appointment Summary (5:30 PM - 9:00 PM session)*\n📅 *Date:* ${targetDate}\n*Total Bookings:* ${appointments.length}\n\n`;

    appointments.forEach((appt, index) => {
      summaryText += `${index + 1}. *Time:* ${appt.preferred_time}\n` +
                     `   *Patient:* ${appt.patient_name}\n` +
                     `   *Phone:* ${appt.phone}\n` +
                     `   *Concern:* ${appt.treatment}\n\n`;
    });

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.DOCTOR_TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: summaryText,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        return res.json({ status: "OK", message: "Summary sent to Telegram successfully!" });
      }
    }

    res.status(500).json({ status: "error", message: "Failed to dispatch Telegram message." });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`HospitalCare server running on http://localhost:${PORT}`);
});