import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";

// Fades its children up once, when they scroll into view.
const Reveal = ({ as = "div", index = 0, className, children, ...rest }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      custom={index}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
