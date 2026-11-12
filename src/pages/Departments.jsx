import {
  BookOpen,
  Video,
  ExternalLink,
  HeartPulse,
  PlayCircle,
} from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";

export default function Departments() {
  const { language } = useLanguage();
  const isTamil = language === "ta";

  const videos = [
    {
      title: isTamil
        ? "எலும்பு மற்றும் மூட்டு ஆரோக்கியம்"
        : "Bone and Joint Health",
      description: isTamil
        ? "எலும்பு மற்றும் மூட்டு ஆரோக்கியம் பற்றிய கல்வி வீடியோக்களைப் பார்க்கவும்."
        : "Explore educational videos about bone and joint health.",
      url: "https://www.youtube.com/results?search_query=bone+and+joint+health+education",
    },
    {
      title: isTamil
        ? "முழங்கால் மூட்டு ஆரோக்கியம்"
        : "Understanding Knee Joint Health",
      description: isTamil
        ? "முழங்கால் மூட்டு பராமரிப்பு பற்றிய தகவல்களைத் தேடுங்கள்."
        : "Find educational resources about knee joint care.",
      url: "https://www.youtube.com/results?search_query=knee+joint+health+education",
    },
    {
      title: isTamil
        ? "எலும்பு முறிவு பராமரிப்பு"
        : "Fracture Care and Recovery",
      description: isTamil
        ? "எலும்பு முறிவு பராமரிப்பு குறித்த கல்வி வீடியோக்களைப் பாருங்கள்."
        : "Explore educational videos about fracture care and recovery.",
      url: "https://www.youtube.com/results?search_query=fracture+care+patient+education",
    },
  ];

  const articles = [
    {
      title: isTamil ? "மூட்டு வலியைப் புரிந்துகொள்வோம்" : "Understanding Joint Pain",
      description: isTamil
        ? "மூட்டு வலி பற்றிய சரிபார்க்கப்பட்ட தகவல்கள் இங்கே சேர்க்கப்படும்."
        : "A space for clinic-approved information about joint pain.",
    },
    {
      title: isTamil ? "எலும்பு ஆரோக்கியம்" : "Maintaining Bone Health",
      description: isTamil
        ? "எலும்பு ஆரோக்கியம் குறித்த கட்டுரைகள் இங்கே சேர்க்கப்படும்."
        : "A space for clinic-approved articles about bone health.",
    },
    {
      title: isTamil ? "மூட்டு மாற்று சிகிச்சை" : "Joint Replacement Information",
      description: isTamil
        ? "சிகிச்சை பற்றிய மருத்துவர் அங்கீகரித்த தகவல்கள் இங்கே சேர்க்கப்படும்."
        : "A space for doctor-reviewed information about joint replacement.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section with Background Image and Dark Overlay */}
      <section className="relative bg-slate-950 px-4 py-20 text-white sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Clinic Infrastructure" 
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300">
            <HeartPulse size={18} />
            {isTamil ? "நோயாளர் கல்வி" : "Patient Education"}
          </span>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
            {isTamil
              ? "எலும்பு மற்றும் மூட்டு ஆரோக்கியம்"
              : "Orthopaedic Health Resources"}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {isTamil
              ? "எலும்பு, மூட்டு மற்றும் காயப் பராமரிப்பு பற்றிய கல்வி வளங்களை ஆராயுங்கள்."
              : "Explore educational resources about bone health, joints, injuries and orthopaedic care."}
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <Video className="text-red-600" size={30} />
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                {isTamil ? "கல்வி வீடியோக்கள்" : "Educational Videos"}
              </h2>
              <p className="mt-1 text-slate-600">
                {isTamil
                  ? "YouTube-இல் தொடர்புடைய கல்வி வீடியோக்களைத் தேடுங்கள்."
                  : "Find relevant educational videos on YouTube."}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <article
                key={video.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <PlayCircle size={27} />
                </div>

                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {video.description}
                </p>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
                >
                  {isTamil ? "வீடியோக்களைப் பார்க்க" : "Find Videos"}
                  <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <BookOpen className="text-blue-700" size={30} />
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                {isTamil ? "சுகாதாரக் கட்டுரைகள்" : "Health Articles"}
              </h2>
              <p className="mt-1 text-slate-600">
                {isTamil
                  ? "மருத்துவர் சரிபார்த்த கட்டுரைகள் விரைவில் சேர்க்கப்படும்."
                  : "Clinic-reviewed articles can be added here after approval."}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <BookOpen className="mb-4 text-blue-700" size={26} />
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {article.description}
                </p>
                <span className="mt-5 inline-block rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-800">
                  {isTamil ? "விரைவில்" : "Coming soon"}
                </span>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-500">
            {isTamil
              ? "இந்தப் பக்கம் பொதுக் கல்விக்காக மட்டுமே. தனிப்பட்ட மருத்துவ ஆலோசனைக்கு மருத்துவரை அணுகவும்."
              : "This page is for general education only and does not replace advice from a qualified healthcare professional."}
          </p>
        </div>
      </section>
    </main>
  );
}