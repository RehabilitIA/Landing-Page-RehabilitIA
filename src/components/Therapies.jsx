import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import Modal from "./Modal";
import "../styles/Therapies.css";

export default function Therapies() {
  const { language } = useLanguage();
  const t = translations[language];
  const [vnestModalOpen, setVnestModalOpen] = useState(false);
  const [srModalOpen, setSrModalOpen] = useState(false);

  return (
    <section id="therapies" className="therapies-wrapper w-full py-12 lg:py-20 relative overflow-hidden">
      {/* Decorative background orb */}
      <div className="therapies-orb"></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 fade-in-left">
          <h2 className="therapies-title gradient-text">{t.therapiesTitle}</h2>
          <p className="therapies-subtitle max-w-3xl">{t.therapiesSubtitle}</p>
        </div>

        {/* Therapies Grid */}
        <div className="grid max-w-5xl mx-auto gap-10 sm:grid-cols-2">

          {/* VNeST */}
          <div className="therapy-card soft-card hover-lift scale-in">
            <div className="flex items-center gap-4 mb-4">
              <div className="therapy-icon" style={{ background: 'linear-gradient(135deg, #acd3e8, #bdd6ec)' }}>
                <span className="material-symbols-outlined" style={{ color: '#2d3748' }}>psychology</span>
              </div>
              <div>
                <h3 className="therapy-card-title">{t.vnestTitle}</h3>
                <p className="therapy-card-subtitle">{t.vnestSubtitle}</p>
              </div>
            </div>
            <p className="therapy-card-text mb-4">{t.vnestDescription}</p>
            <button
              onClick={() => setVnestModalOpen(true)}
              className="therapy-learn-more"
            >
              {t.vnestLearnMore}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          {/* SR */}
          <div className="therapy-card soft-card hover-lift scale-in" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="therapy-icon" style={{ background: 'linear-gradient(135deg, #e4888b, #e4b4ce)' }}>
                <span className="material-symbols-outlined" style={{ color: '#2d3748' }}>timer</span>
              </div>
              <div>
                <h3 className="therapy-card-title">{t.srTitle}</h3>
                <p className="therapy-card-subtitle">{t.srSubtitle}</p>
              </div>
            </div>
            <p className="therapy-card-text mb-4">{t.srDescription}</p>
            <button
              onClick={() => setSrModalOpen(true)}
              className="therapy-learn-more"
            >
              {t.srLearnMore}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>

      {/* VNeST Modal */}
      <Modal
        isOpen={vnestModalOpen}
        onClose={() => setVnestModalOpen(false)}
        title={t.vnestModalTitle}
      >
        <div dangerouslySetInnerHTML={{ __html: t.vnestModalContent }} />
      </Modal>

      {/* SR Modal */}
      <Modal
        isOpen={srModalOpen}
        onClose={() => setSrModalOpen(false)}
        title={t.srModalTitle}
      >
        <div dangerouslySetInnerHTML={{ __html: t.srModalContent }} />
      </Modal>
    </section>
  );
}
