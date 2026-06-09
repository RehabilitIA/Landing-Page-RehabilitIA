import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/WebPlatform.css";
import webMockup from "../assets/web_app.png";

export default function WebPlatform() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="web-platform"
      className="webplatform-wrapper w-full py-10 lg:py-20"
    >
      <div className="container mx-auto grid items-center gap-12 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 lg:grid-cols-2">

        {/* IMAGE */}
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-2xl webplatform-image shadow-soft-lg hover-lift"
          style={{
            backgroundImage: `url(${webMockup})`,
          }}
        />

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center space-y-6 scroll-reveal">
          <h2 className="webplatform-title gradient-text">{t.webTitle}</h2>

          <p className="webplatform-text max-w-xl">
            {t.webText}
          </p>

          <a
            href="https://afasia.virtual.uniandes.edu.co/web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 w-fit"
            style={{
              background: 'linear-gradient(135deg, #acd3e8, #e4888b)',
              color: '#2d3748',
              boxShadow: '0 4px 20px rgba(172, 211, 232, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(228, 136, 139, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(172, 211, 232, 0.3)';
            }}
          >
            {t.webButton}
          </a>
        </div>

      </div>
    </section>
  );
}
