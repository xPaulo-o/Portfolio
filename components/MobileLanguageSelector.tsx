"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language";
import type { Language } from "@/components/language";

const flagByLanguage: Record<Language, string> = {
  pt: "/Bandeiras/br.png",
  en: "/Bandeiras/us.png",
  es: "/Bandeiras/es.png",
};

export default function MobileLanguageSelector() {
  const { language, setLanguage, languages, t } = useLanguage();

  return (
    <div className="mt-4 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 w-full max-w-[200px]">
      <p className="text-sm text-zinc-400">{t.languageSwitcher.change}</p>
      <div className="flex gap-3">
        {languages.map((option) => (
          <button
            key={option.id}
            onClick={() => setLanguage(option.id)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition ${
              language === option.id
                ? "border-violet-500 bg-violet-500/20 scale-110"
                : "border-white/10 bg-zinc-900/60 hover:bg-white/10"
            }`}
            aria-label={option.label}
          >
            <Image
              src={flagByLanguage[option.id]}
              alt={option.label}
              width={24}
              height={24}
              className="h-6 w-6 rounded-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}