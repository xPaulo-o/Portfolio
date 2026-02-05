﻿﻿﻿"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language";
import { useIsMobile } from "@/components/useIsMobile";

const certificates = [
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    url: "https://www.hackerrank.com/certificates/792e7ebd319c",
  },
  {
    title: "Python Básico",
    issuer: "Solyd Offensive Security",
    url: "/Certificados/certificado.pdf",
  },
  {
    title: "AWS Technical Essentials (Fundamentals)",
    issuer: "AWS Training & Certification",
    url: "/Certificados/AWS%20Technical%20Essentials.pdf",
  },
  {
    title: "AWS Cloud Training Certificate",
    issuer: "AWS Training & Certification",
    url: "/Certificados/AWS%20Training%20%26%20Certification.pdf",
  },
  {
    title: "Workshop Android Pentester",
    issuer: "Solyd Offensive Security",
    url: "/Certificados/certificado%202.pdf",
  },
  {
    title: "Python Basico",
    issuer: "Solyd Offensive Security",
    url: "/Certificados/certificado%203.pdf",
  },
];

export default function Certificates() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section id="certificates" className="py-24 sm:py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        layout
        className="rounded-3xl border border-white/10 bg-zinc-900/60 overflow-hidden"
      >
        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          className="w-full flex items-center justify-between p-6 sm:p-8 text-left group transition-colors hover:bg-white/5"
          aria-expanded={open}
          aria-controls="certificates-list"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-violet-400 transition-colors">
              {t.certificates.title}
            </h2>
            <p className="mt-2 text-zinc-400 max-w-xl">
              {t.certificates.description}
            </p>
          </div>
          <div
            className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:border-violet-500/50 ${
              open ? "rotate-180 bg-white/10" : ""
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-none stroke-current text-white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              id="certificates-list"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { height: 0, opacity: 0 },
                visible: {
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                    opacity: { duration: 0.25, delay: 0.1 },
                    staggerChildren: 0.08,
                  },
                },
                exit: {
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.2 },
                  },
                },
              }}
            >
              <div className="p-6 sm:p-8 pt-0 grid gap-4 sm:grid-cols-2 border-t border-white/5 mt-2">
                {certificates.map((cert) => (
                  <motion.a
                  key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    animate={isMobile ? { y: [0, -3, 0] } : undefined}
                    transition={isMobile ? { repeat: Infinity, duration: 3, ease: "easeInOut" } : undefined}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 24,
                        },
                      },
                      exit: {
                        opacity: 0,
                        scale: 0.95,
                        transition: { duration: 0.2 },
                      },
                    }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-violet-500/40 group ${
                      isMobile ? "border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.15)]" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-white leading-tight group-hover:text-violet-300 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-zinc-400 font-mono">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-white/5 p-2 text-zinc-500 group-hover:text-white group-hover:bg-violet-500/20 transition-colors">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-none stroke-current"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </span>
                    </div>
                  </motion.a>
              ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
