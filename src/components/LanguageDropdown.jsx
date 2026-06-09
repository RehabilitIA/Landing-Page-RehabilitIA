import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const LANGUAGES = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
];

export default function LanguageDropdown({ variant = "desktop" }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`language-dropdown ${variant}`} ref={ref}>
      <button
        type="button"
        className="language-dropdown-btn"
        onClick={() => setIsOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <span className="material-symbols-outlined">translate</span>
        <span className="language-text">{current.short}</span>
        <span className={`language-chevron material-symbols-outlined ${isOpen ? "open" : ""}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <ul className="language-dropdown-menu" role="listbox">
          {LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === language}>
              <button
                type="button"
                className={`language-dropdown-item ${lang.code === language ? "active" : ""}`}
                onClick={() => handleSelect(lang.code)}
              >
                <span className="language-item-short">{lang.short}</span>
                <span className="language-item-label">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
