import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95, // Começa ligeiramente menor
  },
  in: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  },
  out: {
    opacity: 0,
    scale: 1.05, // Sai ligeiramente maior
    transition: { duration: 1, ease: "easeInOut" }
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
