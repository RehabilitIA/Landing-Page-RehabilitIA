import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/Timeline.css";

const STATUS_META = {
  done: { icon: "check_circle", labelKey: "timelineStatusDone" },
  progress: { icon: "pending", labelKey: "timelineStatusProgress" },
  next: { icon: "radio_button_unchecked", labelKey: "timelineStatusNext" },
};

export default function Timeline() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="timeline"
      className="timeline-wrapper w-full py-10 lg:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="timeline-title gradient-text">{t.timelineTitle}</h2>
          <p className="timeline-subtitle max-w-2xl">
            {t.timelineSubtitle}
          </p>
        </div>

        {/* Phased track */}
        <div className="timeline-track">
          {t.timelinePhases.map((phase, i) => {
            const meta = STATUS_META[phase.status] || STATUS_META.next;
            return (
              <div className={`timeline-phase status-${phase.status}`} key={i}>
                {/* Connector line + node */}
                <div className="timeline-node-row">
                  <span className="timeline-line" aria-hidden="true"></span>
                  <span className="timeline-node">
                    <span className="material-symbols-outlined">{meta.icon}</span>
                  </span>
                </div>

                {/* Card */}
                <div className="timeline-card">
                  <span className="timeline-badge">
                    <span className="timeline-badge-dot" aria-hidden="true"></span>
                    {t[meta.labelKey]}
                  </span>
                  <span className="timeline-year">{phase.year}</span>
                  <h3 className="timeline-phase-title">{phase.title}</h3>
                  <ul className="timeline-list">
                    {phase.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
