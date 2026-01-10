import { motion } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Começa invisível e 20px abaixo
      whileInView={{ opacity: 2, y: 0 }} // Quando aparece na tela, sobe e aparece
      viewport={{ once: false }} 
      transition={{ duration: 1, ease: "easeOut" }} // Velocidade suave
    >
      {children}
    </motion.div>
  );
};