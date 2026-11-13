import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { useLanguage, useT } from "../contexts/LanguageContext";
import { CHARACTERS } from "../data/characters";
import { EFFECTS } from "../components/effects";
import "../styles/About.css";

const publicPath = (path) => `${process.env.PUBLIC_URL}${path}`;

const CharacterIcon = ({ icon }) => {
  if (typeof icon !== "string") {
    const Icon = icon;
    return <Icon className="about-icon-glyph" aria-hidden="true" />;
  }
  // file icons are painted as a silhouette so their colour follows the state
  const url = `url("${publicPath(icon)}")`;
  return <span className="about-icon-glyph" aria-hidden="true" style={{ WebkitMaskImage: url, maskImage: url }} />;
};

// a character effect never outlives this, even if its sound is longer
const EFFECT_MAX_MS = 3200;

const SPOTIFY_URL = "https://open.spotify.com/user/22lseke5ukek7jgd4sepaacoy?si=81add31631224262";

const About = () => {
  const t = useT("about");
  const { language } = useLanguage();
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(null);
  const [fx, setFx] = useState(null); // { key, effect, origin } while a screen effect runs
  const fxTimer = useRef(0);

  useEffect(
    () => () => {
      audioRef.current?.pause();
      clearTimeout(fxTimer.current);
    },
    []
  );

  const stop = () => {
    audioRef.current?.pause();
    audioRef.current = null;
    clearTimeout(fxTimer.current);
    setFx(null);
    setPlaying(null);
  };

  // One sound at a time: another character replaces it, the same one stops it.
  const toggleSound = (character, button) => {
    const wasPlaying = playing === character.id;
    stop();
    if (wasPlaying) return;

    const audio = new Audio(publicPath(character.audio));
    audioRef.current = audio;
    setPlaying(character.id);

    if (EFFECTS[character.effect]) {
      const rect = button.getBoundingClientRect();
      setFx({
        key: Date.now(),
        effect: character.effect,
        character,
        origin: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
      });
      fxTimer.current = setTimeout(() => setFx(null), EFFECT_MAX_MS);
    }

    const done = () => {
      if (audioRef.current !== audio) return;
      audioRef.current = null;
      clearTimeout(fxTimer.current);
      setFx(null);
      setPlaying(null);
    };
    audio.onended = done;
    audio.play().catch(() => {
      // sound missing or blocked: the button resets, but the effect still runs its course
      if (audioRef.current !== audio) return;
      audioRef.current = null;
      setPlaying(null);
    });
  };

  const ActiveEffect = fx && EFFECTS[fx.effect];

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-text">
          <SectionHeader id="about-title" title={t.title} />

          <Reveal className="about-bio" index={1}>
            <p dangerouslySetInnerHTML={{ __html: t.bio1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.bio2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.bio3 }} />
          </Reveal>

          <Reveal className="about-extras" index={2}>
            <div className="about-characters">
              <span className="about-hint">{t.soundHint}</span>
              <div className="about-icons">
                {CHARACTERS.map((c) => {
                  const name = c.name[language];
                  const isPlaying = playing === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      className={`about-icon ${isPlaying ? "is-playing" : ""}`}
                      style={{ "--char-accent": c.accentColor }}
                      onClick={(e) => toggleSound(c, e.currentTarget)}
                      aria-label={t.playSound.replace("{name}", name)}
                      aria-pressed={isPlaying}
                    >
                      <CharacterIcon icon={c.icon} />
                      <span className="about-tooltip" aria-hidden="true">
                        {name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <a className="about-spotify" href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
              <span className="about-eq" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              {t.listeningLabel} <FaSpotify aria-hidden="true" className="about-spotify-icon" /> Spotify
            </a>
          </Reveal>
        </div>

        <Reveal className="about-visual" index={1}>
          <div className="about-photo">
            <img
              src={`${process.env.PUBLIC_URL}/icons/fotoabout.jpg`}
              alt="João Marcos"
              loading="lazy"
              width="560"
              height="700"
            />
          </div>
          <p className="about-location">
            <FiMapPin aria-hidden="true" /> {t.location}
          </p>
        </Reveal>
      </div>

      <AnimatePresence>{ActiveEffect && <ActiveEffect key={fx.key} origin={fx.origin} character={fx.character} accent={fx.character.accentColor} />}</AnimatePresence>
    </section>
  );
};

export default About;
