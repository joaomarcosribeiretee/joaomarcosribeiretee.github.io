import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useT } from "../contexts/LanguageContext";
import "../styles/SocialIcons.css";

// One list for the rail, the Contact chips and the footer, so the order is the same everywhere.
export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joaomarcosribeirete/", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/joaomarcosribeiretee", Icon: FaGithub },
  { label: "Instagram", href: "https://www.instagram.com/joaomarcosribeirete/", Icon: FaInstagram },
];

// The rail fades out while the Contact section (which repeats the links) is on screen.
const useHiddenOverContact = (enabled) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const section = enabled && document.getElementById("contact");
    if (!section) return undefined;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting));
    observer.observe(section);
    return () => observer.disconnect();
  }, [enabled]);
  return hidden;
};

// variant "rail": fixed vertical rail on wide screens. "inline": a row anywhere.
const SocialIcons = ({ variant = "inline" }) => {
  const t = useT("header");
  const hidden = useHiddenOverContact(variant === "rail");

  return (
    <aside
      className={`social-icons social-icons--${variant} ${hidden ? "is-hidden" : ""}`}
      aria-label={t.social}
    >
      {SOCIALS.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
          <Icon aria-hidden="true" />
        </a>
      ))}
      {variant === "rail" && <span className="social-rail-line" aria-hidden="true" />}
    </aside>
  );
};

export default SocialIcons;
