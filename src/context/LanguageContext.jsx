import { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    home: "Home", about: "About the Doctor", treatments: "Treatments", videos: "Videos & Articles",
    appointment: "Book Appointment", contact: "Contact", english: "English", tamil: "தமிழ்",
    eyebrow: "ORTHOPAEDIC CARE", heroTitle: "Move better. Live with confidence.",
    heroText: "Consult Dr. M. Kalaivanan for orthopaedic assessment and treatment information. Learn about bone, joint, hip and knee care, and request an appointment.",
    book: "Request an Appointment", explore: "Explore Treatments", profile: "Meet the Doctor",
    focus: "Orthopaedic care with a patient-first approach", focusText: "Clear information, thoughtful consultation and support through your treatment journey.",
    treatmentsTitle: "Orthopaedic care and treatments", treatmentsText: "Explore common orthopaedic concerns and discuss the right care plan with your doctor.",
    hip: "Hip replacement", knee: "Knee replacement", trauma: "Trauma & fracture care", joint: "Joint pain assessment",
    hipText: "Information and consultation for hip joint problems and replacement options.", kneeText: "Assessment of knee pain, arthritis and knee replacement options.", traumaText: "Evaluation and treatment planning for bone injuries and fractures.", jointText: "Clinical assessment for joint pain, stiffness and mobility concerns.",
    learn: "Learn about orthopaedic health", learnText: "Patient education videos and articles can help you prepare questions for your consultation.",
    bookVisit: "Plan your consultation", bookVisitText: "Contact the clinic to confirm availability, location and appointment details.",
    call: "Call clinic", contactUs: "Contact the clinic", disclaimer: "Website information is educational and does not replace an in-person medical assessment.",
    footerText: "Orthopaedic consultation and patient education for bone, joint, hip and knee health.",
    quickLinks: "Quick links", location: "Clinic location", directions: "Get directions", copyright: "All rights reserved.",
    name: "Dr. M. Kalaivanan", role: "Orthopaedic Surgeon", tamilLabel: "தமிழ்", englishLabel: "English"
  },
  ta: {
    home: "முகப்பு", about: "மருத்துவரைப் பற்றி", treatments: "சிகிச்சைகள்", videos: "காணொளிகள் மற்றும் கட்டுரைகள்",
    appointment: "சந்திப்பு பதிவு", contact: "தொடர்பு", english: "English", tamil: "தமிழ்",
    eyebrow: "எலும்பியல் மருத்துவம்", heroTitle: "நம்பிக்கையுடன் நகருங்கள். சிறப்பாக வாழுங்கள்.",
    heroText: "எலும்பு, மூட்டு, இடுப்பு மற்றும் முழங்கால் தொடர்பான மதிப்பீடு மற்றும் சிகிச்சை தகவல்களுக்கு டாக்டர் எம். கலைவாணனை அணுகுங்கள். சந்திப்பிற்கான கோரிக்கையை அனுப்புங்கள்.",
    book: "சந்திப்பைக் கோருங்கள்", explore: "சிகிச்சைகளைப் பார்க்க", profile: "மருத்துவரை அறிய",
    focus: "நோயாளியை மையமாகக் கொண்ட எலும்பியல் பராமரிப்பு", focusText: "தெளிவான தகவல், கவனமான ஆலோசனை மற்றும் சிகிச்சைப் பயணத்தில் ஆதரவு.",
    treatmentsTitle: "எலும்பியல் சிகிச்சைகள்", treatmentsText: "பொதுவான எலும்பியல் பிரச்சினைகளைப் பற்றி அறிந்து, மருத்துவருடன் பொருத்தமான சிகிச்சையைப் பேசுங்கள்.",
    hip: "இடுப்பு மூட்டு மாற்று சிகிச்சை", knee: "முழங்கால் மூட்டு மாற்று சிகிச்சை", trauma: "விபத்து மற்றும் எலும்பு முறிவு சிகிச்சை", joint: "மூட்டு வலி மதிப்பீடு",
    hipText: "இடுப்பு மூட்டு பிரச்சினைகள் மற்றும் மாற்று சிகிச்சை விருப்பங்கள் குறித்த தகவல் மற்றும் ஆலோசனை.", kneeText: "முழங்கால் வலி, மூட்டுவலி மற்றும் முழங்கால் மாற்று சிகிச்சை விருப்பங்களுக்கான மதிப்பீடு.", traumaText: "எலும்புக் காயங்கள் மற்றும் முறிவுகளுக்கான மதிப்பீடு மற்றும் சிகிச்சைத் திட்டம்.", jointText: "மூட்டு வலி, இறுக்கம் மற்றும் அசைவுச் சிரமங்களுக்கான மருத்துவ மதிப்பீடு.",
    learn: "எலும்பியல் ஆரோக்கியத்தை அறிந்துகொள்ளுங்கள்", learnText: "மருத்துவரைச் சந்திக்கும் முன் கேள்விகளைத் தயாரிக்க நோயாளிகளுக்கான காணொளிகளும் கட்டுரைகளும் உதவும்.",
    bookVisit: "ஆலோசனையைத் திட்டமிடுங்கள்", bookVisitText: "கிடைக்கும் நேரம், முகவரி மற்றும் சந்திப்பு விவரங்களை உறுதிப்படுத்த கிளினிக்கைத் தொடர்புகொள்ளுங்கள்.",
    call: "கிளினிக்கை அழைக்க", contactUs: "கிளினிக்கைத் தொடர்புகொள்ள", disclaimer: "இந்த இணையதளத் தகவல்கள் கல்வி நோக்கத்திற்கானவை; நேரடி மருத்துவப் பரிசோதனைக்கு மாற்றாகாது.",
    footerText: "எலும்பு, மூட்டு, இடுப்பு மற்றும் முழங்கால் ஆரோக்கியத்திற்கான எலும்பியல் ஆலோசனை மற்றும் நோயாளர் கல்வி.",
    quickLinks: "விரைவு இணைப்புகள்", location: "கிளினிக் முகவரி", directions: "வழியைப் பார்க்க", copyright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    name: "டாக்டர் எம். கலைவாணன்", role: "எலும்பியல் அறுவை சிகிச்சை நிபுணர்", tamilLabel: "தமிழ்", englishLabel: "English"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem("doctor-site-language") === "ta" ? "ta" : "en"; }
    catch { return "en"; }
  });
  const value = useMemo(() => ({
    language,
    setLanguage: (next) => {
      setLanguage(next);
      try { localStorage.setItem("doctor-site-language", next); } catch { /* storage may be unavailable */ }
      document.documentElement.lang = next === "ta" ? "ta" : "en";
    },
    t: (key) => translations[language][key] || translations.en[key] || key
  }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
