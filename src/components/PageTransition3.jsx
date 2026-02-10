import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  out: {
    opacity: 0,
    y: -40,
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
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
