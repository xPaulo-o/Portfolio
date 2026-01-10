import { HiBadgeCheck } from "react-icons/hi";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { useOnScreen } from "./useOnScreen";
import { TypingText } from "./TypingText";
import { useLanguage } from "./LanguageContext";

export function CertificadoCard({ cert, index }) {
  const { accent } = useLanguage();
  const [ref, isVisible] = useOnScreen("-80px");

  return (
    <a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        "--accent": accent,
        "--accent-dim": accent + "59", // ~35% opacidade para sombra
        "--accent-border": accent + "66", // ~40% opacidade para borda
        animationDelay: `${index * 0.2}s`,
      }}
      className="
        block h-full rounded-2xl
        border border-white/10
        bg-black/40
        p-5
        font-mono
        transition-all duration-300
        mobile-glow
        hover:border-[var(--accent-border)]
        hover:shadow-[0_0_30px_-10px_var(--accent-dim)]
        group
      "
    >
      {/* comando fake */}
      <div className="flex items-center gap-2 text-sm mb-3 text-zinc-400">
        <span className="text-[var(--accent)]">$</span>
        <TypingText
          text={`verify --cert ${cert.title.replaceAll(" ", "_")}`}
          start={isVisible}
        />
      </div>

      {/* conteúdo */}
      <div className="ml-4 border-l border-white/10 pl-4 space-y-2">
        <div className="flex items-center gap-2">
          <HiBadgeCheck className="text-[var(--accent)] text-lg" />

          <h4 className="text-sm font-bold text-zinc-200">
            <TypingText text={cert.title} start={isVisible} />
          </h4>

          {cert.verified && (
            <span
              style={{
                backgroundColor: accent + "1a", // 10% opacidade
                color: accent,
                borderColor: accent + "4d", // 30% opacidade
              }}
              className="ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full border"
            >
              VERIFIED
            </span>
          )}
        </div>

        <p className="text-xs text-zinc-500">
          <TypingText
            text={`${cert.org} • ${cert.year}`}
            speed={15}
            start={isVisible}
          />
        </p>

        <p className="text-xs text-zinc-400 flex items-center gap-2">
          {cert.external ? (
            <FaExternalLinkAlt className="text-[var(--accent)]" />
          ) : (
            <FaFilePdf className="text-red-400" />
          )}
          <TypingText
            text={`> ${cert.info}`}
            speed={15}
            start={isVisible}
          />
        </p>
      </div>
    </a>
  );
}
