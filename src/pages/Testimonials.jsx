import { Star, Quote } from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import SEO from "../components/SEO";

export default function PatientStories() {
  const { language } = useLanguage();
  const ta = language === "ta";
  const t = (en, tamil) => (ta ? tamil : en);

  const testimonials = [
    {
      nameEn: "R. Senthil Kumar",
      nameTa: "ஆர். செந்தில் குமார்",
      procedureEn: "Robotic Total Knee Replacement",
      procedureTa: "ரோபோடிக் முழங்கால் மாற்று அறுவை சிகிச்சை",
      reviewEn: "Dr. Kalaivanan explained the entire robotic procedure clearly. Within days of surgery at Trichy, I was able to walk without excruciating pain. Highly grateful!",
      reviewTa: "டாக்டர் கலைவாணன் அறுவை சிகிச்சையை மிகத் தெளிவாக விளக்கினார். அறுவை சிகிச்சைக்குப் பிறகு சில நாட்களில் வலியின்றி நடக்க முடிந்தது."
    },
    {
      nameEn: "K. Meenakshi",
      nameTa: "கே. மீனாட்சி",
      procedureEn: "Doorstep Mobile X-Ray & Home Care",
      procedureTa: "வீட்டுக்கு வந்த எக்ஸ்-ரே & வீட்டு பராமரிப்பு",
      reviewEn: "My mother couldn't travel due to severe hip fracture pain. The home visit and portable X-ray service provided by Sri Riddhi Clinic was an absolute blessing for our family.",
      reviewTa: "என் தாயாரால் நடக்க முடியாத நிலையில், வீட்டிற்கே வந்து எக்ஸ்-ரே எடுத்து பரிசோதித்த ஸ்ரீ ரித்தி கிளினிக் சேவைகளுக்கு மிக்க நன்றி."
    }
  ];

  return (
    <main className="bg-white text-slate-900">
      <SEO 
        title="Patient Success Stories & Testimonials - Sri Riddhi Clinic" 
        description="Read real patient recovery stories after successful robotic joint replacements and orthopedic care under Dr. M. Kalaivanan in Trichy." 
        path="/patient-stories" 
      />

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="inline-block rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
            {t("Patient Testimonials", "நோயாளர்களின் அனுபவங்கள்")}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            {t("Stories of Restored Mobility", "மீட்கப்பட்ட இயக்கம் பற்றிய கதைகள்")}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {t(
              "Read how our patients overcame chronic joint pain and injuries through expert surgical and home care.",
              "எங்கள் நோயாளர்கள் எவ்வாறு மூட்டு வலியில் இருந்து மீண்டு இயல்பு வாழ்க்கைக்கு திரும்பினர் என்பதைப் படிக்கவும்."
            )}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div key={index} className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-cyan-700/20 mb-2" size={32} />
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 italic">
                  "{t(item.reviewEn, item.reviewTa)}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <h3 className="font-bold text-slate-900">{t(item.nameEn, item.nameTa)}</h3>
                <p className="text-xs font-semibold text-cyan-700 mt-0.5">{t(item.procedureEn, item.procedureTa)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}