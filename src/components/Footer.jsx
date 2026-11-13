import React from "react";
import { FiArrowUp } from "react-icons/fi";
import SocialIcons from "./SocialIcons";
import { scrollToSection } from "./Header";
import { useT } from "../contexts/LanguageContext";
import "../styles/Footer.css";

const Footer = () => {
  const t = useT("footer");

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p className="footer-copy">
          © {new Date().getFullYear()} João Marcos Ribeirete Garbelini · {t.built}
        </p>
        <div className="footer-actions">
          <SocialIcons variant="inline" />
          <button className="btn btn-ghost btn-sm" onClick={() => scrollToSection("home")}>
            <FiArrowUp aria-hidden="true" /> {t.top}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
