"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import { useLanguage } from "@/components/language";

export default function Loader() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full text-center text-white text-4xl sm:text-5xl font-bold tracking-[0.14em] sm:tracking-[0.3em] uppercase"
      >
        <Typewriter text="Paulo Augusto" speedMs={110} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 sm:bottom-12 w-full text-center px-4 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.45em] text-zinc-500/60"
      >
        {t.footer.watermark}
      </motion.p>
    </motion.div>
  );
}
