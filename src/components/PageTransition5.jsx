import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    rotateY: 90, // Começa virada de lado
  },
  in: {
    opacity: 1,
    rotateY: 0, // Vira para a posição normal
    transition: { duration: 0.7, ease: "easeOut" }
  },
  out: {
    opacity: 0,
    rotateY: -90, // Sai virando para o outro lado
    transition: { duration: 0.7, ease: "easeInOut" }
  }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{ position: "relative", width: "100%", backfaceVisibility: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
