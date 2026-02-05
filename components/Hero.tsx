"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import { useLanguage } from "@/components/language";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8 },
  },
};

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative min-h-[100svh] flex items-center justify-center px-6 pt-32 sm:pt-28 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-5xl w-full"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto">
          <div className="relative shrink-0 mt-6 sm:mt-8 md:mt-0">
            <div className="absolute -inset-1 rounded-3xl bg-violet-500/20 blur-2xl" />
            <Image
              src="/Perfil-Icons/perfil.jpg"
              alt="Paulo Augusto"
              width={180}
              height={220}
              className="relative h-44 w-40 sm:h-52 sm:w-44 md:h-[16rem] md:w-[14rem] rounded-3xl object-cover border border-white/10 shadow-lg"
              priority
            />
          </div>

          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
            >
              <Typewriter text="Paulo Augusto" />
            </motion.h1>

            <motion.h2
              variants={item}
              className="mt-4 text-xl md:text-2xl text-zinc-400"
            >
              {t.hero.role}
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 text-zinc-400 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 bg-violet-600 hover:bg-violet-700 transition rounded-full text-white text-center"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 border border-zinc-600 rounded-full text-zinc-300 hover:text-white hover:border-white transition text-center"
              >
                {t.hero.contactMe}
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-col items-center md:items-start gap-4 pointer-events-auto">
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://github.com/xPaulo-o"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/60 text-white transition hover:border-white/60 hover:text-white hover:shadow-[0_0_18px_rgba(255,255,255,0.45)]"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                    <path d="M12 2c-5.52 0-10 4.59-10 10.26 0 4.54 2.87 8.38 6.84 9.74.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.58 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.78-.1-.27-.45-1.35.1-2.8 0 0 .84-.28 2.75 1.06.8-.23 1.65-.35 2.5-.35.85 0 1.71.12 2.5.35 1.9-1.34 2.75-1.06 2.75-1.06.55 1.45.2 2.53.1 2.8.64.73 1.03 1.65 1.03 2.78 0 3.96-2.34 4.84-4.57 5.1.36.33.68.98.68 1.97 0 1.42-.01 2.57-.01 2.92 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.59 17.52 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/paulo-augusto-b579513a1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/60 text-white transition hover:border-[#0A66C2]/70 hover:text-[#0A66C2] hover:shadow-[0_0_18px_rgba(10,102,194,0.55)]"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                    <path d="M4.98 3.5C3.33 3.5 2 4.85 2 6.48c0 1.62 1.32 2.97 2.95 2.97h.03c1.67 0 2.99-1.35 2.99-2.97C7.96 4.85 6.65 3.5 4.98 3.5zM2.4 21.5h5.15V9.9H2.4v11.6zM9.46 9.9v11.6h5.15v-6.48c0-3.59 4.59-3.88 4.59 0v6.48h5.15v-7.74c0-6.02-6.48-5.8-8.07-2.84V9.9H9.46z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/xpaulo_o2/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/60 text-white transition hover:border-[#E4405F]/70 hover:text-[#E4405F] hover:shadow-[0_0_18px_rgba(228,64,95,0.5)]"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm5.25-2.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                  </svg>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setCvOpen(true)}
                className="mt-2 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 px-6 py-4 text-zinc-200 transition hover:border-violet-500/60 hover:text-white hover:shadow-[0_0_18px_rgba(167,139,250,0.5)] pointer-events-auto relative z-20 w-full sm:w-auto mx-auto md:mx-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current pointer-events-none"
                >
                  <path d="M12 2a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 12.59V3a1 1 0 0 1 1-1zM4 20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 1 0-2 0v2H6v-2a1 1 0 1 0-2 0v3z" />
                </svg>
                <span className="pointer-events-none">
                  {t.hero.downloadResume}
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {cvOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setCvOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8"
              onClick={event => event.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white">
                {t.hero.modalTitle}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {t.hero.modalDescription}
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="/Curriculum/CV_Paulo_Augusto_BR.pdf"
                  className="block rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white hover:border-violet-500/60 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.hero.resume.pt}
                </a>
                <a
                  href="/Curriculum/CV_Paulo_Augusto_EN.pdf"
                  className="block rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white hover:border-violet-500/60 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.hero.resume.en}
                </a>
                <a
                  href="/Curriculum/CV_Paulo_Augusto_ES.pdf"
                  className="block rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-white hover:border-violet-500/60 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.hero.resume.es}
                </a>
              </div>

              <button
                type="button"
                onClick={() => setCvOpen(false)}
                className="mt-6 w-full rounded-xl border border-white/10 px-5 py-3 text-zinc-300 hover:text-white hover:border-white/30 transition"
              >
                {t.hero.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
