import { useState, useEffect } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { useOnScreen } from "./useOnScreen";

function TypingText({ text, speed = 25, start }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return <span>{displayed}</span>;
}

export function CertificadoCard({ cert, index }) {
  const [ref, isVisible] = useOnScreen("-80px");

  return (
    <a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block rounded-2xl
        border border-white/10
        bg-black/40
        p-5
        font-mono
        transition-all duration-300
        hover:border-[#4af626]/40
        hover:shadow-[0_0_30px_-10px_rgba(74,246,38,0.35)]
        group
      "
    >
      {/* comando fake */}
      <div className="flex items-center gap-2 text-sm mb-3 text-zinc-400">
        <span className="text-[#4af626]">$</span>
        <TypingText
          text={`verify --cert ${cert.title.replaceAll(" ", "_")}`}
          start={isVisible}
        />
      </div>

      {/* conteúdo */}
      <div className="ml-4 border-l border-white/10 pl-4 space-y-2">
        <div className="flex items-center gap-2">
          <HiBadgeCheck className="text-[#4af626] text-lg" />

          <h4 className="text-sm font-bold text-zinc-200">
            <TypingText text={cert.title} start={isVisible} />
          </h4>

          {cert.verified && (
            <span className="ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#4af626]/10 text-[#4af626] border border-[#4af626]/30">
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
            <FaExternalLinkAlt className="text-[#4af626]" />
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
