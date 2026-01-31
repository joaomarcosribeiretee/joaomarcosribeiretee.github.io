import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Página Inicial");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveItem("Página Inicial");
        break;
      case "/about":
        setActiveItem("Sobre Mim");
        break;
      case "/skills":
        setActiveItem("Habilidades");
        break;
      case "/projects":
        setActiveItem("Projetos");
        break;
      case "/experience":
        setActiveItem("Experiência");
        break;
      case "/contact":
        setActiveItem("Contato");
        break;

      default:
        setActiveItem("Página Inicial");
    }
  }, [location.pathname]);

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
          <li className={activeItem === "Página Inicial" ? "active" : ""}>
            <Link to="/" onClick={() => handleMenuItemClick("Página Inicial", "/")}>Página Inicial</Link>
          </li>

          {/* Sobre Mim */}
          <li className={activeItem === "Sobre Mim" ? "active" : ""}>
            <Link to="/about" onClick={() => handleMenuItemClick("Sobre Mim", "/about")}>Sobre Mim</Link>
          </li>

          {/* Skills */}
          <li className={activeItem === "Habilidades" ? "active" : ""}>
            <Link to="/skills" onClick={() => handleMenuItemClick("Habilidades", "/skills")}>Habilidades</Link>
          </li>

          {/* Projetos */}
          <li className={activeItem === "Projetos" ? "active" : ""}>
            <Link to="/projects" onClick={() => handleMenuItemClick("Projetos", "/projects")}>Projetos</Link>
          </li>

          {/* Experiencia */}
          <li className={activeItem === "Experiência" ? "active" : ""}>
            <Link to="/experience" onClick={() => handleMenuItemClick("Experiência", "/experience")}>Experiência</Link>
          </li>

          {/* Contato */}
          <li className={activeItem === "Contato" ? "active" : ""}>
            <Link to="/contact" onClick={() => handleMenuItemClick("Contato", "/contact")}>Contato</Link>
          </li>


        </ul>
      </nav>
    </header>
  );
};

export default Header;
