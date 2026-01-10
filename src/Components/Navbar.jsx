import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Clock from "./Clock";

export default function Navbar() {
  const { lang, setLang, t, accent } = useLanguage();

  const [activeSection, setActiveSection] = useState("inicio");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fakeCommand, setFakeCommand] = useState("");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);


  const minSwipeDistance = 60;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setMobileOpen(true); // swipe up
    }

    if (distance < -minSwipeDistance) {
      setMobileOpen(false); // swipe down
    }
  };


  /* shrink on scroll */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* section observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
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
    { code: "pt", label: "Português", flag: "/src/assets/br.png", env: "pt_BR" },
    { code: "en", label: "English", flag: "/src/assets/us.png", env: "en_US" },
    { code: "es", label: "Español", flag: "/src/assets/es.png", env: "es_ES" },
  ];

  const currentLang = languages.find((l) => l.code === lang);

  /* fake command when lang changes */
  const changeLanguage = (l) => {
    setFakeCommand(`$ set LANG=${l.env}`);
    setLang(l.code);
    setIsLangOpen(false);

    setTimeout(() => {
      setFakeCommand("");
    }, 1800);
  };

  return (
    <>
      {/* Fake terminal command */}
      <AnimatePresence>
        {fakeCommand && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-[60]
              bg-black/80 border border-white/10 rounded-lg
              px-4 py-2 text-xs font-mono text-zinc-300"
          >
            <span style={{ color: accent }}>{fakeCommand}</span>
            <span className="block text-[10px] text-zinc-500">
              [ OK ] language updated
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        animate={{
          height: isScrolled ? 64 : 84,
          backgroundColor: isScrolled
            ? "rgba(10,10,10,0.85)"
            : "rgba(10,10,10,0.45)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl
          border-b border-white/10 flex items-center justify-between px-6 md:px-12"
      >
        {/* Logo + breadcrumb */}
        {/* Terminal status bar */}
        <div className="flex items-center gap-4 font-mono text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accent }}
            />
            ONLINE
          </span>

          <span className="hidden sm:block">
            LANG={lang === "pt" ? "pt_BR" : lang === "en" ? "en_US" : "es_ES"}
          </span>

          <span className="hidden md:block">
            PATH=~/{activeSection}
          </span>

          <Clock />
        </div>


        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative group transition-colors ${activeSection === link.id
                ? "text-white"
                : "text-zinc-400 hover:text-white"
                }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px]
                  transition-all duration-300 ease-out
                  ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                style={{ backgroundColor: accent }}
              />
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLangOpen((p) => !p)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                border border-white/10 bg-black/40 text-sm text-white"
              style={{ borderColor: isLangOpen ? accent : undefined }}
            >
              <img src={currentLang.flag} className="w-5 h-3.5 rounded-sm" />
              {lang.toUpperCase()}
              <HiChevronDown
                className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-2 w-40 bg-[#111]
                    border border-white/10 rounded-xl overflow-hidden z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLanguage(l)}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm
                        text-zinc-400 hover:text-white hover:bg-white/5"
                    >
                      <img src={l.flag} className="w-5 h-3.5 rounded-sm" />
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <HiMenu />
          </button>
        </div>
      </motion.nav>

      {/* Mobile tmux menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black font-mono"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="text-sm text-white">
                tmux — paulo@portfolio
              </span>
              <button onClick={() => setMobileOpen(false)}>
                <HiX className="text-white text-xl" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-zinc-300 text-lg hover:text-white"
                >
                  &gt; {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
