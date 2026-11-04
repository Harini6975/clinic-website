import { Bone, Home, ShieldCheck, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

export default function ServicesBackgroundSection() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const services = [
    {
      title: "Looking for Robotic Joint Replacement?",
      ta: "ரோபோடிக் மூட்டு மாற்று அறுவை சிகிச்சை தேவையா?",
      desc: "Computer-guided sub-millimeter precision for total and partial knee & hip arthroplasty.",
      icon: Bone,
      link: "/specialties",
    },
    {
      title: "Need Expert Care for Trauma & Fractures?",
      ta: "எலும்பு முறிவு மற்றும் விபத்து சிகிச்சை தேவையா?",
      desc: "Round-the-clock emergency surgical care for complex fractures and accident trauma.",
      icon: ShieldCheck,
      link: "/specialties",
    },
    {
      title: "Searching for Doorstep Home Visits & X-Ray?",
      ta: "வீட்டிற்கே வந்து எக்ஸ்-ரே எடுக்கும் சேவை தேவையா?",
      desc: "Portable low-radiation digital radiography and orthopedic care at your doorstep for elders.",
      icon: Home,
      link: "/home-care",
      bgImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Suffering from Knee or Shoulder Pain?",
      ta: "முழங்கால் அல்லது தோள்பட்டை வலியால் அவதியா?",
      desc: "Minimally invasive arthroscopic surgery for sports injuries, ACL tears, and joint problems.",
      icon: Stethoscope,
      link: "/specialties",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
      {/* BACKGROUND IMAGE WITH DARK OVERLAY */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-overlay"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cyan-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest drop-shadow">
            {text("Strong and Healthy Bones for Life", "வாழ்நாள் முழுவதும் வலுவான மற்றும் ஆரோக்கியமான எலும்புகள்")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 tracking-tight drop-shadow-md">
            {text("What Services We Provide ?", "நாங்கள் வழங்கும் சேவைகள்?")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-3xl bg-white/95 backdrop-blur-xl p-7 shadow-2xl border border-white/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-cyan-500/20 hover:shadow-2xl overflow-hidden"
            >
              {item.bgImage && (
                <div 
                  className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none group-hover:opacity-25 transition-opacity"
                  style={{ backgroundImage: `url('${item.bgImage}')` }}
                />
              )}

              <div className="relative z-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-900/10 text-amber-900 border border-amber-900/20 shadow-inner mb-6 group-hover:scale-110 group-hover:bg-cyan-900 group-hover:text-cyan-100 transition-all duration-300">
                  <item.icon size={30} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-black text-slate-900 text-center tracking-tight leading-snug">
                  {text(item.title, item.ta)}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 mt-8 text-center">
                <Link 
                  to={item.link} 
                  className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full bg-gradient-to-r from-amber-900 to-amber-950 text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all duration-300 group-hover:from-cyan-700 group-hover:to-cyan-900 group-hover:shadow-lg"
                >
                  {text("Read More", "மேலும் அறிய")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}