import React from "react";
import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageProvider";
import SEO from "../components/SEO";

export default function Blogs() {
  const { language } = useLanguage();
  const ta = language === "ta";
  const t = (en, tamil) => (ta ? tamil : en);

  const blogPosts = [
    {
      id: 1,
      titleEn: "Understanding Robotic Knee Arthroplasty: Is It Right for You?",
      titleTa: "ரோபோடிக் முழங்கால் மாற்று அறுவை சிகிச்சை: இது உங்களுக்கு உகந்ததா?",
      excerptEn: "Discover how computer-assisted robotic surgery brings sub-millimeter precision, faster recovery, and better implant longevity for knee arthritis patients.",
      excerptTa: "கணிப்பொறி ரோபோடிக் தொழில்நுட்பம் முழங்கால் மூட்டு மாற்று அறுவை சிகிச்சையில் எத்தகைய துல்லியத்தையும் விரைவான குணத்தையும் தருகிறது என்பதை அறியுங்கள்.",
      date: "October 24, 2026",
      categoryEn: "Joint Replacement",
      categoryTa: "மூட்டு மாற்று சிகிச்சை",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      titleEn: "Managing Avascular Necrosis (AVN) of the Hip in Early Stages",
      titleTa: "இடுப்பு மூட்டு ரத்த ஓட்ட தடை (AVN) ஆரம்ப கட்ட சிகிச்சை முறைகள்",
      excerptEn: "An overview of modern hip preservation techniques, core decompression, and advanced rehabilitation protocols for AVN.",
      excerptTa: "AVN பாதிப்புக்கான நவீன இடுப்பு மூட்டு பாதுகாப்பு முறைகள் மற்றும் மறுவாழ்வு வழிமுறைகள் பற்றிய ஒரு கண்ணோட்டம்.",
      date: "October 15, 2026",
      categoryEn: "Hip Care",
      categoryTa: "இடுப்பு மூட்டு பராமரிப்பு",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      titleEn: "Post-Fracture Rehabilitation: Tips for a Safe and Swift Recovery",
      titleTa: "எலும்பு முறிவுக்குப் பிந்திய மறுவாழ்வு: பாதுகாப்பான மற்றும் விரைவான மீட்சிக்கான வழிகள்",
      excerptEn: "Essential physiotherapy regimens, calcium-rich nutrition, and expert care guidelines following high-velocity trauma surgery.",
      excerptTa: "எலும்பு முறிவு அறுவை சிகிச்சைக்குப் பிறகு பின்பற்ற வேண்டிய அவசியமான உடற்பயிற்சிகள் மற்றும் ஊட்டச்சத்து முறைகள்.",
      date: "September 28, 2026",
      categoryEn: "Trauma Care",
      categoryTa: "விபத்து மற்றும் எலும்பு முறிவு",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <SEO 
        title="Orthopedic Health Blogs & Articles - Dr. M. Kalaivanan" 
        description="Read expert orthopedic articles, joint replacement tips, and robotic surgery insights by Dr. M. Kalaivanan in Trichy." 
        path="/blogs" 
      />

      {/* Page Header */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="inline-block rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
            {t("Clinical Knowledge Base", "மருத்துவக் கட்டுரைகள்")}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {t("Orthopedic Insights & Articles", "எலும்பியல் வழிகாட்டிகள் மற்றும் கட்டுரைகள்")}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t(
              "Stay informed with expert advice on joint preservation, robotic surgery breakthroughs, and post-operative care by Dr. M. Kalaivanan.",
              "டாக்டர் எம். கலைவாணன் அவர்களின் மூட்டு பாதுகாப்பு மற்றும் ரோபோடிக் அறுவை சிகிச்சை பற்றிய மருத்துவக் கட்டுரைகள்."
            )}
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-cyan-200"
            >
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.titleEn} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-cyan-700 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow">
                  {t(post.categoryEn, post.categoryTa)}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-cyan-700" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={13} className="text-cyan-700" />
                      Dr. M. Kalaivanan
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug">
                    {t(post.titleEn, post.titleTa)}
                  </h2>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {t(post.excerptEn, post.excerptTa)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 group-hover:text-cyan-900">
                    <span>{t("Read Full Article", "முழு கட்டுரையைப் படிக்க")}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}