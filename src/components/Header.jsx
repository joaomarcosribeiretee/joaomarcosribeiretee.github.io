import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].header;
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(t.home);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveItem(t.home);
        break;
      case "/about":
        setActiveItem(t.about);
        break;
      case "/skills":
        setActiveItem(t.skills);
        break;
      case "/projects":
        setActiveItem(t.projects);
        break;
      case "/experience":
        setActiveItem(t.experience);
        break;
      case "/contact":
        setActiveItem(t.contact);
        break;

      default:
        setActiveItem(t.home);
    }
  }, [location.pathname, t]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item, path) => {
    setActiveItem(item);
    setMenuOpen(false);
    navigate(path);
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
          {/* Página Inicial */}
          <li className={activeItem === t.home ? "active" : ""}>
            <Link to="/" onClick={() => handleMenuItemClick(t.home, "/")}>{t.home}</Link>
          </li>

          {/* Sobre Mim */}
          <li className={activeItem === t.about ? "active" : ""}>
            <Link to="/about" onClick={() => handleMenuItemClick(t.about, "/about")}>{t.about}</Link>
          </li>

          {/* Skills */}
          <li className={activeItem === t.skills ? "active" : ""}>
            <Link to="/skills" onClick={() => handleMenuItemClick(t.skills, "/skills")}>{t.skills}</Link>
          </li>

          {/* Projetos */}
          <li className={activeItem === t.projects ? "active" : ""}>
            <Link to="/projects" onClick={() => handleMenuItemClick(t.projects, "/projects")}>{t.projects}</Link>
          </li>

          {/* Experiencia */}
          <li className={activeItem === t.experience ? "active" : ""}>
            <Link to="/experience" onClick={() => handleMenuItemClick(t.experience, "/experience")}>{t.experience}</Link>
          </li>

          {/* Contato */}
          <li className={activeItem === t.contact ? "active" : ""}>
            <Link to="/contact" onClick={() => handleMenuItemClick(t.contact, "/contact")}>{t.contact}</Link>
          </li>


        </ul>
      </nav>
    </header>
  );
};

export default Header;
