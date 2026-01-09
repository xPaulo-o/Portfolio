import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Components/LanguageContext';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light-theme');
  };

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

  const navTexts = {
    pt: { home: 'Início', about: 'Sobre', exp: 'Experiência', skills: 'Habilidades' },
    es: { home: 'Inicio', about: 'Sobre mí', exp: 'Experiencia', skills: 'Habilidades' },
    en: { home: 'Home', about: 'About', exp: 'Experience', skills: 'Skills' }
  };

  const t = navTexts[lang] || navTexts.pt;

  const links = [
    { id: 'inicio', label: t.home },
    { id: 'sobre', label: t.about },
    { id: 'experiencia', label: t.exp },
    { id: 'habilidades', label: t.skills },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b border-white/5 bg-black/40 backdrop-blur-xl z-50 flex items-center justify-between px-6 md:px-12">
      <div className="font-bold text-white tracking-tight">
        PAULO AUGUSTO<span className="text-[#4af626]">_</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link-animated relative transition-colors ${activeSection === link.id ? 'text-white active' : 'text-zinc-500 hover:text-white'
              }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 text-white text-xs rounded px-2 py-1 outline-none cursor-pointer"
        >
          <option value="pt">PT</option>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>

        <button onClick={toggleTheme} className="bg-zinc-900 border border-zinc-700 p-2 rounded-full text-white">
          🌓
        </button>
      </div>
    </nav>
  );
}