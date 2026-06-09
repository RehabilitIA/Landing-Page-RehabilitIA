import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import brainLogo from "../assets/brain_logo.png";
import "../styles/Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: "#hero", label: t.navHome },
    { href: "#what-is-aphasia", label: t.navAbout },
    { href: "#technology", label: t.navTech },
    { href: "#results", label: t.navResults },
    { href: "#team", label: t.navTeam },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-row">
              <img src={brainLogo} alt="RehabilitIA" className="footer-logo" />
              <span className="footer-brand-name gradient-text">RehabilitIA</span>
            </div>
            <p className="footer-tagline">{t.footerTagline}</p>
          </div>

          {/* Navigation */}
          <nav className="footer-col">
            <h3 className="footer-col-title">{t.footerNavTitle}</h3>
            <ul className="footer-list">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t.footerResourcesTitle}</h3>
            <ul className="footer-list">
              <li>
                <a href="https://afasia.virtual.uniandes.edu.co/app/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  {t.footerAppLink}
                </a>
              </li>
              <li>
                <a href="https://afasia.virtual.uniandes.edu.co/web" target="_blank" rel="noopener noreferrer" className="footer-link">
                  {t.footerWebLink}
                </a>
              </li>
              <li>
                <a href="https://sistemas.uniandes.edu.co/es/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  {t.footerDepartment}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="footer-legal">
          <p>{t.footerUniversity}</p>
          <p>{t.footerRecognition}</p>
          <p>{t.footerLegalEntity}</p>
          <p>{t.footerAddress}</p>
          <p className="footer-copy">© 2025 RehabilitIA — {t.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
