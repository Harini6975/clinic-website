import {
  MapPin,
  Phone,
  Clock,
  CalendarDays,
  ArrowRight,
  HeartPulse,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageProvider";
import SEO from "../components/SEO"; // <-- 1. Import the SEO component

const clinicName = "Sri Riddhi Speciality Clinic";
const clinicPhone = "+91 81220 73520";
const whatsappNumber = "919842426363";

const clinicAddress =
  "Door no: 893, Kairasi Nagar, Rajiv Gandhi Nagar Bus Stop, Vayalur Main Road, Natchikurichi, Tiruchirappalli - 620102";

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${clinicName}, ${clinicAddress}`
)}`;

export default function Contact() {
  const { language } = useLanguage();
  const isTamil = language === "ta";

  const text = (en, ta) => (isTamil ? ta : en);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      
      {/* 2. Add Dynamic SEO Meta Tags for Contact Page */}
      <SEO 
        title="Contact Sri Riddhi Speciality Clinic - Trichy" 
        description="Visit or contact Dr. M. Kalaivanan at Sri Riddhi Speciality Clinic, Vayalur Main Road, Natchikurichi, Trichy. Call +91 81220 73520 or book online." 
        path="/contact" 
      />

      <section className="bg-slate-50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100/70 px-4 py-2 text-sm font-bold text-cyan-900">
            <HeartPulse size={18} className="text-cyan-700" />
            {text("Sri Riddhi Speciality Clinic", "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக்")}
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            {text("Contact Dr. M. Kalaivanan", "டாக்டர் எம். கலைவாணனைத் தொடர்புகொள்ள")}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {text(
              "Get in touch for appointment scheduling, scan evaluations, and orthopaedic surgery inquiries in Tiruchirappalli.",
              "திருச்சியில் எலும்பியல் ஆலோசனை, முன்பதிவு மற்றும் சிகிச்சைகள் குறித்த சந்தேகங்களுக்கு எங்களைத் தொடர்புகொள்ளலாம்."
            )}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {/* Clinic address */}
          <article className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <MapPin size={25} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              {text("Clinic Location", "கிளினிக் முகவரி")}
            </h2>

            <p className="mt-3 leading-7 text-slate-600 text-sm sm:text-base">
              <strong className="text-slate-900">{clinicName}</strong>
              <br />
              {clinicAddress}
            </p>

            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-bold text-cyan-700 transition hover:text-cyan-900"
            >
              <Navigation size={17} />
              <span>{text("Open in Google Maps", "Google Maps-ல் வழி காண்க")}</span>
              <ArrowRight size={15} />
            </a>
          </article>

          {/* Phone & WhatsApp */}
          <article className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <Phone size={25} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              {text("Phone & WhatsApp Enquiries", "தொலைபேசி மற்றும் வாட்ஸ்அப்")}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {text(
                "Call or message our clinic desk for immediate consultation slots.",
                "உடனடி முன்பதிவு மற்றும் விசாரணைகளுக்கு கிளினிக்கை அழைக்கவும் அல்லது வாட்ஸ்அப் செய்யவும்."
              )}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`tel:${clinicPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan-800"
              >
                <Phone size={16} />
                <span>{clinicPhone}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20know%20more%20about%20clinic%20timings.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
              >
                <MessageCircle size={16} className="text-emerald-600" />
                <span>{text("WhatsApp Chat", "வாட்ஸ்அப் சாட்")}</span>
              </a>
            </div>
          </article>

          {/* Consulting hours */}
          <article className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <Clock size={25} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              {text("Consulting Hours", "ஆலோசனை நேரங்கள்")}
            </h2>

            <div className="mt-4 space-y-3 text-sm">
              <p className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-semibold text-slate-800">{text("Monday – Saturday:", "திங்கள் – சனி:")}</span>
                <span className="font-bold text-cyan-800">05:30 PM – 10:00 PM</span>
              </p>
              <p className="flex justify-between pt-1">
                <span className="font-semibold text-slate-800">{text("Sunday:", "ஞாயிறு:")}</span>
                <span className="font-medium text-slate-600">{text("By Appointment Only", "முன்பதிவு மூலம் மட்டும்")}</span>
              </p>
            </div>
          </article>

          {/* Appointment CTA */}
          <article className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <CalendarDays size={25} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              {text("Ready to Book Your Visit?", "உடனடியாக முன்பதிவு செய்ய")}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {text(
                "Secure your slot with Dr. M. Kalaivanan online before visiting the clinic.",
                "கிளினிக்கிற்கு வருவதற்கு முன் உங்கள் நேரத்தை ஆன்லைனில் உறுதிப்படுத்திக் கொள்ளுங்கள்."
              )}
            </p>

            <Link
              to="/appointment"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-800"
            >
              <span>{text("Book Appointment", "முன்பதிவு செய்யவும்")}</span>
              <ArrowRight size={17} />
            </Link>
          </article>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <div className="p-6 sm:p-8 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">
              {text("Sri Riddhi Speciality Clinic Map", "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக் வரைபடம்")}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {clinicAddress}
            </p>

            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition hover:text-cyan-900"
            >
              <Navigation size={16} />
              <span>{text("Open Directions in Google Maps", "Google Maps வழிகாட்டியைத் திறக்கவும்")}</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <iframe
            title="Sri Riddhi Specialty Clinic map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              `${clinicName}, ${clinicAddress}`
            )}&output=embed`}
            className="h-80 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}