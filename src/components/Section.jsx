import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/Section.css";

export default function Section({ id, img, imgAlt, reverse, background }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id={id}
      className={`section-wrapper w-full py-12 lg:py-20 relative overflow-hidden ${background || ""}`}
    >
      {/* Organic blob background */}
      <div className={`section-blob ${reverse ? 'section-blob-left' : 'section-blob-right'}`}></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <div
          className={`grid items-center gap-16 lg:grid-cols-2 ${reverse ? "lg:grid-flow-dense" : ""
            }`}
        >
          {/* TEXT BLOCK */}
          <div className={`flex flex-col justify-center space-y-6 ${reverse ? "lg:col-start-2 fade-in-right" : "fade-in-left"}`}>
            <h2 className="section-title gradient-text">{t.aphasiaTitle}</h2>
            <p className="section-text max-w-xl">{t.aphasiaText}</p>

            {t.aphasiaStats && (
              <div className="section-stats">
                {t.aphasiaStats.map((stat, i) => (
                  <div className="section-stat" key={i}>
                    <span className="section-stat-value gradient-text">{stat.value}</span>
                    <span className="section-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* IMAGE */}
          <div className={`section-image-wrapper ${reverse ? "lg:col-start-1 lg:row-start-1 fade-in-left" : "fade-in-right"}`}>
            <img
              className="section-image w-full h-auto rounded-3xl shadow-soft-lg hover-lift"
              src={img}
              alt={imgAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
