import React, { useState } from "react";
import translations from "../translations";
import { useLanguage } from "../LanguageContext";

export default function CookieConsent() {
    const {language} = useLanguage();
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 bg-white shadow-lg rounded-lg p-10 w-96 border border-gray-200 z-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
      {translations[language].cokkie}
      </h2>
      <p className="text-sm text-gray-700 mb-4 py-5 leading-relaxed">
      {translations[language].cokkie1}{" "}
        <a href="/mentions-legales" className="underline hover:text-gray-900">
          {translations[language].cokkie2}
        </a>{" "}
        et notre{" "}
        <a href="/politique-confidentialite" className="underline hover:text-gray-900">
          {translations[language].cokkie3}
        </a>{" "}
        {translations[language].cokkie4}
      </p>
      <button
        onClick={() => setShow(false)}
        className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        {translations[language].cokkie5}
      </button>
      <div className="mt-3">
        <button
         onClick={() => setShow(false)}
          className="text-sm underline text-gray-700 hover:text-gray-900"
        >
          {translations[language].cokkie6}
        </button>
      </div>
    </div>
  );
}
