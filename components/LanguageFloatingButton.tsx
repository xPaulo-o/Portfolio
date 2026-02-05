"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language";
import type { Language } from "@/components/language";

const flagByLanguage: Record<Language, string> = {
  pt: "/Bandeiras/br.png",
  en: "/Bandeiras/us.png",
  es: "/Bandeiras/es.png",
};

export default function LanguageFloatingButton() {
  const { language, setLanguage, languages, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const current =
    languages.find(option => option.id === language) ?? languages[0];

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 120;
      setIsCompact(prev => (prev === next ? prev : next));
      if (next) setOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/70 p-2 backdrop-blur-xl shadow-lg"
          >
            {languages.map(option => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setLanguage(option.id);
                  setOpen(false);
                }}
                className={`flex items-center justify-between gap-4 rounded-xl px-4 py-2 text-sm transition ${
                  option.id === language
                    ? "border border-violet-500/60 bg-violet-500/10 text-white"
                    : "border border-transparent text-zinc-300 hover:text-white hover:border-white/20"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Image
                    src={flagByLanguage[option.id]}
                    alt={option.label}
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-sm object-cover"
                  />
                  <span>{option.label}</span>
                </span>
                <span className="text-xs text-zinc-400">{option.short}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={t.languageSwitcher.change}
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        animate={{
          paddingLeft: isCompact ? 12 : 20,
          paddingRight: isCompact ? 12 : 20,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/80 py-3 text-sm text-zinc-200 shadow-lg backdrop-blur-xl transition hover:border-violet-500/60 hover:text-white hover:shadow-[0_0_18px_rgba(167,139,250,0.45)] ${
          isCompact ? "min-w-[64px]" : "min-w-[160px]"
        }`}
      >
        <span className="flex items-center gap-2">
          <Image
            src={flagByLanguage[current.id]}
            alt={current.label}
            width={20}
            height={20}
            className="h-5 w-5 rounded-sm object-cover"
          />
          <span
            className={`font-semibold tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isCompact ? "max-w-0 opacity-0" : "max-w-[140px] opacity-100"
            }`}
          >
            {t.languageSwitcher.label}
          </span>
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-xs text-zinc-300">
          {language.toUpperCase()}
        </span>
      </motion.button>
    </div>
  );
}
