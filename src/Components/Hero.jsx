import TextType from './TextType';
import { useLanguage } from '../Components/LanguageContext';
import fotoPerfil from '../assets/perfil.jpg';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  const { t } = useLanguage();

  return (

    <section className="max-w-2xl mx-auto px-6 pt-24 pb-10 text-left relative z-10">

      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
          <img src={fotoPerfil} alt="Paulo" className="w-full h-full object-cover" />
        </div>
      </div>

      <TextType
        text="Paulo Augusto de Almeida Céspedes"
        as="h1"
        className="text-3xl font-bold text-white mb-2"
        typingSpeed={70}
        cursorCharacter="_"
        loop={false}
      />

      <p className="text-zinc-400 text-base mb-6">
        Estudante de Tecnologia da Informação (5º Período)
      </p>


      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/xPaulo-o"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-zinc-400 text-xl transition-all duration-300 hover:bg-blue-500/10 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(0,124,240,0.4)]"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/paulo-augusto-b579513a1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-zinc-400 text-xl transition-all duration-300 hover:bg-blue-500/10 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(0,124,240,0.4)]"
        >
          <FaLinkedinIn />
        </a>
               <a
          href="https://www.instagram.com/xpaulo_o2/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-zinc-400 text-xl transition-all duration-300 hover:bg-blue-500/10 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(0,124,240,0.4)]"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}