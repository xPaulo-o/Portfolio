﻿"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language";
import { useIsMobile } from "@/components/useIsMobile";

type Props = {
  title: string;
  tech: string;
  description?: string;
  tags?: string[];
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function ProjectCard({
  title,
  tech,
  description,
  tags,
  href,
  onClick,
  ariaLabel,
}: Props) {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const clickable = Boolean(href || onClick);
  const defaultAria = href ? t.projects.ariaRepo : t.projects.ariaDetails;
  const ariaText = defaultAria.replace("{title}", title);

  return (
    <motion.div
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={event => {
        if (!onClick) return;
        if (event.key === "Enter" || event.key === " ") onClick();
      }}
      initial="rest"
      whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={isMobile ? undefined : { scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.96 }}
      animate={isMobile ? { y: [0, -6, 0] } : undefined}
      variants={{
        rest: { scale: 1, opacity: 0, y: 18 },
        hover: { scale: 1.03 },
      }}
      transition={
        isMobile
          ? {
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              },
            }
          : { type: "spring", stiffness: 300, damping: 20 }
      }
      className={`group card-ambient relative rounded-2xl 
        bg-zinc-900/60 border border-white/10 
        overflow-hidden transition hover:border-violet-500/50 hover:shadow-[0_24px_60px_rgba(124,58,237,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 ${
          clickable ? "cursor-pointer" : ""
        } ${
        isMobile
          ? "border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.15)]"
          : ""
      }`}
      aria-label={ariaLabel ?? ariaText}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
        bg-gradient-to-br from-violet-500/20 to-transparent"
      />

      <a
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noreferrer" : undefined}
        className="relative block p-6 sm:p-8"
      >
        {href && (
          <div className="absolute right-4 top-4 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-200">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 2c-5.52 0-10 4.59-10 10.26 0 4.54 2.87 8.38 6.84 9.74.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.58 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.78-.1-.27-.45-1.35.1-2.8 0 0 .84-.28 2.75 1.06.8-.23 1.65-.35 2.5-.35.85 0 1.71.12 2.5.35 1.9-1.34 2.75-1.06 2.75-1.06.55 1.45.2 2.53.1 2.8.64.73 1.03 1.65 1.03 2.78 0 3.96-2.34 4.84-4.57 5.1.36.33.68.98.68 1.97 0 1.42-.01 2.57-.01 2.92 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.59 17.52 2 12 2z" />
              </svg>
            </span>
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-200 transition group-hover:border-violet-500/50 group-hover:text-white">
              {t.projects.repoLabel}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500/0 via-violet-500/60 to-cyan-400/0 opacity-0 transition group-hover:opacity-100" />
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-sm text-violet-400 mt-2">{tech}</p>

        {description && (
          <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={`${title}-${tag}`}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-200 transition group-hover:border-violet-500/40"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </a>
    </motion.div>
  );
}
