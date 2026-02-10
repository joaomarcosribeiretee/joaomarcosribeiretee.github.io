import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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

// Rotas com animação
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

// App principal separado
const AppContent = () => {
  const location = useLocation();
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isScrollablePage = ["/experience", "/about", "/projects", "/skills"].includes(location.pathname);

  // Transição bloqueia scroll temporariamente
  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 600); // Duração da animação
    return () => clearTimeout(timeout);
  }, [location]);

  // Controla overflow da página (scroll)
  useEffect(() => {
    if (isTransitioning) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = isScrollablePage ? "auto" : "hidden";
    }
  }, [isTransitioning, isScrollablePage]);

  // Animação fade-in
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [isLoading]);

  if (isLoading) return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;

  return (
    <div className={`app-container ${fadeIn ? "fade-in" : ""} ${isTransitioning ? "transitioning" : ""}`}>
      <LanguageToggle />
      <Header />
      <div className="desktop-only">
        <SocialIcons />
      </div>
      <AnimatedRoutes />
    </div>
  );
};

// Componente com roteador (usando HashRouter para GitHub Pages)
const App = () => (
  <LanguageProvider>
    <Router>
      <AppContent />
    </Router>
  </LanguageProvider>
);

export default App;
