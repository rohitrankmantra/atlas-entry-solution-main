"use client";

import { useEffect, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export default function FloatingTranslate() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ];

  // Load Google Translate script once
  useEffect(() => {
    if (window.google && window.google.translate) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,it",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Restore saved language (tick + translate)
  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language");
    if (!savedLang) return;

    setCurrentLang(savedLang);

    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = savedLang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Change language without reloading dropdown text
  const changeLanguage = (langCode) => {
    setCurrentLang(langCode); // tick update
    localStorage.setItem("preferred-language", langCode);

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Hidden Google Translate */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Floating Button with Dropdown */}
      <div className="floating-translator">
        <button
          className="floating-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Select language"
        >
          <Globe size={24} />
          <ChevronDown
            size={16}
            className={`chevron ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-header">
              <Globe size={18} />
              <span>Select Language</span>
            </div>

            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${
                  currentLang === lang.code ? "active" : ""
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                <span className="flag">{lang.flag}</span>
                <span className="lang-name">{lang.name}</span>
                {currentLang === lang.code && <span className="check">✓</span>}
              </button>
            ))}
          </div>
        )}

        {isOpen && (
          <div
            className="dropdown-overlay"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}
