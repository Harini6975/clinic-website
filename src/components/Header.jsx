import { useState } from "react";
import {
  Activity,
  Menu,
  CalendarDays,
  X,
  Globe,
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const closeMenu = () => setMobileMenu(false);
  const text = (en, ta) => (language === "ta" ? ta : en);

  const navItems = [
    { to: "/", en: "Home", ta: "முகப்பு" },
    { to: "/about", en: "About", ta: "மருத்துவர் பற்றி" },
    { to: "/facilities", en: "Specialities", ta: "சிகிச்சைகள்" },
    { to: "/services", en: "Services", ta: "வீட்டு பராமரிப்பு" },
    { to: "/blogs", en: "Blogs", ta: "கட்டுரைகள்" },
    { to: "/patient-stories", en: "Testimonials", ta: "சான்றுகள்" },
    { to: "/contact", en: "Contact", ta: "தொடர்பு" },
  ];

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `text-sm tracking-tight transition py-2 ${
      isActive(path)
        ? "text-cyan-700 border-b-2 border-cyan-700"
        : "text-slate-900 hover:text-cyan-700"
    }`;

  const clinicPhone = "+91 81220 73520"; 
  const whatsappNumber = "919842426363";

  return (
    <>
      {/* TOP EMERGENCY & QUICK CONTACT SPAN BAR */}
      <div className="bg-slate-900 text-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin size={13} className="text-cyan-400" />
              <span>{text("Sri Riddhi Specialty Clinic, Tiruchirappalli", "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக், திருச்சிராப்பள்ளி")}</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">
              {text(
                "Robotic & Complex Joint Replacement",
                "ரோபோடிக் மற்றும் சிக்கலான மூட்டு மாற்று அறுவை சிகிச்சை"
              )}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinicPhone}`}
              className="flex items-center gap-1 font-semibold text-white transition hover:text-cyan-400"
            >
              <Phone size={13} className="text-cyan-400" />
              <span>+91 81220 73520</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20book%20an%20orthopedic%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              <MessageCircle size={13} />
              <span className="hidden sm:inline">{text("WhatsApp", "வாட்ஸ்அப்")}</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        
        {/* ROW 1: LOGO, BRANDING, LANGUAGE & APPOINTMENT BUTTON */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          
          {/* Doctor Branding / Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 shrink-0 items-center gap-3"
            aria-label="Dr. M. Kalaivanan home"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-800 to-cyan-600 text-white shadow-md shadow-cyan-900/10">
              <Activity size={24} />
            </div>

            <div>
              <h1 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                Dr. M. Kalaivanan
              </h1>
              <p className="text-xs font-semibold text-cyan-700">
                {text(
                  "Orthopaedic & Joint Replacement Surgeon",
                  "எலும்பியல் மற்றும் மூட்டு மாற்று அறுவை சிகிச்சை நிபுணர்"
                )}
              </p>
            </div>
          </Link>

          {/* Right Actions: Language Selector & Booking Button */}
          <div className="hidden items-center gap-3 lg:flex">
            <div className="relative flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 shadow-sm">
              <Globe size={15} className="mr-2 text-cyan-700" />
              <select
                aria-label="Website language"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="appearance-none bg-transparent pr-5 text-xs font-bold text-slate-800 outline-none cursor-pointer"
              >
                <option value="en">English</option>
                <option value="ta">தமிழ்</option>
              </select>
              <ChevronDown size={13} className="pointer-events-none absolute right-3 text-slate-400" />
            </div>

            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-cyan-700 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-cyan-800 active:scale-95"
            >
              <CalendarDays size={16} />
              {text("Book Appointment", "முன்பதிவு")}
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenu((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ROW 2: CENTERED & BOLD NAVIGATION BAR ROW */}
        <div className="hidden border-t border-slate-100 bg-slate-50/80 lg:block">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav className="flex items-center justify-center gap-8 lg:gap-10" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={isActive(item.to) ? "page" : undefined}
                  className={linkClass(item.to)}
                  style={{ fontWeight: "900" }}
                >
                  {text(item.en, item.ta)}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* MOBILE SLIDE-DOWN NAVIGATION */}
        {mobileMenu && (
          <div className="border-t border-slate-200 bg-white shadow-xl lg:hidden">
            <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
              
              <div className="relative mb-3 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <Globe size={15} className="text-cyan-700" />
                  <span className="text-xs font-bold text-slate-700">
                    {text("Select Language", "மொழியைத் தேர்ந்தெடுக்கவும்")}
                  </span>
                </div>
                <div className="relative flex items-center">
                  <select
                    aria-label="Website language"
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    className="appearance-none bg-transparent pr-5 text-sm font-bold text-slate-800 outline-none cursor-pointer"
                  >
                    <option value="en">English</option>
                    <option value="ta">தமிழ்</option>
                  </select>
                  <ChevronDown size={13} className="pointer-events-none absolute right-0 text-slate-400" />
                </div>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={`block rounded-lg px-4 py-2.5 text-sm transition ${
                    isActive(item.to)
                      ? "bg-cyan-50 text-cyan-800 underline"
                      : "text-slate-900 hover:bg-slate-50 hover:text-cyan-800"
                  }`}
                  style={{ fontWeight: "900" }}
                >
                  {text(item.en, item.ta)}
                </Link>
              ))}

              <div className="mt-4 pt-3 border-t border-slate-100">
                <Link
                  to="/appointment"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-lg bg-cyan-700 px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-cyan-800"
                >
                  <CalendarDays size={16} />
                  {text("Book Appointment", "முன்பதிவு செய்யவும்")}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;