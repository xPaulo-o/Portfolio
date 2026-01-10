import { TypingText } from "./TypingText";
import { useLanguage } from "./LanguageContext";
import fotoPerfil from "../assets/perfil.jpg";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-2xl mx-auto px-6 pt-24 pb-12 relative z-10">

      {/* Avatar */}
      <div className="mb-6">
        <div className="
          w-20 h-20 rounded-full
          bg-zinc-800
          border border-zinc-700
          overflow-hidden
          transition-transform duration-300
          hover:scale-105
        ">
          <img
            src={fotoPerfil}
            alt="Paulo Augusto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Apresentação */}
      <p className="text-sm text-zinc-400 mb-1">
        {t.presentation}
      </p>

      {/* Nome */}
      <TypingText
        text="Paulo Augusto de Almeida Céspedes"
        as="h1"
        className="text-3xl md:text-4xl font-bold text-white mb-3"
        speed={70}
        cursor="_"
      />

      {/* Especialidades */}
      <div className="text-zinc-400 text-sm mb-6 flex flex-wrap items-center gap-2">
        <span>{t.specialized_in}</span>
        {t.specialties && (
          <TypingText
            key={t.specialties[0]}
            words={t.specialties}
            speed={80}
            delay={2500}
            loop={true}
            cursor="|"
          />
        )}
      </div>

      {/* Resumo */}
      <p className="text-zinc-300 text-sm leading-relaxed max-w-xl mb-8">
        {t.resume}
      </p>

      {/* Follow */}
      <p className="text-xs text-zinc-500 mb-3">
        {t.follow}
      </p>

      {/* Social Icons */}
      <div className="flex gap-4">

        {/* GitHub */}
        <a
          href="https://github.com/xPaulo-o"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="
            w-11 h-11
            flex items-center justify-center
            rounded-xl
            border border-white/10
            bg-black/40
            text-zinc-400
            text-xl
            transition-all duration-300
            hover:text-white
            hover:border-white/30
            hover:shadow-[0_0_25px_-10px_rgba(255,255,255,0.3)]
          "
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/paulo-augusto-b579513a1"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="
            w-11 h-11
            flex items-center justify-center
            rounded-xl
            border border-white/10
            bg-black/40
            text-zinc-400
            text-xl
            transition-all duration-300
            hover:text-[#0A66C2]
            hover:border-[#0A66C2]/40
            hover:shadow-[0_0_25px_-10px_rgba(10,102,194,0.5)]
          "
        >
          <FaLinkedinIn />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/xpaulo_o2/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="
            w-11 h-11
            flex items-center justify-center
            rounded-xl
            border border-white/10
            bg-black/40
            text-zinc-400
            text-xl
            transition-all duration-300
            hover:text-pink-400
            hover:border-pink-400/40
            hover:shadow-[0_0_25px_-10px_rgba(236,72,153,0.5)]
          "
        >
          <FaInstagram />
        </a>

      </div>
    </section>
  );
}
