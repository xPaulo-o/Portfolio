import TextType from './TextType';
import { useLanguage } from '../Components/LanguageContext';
import fotoPerfil from '../assets/perfil.jpg';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from './Typewriter';

export default function Hero() {
  const { t } = useLanguage();

  return (

    <section className="max-w-2xl mx-auto px-6 pt-24 pb-10 text-left relative z-10">

      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
          <img src={fotoPerfil} alt="Paulo" className="w-full h-full object-cover" />
        </div>
      </div>

      <h1>{t.presentation}</h1>

      <TextType
        text="Paulo Augusto de Almeida Céspedes"
        as="h1"
        className="text-3xl font-bold text-white mb-2"
        typingSpeed={70}
        cursorCharacter="_"
        loop={false}
      />

      <div className="text-zinc-400 text-base mb-6 h-8 flex items-center gap-2">
        <span>{t.specialized_in}</span>
        {t.specialties && (
          <Typewriter
            key={t.specialties[0]}
            words={t.specialties}
            speed={80}
            delay={2500}
          />
        )}
      </div>

      <h1>{t.resume}</h1>

      <h1>{t.follow}</h1>

      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/xPaulo-o"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-zinc-400 text-xl transition-all duration-300 hover:bg-[#4af626]/10 hover:text-[#4af626] hover:border-[#4af626]/50 hover:shadow-[0_0_20px_rgba(74,246,38,0.2)]"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/paulo-augusto-b579513a1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-zinc-400 text-xl transition-all duration-300 hover:bg-[#4af626]/10 hover:text-[#4af626] hover:border-[#4af626]/50 hover:shadow-[0_0_20px_rgba(74,246,38,0.2)]"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/xpaulo_o2/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-zinc-400 text-xl transition-all duration-300 hover:bg-[#4af626]/10 hover:text-[#4af626] hover:border-[#4af626]/50 hover:shadow-[0_0_20px_rgba(74,246,38,0.2)]"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}