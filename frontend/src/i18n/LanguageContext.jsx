import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "tr";
    return localStorage.getItem("knc_lang") || "tr";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("knc_lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = translations[lang] || translations.tr;

  const toggleLang = () => setLang((p) => (p === "tr" ? "en" : "tr"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
