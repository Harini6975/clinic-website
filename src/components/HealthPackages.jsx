import {
  Bone,
  Activity,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function HealthPackages() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const whatsappNumber = "919842426363";

  const packages = [
    {
      icon: Activity,
      titleEn: "Knee Arthritis Screening",
      titleTa: "முழங்கால் மூட்டு தேய்மான பரிசோதனை",
      targetEn: "For Chronic Knee Pain & Stiffness",
      targetTa: "நீண்ட நாள் மூட்டு வலி மற்றும் வீக்கத்திற்கு",
      descriptionEn:
        "Comprehensive clinical assessment to detect cartilage wear, limb alignment, and early osteoarthritis stages.",
      descriptionTa:
        "மூட்டு குருத்தெலும்பு தேய்மானம் மற்றும் மூட்டு வளைதலை ஆரம்ப நிலையிலேயே கண்டறியும் பரிசோதனை.",
      featuresEn: [
        "Doctor Clinical Knee Exam",
        "Digital Bilateral Standing X-Ray",
        "Cartilage & Alignment Analysis",
      ],
      featuresTa: [
        "மருத்துவரின் நேரடி முழங்கால் ஆய்வு",
        "டிஜிட்டல் முழங்கால் எக்ஸ்-ரே ஆய்வு",
        "மூட்டு தேய்மானம் & இடைவெளி மதிப்பீடு",
      ],
    },
    {
      icon: ShieldCheck,
      titleEn: "Senior Bone Health & Osteoporosis",
      titleTa: "முதியோர் எலும்பு அடர்த்தி பரிசோதனை",
      targetEn: "For Adults Above 50 & Menopausal Women",
      targetTa: "50 வயதுக்கு மேற்பட்ட பெரியவர்களுக்கு",
      descriptionEn:
        "Screening package evaluating bone mineral density, fracture risks, and calcium metabolism in aging bones.",
      descriptionTa:
        "எலும்பு பலவீனம் (Osteoporosis) மற்றும் எளிதில் எலும்பு முறிவு ஏற்படும் அபாயத்தை கண்டறியும் ஆய்வு.",
      featuresEn: [
        "Bone Fragility & Risk Scoring",
        "Spine & Hip Radiography Review",
        "Personalized Calcium/Vitamin D Plan",
      ],
      featuresTa: [
        "எலும்பு முறிவு அபாயக் கணிப்பு",
        "இடுப்பு மற்றும் முதுகு எலும்பு ஆய்வு",
        "வைட்டமின் D & கால்சியம் வழிகாட்டல்",
      ],
    },
    {
      icon: Zap,
      titleEn: "Sports Injury & Ligament Check",
      titleTa: "விளையாட்டு வீரர்கள் தசைநார் பரிசோதனை",
      targetEn: "For Athletes & Twisting Knee Injuries",
      targetTa: "விளையாட்டு காயங்கள் மற்றும் பிசகுதலுக்கு",
      descriptionEn:
        "Focused diagnostic checkup evaluating ACL, PCL, meniscus tears, and shoulder rotator cuff stability.",
      descriptionTa:
        "முழங்கால் தசைநார் கிழிசல் (ACL/PCL) மற்றும் தோள்பட்டை பிசகுதலுக்கான சிறப்பு பரிசோதனை.",
      featuresEn: [
        "Lachman & Pivot Stability Tests",
        "MRI Scan Cross-Evaluation",
        "Rehabilitation & Return-to-Play Plan",
      ],
      featuresTa: [
        "தசைநார் உறுதித்தன்மை பரிசோதனை",
        "எம்.ஆர்.ஐ (MRI) ரிப்போர்ட் ஆய்வு",
        "விளையாட்டிற்கு திரும்பும் உடற்பயிற்சி வழிகாட்டல்",
      ],
    },
    {
      icon: Bone,
      titleEn: "Pre-Surgery Joint Replacement Check",
      titleTa: "அறுவை சிகிச்சைக்கு முந்தைய முழு ஆய்வு",
      targetEn: "For Patients Planning TKA or THR",
      targetTa: "மூட்டு மாற்று சிகிச்சைக்கு திட்டமிடுவோருக்கு",
      descriptionEn:
        "Complete surgical readiness workup including robotic 3D bone templating, implant selection, and medical clearance.",
      descriptionTa:
        "ரோபோடிக் அறுவை சிகிச்சைக்கு முந்தைய 3D கணிப்பொறி அளவு மற்றும் பொருத்துதல் திட்டம்.",
      featuresEn: [
        "Robotic 3D Anatomy Mapping",
        "Implant Longevity Guidance",
        "Post-op Mobility Blueprint",
      ],
      featuresTa: [
        "ரோபோடிக் 3D வரைபட ஆய்வு",
        "பொருத்தமான மூட்டு தேர்வு ஆலோசனை",
        "அறுவை சிகிச்சைக்குப் பிந்தைய நடமாட்ட வழிகாட்டல்",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
              {text("Preventive Joint & Bone Care", "தடுப்பு மற்றும் முன்கூட்டிய எலும்பு பரிசோதனை")}
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {text(
                "Targeted Orthopaedic & Joint Screening Packages",
                "மூட்டு வலி மற்றும் எலும்பு நலப் பரிசோதனை தொகுப்புகள்"
              )}
            </h2>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {text(
                "Detect bone thinning, cartilage degradation, and ligament damage early to prevent permanent joint damage and preserve natural movement.",
                "மூட்டு தேய்மானம் மற்றும் எலும்பு பலவீனத்தை ஆரம்பத்திலேயே கண்டறிந்து தீவிர பாதிப்புகளை தவிர்க்கும் சிறப்பு பரிசோதனைகள்."
              )}
            </p>
          </div>

          <Link
            to="/appointment"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800"
          >
            <span>{text("Book an Assessment", "முன்பதிவு செய்ய")}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Package Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.titleEn}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition duration-300 group-hover:bg-cyan-700 group-hover:text-white">
                      <Icon size={24} />
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-cyan-700">
                    {text(item.targetEn, item.targetTa)}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition">
                    {text(item.titleEn, item.titleTa)}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {text(item.descriptionEn, item.descriptionTa)}
                  </p>

                  {/* Test Inclusions */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {(language === "ta" ? item.featuresTa : item.featuresEn).map(
                      (feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-cyan-700" />
                          <span>{feat}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to="/appointment"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-50 py-2.5 text-xs font-bold text-cyan-800 transition hover:bg-cyan-700 hover:text-white"
                  >
                    <span>{text("Book Package", "பரிசோதனைக்கு முன்பதிவு")}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-12 rounded-3xl border border-cyan-100 bg-gradient-to-r from-sky-50 via-cyan-50 to-white p-6 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                {text("Sri Riddhi Speciality Clinic • Tiruchirappalli", "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக் • திருச்சி")}
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                {text(
                  "Not sure which screening test your joints need?",
                  "எந்த பரிசோதனை உங்களுக்கு தேவை என்பதில் சந்தேகம் உள்ளதா?"
                )}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {text(
                  "Send your existing reports or symptoms directly on WhatsApp to get advice from Dr. Kalaivanan's team before booking.",
                  "உங்கள் முந்தைய எக்ஸ்-ரே அல்லது அறிகுறிகளை வாட்ஸ்அப்பில் பகிர்ந்து தகுந்த பரிசோதனையைத் தேர்ந்தெடுக்கலாம்."
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row shrink-0">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800 active:scale-95"
              >
                <CalendarDays size={17} />
                <span>{text("Book in Clinic", "நேரில் சந்திக்க")}</span>
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20need%20guidance%20on%20which%20joint%20screening%20package%20is%20suitable%20for%20me.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100 active:scale-95"
              >
                <MessageCircle size={17} className="text-emerald-600" />
                <span>{text("Ask on WhatsApp", "வாட்ஸ்அப்பில் கேட்க")}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HealthPackages;