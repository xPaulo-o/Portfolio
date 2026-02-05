﻿"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language";
import { useIsMobile } from "@/components/useIsMobile";

export default function Education() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section id="education" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        {t.education.title}
      </h2>

      <div className="mt-10 grid gap-6">
        {t.education.items.map(item => (
          <motion.a
            key={`${item.institution}-${item.course}`}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.96 }}
            animate={isMobile ? { y: [0, -4, 0] } : undefined}
            transition={
              isMobile
                ? { repeat: Infinity, duration: 3, ease: "easeInOut" }
                : undefined
            }
            className={`group card-ambient block rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 transition md:hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.16)] ${
              isMobile
                ? "border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.15)]"
                : ""
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {item.institution}
              </h3>
              <span className="text-sm text-violet-400">{item.course}</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500/70" />
                {item.period}
              </span>
              <span className="text-zinc-600">•</span>
              <span>{item.location}</span>
            </div>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              {item.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span
                  key={`${item.institution}-${tag}`}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-200 transition group-hover:border-violet-500/40"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              {t.education.linkLabel}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
