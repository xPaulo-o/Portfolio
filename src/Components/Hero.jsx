import { useState, useEffect } from "react";
import { TypingText } from "./TypingText";
import { useLanguage } from "./LanguageContext";
import { WhoamiTerminal } from "./WhoamiTerminal";

import fotoPT from "../assets/perfil_pt.jpg";
import fotoEN from "../assets/perfil_en.jpg";
import fotoES from "../assets/perfil_es.jpg";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Hero() {
  const { t, lang } = useLanguage();
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [status, setStatus] = useState("online");

  const avatars = { pt: fotoPT, en: fotoEN, es: fotoES };

  const statusMap = {
    online: { label: "online", color: "#4af626" },
    idle: { label: "idle", color: "#facc15" },
    busy: { label: "busy", color: "#ef4444" },
  };

  useEffect(() => {
    const states = ["online", "idle", "busy"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % states.length;
      setStatus(states[i]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setTerminalOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section className="max-w-2xl mx-auto px-6 pt-24 pb-12 relative z-10">

      {/* ================= AVATAR ================= */}
      <div
        className="mb-6 group relative w-fit cursor-pointer"
        onClick={() => setTerminalOpen(true)}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-40 animate-pulse"
          style={{ backgroundColor: statusMap[status].color }}
        />

        {/* Avatar */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/20 transition-all group-hover:scale-110 group-active:animate-[glitch_0.3s]">
          <img
            src={avatars[lang]}
            alt="Paulo Augusto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tooltip Responsivo: Abaixo no mobile, Direita no desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 md:left-full md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:mt-0 md:ml-8 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap text-[10px] font-mono text-zinc-400 bg-black/80 border border-white/10 rounded-md p-3 z-50">
          <p>id: paulo</p>
          <p>uptime: 12h 34m</p>
          <p>location: BR-GO</p>
          <p style={{ color: statusMap[status].color }}>
            status: {statusMap[status].label}
          </p>
        </div>
      </div>

      {/* ================= TEXTO ================= */}
      <p className="text-sm text-zinc-400 mb-1">{t.presentation}</p>

      <TypingText
        text="Paulo Augusto de Almeida Céspedes"
        as="h1"
        className="text-3xl md:text-4xl font-bold text-white mb-3"
        speed={70}
        cursor="_"
      />

      <p className="text-zinc-300 text-sm mb-6">{t.resume}</p>

      {/* ================= SOCIAL ================= */}
      <div className="flex gap-4">
        <Social href="https://github.com/xPaulo-o" color="#ffffff" index={0}><FaGithub /></Social>
        <Social href="https://linkedin.com" color="#0077b5" index={1}><FaLinkedinIn /></Social>
        <Social href="https://instagram.com" color="#E1306C" index={2}><FaInstagram /></Social>
      </div>

      <WhoamiTerminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Glitch animation */}
      <style>
        {`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 1px); }
            100% { transform: translate(0); }
          }
        `}
      </style>
    </section>
  );
}

function Social({ href, color, children, index = 0 }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        "--social-color": color,
        "--accent-border": color + "99", // Aumentado para ~60% de opacidade
        "--accent-dim": color + "80",    // Aumentado para ~50% de opacidade
        animationDelay: `${index * 0.2}s`,
      }}
      className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-black/40 text-zinc-300 text-xl transition-all duration-300 mobile-glow hover:text-[var(--social-color)] hover:border-[var(--social-color)] hover:shadow-[0_0_25px_-5px_var(--social-color)]"
    >
      {children}
    </a>
  );
}