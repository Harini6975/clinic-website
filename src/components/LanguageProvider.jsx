import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ language: 'en', setLanguage: () => {} });
export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('hospitalcare-language') || 'en';
  });

  const setLanguage = (next) => {
    localStorage.setItem('hospitalcare-language', next);
    setLanguageState(next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}