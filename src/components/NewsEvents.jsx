import {
  CalendarDays,
  Award,
  Activity,
  Home,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function NewsEvents() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const whatsappNumber = "919842426363";

  const events = [
    {
      icon: Activity,
      categoryEn: "Free Health Camp",
      categoryTa: "இலவச மருத்துவ முகாம்",
      titleEn: "Free Knee & Joint Pain Screening Camp",
      titleTa: "இலவச முழங்கால் & மூட்டு வலி பரிசோதனை முகாம்",
      descriptionEn:
        "Comprehensive clinical joint evaluation, standing knee alignment assessment, and arthritis management guidance at Sri Riddhi Clinic.",
      descriptionTa:
        "ஸ்ரீ ரித்தி கிளினிக்கில் மூட்டு வலி, வீக்கம் மற்றும் தேய்மானத்திற்கான இலவச மருத்துவ ஆலோசனை முகாம்.",
      dateEn: "Upcoming Sunday | 09:00 AM - 01:00 PM",
      dateTa: "வரும் ஞாயிறு | காலை 09:00 - மதியம் 01:00",
      locationEn: "Sri Riddhi Speciality Clinic, Trichy",
      locationTa: "ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக், திருச்சி",
    },
    {
      icon: Award,
      categoryEn: "Research & Innovation",
      categoryTa: "ஆராய்ச்சி & சாதனை",
      titleEn: "Milestone in Robotic Knee Arthroplasty",
      titleTa: "ரோபோடிக் மூட்டு மாற்று அறுவை சிகிச்சை சாதனை",
      descriptionEn:
        "Dr. M. Kalaivanan's latest clinical publication on sub-millimeter joint line restoration using robotic-assisted unicompartmental knee surgery.",
      descriptionTa:
        "சர்வதேச மருத்துவ இதழில் ரோபோடிக் அறுவை சிகிச்சை துல்லியம் குறித்த டாக்டர் கலைவாணன் அவர்களின் ஆய்வு கட்டுரை வெளியீடு.",
      dateEn: "Recent Scientific Journal Release",
      dateTa: "சர்வதேச மருத்துவ இதழ் அறிக்கை",
      locationEn: "Journal of Robotic Surgery",
      locationTa: "ரோபோடிக் சர்ஜரி மருத்துவ இதழ்",
    },
    {
      icon: Home,
      categoryEn: "Community Outreach",
      categoryTa: "சமூக நல சேவை",
      titleEn: "Doorstep Mobile X-Ray Initiative for Seniors",
      titleTa: "முதியோர்களுக்கான நடமாடும் எக்ஸ்-ரே திட்டம்",
      descriptionEn:
        "Special home-visit outreach providing low-radiation portable digital X-rays and bedside consultations for immobile and senior patients in Trichy.",
      descriptionTa:
        "மருத்துவமனைக்கு வர இயலாத முதியோர்களுக்கு வீட்டிற்கே வந்து எக்ஸ்-ரே எடுத்து சிகிச்சை வழிகாட்டும் சிறப்பு சேவை திட்டம்.",
      dateEn: "Available All Days on Request",
      dateTa: "முன்பதிவின் பேரில் அனைத்து நாட்களும்",
      locationEn: "Tiruchirappalli & Surrounding Areas",
      locationTa: "திருச்சிராப்பள்ளி மற்றும் சுற்றுவட்டார பகுதி",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Section Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-100/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
              <Sparkles size={14} className="text-cyan-700" />
              {text("Updates & Community Care", "செய்திகள் மற்றும் மருத்துவ முகாம்கள்")}
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {text(
                "Clinical Milestones, Free Camps & Academic Highlights",
                "சமீபத்திய மருத்துவ நிகழ்வுகள் மற்றும் சேவை செய்திகள்"
              )}
            </h2>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {text(
                "Stay informed on community bone health camps, surgical advancements in robotic joint replacement, and clinic updates from Dr. M. Kalaivanan.",
                "டாக்டர் எம். கலைவாணன் அவர்களின் இலவச மூட்டு பரிசோதனை முகாம்கள் மற்றும் சமீபத்திய மருத்துவ முன்னேற்றங்கள்."
              )}
            </p>
          </div>

          <Link
            to="/appointment"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800"
          >
            <span>{text("Book Clinic Slot", "முன்பதிவு செய்ய")}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Event Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {events.map((event) => {
            const Icon = event.icon;

            return (
              <article
                key={event.titleEn}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                {/* Header Top Graphic */}
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-slate-100 via-sky-50 to-cyan-50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-cyan-700 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-cyan-800 shadow-sm backdrop-blur-sm">
                    {text(event.categoryEn, event.categoryTa)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <CalendarDays size={14} className="text-cyan-700" />
                      <span>{text(event.dateEn, event.dateTa)}</span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-cyan-700 transition">
                      {text(event.titleEn, event.titleTa)}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {text(event.descriptionEn, event.descriptionTa)}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span className="truncate max-w-[170px]">
                        {text(event.locationEn, event.locationTa)}
                      </span>

                      <Link
                        to="/appointment"
                        className="inline-flex items-center gap-1 font-bold text-cyan-700 hover:text-cyan-900"
                      >
                        <span>{text("Register", "பதிவு")}</span>
                        <ArrowRight size={13} className="transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Community Announcement Banner */}
        <div className="mt-12 rounded-3xl border border-cyan-100 bg-cyan-50/80 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm">
                <CalendarDays size={24} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                  {text("Camp Inquiries & Group Registrations", "முகாம் முன்பதிவு & தகவல்கள்")}
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                  {text(
                    "Want to Register for Our Upcoming Joint Screening Camp?",
                    "வரவிருக்கும் மூட்டு வலி பரிசோதனை முகாமில் பங்கேற்க விரும்புகிறீர்களா?"
                  )}
                </h3>

                <p className="mt-1.5 text-sm text-slate-600">
                  {text(
                    "Slots are limited to ensure thorough one-on-one evaluations with Dr. Kalaivanan. Confirm your appointment in advance via WhatsApp.",
                    "நோயாளிகளை முழுமையாக ஆய்வு செய்ய குறைந்த எண்ணிக்கையிலான இடங்களே உள்ளதால் முன்கூட்டியே பதிவு செய்யவும்."
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row shrink-0">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20register%20for%20the%20Free%20Joint%20Pain%20Screening%20Camp.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800 active:scale-95"
              >
                <MessageCircle size={17} />
                <span>{text("Register on WhatsApp", "வாட்ஸ்அப்பில் முன்பதிவு")}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                <span>{text("Clinic Location", "கிளினிக் முகவரி")}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NewsEvents;