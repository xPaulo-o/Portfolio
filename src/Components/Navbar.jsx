import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  const [activeSection, setActiveSection] = useState("inicio");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    document
      .querySelectorAll("section[id]")
      .forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);


  const links = [
    { id: "inicio", label: t.home },
    { id: "sobre", label: t.about },
    { id: "experiencia", label: t.exp },
    { id: "habilidades", label: t.skills },
    { id: "projetos", label: t.projects },
    { id: "contato", label: t.contact },
  ];

  const languages = [
    { code: "pt", label: "Português", flag: "/src/assets/br.png" },
    { code: "en", label: "English", flag: "/src/assets/us.png" },
    { code: "es", label: "Español", flag: "/src/assets/es.png" },
  ];

  const currentLang = languages.find((l) => l.code === lang);

  return (
    <motion.nav
      animate={{
        height: isScrolled ? 64 : 84,
        backgroundColor: isScrolled
          ? "rgba(10,10,10,0.85)"
          : "rgba(10,10,10,0.45)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 md:px-12"
    >
      {/* Logo */}
      <div className="font-bold tracking-tight text-white">
        paulo@portfolio<span className="text-[#4af626]">:$</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-sm">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`relative transition-colors ${activeSection === link.id
                ? "text-white"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            {link.label}
            {activeSection === link.id && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#4af626]" />
            )}
          </a>
        ))}
      </div>

      {/* Language switch */}
      <div className="relative">
        <button
          onClick={() => setIsLangOpen((p) => !p)}
          className="
            flex items-center gap-2
            px-3 py-1.5
            rounded-lg
            border border-white/10
            bg-black/40
            text-sm text-white
            hover:border-[#4af626]/40
            transition
          "
        >
          <img src={currentLang.flag} className="w-5 h-3.5 rounded-sm" />
          <span className="uppercase">{lang}</span>
          <HiChevronDown
            className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isLangOpen && (
            <>
              <div
                className="fixed inset-0"
                onClick={() => setIsLangOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute right-0 mt-2 w-40 bg-[#111] border border-white/10 rounded-xl overflow-hidden z-50"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${lang === l.code
                        ? "text-[#4af626] bg-[#4af626]/10"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <img src={l.flag} className="w-5 h-3.5 rounded-sm" />
                    {l.label}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}