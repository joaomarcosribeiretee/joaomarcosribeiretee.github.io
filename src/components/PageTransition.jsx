import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw", // Começa fora da tela (esquerda)
  },
  in: {
    opacity: 1,
    x: 0, // Move para o centro
    transition: { duration: 0.6, ease: "easeOut" }
  },
  out: {
    opacity: 0,
    x: "100vw", // Sai para a direita
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{ position: "relative", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
