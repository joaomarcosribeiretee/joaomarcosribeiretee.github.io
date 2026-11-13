import React from "react";
import Reveal from "./Reveal";

const SectionHeader = ({ title, subtitle, id }) => (
  <Reveal className="section-header">
    <h2 className="section-title" id={id}>{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </Reveal>
);

export default SectionHeader;
