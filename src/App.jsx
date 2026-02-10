import React, { useState, useEffect } from "react";
import {
  HashRouter as Router
} from "react-router-dom";

// Componentes
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import SocialIcons from "./components/SocialIcons";
import LanguageToggle from "./components/LanguageToggle";

// Contextos
import { LanguageProvider } from "./contexts/LanguageContext";

// Páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

// Estilos
import "./styles/App.css";

// Divider elegante para separação de seções
const SectionDivider = () => (
  <div style={{
    height: "2px",
    width: "60%",
    margin: "0 auto",
    background: "linear-gradient(90deg, transparent, rgba(0, 191, 255, 0.2), transparent)",
    boxShadow: "0 0 15px rgba(0, 191, 255, 0.1)"
  }} />
);

// App principal separado
const AppContent = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Animação fade-in
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [isLoading]);

  if (isLoading) return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;

  return (
    <div className={`app-container ${fadeIn ? "fade-in" : ""}`}>
      <LanguageToggle />
      <Header />
      <div className="desktop-only">
        <SocialIcons />
      </div>

      {/* Seções em sequência para Single Page Scroll */}
      <Home />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </div>
  );
};

// Componente com roteador (Mantive HashRouter para compatibilidade se necessário, mas as rotas foram removidas)
const App = () => (
  <LanguageProvider>
    <Router>
      <AppContent />
    </Router>
  </LanguageProvider>
);

export default App;
