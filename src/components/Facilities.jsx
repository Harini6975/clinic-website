import {
  Home,
  Scan,
  Cpu,
  Activity,
  Syringe,
  FileCheck2,
  PhoneCall,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function Facilities() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const whatsappNumber = "919842426363";
  const clinicPhone = "+919842426363";

  const facilities = [
    {
      icon: Home,
      titleEn: "Home Visit Consultations",
      titleTa: "வீட்டுக்கே வரும் மருத்துவ ஆலோசனை",
      descriptionEn:
        "Dedicated in-home clinical assessments by Dr. Kalaivanan for elderly, post-operative, and bedridden patients.",
      descriptionTa:
        "முதியவர்கள் மற்றும் படுக்கையில் உள்ள நோயாளிகளுக்காக மருத்துவரே நேரடியாக வீட்டிற்கு வந்து பரிசோதிக்கும் சேவை.",
      highlightEn: "Doorstep Care",
      highlightTa: "நேரடி சேவை",
    },
    {
      icon: Scan,
      titleEn: "Mobile Digital X-Ray at Home",
      titleTa: "நடமாடும் டிஜிட்டல் எக்ஸ்-ரே",
      descriptionEn:
        "Portable, low-radiation digital radiography brought directly to your home with instant high-resolution imaging.",
      descriptionTa:
        "மருத்துவமனைக்கு வர முடியாதவர்களுக்காக வீட்டிலேயே மிகத் துல்லியமாக எடுக்கப்படும் டிஜிட்டல் எக்ஸ்-ரே சேவை.",
      highlightEn: "Instant Reports",
      highlightTa: "உடனடி ரிப்போர்ட்",
    },
    {
      icon: Cpu,
      titleEn: "Robotic Surgical Suites",
      titleTa: "நவீன ரோபோடிக் அறுவை சிகிச்சை அரங்கு",
      descriptionEn:
        "Ultra-clean laminar airflow modular operating rooms equipped with robotic navigation for sub-millimeter precision.",
      descriptionTa:
        "தொற்று இல்லாத அதிநவீன அறுவை சிகிச்சை அரங்குகள் மற்றும் கணிப்பொறி வழிகாட்டுதல் தொழில்நுட்பம்.",
      highlightEn: "Sub-mm Precision",
      highlightTa: "துல்லிய தொழில்நுட்பம்",
    },
    {
      icon: Activity,
      titleEn: "Orthopaedic Rehabilitation & Physio",
      titleTa: "மூட்டு மறுவாழ்வு & உடற்பயிற்சி சிகிச்சை",
      descriptionEn:
        "Structured recovery regimens and customized physical therapy protocols for rapid, pain-free mobility after surgery.",
      descriptionTa:
        "அறுவை சிகிச்சைக்குப் பின் விரைவாக இயல்பு நிலைக்குத் திரும்ப உதவும் சிறப்பு உடற்பயிற்சி சிகிச்சை.",
      highlightEn: "Faster Recovery",
      highlightTa: "விரைவான குணம்",
    },
    {
      icon: Syringe,
      titleEn: "Day-Care Joint Injection Therapy",
      titleTa: "மூட்டு ஊசி சிகிச்சை (PRP & Visco)",
      descriptionEn:
        "Targeted non-surgical cartilage nourishment, viscosupplementation injections, and PRP injections for early knee arthritis.",
      descriptionTa:
        "ஆரம்ப கட்ட மூட்டுத் தேய்மானத்திற்கு நவீன உயவு ஊசிகள் மற்றும் பிஆர்பி (PRP) சிகிச்சை முறைகள்.",
      highlightEn: "Non-Surgical",
      highlightTa: "அறுவை சிகிச்சையற்றது",
    },
    {
      icon: FileCheck2,
      titleEn: "Online Second Opinion Clinic",
      titleTa: "ஆன்லைன் இரண்டாம் கட்ட மருத்துவ கருத்து",
      descriptionEn:
        "Tele-consultation portal for outstation patients to share X-rays and MRI scans for expert surgical evaluation.",
      descriptionTa:
        "வெளியூர் நோயாளிகள் தங்களது ஸ்கேன் ரிப்போர்ட்டுகளை அனுப்பி ஆன்லைன் வழியாக ஆலோசனை பெறும் வசதி.",
      highlightEn: "Global Access",
      highlightTa: "ஆன்லைன் சேவை",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section with Background Image and Dark Overlay */}
      <section className="relative bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Clinic Infrastructure" 
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
              {text("Patient-Centred Infrastructure", "நோயாளி நலன் சார்ந்த நவீன வசதிகள்")}
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {text(
                "Modern Facilities for Comprehensive Bone & Joint Care",
                "முழுமையான எலும்பு மற்றும் மூட்டு பராமரிப்பு வசதிகள்"
              )}
            </h1>

            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {text(
                "From advanced robotic operation theatres to exclusive doorstep digital X-ray diagnostics, our infrastructure is built to make orthopaedic care seamless, comfortable, and reliable.",
                "அதிநவீன ரோபோடிக் அறுவை சிகிச்சை முதல் வீட்டுக்கே வந்து எக்ஸ்-ரே எடுக்கும் சேவை வரை நோயாளிகளின் வசதிக்காக பிரத்யேக கட்டமைப்பு."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Facility Cards Grid Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <div
                  key={facility.titleEn}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition duration-300 group-hover:bg-cyan-700 group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700 transition group-hover:bg-cyan-100 group-hover:text-cyan-900">
                        {text(facility.highlightEn, facility.highlightTa)}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition">
                      {text(facility.titleEn, facility.titleTa)}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {text(facility.descriptionEn, facility.descriptionTa)}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to="/appointment"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900"
                    >
                      <span>{text("Inquire About This Service", "இந்த சேவையை பெற")}</span>
                      <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile X-Ray & Home Care Feature Highlight */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 text-white shadow-xl">
            <div className="flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-block rounded-full bg-cyan-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                  {text("Elderly & Immobile Patient Service", "முதியோருக்கான சிறப்பு இல்ல சேவை")}
                </span>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {text(
                    "Need a Bedside Home Visit or Emergency X-Ray in Tiruchirappalli?",
                    "திருச்சியில் வீட்டுக்கே வந்து எக்ஸ்-ரே எடுக்க அல்லது மருத்துவ பரிசோதனை செய்ய வேண்டுமா?"
                  )}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {text(
                    "Avoid the strain of transporting elderly or pain-stricken patients to diagnostic centres. Call our team to schedule a mobile digital X-ray and doctor home consultation at your doorstep.",
                    "முதியவர்கள் மற்றும் கடுமையான வலியால் அவதிப்படும் நோயாளிகளை அலையவிடாமல், வீட்டிற்கே நடமாடும் எக்ஸ்-ரே மற்றும் மருத்துவ ஆலோசனையை முன்பதிவு செய்ய எங்களை தொடர்பு கொள்ளவும்."
                  )}
                </p>

                <div className="mt-5 flex items-center gap-6 text-sm text-cyan-200">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {text("Low Radiation Digital Unit", "குறைந்த கதிர்வீச்சு கொண்ட டிஜிட்டல் எக்ஸ்-ரே")}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {text("Fast Bedside Reports", "உடனடி ரிப்போர்ட்")}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <a
                  href={`tel:${clinicPhone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition hover:bg-cyan-400 active:scale-95"
                >
                  <PhoneCall size={17} />
                  <span>{text("Call Helpline", "உடனடி தொடர்புக்கு")}</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20request%20a%20Home%20Visit%20/%20Mobile%20X-Ray.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-500/10 px-5 py-3.5 text-sm font-bold text-emerald-300 transition hover:bg-emerald-500/20 active:scale-95"
                >
                  <MessageCircle size={17} className="text-emerald-400" />
                  <span>{text("WhatsApp Request", "வாட்ஸ்அப் முன்பதிவு")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Facilities;