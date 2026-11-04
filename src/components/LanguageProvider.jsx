import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({ language: 'en', setLanguage: () => {} });
export const useLanguage = () => useContext(LanguageContext);

// Shared UI translations. Keep the original English content as the source of truth.
const ta = {
  'Home':'முகப்பு','About':'எங்களைப் பற்றி','Specialities':'சிறப்புப் பிரிவுகள்','Doctors':'மருத்துவர்கள்','Services':'சேவைகள்','Careers':'வேலைவாய்ப்புகள்','Contact':'தொடர்பு','Contact Us':'எங்களைத் தொடர்புகொள்ள',
  '24/7 Emergency Care':'24/7 அவசர சிகிச்சை','24/7 Emergency':'24/7 அவசர சேவை','Quality Healthcare for Every Patient':'ஒவ்வொரு நோயாளிக்கும் தரமான மருத்துவம்','Emergency:':'அவசரம்:','Emergency':'அவசர சிகிச்சை','Multispecialty Healthcare':'பல்துறை மருத்துவ சேவை','Book Appointment':'முன்பதிவு செய்யுங்கள்','Find a Doctor':'மருத்துவரைக் கண்டறியுங்கள்','Departments':'மருத்துவத் துறைகள்','Patient Services':'நோயாளர் சேவைகள்','Everything you need, in one place.':'உங்களுக்குத் தேவையான அனைத்தும் ஒரே இடத்தில்.','Quickly access appointments, doctors, departments and essential hospital services from one convenient place.':'முன்பதிவு, மருத்துவர்கள், துறைகள் மற்றும் முக்கிய மருத்துவமனைச் சேவைகளை ஒரே இடத்தில் எளிதாக அணுகுங்கள்.','Explore →':'மேலும் அறிக →','Care Guide':'சிகிச்சை வழிகாட்டி','Not sure which department you need?':'எந்தத் துறை தேவை என்று தெரியவில்லையா?','Choose the area that best matches your healthcare need and explore the relevant hospital department.':'உங்கள் உடல்நலத் தேவைக்கு ஏற்ற பிரிவைத் தேர்ந்தெடுத்து தொடர்புடைய மருத்துவத் துறையை அறியுங்கள்.','Heart & Circulation':'இதயம் மற்றும் இரத்த ஓட்டம்','For heart and cardiovascular concerns.':'இதயம் மற்றும் இரத்த நாளங்கள் தொடர்பான பிரச்சினைகளுக்கு.','Brain & Nerves':'மூளை மற்றும் நரம்புகள்','For neurological and nervous system concerns.':'மூளை மற்றும் நரம்பு மண்டலப் பிரச்சினைகளுக்கு.','Bones & Joints':'எலும்புகள் மற்றும் மூட்டுகள்','For bones, joints and movement-related concerns.':'எலும்புகள், மூட்டுகள் மற்றும் இயக்கம் தொடர்பான பிரச்சினைகளுக்கு.','Child Healthcare':'குழந்தைகள் நலன்','For healthcare needs involving children.':'குழந்தைகளின் உடல்நலத் தேவைகளுக்கு.','General Healthcare':'பொது மருத்துவம்','For common health concerns and general consultation.':'பொதுவான உடல்நலப் பிரச்சினைகள் மற்றும் ஆலோசனைக்கு.','Other Healthcare Needs':'பிற மருத்துவத் தேவைகள்','Explore all available hospital departments.':'மருத்துவமனையின் அனைத்து துறைகளையும் பாருங்கள்.','Suggested Department':'பரிந்துரைக்கப்படும் துறை','View Department':'துறையைப் பார்க்க','Important:':'முக்கியம்:','This guide is provided only to help you navigate hospital departments. It does not provide medical diagnosis or treatment advice.':'இந்த வழிகாட்டி மருத்துவமனைத் துறைகளைத் தேர்வு செய்ய உதவுவதற்காக மட்டுமே. இது நோயறிதல் அல்லது சிகிச்சை ஆலோசனை வழங்காது.','Watch & Learn':'பார்த்து அறிந்துகொள்ளுங்கள்','Get to know your hospital.':'உங்கள் மருத்துவமனையை அறிந்துகொள்ளுங்கள்.','Hospital Facilities':'மருத்துவமனை வசதிகள்','Designed to support your healthcare journey.':'உங்கள் மருத்துவப் பயணத்திற்கு உதவும் வகையில் அமைக்கப்பட்டது.','View All Services':'அனைத்து சேவைகளையும் பார்க்க','24/7 Emergency Care':'24/7 அவசர சிகிச்சை','Inpatient Care':'உள்நோயாளர் சிகிச்சை','Laboratory Services':'ஆய்வக சேவைகள்','Diagnostic Imaging':'நோயறிதல் படமெடுப்பு','Extended Care Access':'விரிவான சிகிச்சை அணுகல்','Patient Safety':'நோயாளர் பாதுகாப்பு','About Us':'எங்களைப் பற்றி','Quick Links':'விரைவு இணைப்புகள்','Patient Services':'நோயாளர் சேவைகள்','Health Services':'சுகாதார சேவைகள்','Please use the contact page for general enquiries.':'பொதுவான விசாரணைகளுக்கு தொடர்புப் பக்கத்தைப் பயன்படுத்தவும்.','Visit HospitalCare':'HospitalCare-ஐ அணுகுங்கள்','Get Directions':'வழியைப் பெறுங்கள்','Find us in Madurai':'மதுரையில் எங்களைக் கண்டறியுங்கள்','Open in Google Maps ↗':'Google Maps-இல் திறக்க ↗','Search by doctor name or speciality...':'மருத்துவர் பெயர் அல்லது சிறப்புப் பிரிவைத் தேடுங்கள்...','Search by symptoms or health concern...':'அறிகுறிகள் அல்லது உடல்நலப் பிரச்சினையைத் தேடுங்கள்...','English':'ஆங்கிலம்','Tamil':'தமிழ்','தமிழ்':'தமிழ்'
};

function translateText(value, language) {
  if (language !== 'ta') return value;
  const trimmed = value.trim();
  if (!trimmed) return value;
  const translated = ta[trimmed];
  return translated ? value.replace(trimmed, translated) : value;
}

function applyTranslations(language) {
  if (!document.body) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node.parentElement?.closest('[data-language-control]')) {
      if (!node.__englishText) node.__englishText = node.nodeValue;
      node.nodeValue = translateText(node.__englishText, language);
    }
  });
  document.querySelectorAll('input[placeholder],textarea[placeholder],button[aria-label],a[aria-label]').forEach((el) => {
    if (!el.dataset.englishPlaceholder && el.hasAttribute('placeholder')) el.dataset.englishPlaceholder = el.getAttribute('placeholder');
    if (!el.dataset.englishAria && el.hasAttribute('aria-label')) el.dataset.englishAria = el.getAttribute('aria-label');
    if (el.dataset.englishPlaceholder) el.setAttribute('placeholder', translateText(el.dataset.englishPlaceholder, language));
    if (el.dataset.englishAria) el.setAttribute('aria-label', translateText(el.dataset.englishAria, language));
  });
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => localStorage.getItem('hospitalcare-language') || 'en');
  const setLanguage = (next) => { localStorage.setItem('hospitalcare-language', next); setLanguageState(next); };
  useEffect(() => {
    applyTranslations(language);
    const observer = new MutationObserver(() => applyTranslations(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
