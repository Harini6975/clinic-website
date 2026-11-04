import {
  Bone,
  Activity,
  ShieldAlert,
  Zap,
  PersonStanding,
  Sparkles,
  Home,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function Specialities() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const whatsappNumber = "919842426363";

  const specialities = [
    {
      icon: Activity,
      titleEn: "Robotic Knee Replacement",
      titleTa: "ரோபோடிக் முழங்கால் மாற்று அறுவை சிகிச்சை",
      descriptionEn:
        "Computer-guided sub-millimeter precision for total and partial knee arthroplasty with minimal pain.",
      descriptionTa:
        "குறைந்த வலி மற்றும் விரைவான மீட்பு தரும் நவீன ரோபோடிக் முழங்கால் மூட்டு மாற்று அறுவை சிகிச்சை.",
      badgeEn: "Advanced Tech",
      badgeTa: "நவீன தொழில்நுட்பம்",
    },
    {
      icon: Bone,
      titleEn: "Total Hip Replacement",
      titleTa: "இடுப்பு மூட்டு மாற்று சிகிச்சை",
      descriptionEn:
        "Primary & revision hip arthroplasty for avascular necrosis (AVN), arthritis, and severe joint degeneration.",
      descriptionTa:
        "AVN மற்றும் மூட்டு தேய்மானத்தால் பாதிக்கப்பட்டோருக்கான சிறப்பு இடுப்பு மூட்டு மாற்று சிகிச்சை.",
      badgeEn: "Arthroplasty",
      badgeTa: "மூட்டு மாற்று",
    },
    {
      icon: ShieldAlert,
      titleEn: "Complex Trauma & Fractures",
      titleTa: "தீவிர எலும்பு முறிவு சிகிச்சை",
      descriptionEn:
        "Round-the-clock emergency surgical care for intra-articular, polytrauma, and non-union fractures.",
      descriptionTa:
        "விபத்துக்கள் மற்றும் சிக்கலான எலும்பு முறிவுகளுக்கான அவசர மறுசீரமைப்பு சிகிச்சை.",
      badgeEn: "24/7 Trauma",
      badgeTa: "அவசர சிகிச்சை",
    },
    {
      icon: Zap,
      titleEn: "Arthroscopy & Sports Medicine",
      titleTa: "ஆர்த்ரோஸ்கோபி & விளையாட்டு காயங்கள்",
      descriptionEn:
        "Keyhole minimally invasive surgery for ACL/PCL tears, meniscus injuries, and rotator cuff repairs.",
      descriptionTa:
        "தசைநார் கிழிசல் மற்றும் விளையாட்டு காயங்களுக்கான நுண்ணிய துளை அறுவை சிகிச்சை.",
      badgeEn: "Keyhole",
      badgeTa: "துளை சிகிச்சை",
    },
    {
      icon: PersonStanding,
      titleEn: "Geriatric Bone & Fragility Care",
      titleTa: "முதியோர் எலும்பு நலன்",
      descriptionEn:
        "Comprehensive fracture prevention and rapid surgical fixation for elderly patients with osteoporosis.",
      descriptionTa:
        "ஆஸ்டியோபோரோசிஸ் மற்றும் முதியோர்களுக்கான பிரத்யேக விரைவு சிகிச்சை முறைகள்.",
      badgeEn: "Senior Care",
      badgeTa: "முதியோர் நலம்",
    },
    {
      icon: Sparkles,
      titleEn: "Joint Preservation Therapy",
      titleTa: "மூட்டு பாதுகாப்பு சிகிச்சை",
      descriptionEn:
        "Early arthritis management through targeted viscosupplementation, cartilage therapy, and alignment osteotomy.",
      descriptionTa:
        "ஆரம்ப கட்ட மூட்டு தேய்மானத்தை தடுத்து இயற்கையான மூட்டை பாதுகாக்கும் நவீன சிகிச்சை.",
      badgeEn: "Non-Surgical",
      badgeTa: "அறுவை சிகிச்சையற்றது",
    },
    {
      icon: CheckCircle2,
      titleEn: "Shoulder & Elbow Reconstruction",
      titleTa: "தோள்பட்டை மற்றும் முழங்கை சிகிச்சை",
      descriptionEn:
        "Expert care for recurrent shoulder dislocations, frozen shoulder, and complex upper-limb injuries.",
      descriptionTa:
        "தோள்பட்டை விலகல், உறைந்த தோள்பட்டை மற்றும் மூட்டு பிரச்சனைகளுக்கான முழுமையான தீர்வு.",
      badgeEn: "Upper Limb",
      badgeTa: "தோள்பட்டை நலம்",
    },
    {
      icon: Home,
      titleEn: "Home Visits & Mobile X-Ray",
      titleTa: "வீட்டுக்கே வரும் எக்ஸ்-ரே & பரிசோதனை",
      descriptionEn:
        "Exclusive bedside orthopaedic consults and digital mobile X-ray imaging for bedridden and elderly patients.",
      descriptionTa:
        "நடமாட முடியாத நோயாளிகளுக்கு வீட்டிற்கே வந்து பரிசோதிக்கும் எக்ஸ்-ரே மற்றும் மருத்துவ சேவை.",
      badgeEn: "Doorstep Care",
      badgeTa: "வீட்டு சேவை",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Section Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800 border border-cyan-200">
              {text("Specialised Clinical Excellence", "சிறப்பு மருத்துவ சேவைகள்")}
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {text(
                "Advanced Orthopaedic & Surgical Care",
                "முழுமையான எலும்பியல் & மூட்டு மாற்று சிகிச்சைகள்"
              )}
            </h2>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {text(
                "Combining international fellowship training with modern robotic technology to deliver precision joint reconstruction and lasting mobility.",
                "சர்வதேச பயிற்சி மற்றும் நவீன தொழில்நுட்பத்துடன் மூட்டு வலி மற்றும் எலும்பு குறைபாடுகளுக்கு நிரந்தர தீர்வு."
              )}
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-cyan-700 transition hover:text-cyan-800 hover:underline"
          >
            {text("View All Treatments", "அனைத்து சிகிச்சைகளையும் பார்க்க")}
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Speciality Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.titleEn}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition duration-300 group-hover:bg-cyan-700 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600 transition group-hover:bg-cyan-100 group-hover:text-cyan-900">
                      {text(item.badgeEn, item.badgeTa)}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition">
                    {text(item.titleEn, item.titleTa)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text(item.descriptionEn, item.descriptionTa)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900"
                  >
                    <span>{text("Book Consultation", "ஆலோசனை பெற")}</span>
                    <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Orthopedic Assistance Card */}
        <div className="mt-12 rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-900 via-slate-900 to-slate-950 p-6 text-white shadow-xl sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                {text("Second Opinions & Emergency Queries", "இரண்டாம் கட்ட மருத்துவ கருத்து")}
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {text(
                  "Need an Expert Evaluation for Joint Surgery or Trauma?",
                  "மூட்டு வலி அல்லது எலும்பு முறிவுக்கு உடனடி ஆலோசனை தேவையா?"
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {text(
                  "Get your MRI and X-ray reports reviewed directly by Dr. Kalaivanan before proceeding with surgical decisions.",
                  "முழங்கால் மூட்டு மாற்று அறுவை சிகிச்சை முடிவெடுப்பதற்கு முன் டாக்டர் கலைவாணன் அவர்களிடம் உங்கள் ஸ்கேன் ரிப்போர்ட்டுகளை காட்டி ஆலோசனை பெறலாம்."
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition hover:bg-cyan-400 active:scale-95"
              >
                <span>{text("Schedule Visit", "நேரில் சந்திக்க")}</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20a%20second%20opinion%20on%20my%20orthopedic%20report.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-500/10 px-5 py-3.5 text-sm font-bold text-emerald-300 transition hover:bg-emerald-500/20 active:scale-95"
              >
                <MessageCircle size={17} className="text-emerald-400" />
                <span>{text("WhatsApp My Reports", "வாட்ஸ்அப்பில் அனுப்ப")}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Specialities;