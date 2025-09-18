import React, { useContext, useState, useEffect } from "react";

const LanguageContext = React.createContext({
  language: "en",
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  // Load saved language from localStorage, default to English
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // Save language to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);

    // ✅ Update document direction (LTR for English, RTL for Urdu)
    document.documentElement.setAttribute("dir", language === "ur" ? "rtl" : "ltr");
  }, [language]);

  const toggleLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
