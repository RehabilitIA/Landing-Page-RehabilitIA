import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Therapies from "./components/Therapies";
import Technology from "./components/Technology";
import MobileApp from "./components/MobileApp";
import WebPlatform from "./components/WebPlatform";
import Results from "./components/Results";
import Timeline from "./components/Timeline";
import Team from "./components/Team";
import Footer from "./components/Footer";
import aphasiaImage from "./assets/img2.png";

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.scroll-reveal, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {/* --- AFASIA --- */}
      <Section
        id="what-is-aphasia"
        img={aphasiaImage}
        imgAlt="Ilustración del cerebro con áreas del lenguaje destacadas"
        background=""
      />

      {/* --- TERAPIAS --- */}
      <Therapies />

      {/* --- TECNOLOGÍA --- */}
      <Technology />

      {/* --- APP MÓVIL --- */}
      <MobileApp />

      {/* --- PLATAFORMA WEB TERAPEUTAS --- */}
      <WebPlatform />

      {/* --- RESULTADOS --- */}
      <Results />

      {/* --- LÍNEA DE TIEMPO --- */}
      <Timeline />

      {/* --- EQUIPO --- */}
      <Team />

      {/* --- FOOTER --- */}
      <Footer />
    </>
  );
}

export default App;
