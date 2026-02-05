"use client";

import { useLanguage } from "@/components/language";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 px-6 text-center">
      <a
        href="#about"
        aria-label={t.footer.backToTop}
        className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-violet-500/60 hover:shadow-[0_0_18px_rgba(167,139,250,0.45)] transition"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current animate-bounce"
        >
          <path d="M12 5.5 4.5 13l1.4 1.4L11 9.3V19h2V9.3l5.1 5.1L19.5 13 12 5.5z" />
        </svg>
      </a>
      <p className="text-[10px] sm:text-xs tracking-[0.45em] text-zinc-500/60">
        {t.footer.watermark}
      </p>
    </footer>
  );
}
