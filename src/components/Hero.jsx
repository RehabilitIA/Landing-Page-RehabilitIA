import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/Hero.css";
import heroImage from "../assets/hero.png";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="hero" className="hero-section">
      {/* Decorative organic blobs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">
        {/* Centered content */}
        <div className="text-center max-w-4xl mx-auto mb-16 fade-in-left">
          <h1 className="hero-title gradient-text mb-6">
            {t.heroTitle}
          </h1>
          <p className="hero-subtitle max-w-3xl mx-auto">
            {t.heroSubtitle}
          </p>

          <div className="hero-cta">
            <a href="#what-is-aphasia" className="btn-soft btn-soft-primary">
              {t.heroCtaPrimary}
            </a>
          </div>
        </div>

        {/* Hero image with organic background */}
        <div className="hero-image-wrapper max-w-4xl mx-auto scale-in">
          <div
            className="hero-image aspect-video bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
      </div>
    </section>
  );
}
