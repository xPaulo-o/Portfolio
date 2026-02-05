"use client";

import { useLanguage } from "@/components/language";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        {t.experience.title}
      </h2>

      <div className="mt-10 grid gap-6">
        {t.experience.items.map(exp => (
          <a
            key={`${exp.company}-${exp.role}`}
            href={exp.url}
            target="_blank"
            rel="noreferrer"
            className="group card-ambient block rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8 transition hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.16)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {exp.company}
              </h3>
              <span className="text-sm text-violet-400">{exp.role}</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500/70" />
                {exp.period}
              </span>
              <span className="text-zinc-600">•</span>
              <span>{exp.location}</span>
            </div>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              {exp.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span
                  key={`${exp.company}-${tag}`}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-200 transition group-hover:border-violet-500/40"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              {t.experience.linkLabel}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
