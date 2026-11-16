import { useState } from "react";
import {
  CalendarDays,
  UserRound,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import SEO from "../components/SEO";
import { supabase } from "../lib/supabaseClient";

export default function Appointment() {
  const { language } = useLanguage();
  const ta = language === "ta";
  const t = (en, tamil) => (ta ? tamil : en);

  const whatsappNumber = "919842426363";

  const [form, setForm] = useState({
    patient_name: "",
    phone: "",
    email: "",
    treatment: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  // Operating Time Slots (5:30 PM - 9:00 PM)
  const eveningSlots = [
    "05:30 PM", "05:45 PM",
    "06:00 PM", "06:15 PM", "06:30 PM", "06:45 PM",
    "07:00 PM", "07:15 PM", "07:30 PM", "07:45 PM",
    "08:00 PM", "08:15 PM", "08:30 PM", "08:45 PM", "09:00 PM"
  ];

  const isTimeSlotPast = (timeStr, selectedDateStr) => {
    if (!selectedDateStr) return false;
    
    const today = new Date();
    const [y, m, d] = selectedDateStr.split("-").map(Number);
    const selectedDay = new Date(y, m - 1, d);
    selectedDay.setHours(0, 0, 0, 0);
    
    const todayDateOnly = new Date();
    todayDateOnly.setHours(0, 0, 0, 0);

    if (selectedDay > todayDateOnly) return false;
    
    if (selectedDay.getTime() === todayDateOnly.getTime()) {
      let hours = 0;
      let minutes = 0;
      const is12Hour = /AM|PM/i.test(timeStr);
      
      if (is12Hour) {
        const parts = timeStr.trim().split(/\s+/);
        const [h, min] = parts[0].split(":").map(Number);
        const modifier = parts[1];
        let hrs = h;
        if (modifier && modifier.toUpperCase() === "PM" && hrs < 12) hrs += 12;
        if (modifier && modifier.toUpperCase() === "AM" && hrs === 12) hrs = 0;
        hours = hrs;
        minutes = min || 0;
      } else {
        const parts = timeStr.trim().split(":");
        hours = parseInt(parts[0], 10) || 0;
        minutes = parseInt(parts[1], 10) || 0;
      }
      
      const slotTime = new Date(y, m - 1, d, hours, minutes, 0, 0);
      return slotTime <= today;
    }
    
    return false;
  };

  const availableEveningSlots = eveningSlots.filter(
    (slot) => !isTimeSlotPast(slot, form.preferred_date)
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "preferred_date" && prev.preferred_time) {
        if (isTimeSlotPast(prev.preferred_time, value)) {
          updated.preferred_time = "";
        }
      }
      return updated;
    });

    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setSuccess("");
    setFieldErrors({});

    try {
      const cleanPhone = form.phone.trim().replace(/\D/g, "");

      // 1. Save directly to Supabase
      const { error } = await supabase
        .from("appointments")
        .insert([
          {
            patient_name: form.patient_name.trim(),
            phone: cleanPhone,
            email: form.email ? form.email.trim().toLowerCase() : null,
            reason_for_visit: form.treatment.trim(),
            appointment_date: form.preferred_date,
            appointment_time: form.preferred_time.trim(),
            message: form.message ? form.message.trim() : null,
          },
        ]);

      if (error) throw error;

      // 2. Send Telegram Notification directly from the browser
      try {
        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        if (botToken && chatId) {
          const telegramText = `🔔 *New Appointment Alert*\n\n` +
            `📅 *Date:* ${form.preferred_date}\n` +
            `⏰ *Time:* ${form.preferred_time}\n` +
            `👤 *Patient Name:* ${form.patient_name.trim()}\n` +
            `📞 *Phone:* ${cleanPhone}\n` +
            `🩺 *Reason for Visit:* ${form.treatment}\n` +
            `📝 *Notes:* ${form.message ? form.message.trim() : "None"}`;

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
      } catch (telegramErr) {
        console.error("Telegram notification warning:", telegramErr.message);
      }

      setSuccess(
        t(
          "Your appointment request was submitted successfully! The clinic desk will contact you shortly to confirm the time.",
          "உங்கள் முன்பதிவு கோரிக்கை வெற்றிகரமாக அனுப்பப்பட்டது! நேரத்தை உறுதிப்படுத்த கிளினிக் உங்களைத் தொடர்புகொள்ளும்."
        )
      );

      setForm({
        patient_name: "",
        phone: "",
        email: "",
        treatment: "",
        preferred_date: "",
        preferred_time: "",
        message: "",
      });
    } catch (err) {
      console.error("Appointment submission failed:", err.message);
      setFieldErrors({
        form: t(
          "We could not submit your request. Please check your connection or contact the clinic directly.",
          "கோரிக்கையை அனுப்ப முடியவில்லை. நேரிடையாக கிளினிக்கைத் தொடர்புகொள்ளவும்."
        ),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SEO 
        title="Book Appointment - Sri Riddhi Speciality Clinic" 
        description="Book your orthopedic consultation with Dr. M. Kalaivanan online or via WhatsApp for robotic joint replacements, trauma care, and home visits in Trichy." 
        path="/appointment" 
      />

      <section className="bg-slate-950 px-5 py-14 text-white sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="inline-block rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
            {t("Sri Riddhi Speciality Clinic • Trichy", "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக் • திருச்சி")}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            {t("Request Orthopaedic Consultation", "எலும்பியல் ஆலோசனைக்கு முன்பதிவு கோரவும்")}
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_340px] lg:py-16">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-10"
        >
          <div className="mb-8 flex items-center gap-3 border-b border-slate-100 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <UserRound size={25} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("Patient Information", "நோயாளி விவரங்கள்")}
              </h2>
              <p className="text-xs text-slate-500">
                {t("Fields marked with * are required.", "* குறியிட்டவை கட்டாயப் பூர்த்தி.")}
              </p>
            </div>
          </div>

          {fieldErrors.form && (
            <p role="alert" className="mb-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
              {fieldErrors.form}
            </p>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              {t("Patient Name *", "நோயாளியின் பெயர் *")}
              <input
                name="patient_name"
                value={form.patient_name}
                onChange={handleChange}
                maxLength={120}
                required
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
                placeholder={t("Enter full name", "முழுப் பெயரை உள்ளிடவும்")}
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              {t("Phone Number *", "தொலைபேசி எண் *")}
              <input
                name="phone"
                type="tel"
                maxLength={10}
                value={form.phone}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setForm({ ...form, phone: numericValue });
                }}
                required
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
                placeholder={t("Enter 10-digit mobile number", "செல்லிடப்பேசி எண்ணை உள்ளிடவும்")}
              />
            </label>

            <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
              {t("Email Address (Optional)", "மின்னஞ்சல் முகவரி (விருப்பத்தேர்வு)")}
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                maxLength={254}
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
                placeholder={t("Enter email address", "மின்னஞ்சலை உள்ளிடவும்")}
              />
            </label>

            <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
              {t("Primary Concern / Reason for Visit *", "வருகைக்கான காரணம் அல்லது பிரச்சினை *")}
              <select
                name="treatment"
                value={form.treatment}
                onChange={handleChange}
                required
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
              >
                <option value="">{t("Select orthopaedic concern", "பிரச்சினையைத் தேர்ந்தெடுக்கவும்")}</option>
                <option value="Robotic Knee Replacement">{t("Robotic Knee Replacement Evaluation", "ரோபோடிக் முழங்கால் மாற்று அறுவை சிகிச்சை ஆலோசனை")}</option>
                <option value="Hip Replacement / AVN">{t("Hip Replacement / AVN Consultation", "இடுப்பு மூட்டு மாற்று / AVN ஆலோசனை")}</option>
                <option value="Severe Joint Pain & Arthritis">{t("Severe Joint Pain & Arthritis", "கடுமையான மூட்டு வலி மற்றும் தேய்மானம்")}</option>
                <option value="Trauma or Fracture Care">{t("Trauma, Accident or Fracture Care", "விபத்து அல்லது எலும்பு முறிவு சிகிச்சை")}</option>
                <option value="Sports Injury / Ligament Tear">{t("Sports Injury / Ligament Tear (ACL)", "விளையாட்டு காயம் / தசைநார் கிழிசல்")}</option>
                <option value="Home Visit & Mobile X-Ray Request">{t("Request Home Visit & Mobile X-Ray", "வீட்டுக்கு வந்து எக்ஸ்-ரே எடுக்க கோரிக்கை")}</option>
                <option value="Second Opinion on Scans">{t("Second Opinion on Scan Reports", "ஸ்கேன் ரிப்போர்ட் இரண்டாம் கட்ட ஆலோசனை")}</option>
              </select>
            </label>

            <label className="text-sm font-semibold text-slate-700">
              {t("Preferred Date *", "விரும்பும் தேதி *")}
              <input
                name="preferred_date"
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={form.preferred_date}
                onChange={handleChange}
                required
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              {t("Preferred Time Slot *", "விரும்பும் நேரம் *")}
              <select
                name="preferred_time"
                value={form.preferred_time}
                onChange={handleChange}
                required
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
              >
                <option value="">{t("Choose 15-min slot", "15 நிமிட நேரத்தைத் தேர்ந்தெடுக்கவும்")}</option>
                {availableEveningSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
              {t("Additional Medical Details / Message", "கூடுதல் குறிப்புகள் அல்லது மருத்துவ விவரங்கள்")}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={2000}
                rows={4}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
                placeholder={t("Mention duration of pain, previous scans...", "வலியின் காலம்...")}
              />
            </label>
          </div>

          {success && (
            <p role="status" className="mt-5 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800">
              {success}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-8 py-4 font-bold text-white shadow-md transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-65"
            >
              <CalendarDays size={18} />
              <span>
                {loading
                  ? t("Submitting Request...", "அனுப்பப்படுகிறது...")
                  : t("Submit Appointment Request", "முன்பதிவு கோரிக்கையை அனுப்பவும்")}
              </span>
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20consult%20regarding%20orthopedic%20care.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-8 py-4 font-bold text-emerald-800 shadow-sm transition hover:bg-emerald-100"
            >
              <MessageCircle size={18} className="text-emerald-600" />
              <span>{t("Consult on WhatsApp", "வாட்ஸ்அப் ஆலோசனை")}</span>
            </a>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
            <CalendarDays size={28} className="text-cyan-400" />
            <h2 className="mt-4 text-lg font-bold">{t("What Happens Next?", "அடுத்து என்ன நடக்கும்?")}</h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
              {t("Once submitted, our clinic receptionist reviews your schedule request...", "உங்கள் கோரிக்கை பெறப்பட்டதும்...")}
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}