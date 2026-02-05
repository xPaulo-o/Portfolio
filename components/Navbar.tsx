"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language";

export default function Navbar() {
  const { language, t } = useLanguage();
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  useEffect(() => {
    const locale =
      language === "pt" ? "pt-BR" : language === "es" ? "es-ES" : "en-US";
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const update = () => setTime(formatter.format(new Date()));
    update();

    const now = new Date();
    const msToNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    let interval: number | null = null;
    const timeout = window.setTimeout(() => {
      update();
      interval = window.setInterval(update, 60_000);
    }, Math.max(0, msToNextMinute));

    const onVisibility = () => {
      if (document.visibilityState === "visible") update();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearTimeout(timeout);
      if (interval) window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [language]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.certificates, href: "#certificates" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Aumentado para 1024px (lg) para evitar cortes em telas médias/tablets
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (isMobile) {
    return (
      <>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed top-4 left-4 z-50 flex h-14 items-center justify-center rounded-full border border-white/10 bg-black/50 px-6 shadow-lg backdrop-blur-xl"
        >
          <span className="text-sm font-bold text-white tabular-nums">
            {time || "--:--"}
          </span>
        </motion.div>

        <motion.button
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="fixed top-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/50 shadow-lg backdrop-blur-xl"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5.5 : 0 }}
              className="block h-0.5 w-6 rounded bg-white"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block h-0.5 w-6 rounded bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5.5 : 0 }}
              className="block h-0.5 w-6 rounded bg-white"
            />
          </div>
        </motion.button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg"
              onClick={() => setMenuOpen(false)}
            >
              <ul className="flex h-full flex-col items-center justify-center gap-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-2xl text-zinc-300 transition hover:text-white"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  const showMenu = !isScrolled || isHover;
  const compactOnly = isScrolled && !isHover;

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      onMouseEnter={() => {
        if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
        setIsHover(true);
      }}
      onMouseLeave={() => {
        if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
        hoverTimeout.current = window.setTimeout(() => {
          setIsHover(false);
        }, 120);
      }}
    >
      <motion.div
        animate={{
          paddingLeft: compactOnly ? 12 : 20,
          paddingRight: compactOnly ? 12 : 20,
          paddingTop: compactOnly ? 6 : 12,
          paddingBottom: compactOnly ? 6 : 12,
          width: compactOnly ? 120 : "auto",
        }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className={`flex items-center justify-center overflow-hidden 
        bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-lg ${
          compactOnly ? "gap-0" : "gap-4 sm:gap-6"
        } max-w-[95vw]`}
      >
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            compactOnly ? "h-9 w-full" : "h-auto w-auto"
          }`}
        >
          <span className="text-xs sm:text-sm text-white font-bold tracking-wide tabular-nums text-center w-full">
            {time || "--:--"}
          </span>
        </div>

        <motion.div
          initial={false}
          animate={{ scaleX: showMenu ? 1 : 0, opacity: showMenu ? 1 : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
          className={`overflow-hidden whitespace-nowrap ${
            showMenu ? "pointer-events-auto" : "pointer-events-none w-0"
          }`}
        >
          <ul className="flex gap-4 sm:gap-6">
            {navItems.map(item => (
              <li
                key={item.name}
                className="relative group cursor-pointer pb-2"
              >
                <a
                  href={item.href}
                  className="text-xs sm:text-sm text-zinc-300 group-hover:text-white transition"
                >
                  {item.name}
                </a>

                <span
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-violet-500 scale-x-0
                  group-hover:scale-x-100 transition-transform origin-center"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
