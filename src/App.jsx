import React, { useState } from "react";
import { MotionConfig } from "framer-motion";

import Header from "./components/Header";
import LoadingScreen, { shouldShowIntro } from "./components/LoadingScreen";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { installInputModality } from "./lib/inputModality";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import "./styles/tokens.css";
import "./styles/App.css";

installInputModality();

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(shouldShowIntro);

  if (isLoading) return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;

  return (
    <div className="app-container">
      <Header />
      <SocialIcons variant="rail" />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App = () => (
  <LanguageProvider>
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <AppContent />
      </MotionConfig>
    </ThemeProvider>
  </LanguageProvider>
);

export default App;
