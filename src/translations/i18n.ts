import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es/es.json";
import en from "./en/en.json";
import pt from "./pt/pt.json";
import LanguageDetector from "i18next-browser-languagedetector";

// const languageDetector = new LanguageDetector(options);
// console.log(languageDetector, "languageDetector");

i18n
  // pass the i18n instance to react-i18next.
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: es,
      },
      en: {
        translation: en,
      },
      pt: {
        translation: pt,
      },
    },
  });

export default i18n;
