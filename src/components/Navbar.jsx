import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";
import brainLogo from "../assets/brain_logo.png";
import uandesLogo from "../assets/LogoUandes.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar glass fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="navbar-logo flex items-center gap-6">
          <img src={brainLogo} alt="RehabilitIA Logo" className="logo-image" />
          <span className="navbar-title gradient-text font-bold text-xl">RehabilitIA</span>
          <img src={uandesLogo} alt="Universidad de los Andes" className="h-10 w-auto object-contain hidden sm:block" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links items-center gap-8">
          <a href="#hero" className="navbar-link">
            {language === 'es' ? 'Inicio' : 'Home'}
          </a>
          <a href="#what-is-aphasia" className="navbar-link">
            {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
          </a>
          <a href="#technology" className="navbar-link">
            {language === 'es' ? 'Tecnología' : 'Technology'}
          </a>
          <a href="#results" className="navbar-link">
            {language === 'es' ? 'Resultados' : 'Results'}
          </a>
          <a href="#team" className="navbar-link">
            {language === 'es' ? 'Equipo' : 'Team'}
          </a>

          {/* Language Dropdown */}
          <LanguageDropdown variant="desktop" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#hero" className="mobile-menu-link" onClick={closeMenu}>
            {language === 'es' ? 'Inicio' : 'Home'}
          </a>
          <a href="#what-is-aphasia" className="mobile-menu-link" onClick={closeMenu}>
            {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
          </a>
          <a href="#technology" className="mobile-menu-link" onClick={closeMenu}>
            {language === 'es' ? 'Tecnología' : 'Technology'}
          </a>
          <a href="#results" className="mobile-menu-link" onClick={closeMenu}>
            {language === 'es' ? 'Resultados' : 'Results'}
          </a>
          <a href="#team" className="mobile-menu-link" onClick={closeMenu}>
            {language === 'es' ? 'Equipo' : 'Team'}
          </a>

          {/* Mobile Language Dropdown */}
          <div className="mobile-menu-language">
            <LanguageDropdown variant="mobile" />
          </div>
        </div>
      </div>
    </nav>
  );
}
