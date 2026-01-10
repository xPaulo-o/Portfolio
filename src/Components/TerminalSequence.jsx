import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";

function randomDelay(min = 300, max = 900) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTime() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function TerminalSequence({
  steps = [],
  speed = 40,
  start = false,
  user = "paulo",
  host = "kali",
  path = "~",
  gitBranch = "main",
  autoScroll = true,
  className = "",
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const containerRef = useRef(null);

  const isSudo = steps[currentStep]?.sudo;

  const promptUser = isSudo ? "root" : user;
  const promptHost = host;

  // Scroll automático
  useEffect(() => {
    if (autoScroll && containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentStep, showOutput, autoScroll]);

  // Reset quando entra em view
  useEffect(() => {
    if (start) {
      setCurrentStep(0);
      setShowOutput(false);
    }
  }, [start]);

  useEffect(() => {
    if (!start || currentStep >= steps.length) return;

    setShowOutput(false);

    const delay =
      steps[currentStep].command.length * speed + randomDelay();

    const timer = setTimeout(() => {
      setShowOutput(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentStep, start, speed, steps]);

  const nextStep = () => {
    setTimeout(() => {
      setShowOutput(false);
      setCurrentStep((prev) => prev + 1);
    }, randomDelay(700, 1400));
  };

  const step = steps[currentStep];
  if (!step) return null;

  return (
    <div
      ref={containerRef}
      className={`font-mono space-y-2 max-h-[280px] overflow-hidden ${className}`}
    >
      {/* PROMPT */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-zinc-500 text-xs">
          [{getTime()}]
        </span>

        <span className="text-[#4af626]">
          {promptUser}@{promptHost}
        </span>

        <span className="text-blue-400">
          :{path}
        </span>

        <span className="text-purple-400">
          ({gitBranch})
        </span>

        <span className="text-[#4af626]">$</span>

        {/* INPUT */}
        {!step.sudo ? (
          <TypingText
            text={step.command}
            speed={speed}
            cursor="block"
            start={start}
            className="text-[#4af626]"
          />
        ) : (
          <span className="text-zinc-500">********</span>
        )}
      </div>

      {/* OUTPUT */}
      {showOutput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`pl-5 whitespace-pre-line ${
            step.error ? "text-red-400" : "text-zinc-300"
          }`}
          onAnimationComplete={() => {
            if (currentStep < steps.length - 1) {
              nextStep();
            }
          }}
        >
          <TypingText
            text={
              step.error
                ? `${step.command}: command not found`
                : step.output || ""
            }
            speed={step.fast ? 10 : speed}
            cursor="underscore"
            start={showOutput}
          />
        </motion.div>
      )}

      {/* INPUT FINAL (idle) */}
      {currentStep === steps.length - 1 && showOutput && (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-zinc-500 text-xs">
            [{getTime()}]
          </span>
          <span className="text-[#4af626]">
            {promptUser}@{promptHost}
          </span>
          <span className="text-blue-400">
            :{path}
          </span>
          <span className="text-purple-400">
            ({gitBranch})
          </span>
          <span className="text-[#4af626]">$</span>
          <span className="animate-pulse text-[#4af626]">█</span>
        </div>
      )}
    </div>
  );
}
