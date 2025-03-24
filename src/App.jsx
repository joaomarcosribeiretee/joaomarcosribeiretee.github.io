import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import LoadingScreen from "./components/LoadingScreen";
import "./styles/App.css";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import MobileNotice from "./components/MobileNotice";

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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se a tela é menor que 768px
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Chamada inicial
    window.addEventListener("resize", handleResize); // Atualiza ao redimensionar

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [isLoading]);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : isMobile ? (
        <MobileNotice />
      ) : (
        <div className={`app-container ${fadeIn ? "fade-in" : ""}`}>
          <Header />
          <AnimatedRoutes />
        </div>
      )}
    </Router>
  );
};

export default App;
