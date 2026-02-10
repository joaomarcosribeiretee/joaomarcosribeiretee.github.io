import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    rotate: 10, // Começa levemente inclinada
  },
  in: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
  out: {
    opacity: 0,
    rotate: -10, // Sai inclinada para o outro lado
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
      style={{ position: "relative", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
