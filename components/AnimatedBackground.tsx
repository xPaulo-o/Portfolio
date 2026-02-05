"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function AnimatedBackground() {
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
    <div className="animated-backdrop" aria-hidden="true">
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
    </div>
  );
}
