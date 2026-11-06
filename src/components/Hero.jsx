import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Award,
  Activity,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

// Importing your three local banners
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const slides = [
  {
    image: banner1,
    tagEn: "Dr. M. Kalaivanan",
    tagTa: "டாக்டர் எம். கலைவாணன்",
    titleEn: "Expert Orthopedic & Joint Replacement Surgeon",
    titleTa: "சிறப்பு எலும்பியல் மற்றும் மூட்டு மாற்று அறுவை சிகிச்சை நிபுணர்",
  },
  {
    image: banner2,
    tagEn: "Specialized Care & Services",
    tagTa: "சிறப்பு மருத்துவம் மற்றும் சேவைகள்",
    titleEn: "Advanced Orthopedic Care at Sri Riddhi Clinic",
    titleTa: "ஸ்ரீ ரித்தி கிளினிக்கில் நவீன எலும்பியல் சிகிச்சை",
  },
  {
    image: banner3,
    tagEn: "Medical & Community Events",
    tagTa: "மருத்துவ நிகழ்வுகள்",
    titleEn: "Active Health Awareness & Community Care",
    titleTa: "சுகாதார விழிப்புணர்வு நிகழ்ச்சிகள்",
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const ta = language === "ta";
  const t = (en, tamil) => (ta ? tamil : en);

  const whatsappNumber = "919842426363";

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const previous = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const scrollToContent = () => {
    window.scrollBy({ top: 650, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      
      {/* AMBIENT BACKGROUND GLOW GRAPHICS */}
      <div className="absolute top-10 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-10 -z-10 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" />

      {/* SPLIT HERO SECTION (Carousel + YouTube Video Showcase) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-10 lg:py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* LEFT: 3-Banner Carousel */}
            <div className="relative h-[320px] overflow-hidden rounded-3xl bg-slate-950 shadow-2xl ring-1 ring-white/15 sm:h-[380px] lg:h-[420px] flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    active === index
                      ? "opacity-100 z-10"
                      : "opacity-0 pointer-events-none z-0"
                  }`}
                  aria-hidden={active !== index}
                >
                  <img
                    src={slide.image}
                    alt={t(slide.titleEn, slide.titleTa)}
                    className="h-full w-full object-fill"
                  />
                  {/* Top tag overlay for consistency */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full bg-slate-950/85 px-3.5 py-1 text-xs font-semibold text-cyan-300 border border-slate-700 backdrop-blur-md shadow-md">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {t(slide.tagEn, slide.tagTa)}
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={previous}
                aria-label={t("Previous Slide", "முந்தைய ஸ்லைடு")}
                className="absolute left-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-cyan-600 hover:scale-110 shadow-md"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={t("Next Slide", "அடுத்த ஸ்லைடு")}
                className="absolute right-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-cyan-600 hover:scale-110 shadow-md"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            {/* RIGHT: YouTube Video Embed Card */}
            <div className="relative group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl flex flex-col h-[320px] sm:h-[380px] lg:h-[420px] transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full bg-slate-950/85 px-3.5 py-1 text-xs font-semibold text-cyan-300 border border-slate-700 backdrop-blur-md shadow-md">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                {t("Specialist Interview", "சிறப்பு நேர்காணல்")}
              </div>
              <div className="relative flex-1 w-full bg-slate-950 overflow-hidden pt-14">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.youtube.com/embed/yEmH9jnVbr8?si=2lzN0Tw300ja491u"
                  title="Dr. M. Kalaivanan Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPACT INTRO & DOCTOR CARD */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
          
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-semibold text-cyan-800 shadow-sm transition hover:bg-cyan-100">
              <Activity size={15} className="text-cyan-600 animate-pulse" />
              {t("Sri Riddhi Speciality Clinic • Trichy", "ஸ்ரீ ரித்தி கிளினிக் • திருச்சி")}
            </div>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t("Advanced Orthopaedic & Joint Care", "நவீன எலும்பியல் மற்றும் மூட்டு சிகிச்சை")}
              <span className="block bg-gradient-to-r from-cyan-700 to-sky-600 bg-clip-text text-transparent">
                Dr. M. Kalaivanan
              </span>
            </h1>

            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
              {t(
                "MBBS, MS (Ortho) | Fellowship in Joint Replacement & Trauma",
                "MBBS, MS (ஆர்த்தோ) | மூட்டு மாற்று & விபத்து சிகிச்சை நிபுணர்"
              )}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t(
                "Specializing in precision robotic knee/hip replacements, trauma care, and doorstep home diagnostics across Tiruchirappalli.",
                "ரோபோடிக் மூட்டு மாற்று அறுவை சிகிச்சை மற்றும் வீட்டிற்கே வந்து பரிசோதனை செய்யும் வசதி."
              )}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-900/20 transition-all duration-300 hover:scale-102 hover:shadow-cyan-900/30"
              >
                <CalendarDays size={16} className="transition-transform group-hover:rotate-12" />
                {t("Book Appointment", "முன்பதிவு செய்ய")}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20need%20orthopedic%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-bold text-emerald-800 shadow-sm transition-all duration-300 hover:scale-102 hover:bg-emerald-100"
              >
                <MessageCircle size={16} className="text-emerald-600 transition-transform group-hover:scale-110" />
                {t("WhatsApp Consult", "வாட்ஸ்அப் ஆலோசனை")}
              </a>
            </div>
          </div>

          {/* DOCTOR PORTRAIT CARD */}
          <div className="relative group mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-400 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-35" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl flex items-center justify-center min-h-[340px] transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=440,fit=crop/Y4LxE74R1NuB9bgJ/untitled-design-1-mnlqnXLW01sVazjG.png"
                alt="Dr. M. Kalaivanan"
                className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 shadow-md backdrop-blur-md border border-slate-100 transition-all duration-300 group-hover:border-cyan-300">
                <div className="flex items-center gap-1.5 text-cyan-800 text-xs font-bold">
                  <Award size={15} className="animate-bounce" />
                  <span>{t("Fellowship Trained Surgeon", "சிறப்பு பயிற்சி பெற்ற நிபுணர்")}</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-600">
                  {t("Trained in Mumbai, Germany & Greece", "மும்பை, ஜெர்மனி & கிரீஸ் பயிற்சி")}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* SCROLL DOWN INCENTIVE ARROW */}
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToContent}
            className="inline-flex flex-col items-center text-xs font-semibold text-slate-400 transition hover:text-cyan-700 animate-bounce cursor-pointer"
            aria-label={t("Scroll down to explore", "மேலும் அறிய கீழே செல்லவும்")}
          >
            <span>{t("Scroll to explore specialities & care", "மேலும் அறிய கீழே செல்லவும்")}</span>
            <ChevronDown size={18} className="mt-1" />
          </button>
        </div>
      </section>

    </div>
  );
}

export default Hero;