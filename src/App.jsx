import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Terminal from "./Components/Terminal";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { Experience } from "./Components/Experience";
import { Education } from "./Components/Education";
import ProjectGrid from "./Components/ProjectGrid";
import { useLanguage } from "./Components/LanguageContext";
import { Reveal } from "./Components/Reveal";
import { SiReact, SiTailwindcss, SiJavascript, SiPython, SiKalilinux } from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi";
import { Certificados } from "./Components/Certificados";
import FooterTerminal from "./Components/FooterTerminal";
import AnimatedBackground from "./Components/AnimatedBackground";
import "./App.css";

function App() {
  const { t, lang } = useLanguage();
  const [loading, setLoading] = useState(true);
  const isMobile = window.innerWidth < 768;


  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Terminal key="terminal-loader" onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* 🔥 BACKGROUND ANIMADO */}
          <AnimatedBackground active={!loading && !isMobile} />

          <motion.main
            key="portfolio-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen pb-20 overflow-hidden"
          >
            {/* Glow superior */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-zinc-900/20 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 pt-16">
              <Navbar />

              <div className="max-w-2xl mx-auto px-6">
                <section id="inicio">
                  <Reveal><Hero /></Reveal>
                </section>

                <section id="sobre">
                  <Reveal>
                    <section className="py-8">
                      <h2 className="text-xl font-bold mb-4">{t.about}</h2>
                      <p className="text-sm text-zinc-400">{t.objective}</p>
                    </section>
                  </Reveal>
                </section>

                <section id="experiencia">
                  <h2 className="text-xl font-bold mb-6">{t.exp}</h2>
                  <Reveal><Certificados /></Reveal>
                  <Reveal><Experience /></Reveal>

                  <section id="habilidades" className="py-12 border-t border-white/5">
                    <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
                      <HiLightningBolt className="text-yellow-400" />
                      {lang === "pt" ? "Habilidades Técnicas" : "Technical Skills"}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "React", icon: <SiReact />, color: "hover:border-[#61DAFB]/50" },
                        { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:border-[#38BDF8]/50" },
                        { name: "JavaScript", icon: <SiJavascript />, color: "hover:border-[#F7DF1E]/50" },
                        { name: "Python", icon: <SiPython />, color: "hover:border-[#3776AB]/50" },
                        { name: "Kali Linux", icon: <SiKalilinux />, color: "hover:border-[#557C94]/40" },
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-zinc-400 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-white ${skill.color}`}
                        >
                          <span className="text-lg">{skill.icon}</span>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </section>

                  <Reveal><Education /></Reveal>
                </section>

                <section id="projetos" className="py-12">
                  <Reveal><ProjectGrid /></Reveal>
                </section>
              </div>
            </div>

            <section id="contato" className="py-12">
              <h2 className="text-xl font-bold mb-10 text-center">{t.contact}</h2>
              <Reveal><FooterTerminal /></Reveal>
            </section>
          </motion.main>
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
