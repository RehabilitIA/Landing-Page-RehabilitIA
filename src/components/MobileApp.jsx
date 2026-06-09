import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/MobileApp.css";
import appMockup from "../assets/mobile_app.png";

export default function MobileApp() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="mobile-app"
      className="mobileapp-wrapper w-full py-10 lg:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto grid items-center gap-12 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 lg:grid-cols-2">

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center space-y-6 scroll-reveal">
          <h2 className="mobileapp-title gradient-text">{t.mobileTitle}</h2>

          <p className="mobileapp-text max-w-xl">
            {t.mobileText}
          </p>

          <a
            href="https://afasia.virtual.uniandes.edu.co/app/"
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
            {t.mobileButton}
          </a>
        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <img
            className="mobileapp-image max-w-[260px] rounded-2xl shadow-soft-lg hover-lift"
            src={appMockup}
            alt="Mockup de la aplicación RehabilitIA"
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
}
