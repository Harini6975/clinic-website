import {
  Activity,
  Phone,
  MapPin,
  Clock,
  Navigation,
  CalendarDays,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

const clinicName = "Sri Riddhi Speciality Clinic";
const clinicPhone = "+91 81220 73520";
const emergencyPhone = "+91 98424 26363";
const whatsappNumber = "919842426363";

const clinicAddress =
  "Door no: 893, Kairasi Nagar, Rajiv Gandhi Nagar Bus Stop, Vayalur Main Road, Natchikurichi, Tiruchirappalli - 620102";

const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(clinicName + ", " + clinicAddress);

export default function Footer() {
  const { language } = useLanguage();
  const isTamil = language === "ta";
  const t = (en, tamil) => (isTamil ? tamil : en);

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        
        {/* Main Columns Grid (3 columns) */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12">

          {/* Column 1: Doctor and clinic information */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 text-slate-950 shadow-md">
                <Activity size={26} />
              </div>

              <div>
                <h2 className="text-lg font-bold leading-tight">
                  Dr. M. Kalaivanan
                </h2>
                <p className="text-xs font-semibold text-cyan-400">
                  {t(
                    "Orthopaedic & Joint Replacement Surgeon",
                    "எலும்பியல் மற்றும் மூட்டு மாற்று நிபுணர்"
                  )}
                </p>
              </div>
            </Link>

            <h3 className="mb-2 font-semibold text-slate-200">
              {clinicName}
            </h3>

            <p className="text-xs leading-relaxed text-slate-400 mb-4">
              {t(
                "Dedicated to restoring pain-free mobility through computer-assisted robotic joint replacement, advanced fracture reconstruction, and doorstep senior diagnostics.",
                "ரோபோடிக் மூட்டு மாற்று சிகிச்சை, அதிநவீன எலும்பு முறிவு சிகிச்சை மற்றும் முதியோருக்கான இல்ல மருத்துவ சேவை வழங்குவதே எங்களின் குறிக்கோள்."
              )}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20consult%20regarding%20joint%20care.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
              >
                <MessageCircle size={14} />
                <span>{t("WhatsApp", "வாட்ஸ்அப்")}</span>
              </a>

              <a
                href={`tel:${clinicPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
              >
                <Phone size={13} />
                <span>{t("Call", "அழைக்க")}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-cyan-400">
              {t("Quick Links", "முக்கிய இணைப்புகள்")}
            </h3>

            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link className="transition hover:text-cyan-300" to="/">
                  {t("Home", "முகப்பு")}
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-cyan-300" to="/about">
                  {t("About", "மருத்துவரைப் பற்றி")}
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-cyan-300" to="/facilities">
                  {t("Specialities", "சிகிச்சைகள்")}
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-cyan-300" to="/services">
                  {t("Services & Facilities", "வீட்டுப் பராமரிப்பு & சேவைகள்")}
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-cyan-300" to="/blogs">
                  {t("Blogs & Articles", "மருத்துவக் கட்டுரைகள்")}
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-cyan-300" to="/patient-stories">
                  {t("Testimonials", "நோயாளி சான்றுகள்")}
                </Link>
              </li>

              <li>
                <Link className="transition hover:text-cyan-300" to="/contact">
                  {t("Contact & Location", "தொடர்பு கொள்ள & முகவரி")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Emergency & Hours */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-cyan-400">
              {t("Contact & Hours", "தொடர்பு & நேரம்")}
            </h3>

            <div className="space-y-3 text-sm text-slate-300 mb-5">
              <div className="flex items-start gap-3">
                <Phone size={15} className="mt-1 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    {t("Clinic Appointments", "கிளினிக் தொலைபேசி")}
                  </p>
                  <a href={`tel:${clinicPhone.replace(/\s+/g, "")}`} className="font-medium text-white transition hover:text-cyan-300">
                    {clinicPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldAlert size={15} className="mt-1 shrink-0 text-red-400" />
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    {t("24/7 Trauma Hotline", "அவசர உதவி")}
                  </p>
                  <a href={`tel:${emergencyPhone.replace(/\s+/g, "")}`} className="font-medium text-red-400 transition hover:text-red-300">
                    {emergencyPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={15} className="mt-1 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    {t("Consulting Hours", "ஆலோசனை நேரம்")}
                  </p>
                  <p className="text-xs text-slate-300">
                    {t("Mon – Sat: 05:30 PM – 10:00 PM", "திங்கள் – சனி: மாலை 05:30 – இரவு 10:00")}
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/appointment"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:bg-cyan-400 active:scale-95"
            >
              <CalendarDays size={15} />
              <span>{t("Book an Appointment", "முன்பதிவு செய்ய")}</span>
            </Link>
          </div>

        </div>

        {/* FULL-WIDTH LEFT-TO-RIGHT PINNED MAP SECTION */}
        <div className="mb-10 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cyan-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {t("Sri Riddhi Speciality Clinic Location Map", "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக் அமைவிடம் (Trichy)")}
              </h4>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 transition hover:text-white"
            >
              <Navigation size={13} />
              <span>{t("Open in Google Maps", "பெரிய வரைபடத்தில் திறக்கவும்")}</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-xl h-72 w-full bg-slate-950">
            <iframe
              title="Sri Riddhi Speciality Clinic Full Width Map"
              src="https://maps.google.com/maps?q=Vayalur%20Main%20Road,%20Natchikurichi,%20Tiruchirappalli&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-slate-900 pt-6 text-center text-xs leading-relaxed text-slate-500">
          <p className="mb-2">
            {t(
              "Medical Disclaimer: Information provided on this website is for educational purposes and should not be used as a substitute for professional medical advice or diagnosis.",
              "மருத்துவக் குறிப்பு: இந்த தளத்தில் உள்ள தகவல்கள் விழிப்புணர்வுக்காக மட்டுமே. மருத்துவ ஆலோசனைகளுக்கு மருத்துவரை நேரில் அணுகவும்."
            )}
          </p>
          <p>
            © {new Date().getFullYear()} Dr. M. Kalaivanan — {clinicName}.
            {t(" All rights reserved.", " அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.")}
          </p>
        </div>
      </div>
    </footer>
  );
}