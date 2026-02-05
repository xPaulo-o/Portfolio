"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language";
import { useIsMobile } from "@/components/useIsMobile";

const skills = [
  {
    name: "React",
    url: "https://react.dev/",
    glow: "hover:text-[#61DAFB] hover:border-[#61DAFB]/60 hover:shadow-[0_0_18px_rgba(97,218,251,0.5)]",
    mobile: "border-[#61DAFB]/60 shadow-[0_0_15px_rgba(97,218,251,0.5)]",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/docs",
    glow: "hover:text-white hover:border-white/60 hover:shadow-[0_0_18px_rgba(255,255,255,0.45)]",
    mobile: "border-white/60 shadow-[0_0_15px_rgba(255,255,255,0.45)]",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    glow: "hover:text-[#38BDF8] hover:border-[#38BDF8]/60 hover:shadow-[0_0_18px_rgba(56,189,248,0.5)]",
    mobile: "border-[#38BDF8]/60 shadow-[0_0_15px_rgba(56,189,248,0.5)]",
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    glow: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/60 hover:shadow-[0_0_18px_rgba(247,223,30,0.5)]",
    mobile: "border-[#F7DF1E]/60 shadow-[0_0_15px_rgba(247,223,30,0.5)]",
  },
  {
    name: "Python",
    url: "https://docs.python.org/3/",
    glow: "hover:text-[#3776AB] hover:border-[#3776AB]/60 hover:shadow-[0_0_18px_rgba(55,118,171,0.5)]",
    mobile: "border-[#3776AB]/60 shadow-[0_0_15px_rgba(55,118,171,0.5)]",
  },
  {
    name: "Java",
    url: "https://docs.oracle.com/javase/8/docs/",
    glow: "hover:text-[#ED8B00] hover:border-[#ED8B00]/60 hover:shadow-[0_0_18px_rgba(237,139,0,0.5)]",
    mobile: "border-[#ED8B00]/60 shadow-[0_0_15px_rgba(237,139,0,0.5)]",
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          {t.skills.title}
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map(skill => (
            <motion.a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              animate={isMobile ? { y: [0, -3, 0] } : undefined}
              className={`rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-200 transition ${
                skill.glow
              } ${isMobile ? skill.mobile : ""}`}
            >
              {skill.name}
            </motion.a>
          ))}
        </div>

        <div className="mt-6 space-y-5">
          {t.skills.languages.map(language => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold">{language.name}</p>
                <p className="text-xs text-zinc-400">{language.level}</p>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/5">
                <div
                  className={`h-2 rounded-full ${language.accent}`}
                  style={{ width: `${language.percent}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-zinc-500 font-mono">
                {language.cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
