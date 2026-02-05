"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";

function Duck() {
  const [active, setActive] = useState(false);
  const [config, setConfig] = useState({
    y: "85%",
    startX: "-10vw",
    endX: "110vw",
    scaleX: -1,
    duration: 20,
  });

  useEffect(() => {
    if (active) return;

    // Intervalo aleatorio entre 10s e 40s para aparecer
    const delay = Math.random() * 30000 + 10000;

    const timeout = setTimeout(() => {
      const isLeftToRight = Math.random() > 0.5;
      // Posicao vertical aleatoria entre 10% e 90% da tela
      const randomY = Math.floor(Math.random() * 80) + 10;
      // Duracao da travessia aleatoria entre 20s e 40s
      const randomDuration = Math.random() * 20 + 20;

      setConfig({
        y: `${randomY}%`,
        startX: isLeftToRight ? "-10vw" : "110vw",
        endX: isLeftToRight ? "110vw" : "-10vw",
        scaleX: isLeftToRight ? -1 : 1, // Pato olha para esquerda por padrao. -1 vira para direita.
        duration: randomDuration,
      });
      setActive(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [active]);

  if (!active) return null;

  return (
    <motion.div
      initial={{ x: config.startX }}
      animate={{ x: config.endX }}
      transition={{
        duration: config.duration,
        ease: "linear",
      }}
      onAnimationComplete={() => setActive(false)}
      className="absolute left-0 z-0 text-4xl opacity-20 pointer-events-none select-none"
      style={{ top: config.y }}
    >
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ scaleX: config.scaleX }}
      >
        🦆
      </motion.div>
    </motion.div>
  );
}

export default function AnimatedBackground() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const reducedProgress = useMotionValue(0);
  const progress = shouldReduceMotion ? reducedProgress : scrollYProgress;

  const gradientY = useTransform(progress, [0, 1], ["0%", "18%"]);
  const gradientX = useTransform(progress, [0, 1], ["0%", "-6%"]);
  const gridY = useTransform(progress, [0, 1], ["0%", "28%"]);
  const gridOpacity = useTransform(progress, [0, 1], [0.18, 0.34]);

  const orbOneY = useTransform(progress, [0, 1], ["0%", "24%"]);
  const orbOneX = useTransform(progress, [0, 1], ["0%", "10%"]);
  const orbOneScale = useTransform(progress, [0, 1], [1, 1.08]);

  const orbTwoY = useTransform(progress, [0, 1], ["0%", "-18%"]);
  const orbTwoX = useTransform(progress, [0, 1], ["0%", "-12%"]);
  const orbTwoScale = useTransform(progress, [0, 1], [1, 1.05]);

  const orbThreeY = useTransform(progress, [0, 1], ["0%", "16%"]);
  const orbThreeX = useTransform(progress, [0, 1], ["0%", "-8%"]);
  const orbThreeScale = useTransform(progress, [0, 1], [1, 1.1]);

  return (
    <div className="animated-backdrop bg-[#050505]" aria-hidden="true">
      <motion.div
        className="animated-backdrop__gradient"
        style={{ x: gradientX, y: gradientY }}
      />
      <motion.div
        className="animated-backdrop__grid"
        style={{ y: gridY, opacity: gridOpacity }}
      />
      <motion.div
        className="animated-backdrop__orb animated-backdrop__orb--one"
        style={{ x: orbOneX, y: orbOneY, scale: orbOneScale }}
      />
      <motion.div
        className="animated-backdrop__orb animated-backdrop__orb--two"
        style={{ x: orbTwoX, y: orbTwoY, scale: orbTwoScale }}
      />
      <motion.div
        className="animated-backdrop__orb animated-backdrop__orb--three"
        style={{ x: orbThreeX, y: orbThreeY, scale: orbThreeScale }}
      />

      {/* Ambient Lights based on Language - Movido para o final para ficar visível */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        initial={false}
        animate={{ opacity: language === "pt" ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="absolute top-[10%] left-[5%] h-[60vh] w-[60vh] rounded-full bg-violet-600/40 blur-[120px]" />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        initial={false}
        animate={{ opacity: language === "en" ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="absolute top-[20%] right-[5%] h-[60vh] w-[60vh] rounded-full bg-blue-600/40 blur-[120px]" />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        initial={false}
        animate={{ opacity: language === "es" ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="absolute bottom-[5%] left-[15%] h-[65vh] w-[65vh] rounded-full bg-fuchsia-600/40 blur-[120px]" />
      </motion.div>

      <Duck />
    </div>
  );
}
