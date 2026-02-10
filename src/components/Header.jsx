import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language].header;
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(t.home);

  // Atualizar item ativo baseado no scroll
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "contact"];
    const sectionToLabel = {
      home: t.home,
      about: t.about,
      skills: t.skills,
      projects: t.projects,
      experience: t.experience,
      contact: t.contact
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of the screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(sectionToLabel[entry.target.id]);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [t]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item, id) => {
    setActiveItem(item);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <button className="menu-button" onClick={toggleMenu}>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>
        <ul>
          <li>
            <button
              className={activeItem === t.home ? "active" : ""}
              onClick={() => handleMenuItemClick(t.home, "home")}
            >
              {t.home}
            </button>
          </li>
          <li>
            <button
              className={activeItem === t.about ? "active" : ""}
              onClick={() => handleMenuItemClick(t.about, "about")}
            >
              {t.about}
            </button>
          </li>
          <li>
            <button
              className={activeItem === t.skills ? "active" : ""}
              onClick={() => handleMenuItemClick(t.skills, "skills")}
            >
              {t.skills}
            </button>
          </li>
          <li>
            <button
              className={activeItem === t.projects ? "active" : ""}
              onClick={() => handleMenuItemClick(t.projects, "projects")}
            >
              {t.projects}
            </button>
          </li>
          <li>
            <button
              className={activeItem === t.experience ? "active" : ""}
              onClick={() => handleMenuItemClick(t.experience, "experience")}
            >
              {t.experience}
            </button>
          </li>
          <li>
            <button
              className={activeItem === t.contact ? "active" : ""}
              onClick={() => handleMenuItemClick(t.contact, "contact")}
            >
              {t.contact}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
