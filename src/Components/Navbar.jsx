import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../Components/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [activeSection, setActiveSection] = useState('inicio');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Lógica para encolher a Navbar ao rolar o scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const clickAudio = useRef(new Audio('https://www.fesliyanstudios.com/play-mp3/387'));

  const playClick = () => {
    clickAudio.current.currentTime = 0;
    clickAudio.current.volume = 0;
    clickAudio.current.play().catch(() => { });
  };

  const languageOptions = [
    { code: 'pt', label: 'Português', flag: './src/assets/br.png' },
    { code: 'en', label: 'English', flag: './src/assets/us.png' },
    { code: 'es', label: 'Español', flag: './src/assets/es.png' },
  ];

  const currentLangData = languageOptions.find(opt => opt.code === lang);

  const navTexts = {
    pt: { home: 'Início', about: 'Sobre', exp: 'Experiência', skills: 'Habilidades', projects: 'Projetos', contact: 'Contato' },
    es: { home: 'Inicio', about: 'Sobre mí', exp: 'Experiencia', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto' },
    en: { home: 'Home', about: 'About', exp: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact' }
  };

  const t = navTexts[lang] || navTexts.pt;

  const links = [
    { id: 'inicio', label: t.home },
    { id: 'sobre', label: t.about },
    { id: 'experiencia', label: t.exp },
    { id: 'habilidades', label: t.skills },
    { id: 'projetos', label: t.projects },
    { id: 'contato', label: t.contact },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        height: isScrolled ? '64px' : '85px',
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'rgba(10, 10, 10, 0.4)',
        borderBottomColor: isScrolled ? 'rgba(74, 246, 38, 0.2)' : 'rgba(255, 255, 255, 0.05)',
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full backdrop-blur-xl z-50 flex items-center justify-between px-6 md:px-12 border-b"
    >
      <motion.div 
        animate={{ scale: isScrolled ? 0.9 : 1 }}
        className="font-bold text-white tracking-tight"
      >
        PAULO AUGUSTO<span className="text-[#4af626]">_</span>
      </motion.div>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link-animated relative transition-colors ${
              activeSection === link.id ? 'text-white active' : 'text-zinc-500 hover:text-white'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="relative">
        <motion.button
          whileTap={{ scale: 0.95 }}
          animate={{ scale: isScrolled ? 0.9 : 1 }}
          onClick={() => {
            playClick();
            setIsLangOpen(!isLangOpen);
          }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#4af626]/50 transition-all duration-300 text-white text-sm font-medium group"
        >
          <img src={currentLangData?.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm" />
          <span className="uppercase">{lang}</span>
          <HiChevronDown className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {isLangOpen && (
            <>
              {/* Overlay para fechar ao clicar fora */}
              <div className="fixed inset-0 z-[-1]" onClick={() => setIsLangOpen(false)} />
              
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl overflow-hidden z-[60]"
              >
                <div className="py-1">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => {
                        playClick();
                        setLang(option.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[#4af626]/10 ${
                        lang === option.code ? 'text-[#4af626]' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <img src={option.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm" />
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}