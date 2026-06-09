import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import Modal from "./Modal";
import "../styles/Technology.css";

export default function Technology() {
  const { language } = useLanguage();
  const t = translations[language];
  const [techModalOpen, setTechModalOpen] = useState(false);

  return (
    <section
      id="technology"
      className="technology-wrapper w-full py-12 lg:py-20 relative overflow-hidden"
    >
      {/* Decorative background orb */}
      <div className="tech-orb"></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 fade-in-left">
          <h2 className="technology-title gradient-text">{t.techTitle}</h2>
          <p className="technology-subtitle max-w-3xl">{t.techSubtitle}</p>
        </div>

        {/* Technology Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold gradient-text">{t.techSectionTitle}</h3>
        </div>

        {/* Technology Grid - 3 columns in one block */}
        <div className="max-w-6xl mx-auto">
          <div className="tech-container soft-card scale-in">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">

              {/* LLM */}
              <div className="tech-item">
                <div className="tech-icon" style={{ background: 'linear-gradient(135deg, #acd3e8, #bdd6ec)' }}>
                  <span className="material-symbols-outlined text-4xl" style={{ color: '#2d3748' }}>smart_toy</span>
                </div>
                <h3 className="tech-card-title">{t.llmTitle}</h3>
                <p className="tech-card-text">{t.llmDescription}</p>
              </div>

              {/* Agents */}
              <div className="tech-item">
                <div className="tech-icon" style={{ background: 'linear-gradient(135deg, #d4e5a3, #e4b4ce)' }}>
                  <span className="material-symbols-outlined text-4xl" style={{ color: '#2d3748' }}>hub</span>
                </div>
                <h3 className="tech-card-title">{t.agentsTitle}</h3>
                <p className="tech-card-text">{t.agentsDescription}</p>
              </div>

              {/* Automatic Generation */}
              <div className="tech-item">
                <div className="tech-icon" style={{ background: 'linear-gradient(135deg, #e4888b, #e4b4ce)' }}>
                  <span className="material-symbols-outlined text-4xl" style={{ color: '#2d3748' }}>auto_awesome</span>
                </div>
                <h3 className="tech-card-title">{t.autoGenTitle}</h3>
                <p className="tech-card-text">{t.autoGenDescription}</p>
              </div>

            </div>

            {/* Single Learn More Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setTechModalOpen(true)}
                className="tech-learn-more-main"
              >
                {t.techLearnMore}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Modal */}
      <Modal
        isOpen={techModalOpen}
        onClose={() => setTechModalOpen(false)}
        title={t.techModalTitle}
      >
        <div dangerouslySetInnerHTML={{ __html: t.techModalContent }} />
      </Modal>
    </section>
  );
}
