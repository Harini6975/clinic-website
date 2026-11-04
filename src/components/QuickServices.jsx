import {
  CalendarDays,
  MessageCircle,
  Home,
  ShieldAlert,
  Activity,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

function QuickServices() {
  const { language } = useLanguage();
  const text = (en, ta) => (language === "ta" ? ta : en);

  const whatsappNumber = "919842426363";
  const emergencyPhone = "+919842426363";

  const services = [
    {
      icon: CalendarDays,
      titleEn: "Book Clinic Visit",
      titleTa: "கிளினிக் முன்பதிவு",
      descriptionEn:
        "Schedule an in-person consultation with Dr. M. Kalaivanan at Sri Riddhi Clinic, Trichy.",
      descriptionTa:
        "திருச்சி ஸ்ரீ ரித்தி கிளினிக்கில் டாக்டர் கலைவாணன் அவர்களிடம் நேரில் ஆலோசனை பெற முன்பதிவு செய்யவும்.",
      link: "/appointment",
      isExternal: false,
    },
    {
      icon: MessageCircle,
      titleEn: "WhatsApp Consultation",
      titleTa: "வாட்ஸ்அப் மருத்துவ ஆலோசனை",
      descriptionEn:
        "Connect directly on WhatsApp to ask queries, share X-rays, or check clinic timings.",
      descriptionTa:
        "எக்ஸ்-ரே ரிப்போர்ட்டுகளை அனுப்பி வாட்ஸ்அப் மூலம் உடனடியாக மருத்துவ ஆலோசனை பெறலாம்.",
      link: `https://wa.me/${whatsappNumber}?text=Hello%20Dr.%20Kalaivanan,%20I%20would%20like%20to%20consult%20regarding%20joint%20pain/orthopedic%20care.`,
      isExternal: true,
    },
    {
      icon: Home,
      titleEn: "Home Visit & Bedside X-Ray",
      titleTa: "வீட்டுக்கே வரும் எக்ஸ்-ரே & சிகிச்சை",
      descriptionEn:
        "Request doorstep orthopaedic evaluation and digital portable X-ray for elderly patients.",
      descriptionTa:
        "முதியவர்கள் மற்றும் நடமாட முடியாதவர்களுக்காக வீட்டிற்கே வரும் நவீன எக்ஸ்-ரே மற்றும் மருத்துவ சேவை.",
      link: "/facilities",
      isExternal: false,
    },
    {
      icon: ShieldAlert,
      titleEn: "Emergency Trauma Care",
      titleTa: "அவசர எலும்பு முறிவு சிகிச்சை",
      descriptionEn:
        "Immediate surgical assistance for accident fractures, dislocations, and severe joint trauma.",
      descriptionTa:
        "விபத்துக்கள் மற்றும் திடீர் எலும்பு முறிவுகளுக்கு 24/7 உடனடி அவசர சிகிச்சை உதவி.",
      link: `tel:${emergencyPhone}`,
      isExternal: true,
    },
    {
      icon: Activity,
      titleEn: "Robotic Joint Advisory",
      titleTa: "ரோபோடிக் மூட்டு மாற்று ஆலோசனை",
      descriptionEn:
        "Detailed guidance on computer-assisted knee and hip replacement, implants, and longevity.",
      descriptionTa:
        "நவீன கணிப்பொறி வழிகாட்டல் மூட்டு மாற்று அறுவை சிகிச்சை குறித்த விரிவான விளக்கம்.",
      link: "/services",
      isExternal: false,
    },
    {
      icon: FileText,
      titleEn: "Second Opinion on Scans",
      titleTa: "இரண்டாம் கட்ட மருத்துவ ஆய்வு",
      descriptionEn:
        "Get your MRI and X-ray reports independently reviewed before deciding on major surgery.",
      descriptionTa:
        "அறுவை சிகிச்சைக்கு முன் உங்கள் எம்.ஆர்.ஐ மற்றும் எக்ஸ்-ரே ரிப்போர்ட்டுகளுக்கு மாற்று கருத்து பெறலாம்.",
      link: "/appointment",
      isExternal: false,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
            {text("Quick Patient Access", "விரைவு மருத்துவ சேவைகள்")}
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            {text(
              "Immediate Care & Consultation Options",
              "உங்களுக்குத் தேவையான அனைத்து சேவைகளும் ஒரே இடத்தில்"
            )}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {text(
              "Whether booking an in-clinic visit, scheduling a doorstep mobile X-ray, or seeking an emergency trauma opinion, connect with Dr. Kalaivanan with ease.",
              "நேரடி சந்திப்பு, அவசர சிகிச்சை அல்லது வீட்டுக்கே வந்து எக்ஸ்-ரே எடுக்கும் சேவை என அனைத்தையும் எளிதாகப் பெறலாம்."
            )}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            const cardContent = (
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition duration-300 group-hover:bg-cyan-700 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-700"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 transition group-hover:text-cyan-700">
                    {text(service.titleEn, service.titleTa)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text(service.descriptionEn, service.descriptionTa)}
                  </p>
                </div>

                <div className="mt-5 text-xs font-bold text-cyan-700">
                  {text("Proceed →", "தொடர →")}
                </div>
              </div>
            );

            return service.isExternal ? (
              <a
                key={service.titleEn}
                href={service.link}
                target={service.link.startsWith("http") ? "_blank" : undefined}
                rel={service.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                {cardContent}
              </a>
            ) : (
              <Link
                key={service.titleEn}
                to={service.link}
                className="block h-full"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickServices;