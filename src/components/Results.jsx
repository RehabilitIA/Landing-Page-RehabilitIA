import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import Modal from "./Modal";
import "../styles/Results.css";

export default function Results() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="results"
      className="results-wrapper w-full py-10 lg:py-20 relative overflow-hidden"
    >
      <div className="results-bg-orb" aria-hidden="true"></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 scroll-reveal">
          <h2 className="results-title gradient-text">{t.resultsTitle}</h2>
          <p className="results-subtitle max-w-2xl">{t.resultsSubtitle}</p>
        </div>

        {/* Metric cards */}
        <div className="results-grid">
          {t.resultsMetrics.map((m, i) => (
            <button
              type="button"
              className="results-card soft-card"
              key={i}
              onClick={() => setSelected(m)}
              aria-label={m.label}
            >
              <span className="results-value gradient-text">{m.value}</span>
              <span className="results-label">{m.label}</span>
              <span className="results-hint">
                <span className="material-symbols-outlined">info</span>
                {t.resultsHint}
              </span>
            </button>
          ))}
        </div>

        <p className="results-note">{t.resultsNote}</p>
      </div>

      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected ? `${selected.value} · ${selected.label}` : ""}
      >
        {selected && <p>{selected.detail}</p>}
      </Modal>
    </section>
  );
}
