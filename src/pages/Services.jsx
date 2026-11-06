import {
  Bone,
  Activity,
  ShieldAlert,
  Zap,
  Home,
  Stethoscope,
  ArrowRight,
  CalendarDays,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageProvider";
import SEO from "../components/SEO"; // <-- 1. Import the SEO component

export default function Services() {
  const { language } = useLanguage();
  const ta = language === "ta";
  const t = (en, tamil) => (ta ? tamil : en);

  const whatsappNumber = "919842426363";

  const treatments = [
    {
      icon: Activity,
      title: "Robotic Knee Replacement",
      tamil: "ரோபோடிக் முழங்கால் மாற்று அறுவை சிகிச்சை",
      description:
        "Computer-assisted robotic technology delivering sub-millimeter alignment accuracy, preserving healthy bone, and ensuring faster, pain-free recovery for advanced osteoarthritis.",
      tamilDescription:
        "கணிப்பொறி வழிகாட்டுதலுடன் முழங்கால் மூட்டு மாற்று அறுவை சிகிச்சை; துல்லியமான பொருத்துதல், குறைந்த ரத்தப்போக்கு மற்றும் விரைவான குணம்.",
    },
    {
      icon: Bone,
      title: "Total & Partial Hip Replacement",
      tamil: "இடுப்பு மூட்டு மாற்று அறுவை சிகிச்சை",
      description:
        "Specialized joint reconstruction for Avascular Necrosis (AVN), hip fractures, and degenerative arthritis using high-durability modern implants.",
      tamilDescription:
        "AVN மற்றும் மூட்டு தேய்மானத்தால் பாதிக்கப்பட்டோருக்கான சிறப்பு இடுப்பு மூட்டு மாற்று மற்றும் மறுசீரமைப்பு சிகிச்சை.",
    },
    {
      icon: ShieldAlert,
      title: "Trauma & Complex Fracture Care",
      tamil: "விபத்து மற்றும் தீவிர எலும்பு முறிவு சிகிச்சை",
      description:
        "24/7 advanced surgical management for intra-articular fractures, pelvic-acetabular trauma, and non-union fractures with rigid anatomical fixation.",
      tamilDescription:
        "விபத்துக்கள் மற்றும் சிக்கலான எலும்பு முறிவுகளுக்கு நவீன தகடு மற்றும் திருகாணி (Plates & Screws) மூலம் அவசர மறுசீரமைப்பு சிகிச்சை.",
    },
    {
      icon: Zap,
      title: "Arthroscopy & Sports Medicine",
      tamil: "ஆர்த்ரோஸ்கோபி & விளையாட்டு காயங்கள் சிகிச்சை",
      description:
        "Minimally invasive keyhole procedures for ACL/PCL ligament reconstruction, meniscus repair, and management of recurrent shoulder dislocations.",
      tamilDescription:
        "தசைநார் கிழிசல் (ACL/PCL), மாதவிடாய் கோளாறுகள் மற்றும் தோள்பட்டை விலகலுக்கான நுண்ணிய துளை அறுவை சிகிச்சை.",
    },
    {
      icon: Home,
      title: "Home Visit & Mobile Digital X-Ray",
      tamil: "வீட்டுக்கே வந்து எக்ஸ்-ரே எடுக்கும் சேவை",
      description:
        "Exclusive bedside orthopaedic consultations and low-radiation portable digital radiography for elderly, bedridden, or immobile patients in Trichy.",
      tamilDescription:
        "முதியவர்கள் மற்றும் படுக்கையில் உள்ள நோயாளிகளுக்காக வீட்டிற்கே வந்து பரிசோதிக்கும் நவீன டிஜிட்டல் எக்ஸ்-ரே சேவை.",
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Joint Pain Clinic",
      tamil: "மூட்டு வலி மற்றும் மூட்டழற்சி சிகிச்சை",
      description:
        "Conservative arthritis management, viscosupplementation injections, customized physical therapy, and lifestyle guidance to delay or prevent surgery.",
      tamilDescription:
        "அறுவை சிகிச்சை இல்லாமலேயே மூட்டு வலியைப் போக்க உயவு ஊசிகள் (Viscosupplementation), PRP மற்றும் சிறப்பு உடற்பயிற்சி வழிகாட்டல்.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      
      {/* 2. Add Dynamic SEO Meta Tags for Services Page */}
      <SEO 
        title="Orthopedic Treatments & Robotic Joint Surgery Services" 
        description="Explore advanced robotic knee/hip replacements, trauma care, arthroscopy, and doorstep mobile digital X-Ray services by Dr. M. Kalaivanan in Trichy." 
        path="/specialities" 
      />

      {/* Page Header */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="inline-block rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
            {t("Orthopaedic Services & Surgeries", "எலும்பியல் சிகிச்சைகள் மற்றும் அறுவை சிகிச்சைகள்")}
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {t(
              "Advanced Surgical & Non-Surgical Procedures",
              "நவீன அறுவை சிகிச்சை மற்றும் சிகிச்சை முறைகள்"
            )}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t(
              "Explore Dr. M. Kalaivanan's specialized treatments designed to alleviate joint pain, restore structural integrity, and regain full mobility.",
              "டாக்டர் எம். கலைவாணன் அவர்களின் வழிகாட்டுதலில் வழங்கப்படும் சிறப்பு மூட்டு மற்றும் எலும்பு சிகிச்சை முறைகள்."
            )}
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {treatments.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg sm:p-8"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon size={28} />
                  </div>

                  <h2 className="mt-6 text-2xl font-extrabold text-slate-900">
                    {t(item.title, item.tamil)}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {t(item.description, item.tamilDescription)}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-700 transition hover:text-cyan-900"
                  >
                    <span>{t("Schedule Consultation", "ஆலோசனைக்கு முன்பதிவு")}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20know%20more%20about:%20${encodeURIComponent(
                      item.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 transition hover:text-emerald-700"
                  >
                    <MessageCircle size={15} />
                    <span>{t("Ask on WhatsApp", "வாட்ஸ்அப்பில் கேள்")}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Appointment Call to Action */}
      <section className="bg-slate-50 px-5 py-14 sm:px-8 lg:py-18">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-gradient-to-tr from-cyan-950 via-slate-900 to-slate-950 p-8 text-white shadow-xl sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-cyan-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
              {t("Sri Riddhi Speciality Clinic • Trichy", "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக் • திருச்சி")}
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              {t("Ready to restore your active lifestyle?", "உங்கள் இயல்பான வாழ்க்கையை மீண்டும் தொடங்க தயாரா?")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {t(
                "Book your clinic visit or share your reports online to discuss appropriate treatment pathways with Dr. M. Kalaivanan.",
                "டாக்டர் கலைவாணன் அவர்களிடம் நேரில் சந்தித்து ஆலோசனை பெற அல்லது உங்கள் ரிப்போர்ட்டுகளை பகிர்ந்து சிகிச்சை பெற முன்பதிவு செய்யவும்."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row shrink-0">
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-400 active:scale-95"
            >
              <CalendarDays size={18} />
              <span>{t("Request Appointment", "முன்பதிவு கோரவும்")}</span>
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20consult%20regarding%20orthopaedic%20surgery.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-500/10 px-5 py-4 text-sm font-bold text-emerald-300 transition hover:bg-emerald-500/20 active:scale-95"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              <span>{t("WhatsApp Clinic", "வாட்ஸ்அப் தொடர்பு")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <p className="mx-auto max-w-7xl px-5 pb-12 pt-6 text-xs leading-relaxed text-slate-500 sm:px-8 text-center">
        {t(
          "Medical Disclaimer: Treatment availability and clinical suitability are determined solely after an in-person physical examination and radiological evaluation by Dr. M. Kalaivanan. This content does not replace emergency medical care.",
          "மருத்துவக் குறிப்பு: சிகிச்சைகளின் பொருத்தமானது டாக்டர் எம். கலைவாணன் அவர்களின் நேரடி பரிசோதனைக்குப் பிறகே தீர்மானிக்கப்படும். இந்தத் தளம் அவசர மருத்துவ உதவிக்கு மாற்றாகாது."
        )}
      </p>
    </main>
  );
}