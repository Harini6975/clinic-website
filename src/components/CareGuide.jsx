import { useState } from "react";
import {
  Bone,
  Activity,
  ShieldAlert,
  Zap,
  Home,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Search,
  MessageCircle,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function CareGuide() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const whatsappNumber = "919842426363";

  const options = [
    {
      id: "knee",
      icon: Activity,
      titleEn: "Knee Pain & Arthritis",
      titleTa: "முழங்கால் வலி & மூட்டுத் தேய்மானம்",
      descriptionEn:
        "Severe pain when walking, difficulty climbing stairs, bowing of legs, or grating sensation.",
      descriptionTa:
        "நடக்கும்போது வலி, மாடிப்படிகளில் ஏற சிரமம், முழங்கால் வளைதல் அல்லது தேய்மானம்.",
      recommendedCareEn: "Robotic Knee Replacement & Joint Preservation",
      recommendedCareTa: "ரோபோடிக் முழங்கால் மாற்று அறுவை சிகிச்சை",
      keywords:
        "knee pain arthritis osteoarthritis swelling stiffness tka partial knee முழங்கால் வலி மூட்டு தேய்மானம் வீக்கம்",
    },
    {
      id: "hip",
      icon: Bone,
      titleEn: "Hip, Groin & Pelvis Pain",
      titleTa: "இடுப்பு & மூட்டு வலி",
      descriptionEn:
        "Pain in groin or outer hip, limping while walking, difficulty sitting cross-legged, or Avascular Necrosis (AVN).",
      descriptionTa:
        "இடுப்பு பகுதியில் வலி, நடக்கும்போது நொண்டல், சம்மணம் போட சிரமம் அல்லது AVN பாதிப்பு.",
      recommendedCareEn: "Total Hip Replacement (THR) & Reconstruction",
      recommendedCareTa: "முழு இடுப்பு மூட்டு மாற்று அறுவை சிகிச்சை",
      keywords:
        "hip pain groin pain avn avascular necrosis limping total hip replacement thr இடுப்பு வலி நொண்டல் மூட்டு வலி",
    },
    {
      id: "trauma",
      icon: ShieldAlert,
      titleEn: "Fractures & Accident Trauma",
      titleTa: "எலும்பு முறிவு & அவசர சிகிச்சை",
      descriptionEn:
        "Sudden fall or vehicular accident resulting in severe pain, deformity, swelling, or inability to bear weight.",
      descriptionTa:
        "விபத்து அல்லது கீழே விழுந்ததால் ஏற்பட்ட தீவிர வலி, எலும்பு முறிவு, வீக்கம் அல்லது நடக்க முடியாத நிலை.",
      recommendedCareEn: "Emergency Trauma Fixation & Reconstruction",
      recommendedCareTa: "அவசர எலும்பு முறிவு மறுசீரமைப்பு அறுவை சிகிச்சை",
      keywords:
        "fracture broken bone accident injury fall swelling trauma nonunion எலும்பு முறிவு விபத்து காயம் வீக்கம்",
    },
    {
      id: "sports",
      icon: Zap,
      titleEn: "Sports Injuries & Ligament Tears",
      titleTa: "விளையாட்டு காயங்கள் & தசைநார் கிழிசல்",
      descriptionEn:
        "Twisting injury to knee or ankle, popping sensation, instability/giving-way, ACL/PCL tears.",
      descriptionTa:
        "விளையாடும் போது ஏற்படும் தசைநார் கிழிசல் (ACL/PCL), மூட்டு தளர்வு அல்லது பிசகுதல்.",
      recommendedCareEn: "Keyhole Arthroscopy & Ligament Reconstruction",
      recommendedCareTa: "ஆர்த்ரோஸ்கோபி துளை அறுவை சிகிச்சை",
      keywords:
        "acl pcl ligament tear meniscus knee twist ankle sprain arthroscopy தசைநார் கிழிசல் சுளுக்கு விளையாட்டு காயம்",
    },
    {
      id: "shoulder",
      icon: CheckCircle2,
      titleEn: "Shoulder & Arm Stiffness",
      titleTa: "தோள்பட்டை வலி & உறைந்த தோள்பட்டை",
      descriptionEn:
        "Night-time shoulder pain, frozen shoulder, inability to lift arm, or recurrent dislocations.",
      descriptionTa:
        "இரவு நேர தோள்பட்டை வலி, கையை மேலே தூக்க முடியாமை, உறைந்த தோள்பட்டை (Frozen Shoulder).",
      recommendedCareEn: "Shoulder Arthroscopy & Rotator Cuff Repair",
      recommendedCareTa: "தோள்பட்டை நுண்ணிய அறுவை சிகிச்சை",
      keywords:
        "shoulder pain frozen shoulder rotator cuff dislocation arm stiffness தோள்பட்டை வலி கை தூக்க முடியாமை",
    },
    {
      id: "homebound",
      icon: Home,
      titleEn: "Elderly & Bedridden Care",
      titleTa: "முதியோர் & படுக்கை நோயாளிகள் சேவை",
      descriptionEn:
        "Immobile or elderly patients needing orthopaedic evaluation or bedside digital X-ray at home.",
      descriptionTa:
        "முதியவர்கள் மற்றும் மருத்துவமனைக்கு வர முடியாதவர்களுக்கான இல்ல மருத்துவப் பரிசோதனை & நடமாடும் எக்ஸ்-ரே.",
      recommendedCareEn: "Doorstep Home Consultation & Mobile Digital X-Ray",
      recommendedCareTa: "வீட்டுக்கே வரும் எக்ஸ்-ரே & மருத்துவ பரிசோதனை",
      keywords:
        "home visit mobile x-ray elderly bedridden senior home consultation வீட்டு சேவை நடமாடும் எக்ஸ்-ரே முதியோர்",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((option) =>
    `${option.titleEn} ${option.titleTa} ${option.descriptionEn} ${option.descriptionTa} ${option.keywords}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  const selectedOption = options.find((option) => option.id === selected);

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-100/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
            {text("Orthopaedic Symptom Navigator", "எலும்பியல் அறிகுறிகள் வழிகாட்டி")}
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            {text(
              "Where Does It Hurt? Find the Right Treatment Pathway",
              "உங்கள் வலிக்குரிய தகுந்த சிகிச்சை முறையை கண்டறியுங்கள்"
            )}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {text(
              "Select your symptom area below or search by your condition to see how Dr. M. Kalaivanan can evaluate and treat your bone or joint concern.",
              "உங்கள் மூட்டு வலி அல்லது எலும்பு குறைபாட்டை தேர்ந்தெடுத்து அதற்கான தகுந்த சிகிச்சை மற்றும் ஆலோசனை வழியைப் பெறுங்கள்."
            )}
          </p>
        </div>

        {/* Search bar */}
        <div className="mx-auto mt-8 max-w-3xl">
          <label htmlFor="care-guide-search" className="sr-only">
            {text("Search symptoms", "அறிகுறிகளைத் தேடுங்கள்")}
          </label>
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              id="care-guide-search"
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setSelected(null);
              }}
              placeholder={text(
                "Search symptoms (e.g. knee pain, fracture, ACL, limping, முழங்கால் வலி)...",
                "அறிகுறிகளைத் தேடுங்கள் (எ.கா. முழங்கால் வலி, எலும்பு முறிவு, எக்ஸ்-ரே)..."
              )}
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-50"
            />
          </div>
        </div>

        {/* Symptom Cards Grid */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelected(option.id)}
                className={`group flex flex-col justify-between rounded-2xl border p-6 text-left transition duration-300 ${
                  isSelected
                    ? "border-cyan-600 bg-white shadow-xl ring-2 ring-cyan-200"
                    : "border-slate-200/90 bg-white hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${
                        isSelected
                          ? "bg-cyan-700 text-white"
                          : "bg-cyan-50 text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white"
                      }`}
                    >
                      <Icon size={24} />
                    </div>

                    <ArrowRight
                      size={18}
                      className={`mt-2 transition ${
                        isSelected
                          ? "translate-x-1 text-cyan-700"
                          : "text-slate-300 group-hover:translate-x-1 group-hover:text-cyan-700"
                      }`}
                    />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900 group-hover:text-cyan-700 transition">
                    {text(option.titleEn, option.titleTa)}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
                    {text(option.descriptionEn, option.descriptionTa)}
                  </p>
                </div>

                <span className="mt-4 inline-block text-xs font-bold text-cyan-700">
                  {isSelected
                    ? text("Selected ✓", "தேர்ந்தெடுக்கப்பட்டது ✓")
                    : text("View Treatment →", "சிகிச்சையை அறிய →")}
                </span>
              </button>
            );
          })}
        </div>

        {filteredOptions.length === 0 && (
          <p className="mx-auto mt-6 max-w-3xl rounded-xl bg-white p-5 text-center text-sm text-slate-600">
            {text(
              "No specific category matched your keyword. Please call or WhatsApp our clinic directly for immediate advice.",
              "பொருத்தமான பிரிவு கிடைக்கவில்லை. உடனடி ஆலோசனைக்கு கிளினிக்கை தொடர்பு கொள்ளவும்."
            )}
          </p>
        )}

        {/* Selected Result Recommendation */}
        {selectedOption && (
          <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-cyan-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
                  {text("Recommended Surgical & Clinical Approach", "பரிந்துரைக்கப்படும் சிகிச்சை முறை")}
                </span>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  {text(
                    selectedOption.recommendedCareEn,
                    selectedOption.recommendedCareTa
                  )}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {text(
                    `Dr. M. Kalaivanan evaluates your condition through detailed physical exam and radiological scans at Sri Riddhi Speciality Clinic.`,
                    `டாக்டர் கலைவாணன் அவர்கள் உங்கள் நிலையை முழுமையாக ஆய்வு செய்து துல்லியமான சிகிச்சை திட்டத்தை வழங்குவார்.`
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800 active:scale-95"
                >
                  <CalendarDays size={17} />
                  <span>{text("Book Appointment", "முன்பதிவு செய்ய")}</span>
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20am%20having%20symptoms%20related%20to:%20${encodeURIComponent(
                    selectedOption.titleEn
                  )}. Please guide me.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
                >
                  <MessageCircle size={17} className="text-emerald-600" />
                  <span>{text("WhatsApp Doctor", "வாட்ஸ்அப்பில் கேட்க")}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mx-auto mt-8 flex max-w-5xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900 sm:text-sm">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-amber-600" />
          <p>
            <span className="font-bold">
              {text("Clinical Note:", "மருத்துவக் குறிப்பு:")}
            </span>{" "}
            {text(
              "This guide helps you identify relevant orthopaedic procedures and is not a substitute for formal clinical diagnosis. If you have suffered severe trauma or acute dislocation, seek immediate emergency medical care.",
              "இந்த வழிகாட்டி தகுந்த சிகிச்சை முறையை அறிய மட்டுமே. தீவிர எலும்பு முறிவு மற்றும் அவசர நிலைகளுக்கு உடனடியாக மருத்துவமனையை அணுகவும்."
            )}
          </p>
        </div>

      </div>
    </section>
  );
}

export default CareGuide;