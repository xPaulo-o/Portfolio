import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Terminal from "./Components/Terminal";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { Experience } from "./Components/Experience";
import { Education } from "./Components/Education";
import ProjectGrid from "./Components/ProjectGrid";
import { useLanguage } from "./Components/LanguageContext";
import { Reveal } from "./Components/Reveal";
import { Certificados } from "./Components/Certificados";
import FooterTerminal from "./Components/FooterTerminal";
import AnimatedBackground from "./Components/AnimatedBackground";
import { TerminalSection } from "./Components/TerminalSection";
import { Skills } from "./Components/Skills";
import "./App.css";

function App() {
  const { t, lang, accent } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = `${import.meta.env.BASE_URL}logo.png`;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = `${import.meta.env.BASE_URL}logo.png`;
      document.head.appendChild(newLink);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Terminal key="terminal-loader" onComplete={() => setLoading(false)} />
      ) : (
        <>
          <AnimatedBackground active={!loading} />

          <motion.main
            key="portfolio-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen pb-20 overflow-hidden"
          >
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] blur-[120px] pointer-events-none z-0"
              style={{ backgroundColor: `${accent}1a` }}
            />
            <div className="relative z-10 pt-16">
              <Navbar />

              <div className="max-w-5xl mx-auto px-6">

                <section id="inicio">
                  <Reveal><Hero /></Reveal>
                </section>

                <section id="sobre">
                  <Reveal>
                    <section className="py-8 max-w-2xl mx-auto">
                      <h2 className="text-xl font-bold mb-4">{t.about}</h2>
                      <TerminalSection command="whoami">
                        <p className="text-zinc-300 text-sm leading-relaxed">
                          {t.objective}
                        </p>
                      </TerminalSection>
                    </section>
                  </Reveal>
                </section>

                <section id="experiencia" className="py-12 max-w-3xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">{t.exp}</h2>
                  <Reveal><Certificados /></Reveal>
                  <br />
                  <br />
                  <Reveal><Experience /></Reveal>
                  <Reveal><Education /></Reveal>
                </section>

                <section id="habilidades" className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-10">{t.skills}</h2>
                  <Reveal><Skills /></Reveal>
                </section>

                <section id="projetos" className="py-8">
                  <Reveal><ProjectGrid /></Reveal>
                </section>
              </div>
            </div>

            <section id="contato" className="py-12">
              <Reveal><FooterTerminal /></Reveal>
            </section>
            
          </motion.main>
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
