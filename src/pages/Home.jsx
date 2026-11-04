import Hero from "../components/Hero";
import SEO from "../components/SEO";
import { Bone, Home, ShieldCheck, Stethoscope, Award, Users, Activity, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageProvider";

function HomePage() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const services = [
    {
      title: "Looking for Robotic Joint Replacement?",
      ta: "ரோபோடிக் மூட்டு மாற்று அறுவை சிகிச்சை தேவையா?",
      desc: "Computer-guided sub-millimeter precision for total and partial knee & hip arthroplasty.",
      icon: Bone,
      link: "/specialties",
      bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Need Expert Care for Trauma & Fractures?",
      ta: "எலும்பு முறிவு மற்றும் விபத்து சிகிச்சை தேவையா?",
      desc: "Round-the-clock emergency surgical care for complex fractures and accident trauma.",
      icon: ShieldCheck,
      link: "/specialties",
      bgImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Searching for Doorstep Home Visits & X-Ray?",
      ta: "வீட்டிற்கே வந்து எக்ஸ்-ரே எடுக்கும் சேவை தேவையா?",
      desc: "Portable low-radiation digital radiography and orthopedic care at your doorstep for elders.",
      icon: Home,
      link: "/facilities",
      bgImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Suffering from Knee or Shoulder Pain?",
      ta: "முழங்கால் அல்லது தோள்பட்டை வலியால் அவதியா?",
      desc: "Minimally invasive arthroscopic surgery for sports injuries, ACL tears, and joint problems.",
      icon: Stethoscope,
      link: "/specialties",
      bgImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "5,000+",
      labelEn: "Successful Surgeries",
      labelTa: "வெற்றிகரமான அறுவை சிகிச்சைகள்",
    },
    {
      icon: Users,
      value: "100%",
      labelEn: "Patient Care Commitment",
      labelTa: "நோயாளர் நலன் அர்ப்பணிப்பு",
    },
    {
      icon: Activity,
      value: "Advanced",
      labelEn: "Robotic Precision",
      labelTa: "நவீன ரோபோடிக் துல்லியம்",
    },
  ];

  const symptoms = [
    {
      titleEn: "Severe Knee Pain",
      titleTa: "கடுமையான முழங்கால் வலி",
      descEn: "Difficulty walking, climbing stairs, or persistent joint stiffness.",
      descTa: "நடப்பதில் சிரமம், ஏறுவதில் வலி அல்லது தொடர்ச்சியான மூட்டு இறுக்கம்.",
      link: "/appointment",
      bgImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
    },
    {
      titleEn: "Sports Injuries",
      titleTa: "விளையாட்டு காயங்கள்",
      descEn: "Ligament tears, ACL injuries, meniscus damage, and sprains.",
      descTa: "தசைநார் கிழிசல் மற்றும் விளையாட்டு தொடர்பான காயங்கள்.",
      link: "/appointment",
      bgImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      titleEn: "Hip Joint Stiffness",
      titleTa: "இடுப்பு மூட்டு விறைப்பு",
      descEn: "Discomfort or restricted movement in the hip joint area.",
      descTa: "இடுப்பு மூட்டு பகுதியில் அசௌகரியம் அல்லது இயக்கக் கட்டுப்பாடு.",
      link: "/appointment",
      // Verified working medical image for hip joint card
      bgImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
    },
    {
      titleEn: "Fractures & Trauma",
      titleTa: "எலும்பு முறிவு & விபத்து காயங்கள்",
      descEn: "Urgent alignment and surgical management for bone fractures.",
      descTa: "எலும்பு முறிவுகளுக்கான அவசர சிகிச்சை மற்றும் மேலாண்மை.",
      link: "/appointment",
      bgImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      
      {/* Dynamic SEO Meta Tags & Local Business Schema */}
      <SEO 
        title="Best Orthopedic & Robotic Joint Replacement Surgeon in Trichy" 
        description="Consult Dr. M. Kalaivanan at Sri Riddhi Speciality Clinic, Trichy for advanced robotic joint replacements, trauma care, and doorstep portable X-Ray services." 
        path="/" 
      />
      
      {/* 1. INFINITE MOVING MARQUEE TICKER */}
      <div className="bg-cyan-900 text-cyan-100 py-3 overflow-hidden border-y border-cyan-800 shadow-inner">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap text-xs font-bold tracking-wider uppercase">
          <div className="flex items-center justify-around w-1/2">
            <span className="mx-6 flex items-center gap-2">✦ 5,000+ Successful Surgeries</span>
            <span className="mx-6 flex items-center gap-2">✦ Fellowship-Trained in Mumbai, Germany & Greece</span>
            <span className="mx-6 flex items-center gap-2">✦ Doorstep Home Visit & Portable X-Ray</span>
            <span className="mx-6 flex items-center gap-2">✦ Hindi & Tamil Consultations Available</span>
          </div>
          <div className="flex items-center justify-around w-1/2">
            <span className="mx-6 flex items-center gap-2">✦ 5,000+ Successful Surgeries</span>
            <span className="mx-6 flex items-center gap-2">✦ Fellowship-Trained in Mumbai, Germany & Greece</span>
            <span className="mx-6 flex items-center gap-2">✦ Doorstep Home Visit & Portable X-Ray</span>
            <span className="mx-6 flex items-center gap-2">✦ Hindi & Tamil Consultations Available</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <Hero />

      {/* 3. HIGHLIGHTS & KEY STATISTICS BAR */}
      <section className="bg-slate-900 py-10 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 mb-3 shadow-inner">
                    <Icon size={24} />
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight text-cyan-300">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm font-medium text-slate-300">
                    {text(stat.labelEn, stat.labelTa)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. QUICK SYMPTOM CHECKER SECTION */}
      <section className="py-20 px-5 sm:px-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <AlertCircle size={14} />
              {text("Symptom Guide", "அறிகுறிகள் வழிகாட்டி")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              {text("Are You Experiencing These Issues?", "நீங்கள் இந்தப் பிரச்சினைகளால் பாதிக்கப்பட்டுள்ளீர்களா?")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {text(
                "Identify your discomfort and get expert guidance with Dr. M. Kalaivanan at Sri Riddhi Speciality Clinic.",
                "உங்கள் அசௌகரியத்தை அடையாளம் கண்டு டாக்டர் எம். கலைவாணன் அவர்களிடம் தகுந்த சிகிச்சை பெறுங்கள்."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {symptoms.map((item, index) => (
              <div 
                key={index}
                className="relative group rounded-3xl overflow-hidden border border-slate-200 p-6 shadow-lg flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* Background Image & Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.bgImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center font-bold mb-6 backdrop-blur-sm">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {text(item.titleEn, item.titleTa)}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {text(item.descEn, item.descTa)}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80">
                  <Link 
                    to={item.link} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>{text("Consult Specialist", "மருத்துவரை அணுக")}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT SERVICES WE PROVIDE SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cyan-950">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-85"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80')` 
          }}
        />
        <div className="absolute inset-0 bg-cyan-950/30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-cyan-200 text-xs sm:text-sm font-extrabold uppercase tracking-widest drop-shadow-md">
              {text("Strong and Healthy Bones for Life", "வாழ்நாள் முழுவதும் வலுவான மற்றும் ஆரோக்கியமான எலும்புகள்")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 tracking-tight drop-shadow-lg">
              {text("What Services We Provide ?", "நாங்கள் வழங்கும் சேவைகள்?")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {services.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-3xl bg-white p-7 shadow-2xl border border-white/30 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/85 hover:shadow-cyan-500/30 hover:shadow-2xl overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 bg-cover bg-center pointer-events-none transition-opacity duration-300 group-hover:opacity-60"
                  style={{ backgroundImage: `url('${item.bgImage}')` }}
                />

                <div className="relative z-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200 shadow-inner mb-6 group-hover:scale-110 group-hover:bg-cyan-900 group-hover:text-cyan-100 transition-all duration-300">
                    <item.icon size={30} strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 text-center tracking-tight leading-snug">
                    {text(item.title, item.ta)}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-700 text-center leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 text-center">
                  <Link 
                    to={item.link} 
                    className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full bg-cyan-800 text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all duration-300 hover:bg-cyan-900 hover:shadow-lg"
                  >
                    {text("Read More", "மேலும் அறிய")}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default HomePage;