import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/Team.css";

// NOTE: las fotos de los investigadores se sirven desde las URLs raw de GitHub.
// Para actualizar una foto, reemplazar el archivo .jpg en src/assets/ y hacer commit
// a la rama main del repo Tesis-Aphasia/Landing-Page-RehabilitIA.
export default function Team() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="team"
      className="team-wrapper w-full py-10 lg:py-20 relative overflow-hidden"
    >
      <div className="team-bg-orb"></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 scroll-reveal">
          <h2 className="team-title gradient-text">{t.teamTitle}</h2>
          <p className="team-subtitle max-w-2xl">
            {t.teamSubtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="team-grid grid max-w-5xl mx-auto gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* Rubén */}
          <a
            href="https://www.linkedin.com/in/ruben-francisco-manrique/"
            target="_blank"
            rel="noopener noreferrer"
            className="team-card-link"
          >
            <div className="team-card soft-card">
              <div className="team-photo-wrapper">
                <img
                  loading="lazy"
                  decoding="async"
                  className="team-photo"
                  src="https://raw.githubusercontent.com/Tesis-Aphasia/Landing-Page-RehabilitIA/refs/heads/main/src/assets/ruben_photo.jpg"
                  alt="Rubén Manrique"
                />
              </div>
              <h3 className="team-name">{t.teamRubenName}</h3>
              <p className="team-role">{t.teamRubenRole}</p>
              <p className="team-affiliation">rf.manrique@uniandes.edu.co</p>
            </div>
          </a>

          {/* Andrea Herrera */}
          <a
            href="https://www.linkedin.com/in/andrea-herrera-564253/"
            target="_blank"
            rel="noopener noreferrer"
            className="team-card-link"
          >
            <div className="team-card soft-card">
              <div className="team-photo-wrapper">
                <img
                  loading="lazy"
                  decoding="async"
                  className="team-photo"
                  src="https://raw.githubusercontent.com/Tesis-Aphasia/Landing-Page-RehabilitIA/refs/heads/main/src/assets/andrea_h_photo.jpg"
                  alt="Andrea Herrera"
                />
              </div>
              <h3 className="team-name">{t.teamAndreaHName}</h3>
              <p className="team-role">{t.teamAndreaHRole}</p>
              <p className="team-affiliation">a-herrer@uniandes.edu.co</p>
            </div>
          </a>

          {/* Andrea Galindo */}
          <a
            href="https://www.linkedin.com/in/algalindoc/"
            target="_blank"
            rel="noopener noreferrer"
            className="team-card-link"
          >
            <div className="team-card soft-card">
              <div className="team-photo-wrapper">
                <img
                  loading="lazy"
                  decoding="async"
                  className="team-photo"
                  src="https://raw.githubusercontent.com/Tesis-Aphasia/Landing-Page-RehabilitIA/refs/heads/main/src/assets/andrea_g_photo.jpg"
                  alt="Andrea Galindo"
                />
              </div>
              <h3 className="team-name">{t.teamAndreaGName}</h3>
              <p className="team-role">{t.teamAndreaGRole}</p>
              <p className="team-affiliation">al.galindo@uniandes.edu.co</p>
            </div>
          </a>

          {/* Santiago */}
          <a
            href="https://www.linkedin.com/in/santiagonavarrete19"
            target="_blank"
            rel="noopener noreferrer"
            className="team-card-link"
          >
            <div className="team-card soft-card">
              <div className="team-photo-wrapper">
                <img
                  loading="lazy"
                  decoding="async"
                  className="team-photo"
                  src="https://raw.githubusercontent.com/Tesis-Aphasia/Landing-Page-RehabilitIA/refs/heads/main/src/assets/santiago_photo.jpg"
                  alt="Santiago Navarrete"
                />
              </div>
              <h3 className="team-name">{t.teamSantiagoName}</h3>
              <p className="team-role">{t.teamSantiagoRole}</p>
              <p className="team-affiliation">s.navarretev@uniandes.edu.co</p>
            </div>
          </a>


        </div>
      </div>
    </section>
  );
}
