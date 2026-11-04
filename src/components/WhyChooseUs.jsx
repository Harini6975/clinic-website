import {
  Award,
  ShieldCheck,
  Activity,
  Home,
  ArrowRight,
  MessageCircle,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function WhyChooseUs() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const whatsappNumber = "919842426363";

  const points = [
    {
      icon: Activity,
      titleEn: "Robotic Precision Arthroplasty",
      titleTa: "ரோபோடிக் துல்லிய மூட்டு மாற்று அறுவை சிகிச்சை",
      descriptionEn:
        "Computer-assisted alignment guarantees sub-millimeter implant positioning, minimal blood loss, and faster return to active life.",
      descriptionTa:
        "நவீன கணிப்பொறி வழிகாட்டுதலுடன் மிகத் துல்லியமாக மூட்டு பொருத்துதல், குறைந்த ரத்தப்போக்கு மற்றும் விரைவான குணம்.",
    },
    {
      icon: Award,
      titleEn: "Global Fellowship Expertise",
      titleTa: "சர்வதேச சிறப்புப் பயிற்சிகள்",
      descriptionEn:
        "Trained across prestigious centres in Germany, Greece, and Mumbai in complex joint revision and orthopaedic oncology.",
      descriptionTa:
        "ஜெர்மனி, கிரீஸ் மற்றும் மும்பை போன்ற உலகத்தரம் வாய்ந்த மையங்களில் உயர் அறுவை சிகிச்சை பயிற்சி.",
    },
    {
      icon: ShieldCheck,
      titleEn: "5000+ Proven Surgical Outcomes",
      titleTa: "5000+ வெற்றிகரமான சிகிச்சைகள்",
      descriptionEn:
        "Over two decades of excellence handling high-velocity articular trauma, pelvic reconstructions, and joint surgeries.",
      descriptionTa:
        "20 ஆண்டுகளுக்கும் மேலான மருத்துவ அனுபவத்தில் 5000-க்கும் மேற்பட்ட சிக்கலான எலும்பு மற்றும் மூட்டு சிகிச்சைகள்.",
    },
    {
      icon: Home,
      titleEn: "Exclusive Home Visit & Portable X-Ray",
      titleTa: "வீட்டுக்கே வரும் எக்ஸ்-ரே மற்றும் மருத்துவ சேவை",
      descriptionEn:
        "Bedside consults, digital mobile radiography, and rehabilitation support right at home for elderly and immobile patients.",
      descriptionTa:
        "முதியவர்கள் மற்றும் படுக்கையில் உள்ள நோயாளிகளுக்காக வீட்டிற்கே வந்து பரிசோதிக்கும் நவீன எக்ஸ்-ரே மற்றும் மருத்துவ சேவை.",
    },
  ];

  const highlights = [
    { en: "Evidence-Based Surgical Protocols", ta: "நிரூபிக்கப்பட்ட நவீன சிகிச்சை முறைகள்" },
    { en: "Personalized Patient-First Rehabilitation", ta: "ஒவ்வொரு நோயாளிக்கும் பிரத்யேக மறுவாழ்வுப் பயிற்சி" },
    { en: "Transparent & Ethical Clinical Guidance", ta: "வெளிப்படையான மற்றும் நேர்மையான மருத்துவ ஆலோசனை" },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-100/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
              {text("Why Entrust Your Care to Us", "ஏன் எங்களை தேர்ந்தெடுக்க வேண்டும்?")}
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {text(
                "World-Class Orthopaedic Excellence Centred on Lasting Mobility",
                "உங்கள் இயல்பான நடமாட்டத்தை மீட்டெடுக்க உலகத்தரம் வாய்ந்த எலும்பியல் சிகிச்சை"
              )}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              {text(
                "Dr. M. Kalaivanan combines international arthroplasty training with advanced robotic surgical precision at Sri Riddhi Speciality Clinic, Tiruchirappalli. Every patient receives a comprehensive, individualized care plan tailored to relieve pain and restore joint longevity.",
                "டாக்டர் கலைவாணன் அவர்களின் சர்வதேச அனுபவம் மற்றும் நவீன ரோபோடிக் அறுவை சிகிச்சை மூலமாக திருச்சிராப்பள்ளியில் உள்ள ஸ்ரீ ரித்தி கிளினிக்கில் மூட்டு வலிக்கு பாதுகாப்பான மற்றும் நிரந்தர தீர்வு வழங்கப்படுகிறது."
              )}
            </p>

            {/* Checklist items */}
            <div className="mt-6 space-y-2.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 size={18} className="shrink-0 text-cyan-700" />
                  <span>{text(item.en, item.ta)}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800"
              >
                <span>{text("Meet Dr. Kalaivanan", "மருத்துவர் பற்றி அறிய")}</span>
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                <CalendarDays size={17} className="text-cyan-700" />
                <span>{text("Book Appointment", "முன்பதிவு செய்ய")}</span>
              </Link>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.titleEn}
                  className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition duration-300 group-hover:bg-cyan-700 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900 group-hover:text-cyan-700 transition">
                    {text(point.titleEn, point.titleTa)}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
                    {text(point.descriptionEn, point.descriptionTa)}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 rounded-3xl border border-cyan-100 bg-cyan-50/80 p-6 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                {text("Sri Riddhi Speciality Clinic • Tiruchirappalli", "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக் • திருச்சி")}
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                {text(
                  "Suffering from Severe Knee, Hip or Shoulder Joint Pain?",
                  "முழங்கால், இடுப்பு அல்லது மூட்டு வலியால் அவதிப்படுகிறீர்களா?"
                )}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {text(
                  "Consult with Dr. M. Kalaivanan directly for accurate clinical assessment, report review, and personalized treatment options.",
                  "சரியான நோயறிதல் மற்றும் நவீன சிகிச்சை ஆலோசனைகளுக்கு டாக்டர் கலைவாணன் அவர்களை நேரடியாக அணுகுங்கள்."
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row shrink-0">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800"
              >
                <CalendarDays size={17} />
                <span>{text("Book Clinic Visit", "நேரில் முன்பதிவு செய்ய")}</span>
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20consult%20regarding%20my%20orthopedic%20issue.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
              >
                <MessageCircle size={17} className="text-emerald-600" />
                <span>{text("WhatsApp Consult", "வாட்ஸ்அப் ஆலோசனை")}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;