import { useState } from "react";
import {
  CalendarDays,
  UserRound,
  Clock,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import SEO from "../components/SEO";

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
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(details || "Unable to submit the request.");
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
      console.error("Appointment submission failed:", err);
      setError(
        t(
          "We could not submit your request. Please check your connection or contact the clinic directly.",
          "கோரிக்கையை அனுப்ப முடியவில்லை. நேரிடையாக கிளினிக்கைத் தொடர்புகொள்ளவும்."
        )
      );
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
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t(
              "Fill out the form below to request an appointment with Dr. M. Kalaivanan. Our clinic team will verify availability and confirm your schedule.",
              "டாக்டர் எம். கலைவாணன் அவர்களிடம் ஆலோசனை பெற இந்தப் படிவத்தைப் பூர்த்தி செய்யவும். கிளினிக் குழு உங்களைத் தொடர்புகொண்டு நேரத்தை உறுதிப்படுத்தும்."
            )}
          </p>
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

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              {t("Patient Name *", "நோயாளியின் பெயர் *")}
              <input
                name="patient_name"
                value={form.patient_name}
                onChange={handleChange}
                required
                maxLength={120}
                autoComplete="name"
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
                placeholder={t("Enter full name", "முழுப் பெயரை உள்ளிடவும்")}
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              {t("Phone Number *", "தொலைபேசி எண் *")}
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={25}
                autoComplete="tel"
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
                autoComplete="email"
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
                <option value="">
                  {t("Select orthopaedic concern", "பிரச்சினையைத் தேர்ந்தெடுக்கவும்")}
                </option>
                <option value="Robotic Knee Replacement">
                  {t("Robotic Knee Replacement Evaluation", "ரோபோடிக் முழங்கால் மாற்று அறுவை சிகிச்சை ஆலோசனை")}
                </option>
                <option value="Hip Replacement / AVN">
                  {t("Hip Replacement / AVN Consultation", "இடுப்பு மூட்டு மாற்று / AVN ஆலோசனை")}
                </option>
                <option value="Severe Joint Pain & Arthritis">
                  {t("Severe Joint Pain & Arthritis", "கடுமையான மூட்டு வலி மற்றும் தேய்மானம்")}
                </option>
                <option value="Trauma or Fracture Care">
                  {t("Trauma, Accident or Fracture Care", "விபத்து அல்லது எலும்பு முறிவு சிகிச்சை")}
                </option>
                <option value="Sports Injury / Ligament Tear">
                  {t("Sports Injury / Ligament Tear (ACL)", "விளையாட்டு காயம் / தசைநார் கிழிசல்")}
                </option>
                <option value="Home Visit & Mobile X-Ray Request">
                  {t("Request Home Visit & Mobile X-Ray", "வீட்டுக்கு வந்து எக்ஸ்-ரே எடுக்க கோரிக்கை")}
                </option>
                <option value="Second Opinion on Scans">
                  {t("Second Opinion on Scan Reports", "ஸ்கேன் ரிப்போர்ட் இரண்டாம் கட்ட ஆலோசனை")}
                </option>
              </select>
            </label>

            <label className="text-sm font-semibold text-slate-700">
              {t("Preferred Date", "விரும்பும் தேதி")}
              <input
                name="preferred_date"
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={form.preferred_date}
                onChange={handleChange}
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              {t("Preferred Time Slot", "விரும்பும் நேரம்")}
              <select
                name="preferred_time"
                value={form.preferred_time}
                onChange={handleChange}
                className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 font-normal text-slate-900 outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100"
              >
                <option value="">{t("Choose time slot", "நேரத்தைத் தேர்ந்தெடுக்கவும்")}</option>
                <option value="Evening (5:30 PM - 7:30 PM)">{t("Evening (5:30 PM - 7:30 PM)", "மாலை (5:30 மணி - 7:30 மணி)")}</option>
                <option value="Night (7:30 PM - 10:00 PM)">{t("Night (7:30 PM - 10:00 PM)", "இரவு (7:30 மணி - 10:00 மணி)")}</option>
                <option value="Any Time">{t("Any Available Time", "கிடைக்கும் எந்த நேரமும்")}</option>
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
                placeholder={t(
                  "Mention duration of pain, previous scans, or specific requirements...",
                  "வலியின் காலம், முந்தைய ஸ்கேன் விவரங்கள் அல்லது தேவைகளை எழுதவும்..."
                )}
              />
            </label>
          </div>

          {error && (
            <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
              {error}
            </p>
          )}

          {success && (
            <p role="status" className="mt-5 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800">
              {success}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-8 py-4 font-bold text-white shadow-md transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <CalendarDays size={18} />
              <span>
                {loading
                  ? t("Submitting Request...", "அனுப்பப்படுகிறது...")
                  : t("Submit Appointment Request", "முன்பதிவு கோரிக்கையை அனுப்பவும்")}
              </span>
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20have%20submitted%20an%20appointment%20request%20online.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-6 py-4 font-bold text-emerald-800 transition hover:bg-emerald-100"
            >
              <MessageCircle size={18} className="text-emerald-600" />
              <span>{t("Or Message on WhatsApp", "அல்லது வாட்ஸ்அப்பில் தொடர்பு")}</span>
            </a>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
            <CalendarDays size={28} className="text-cyan-400" />
            <h2 className="mt-4 text-lg font-bold">
              {t("What Happens Next?", "அடுத்து என்ன நடக்கும்?")}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
              {t(
                "Once submitted, our clinic receptionist reviews your schedule request and contacts you via phone or WhatsApp to finalize your exact time slot at Sri Riddhi Clinic.",
                "உங்கள் கோரிக்கை பெறப்பட்டதும், ஸ்ரீ ரித்தி கிளினிக் வரவேற்பாளர் உங்களைத் தொடர்புகொண்டு சரியான நேரத்தை உறுதிப்படுத்துவார்."
              )}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Clock size={24} className="text-cyan-700" />
            <h2 className="mt-4 text-base font-bold text-slate-900">
              {t("Clinic Consultation Hours", "கிளினிக் ஆலோசனை நேரம்")}
            </h2>
            <div className="mt-3 space-y-2 text-xs text-slate-600 sm:text-sm">
              <p className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-semibold text-slate-800">{t("Mon – Sat:", "திங்கள் – சனி:")}</span>
                <span>05:30 PM – 10:00 PM</span>
              </p>
              <p className="flex justify-between pt-1">
                <span className="font-semibold text-slate-800">{t("Sunday:", "ஞாயிறு:")}</span>
                <span>{t("By Appointment Only", "முன்பதிவு மூலம்")}</span>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-red-200 bg-red-50/60 p-6">
            <div className="flex items-center gap-2 text-red-700">
              <ShieldAlert size={20} />
              <h2 className="text-sm font-bold">
                {t("Emergency Trauma Notice", "அவசர கால எச்சரிக்கை")}
              </h2>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-red-900">
              {t(
                "Do not use this online form for severe trauma, heavy bleeding, or acute accidents. Call our emergency trauma line directly at +91 98424 26363.",
                "கடுமையான விபத்துகள் மற்றும் அவசர எலும்பு முறிவுகளுக்கு இந்தப் பதவத்தைப் பயன்படுத்த வேண்டாம். அவசர உதவிக்கு +91 98424 26363 எண்ணை அழைக்கவும்."
              )}
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}