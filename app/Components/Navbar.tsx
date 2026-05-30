"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { Award, FolderGit2, Home, Mail, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Certificates", href: "#certificates", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!(target instanceof HTMLElement)) {
      return;
    }

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
    setIsVisible(false);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      setIsVisible(currentScrollY < 80 || isScrollingUp);
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className={`fixed left-1/2 top-4 z-[999] hidden -translate-x-1/2 transition-all duration-300 md:block ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-16 opacity-0"
        }`}
      >
        <div className="flex h-11 items-center gap-1 rounded-full border border-orange-500/25 bg-black/45 px-2 text-white shadow-lg shadow-black/30 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                aria-label={item.label}
                className="group flex h-8 items-center gap-2 rounded-full px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
              >
                <Icon
                  size={14}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      <div className="fixed right-4 top-4 z-[999] md:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-label="Open navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/35 bg-black/55 text-orange-400 shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:bg-orange-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          className={`absolute right-0 top-14 w-48 overflow-hidden rounded-2xl border border-orange-500/25 bg-black/80 p-2 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="flex h-11 items-center gap-3 rounded-xl px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-300 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <Icon size={15} strokeWidth={1.8} className="text-orange-400" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
