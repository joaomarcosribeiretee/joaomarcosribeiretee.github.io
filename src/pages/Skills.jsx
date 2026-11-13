import React from "react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { useT } from "../contexts/LanguageContext";
import { SKILL_CATEGORIES } from "../data/skills";
import "../styles/Skills.css";

const describe = (cat, copy) =>
  cat.id === "qa" && !cat.skills.some((s) => s.evals) ? copy.descriptionNoEvals : copy.description;

const SkillChip = ({ skill, coreLabel }) => {
  const { label, icon: Icon, primary } = skill;
  return (
    <li className={`skill-chip ${primary ? "is-primary" : ""}`} title={primary ? coreLabel : undefined}>
      <Icon aria-hidden="true" focusable="false" />
      <span>{label}</span>
      {primary && <span className="skill-sr">({coreLabel})</span>}
    </li>
  );
};

const Skills = () => {
  const t = useT("skills");

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader id="skills-title" title={t.title} subtitle={t.subtitle} />

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => {
            const copy = t.categories[cat.id];
            return (
              <Reveal
                as="article"
                key={cat.id}
                index={i}
                className={`skill-card skill-card--${cat.size}`}
                aria-labelledby={`skills-${cat.id}`}
              >
                <header className="skill-card-header">
                  <h3 id={`skills-${cat.id}`}>{copy.label}</h3>
                  <p>{describe(cat, copy)}</p>
                </header>
                <ul className="skill-list">
                  {cat.skills.map((skill) => (
                    <SkillChip key={skill.id} skill={skill} coreLabel={t.coreTech} />
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
