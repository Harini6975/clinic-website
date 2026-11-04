import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Activity,
  Bone,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  MessageCircle,
  FileBadge,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageProvider";
import SEO from "../components/SEO";
import doctorImg from "../assets/Doctor_img1.png";

export default function About() {
  const { language } = useLanguage();
  const ta = language === "ta";
  const t = (en, tamil) => (ta ? tamil : en);

  const whatsappNumber = "919842426363";

  // State to track which card's modal is currently open (null means closed)
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const qualifications = [
    {
      title: "MBBS",
      detailEn: "Undergraduate Medical Degree with Clinical Distinctions",
      detailTa: "மருத்துவப் பட்டம்",
      institutionEn: "Recognized Medical Institution, India",
      institutionTa: "அங்கீகரிக்கப்பட்ட மருத்துவப் பல்கலைக்கழகம்",
    },
    {
      title: "M.S. (Orthopaedics)",
      detailEn: "Master of Surgery in Orthopaedics",
      detailTa: "முதுநிலை எலும்பியல் அறுவை சிகிச்சை பட்டம்",
      institutionEn: "Seth G.S. Medical College & K.E.M. Hospital, Mumbai",
      institutionTa: "சேத் ஜி.எஸ். மருத்துவக் கல்லூரி & கே.இ.எம். மருத்துவமனை, மும்பை",
    },
    {
      title: "Fellowship in Arthroplasty (Greece)",
      detailEn: "International Clinical Fellowship in Joint Replacement",
      detailTa: "சர்வதேச மூட்டு மாற்று அறுவை சிகிச்சை பயிற்சி",
      institutionEn: "KAT Hospital, Athens, Greece",
      institutionTa: "கே.ஏ.டி மருத்துவமனை, ஏதென்ஸ், கிரீஸ்",
    },
    {
      title: "Advanced Arthroplasty Training (Germany)",
      detailEn: "Computer-Assisted Navigation & Robotic Joint Surgery",
      detailTa: "கணிப்பொறி வழிகாட்டுதல் மற்றும் ரோபோடிக் அறுவை சிகிச்சை பயிற்சி",
      institutionEn: "Premier Orthopaedic Centre, Germany",
      institutionTa: "முன்னணி எலும்பியல் மையம், ஜெர்மனி",
    },
  ];

  const coreStrengths = [
    {
      icon: Activity,
      titleEn: "Robotic Knee Arthroplasty",
      titleTa: "ரோபோடிக் முழங்கால் மாற்று அறுவை சிகிச்சை",
      descEn: "Specialist in primary, partial, and complex revision total knee replacements with sub-millimeter balance.",
      descTa: "முழு மற்றும் பகுதி முழங்கால் மூட்டு மாற்று அறுவை சிகிச்சைகளில் பிரத்யேக தேர்ச்சி.",
      detailsEn: "Utilizing state-of-the-art computer-assisted robotic technology, Dr. Kalaivanan ensures precise implant positioning, minimal bone loss, and faster rehabilitation for total and partial knee arthroplasty patients.",
      detailsDetailsTa: "நவீன ரோபோடிக் தொழில்நுட்பத்தைப் பயன்படுத்தி முழங்கால் மாற்று அறுவை சிகிச்சை செய்யப்படுகிறது. இதனால் ரத்தப்போக்கு குறைவு மற்றும் விரைவான குணம்."
    },
    {
      icon: Bone,
      titleEn: "Complex Hip Reconstruction",
      titleTa: "இடுப்பு மூட்டு மறுசீரமைப்பு சிகிச்சை",
      descEn: "Expertise in addressing Avascular Necrosis (AVN), post-traumatic arthritis, and revision hip surgeries.",
      descTa: "AVN பாதிப்பு மற்றும் மூட்டு தேய்மானத்திற்கு நவீன இடுப்பு மூட்டு மாற்று அறுவை சிகிச்சை.",
      detailsEn: "Comprehensive evaluation and surgical management for complex hip joint disorders, including Avascular Necrosis (AVN), post-traumatic arthritis, and revision hip reconstruction surgeries.",
      detailsDetailsTa: "AVN மற்றும் இடுப்பு மூட்டு தேய்மானத்திற்கான நவீன மறுசீரமைப்பு மற்றும் மாற்று அறுவை சிகிச்சைகள்."
    },
    {
      icon: ShieldCheck,
      titleEn: "High-Velocity Trauma Care",
      titleTa: "தீவிர எலும்பு முறிவு மறுசீரமைப்பு",
      descEn: "Decades of handling complex intra-articular fractures, non-unions, and multi-ligament knee trauma.",
      descTa: "விபத்து காயங்கள் மற்றும் சிக்கலான எலும்பு முறிவுகளுக்கு சர்வதேச தரத்திலான சிகிச்சை.",
      detailsEn: "Round-the-clock surgical management for high-velocity accident trauma, complex intra-articular fractures, non-unions, and multi-ligament knee injuries with advanced fixation.",
      detailsDetailsTa: "விபத்து காயங்கள், எலும்பு முறிவுகள் மற்றும் தசைநார் காயங்களுக்கு அவசர மற்றும் சிறப்பு அறுவை சிகிச்சைகள்."
    },
    {
      icon: FileBadge,
      titleEn: "Scientific Research & Publications",
      titleTa: "சர்வதேச ஆராய்ச்சி வெளியீடுகள்",
      descEn: "Published clinical author in prestigious peer-reviewed robotic and orthopaedic surgical journals.",
      descTa: "முன்னணி சர்வதேச எலும்பியல் மருத்துவ இதழ்களில் ஆய்வுக்கட்டுரைகள் வெளியிட்டுள்ள பெருமை.",
      detailsEn: "Actively contributing to medical literature through peer-reviewed publications on robotic joint kinematics, advanced arthroplasty outcomes, and trauma management.",
      detailsDetailsTa: "சர்வதேச எலும்பியல் மருத்துவ இதழ்களில் ரோபோடிக் அறுவை சிகிச்சை பற்றிய ஆய்வுக்கட்டுரைகளை வெளியிட்டுள்ளார்."
    },
  ];

  const handleOpenModal = (e, item) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent?.stopImmediatePropagation();
    }
    setSelectedSpecialty(item);
  };

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* SEO Meta Tags */}
      <SEO 
        title="About Dr. M. Kalaivanan - Orthopedic & Joint Replacement Surgeon" 
        description="Meet Dr. M. Kalaivanan, MS (Ortho), fellowship-trained joint replacement & trauma surgeon from Mumbai, Greece & Germany practicing in Trichy." 
        path="/about" 
      />

      {/* Page Header */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="inline-block rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
            {t("Surgeon Profile & Credentials", "மருத்துவர் சுயவிவரம் மற்றும் தகுதிகள்")}
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {t("Dr. M. Kalaivanan", "டாக்டர் எம். கலைவாணன்")}
          </h1>

          <p className="mt-3 text-lg font-semibold text-cyan-300 sm:text-xl">
            {t(
              "Consultant Orthopaedic, Joint Replacement & Trauma Surgeon",
              "எலும்பியல் மற்றும் மூட்டு மாற்று அறுவை சிகிச்சை நிபுணர்"
            )}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t(
              "MBBS, MS (Ortho) | Fellowships in Arthroplasty (Mumbai, Greece, Germany) | Founder & Chief Surgeon at Sri Riddhi Speciality Clinic, Tiruchirappalli.",
              "எம்.பி.பி.எஸ், எம்.எஸ் (எலும்பியல்) | சர்வதேச மூட்டு மாற்று அறுவை சிகிச்சை சிறப்புப் பயிற்சி (மும்பை, கிரீஸ், ஜெர்மனி) | நிறுவனர், ஸ்ரீ ரித்தி ஸ்பெஷாலிட்டி கிளினிக், திருச்சி."
            )}
          </p>
        </div>
      </section>

      {/* Professional Bio Section */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:py-20">
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            {t("Clinical Excellence & Experience", "மருத்துவ அனுபவம் மற்றும் சிறப்புகள்")}
          </span>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t(
              "Precision Orthopaedic Surgery Rooted in Evidence and Empathy",
              "அறிவியல் பூர்வமான அணுகுமுறை மற்றும் மனிதநேயமிக்க எலும்பியல் சிகிச்சை"
            )}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t(
              "Dr. M. Kalaivanan is a highly accomplished Orthopaedic and Joint Replacement Surgeon with over two decades of comprehensive surgical practice. After earning his Master of Surgery (MS Ortho) from the prestigious Seth G.S. Medical College and K.E.M. Hospital in Mumbai, he completed advanced international fellowships in Athens, Greece, and Germany.",
              "டாக்டர் எம். கலைவாணன் அவர்கள் மும்பையின் புகழ்பெற்ற கே.இ.எம் (K.E.M) மருத்துவமனையில் எலும்பியல் அறுவை சிகிச்சையில் முதுநிலைப் பட்டம் (MS Ortho) பெற்று, பின்னர் கிரீஸ் மற்றும் ஜெர்மனி நாடுகளில் மூட்டு மாற்று சிகிச்சையில் சர்வதேச சிறப்பு பயிற்சிகளை முடித்துள்ளார்."
            )}
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {t(
              "Having performed over 5,000 successful surgeries, his clinical focus spans robotic total and partial knee replacement, total hip reconstruction for AVN, and complex articular trauma. At Sri Riddhi Speciality Clinic, he leads a dedicated team committed to restoring mobility, minimizing surgical invasiveness, and offering unique doorstep care including home mobile digital X-rays.",
              "5000-க்கும் மேற்பட்ட வெற்றிகரமான அறுவை சிகிச்சைகளை மேற்கொண்டுள்ள இவர், ரோபோடிக் முழங்கால் மாற்று, இடுப்பு மூட்டு மாற்று மற்றும் தீவிர எலும்பு முறிவு சிகிச்சைகளில் தனித்துவமான நிபுணத்துவம் கொண்டவர்."
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-800"
            >
              <CalendarDays size={18} />
              <span>{t("Book a Consultation", "ஆலோசனைக்கு முன்பதிவு")}</span>
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20consult%20regarding%20my%20orthopaedic%20condition.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
            >
              <MessageCircle size={18} className="text-emerald-600" />
              <span>{t("Consult on WhatsApp", "வாட்ஸ்அப் ஆலோசனை")}</span>
            </a>
          </div>
        </div>

        {/* Doctor Photo & Credential Card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
            <img
              src={doctorImg}
              alt="Dr. M. Kalaivanan Orthopaedic Surgeon"
              className="h-full w-full object-cover object-top min-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-800">
                <Award size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {t("Key Distinction", "சிறப்பு தகுதி")}
                </span>
              </div>
              <p className="mt-1 text-sm font-bold text-slate-900">
                {t(
                  "Pioneer in Robotic Joint Replacement & Doorstep Orthopaedic X-Ray Diagnostics",
                  "ரோபோடிக் மூட்டு மாற்று அறுவை சிகிச்சை & நடமாடும் எக்ஸ்-ரே முன்னோடி"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hi-Fi Graphical Core Specialties Grid with Modal Trigger */}
      <section className="relative isolate overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 lg:py-28">
        <div 
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGgwdjZINFYyaDJ2kanal2h2MmgydjJoMnYyaDJ2MmgyaDJ2MmgyaDJ2MmgyaDIyVjB6IiBmaWxsPSIjMDY0ZTVmIi8+PC9zdmc=')",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              {t("SPECIALIST SCOPE", "சிகிச்சை பிரிவுகள்")}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              {t("Key Areas of Surgical Practice", "முக்கிய அறுவை சிகிச்சை துறைகள்")}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {t("Click 'Learn More' on any card to view detailed clinical insights.", "துல்லியமான மருத்துவ விவரங்களை அறிய 'Learn More' என்பதை சொடுக்கவும்.")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreStrengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-8 shadow-xl shadow-slate-500/5 ring-1 ring-slate-900/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 hover:bg-white flex flex-col justify-between"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-cyan-600 to-cyan-900 scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative h-14 w-14 shrink-0 transition-transform duration-500 group-hover:scale-110">
                        <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-500/20 blur-md" />
                        <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 shadow-inner border border-cyan-100 transition-colors duration-300 group-hover:bg-cyan-950 group-hover:text-cyan-300">
                          <Icon size={26} strokeWidth={1.75} />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-950 leading-snug transition-colors duration-300 group-hover:text-cyan-900">
                        {t(item.titleEn, item.titleTa)}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-6">
                      {t(item.descEn, item.descTa)}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-4">
                    <div 
                      role="button"
                      tabIndex={0}
                      onClick={(e) => handleOpenModal(e, item)}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleOpenModal(e, item); }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 transition-colors duration-300 group-hover:text-cyan-950 cursor-pointer select-none"
                    >
                      <span>{t("Learn More", "மேலும் அறிக")}</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualifications & Medical Training */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <GraduationCap size={32} className="text-cyan-700" />
            <h2 className="text-3xl font-extrabold text-slate-900">
              {t("Education & Surgical Fellowships", "மருத்துவக் கல்வி & சர்வதேச சிறப்புப் பயிற்சிகள்")}
            </h2>
          </div>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            {t(
              "Dr. Kalaivanan's academic foundation combines rigorous residency in India's highest-volume trauma centres with focused European arthroplasty training.",
              "இந்தியாவின் முன்னணி மருத்துவ மையங்களில் அறுவை சிகிச்சை பயிற்சி மற்றும் ஐரோப்பிய நாடுகளில் உயர் மூட்டு மாற்று சிறப்புப் பயிற்சிகள்."
            )}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {qualifications.map((item) => (
              <article
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-700 mt-0.5">
                    {t(item.detailEn, item.detailTa)}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-500">
                    {t(item.institutionEn, item.institutionTa)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Philosophy */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-slate-900">
            {t("Patient-Centred Surgical Philosophy", "நோயாளி நலன் சார்ந்த மருத்துவ அணுகுமுறை")}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <CheckCircle2 className="text-cyan-700" size={26} />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {t("Conservative Care First", "அறுவை சிகிச்சையற்ற ஆரம்ப சிகிச்சை")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t(
                  "Surgery is only recommended when physical therapy, viscosupplementation, and lifestyle modifications have been thoroughly explored.",
                  "முழுமையான ஆரம்பகட்ட உடற்பயிற்சிகள் மற்றும் மருந்து சிகிச்சைகளுக்குப் பிறகே அறுவை சிகிச்சை பரிந்துரைக்கப்படும்."
                )}
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <CheckCircle2 className="text-cyan-700" size={26} />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {t("Sub-Millimeter Robotic Accuracy", "ரோபோடிக் துல்லியம்")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t(
                  "Preserving natural bone and soft tissue envelope ensures natural joint kinematics and minimizes post-op recovery days.",
                  "இயற்கையான எலும்பு மற்றும் திசுக்களை பாதுகாத்து குறைந்த ரத்தப்போக்கு மற்றும் விரைவான நடமாட்டத்தை உறுதி செய்கிறோம்."
                )}
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <CheckCircle2 className="text-cyan-700" size={26} />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {t("End-to-End Recovery Support", "முழுமையான மறுவாழ்வுப் பயிற்சி")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t(
                  "From pre-surgical counseling to structured post-operative physiotherapy, patients receive transparent, continuous care.",
                  "அறுவை சிகிச்சைக்கு முன் விளக்கம் அளிப்பது முதல் முழுமையாக நடமாடும் வரை நேரடி வழிகாட்டுதல்."
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Direct Call to Action */}
      <section className="bg-slate-950 px-5 py-14 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="text-2xl font-bold">
              {t(
                "Consult Dr. M. Kalaivanan at Sri Riddhi Clinic, Trichy",
                "டாக்டர் எம். கலைவாணன் அவர்களை கிளினிக்கில் சந்திக்க"
              )}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {t(
                "In-person clinic evaluations and digital scan second opinions available.",
                "நேரடி சந்திப்பு மற்றும் ஆன்லைன் ஸ்கேன் ரிப்போர்ட் ஆலோசனை பெறலாம்."
              )}
            </p>
          </div>

          <Link
            to="/appointment"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
          >
            <span>{t("Schedule Consultation", "முன்பதிவு செய்ய")}</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* INTERACTIVE MODAL POPUP */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200">
            
            {/* Close Button */}
            <button 
              type="button"
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800">
                <selectedSpecialty.icon size={26} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                  {t("Specialized Clinical Focus", "சிறப்பு மருத்துவ கவனம்")}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {t(selectedSpecialty.titleEn, selectedSpecialty.titleTa)}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-700 border-t border-slate-100 pt-4">
              {t(selectedSpecialty.detailsEn, selectedSpecialty.detailsDetailsTa)}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <Link
                to="/appointment"
                onClick={() => setSelectedSpecialty(null)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-cyan-800 transition"
              >
                <CalendarDays size={18} />
                <span>{t("Book Consultation", "சந்திப்பு முன்பதிவு")}</span>
              </Link>
              <button
                type="button"
                onClick={() => setSelectedSpecialty(null)}
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                {t("Close", "மூடுக")}
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}