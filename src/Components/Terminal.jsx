import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Terminal.css";

const isMobile = window.innerWidth < 768;

const getTime = () =>
  new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

const asciiFrames = [
`   ▄▄▄▄▄▄▄▄▄
  ▄█▄ ▄ ▄ ▄█▄
  ███████████
  ▀█████████▀`,
`   ▄▄▄▄▄▄▄▄▄
  ▄█▄ ▄ ▄ ▄█▄
  ███████████
  ▄█████████▄`,
];

export default function Terminal({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [isExiting, setIsExiting] = useState(false);
  const [asciiFrame, setAsciiFrame] = useState(0);
  const [progress, setProgress] = useState(0);

  const sequence = [
    { type: "boot", text: "Starting system services" },
    { type: "boot", text: "Loading kernel modules" },
    { type: "boot", text: "Initializing network manager" },
    { type: "boot", text: "Mounting file systems" },

    { type: "command", text: "npm install portfolio" },
    { type: "output", text: "Resolving dependencies..." },
    { type: "warning", text: "warning: deprecated package detected" },
    { type: "success", text: "+ Added 42 packages in 2.4s" },

    { type: "command", text: "npm run build" },
    { type: "ascii" },
    { type: "progress" },
    { type: "success", text: "✔ Build completed successfully" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAsciiFrame((p) => (p + 1) % asciiFrames.length);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (lines.some((l) => l.type === "progress")) {
      const interval = setInterval(() => {
        setProgress((p) => (p < 100 ? p + Math.random() * 8 : 100));
      }, 180);
      return () => clearInterval(interval);
    }
  }, [lines]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let buffer = [];

    function next() {
      if (lineIndex >= sequence.length) {
        document.documentElement.style.setProperty(
          "--boot-accent",
          "#4af626"
        );

        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
            sessionStorage.setItem("intro_shown", "true");
          }, 900);
        }, 1200);
        return;
      }

      const line = sequence[lineIndex];

      if (line.type === "boot") {
        buffer.push({ ...line });
        setLines([...buffer]);
        lineIndex++;
        setTimeout(next, 380);
        return;
      }

      if (line.type !== "command") {
        buffer.push(line);
        setLines([...buffer]);
        lineIndex++;
        setTimeout(next, 420);
        return;
      }

      if (charIndex === 0) {
        buffer.push({ ...line, text: "" });
      }

      if (charIndex < line.text.length) {
        buffer[lineIndex].text += line.text[charIndex];
        setLines([...buffer]);
        charIndex++;
        setTimeout(next, 45);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(next, 650);
      }
    }

    next();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="terminal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
        >
          <motion.div
            className="terminal-window"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="close" />
                <span className="minimize" />
                <span className="maximize" />
              </div>
              <div className="terminal-title">
                paulo@kali:~ (boot)
              </div>
            </div>

            <div className="terminal-body">
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`line ${line.type}`}
                >
                  {line.type === "boot" && (
                    <>
                      <span>{line.text}</span>
                      <span className="boot-ok"> [ OK ]</span>
                    </>
                  )}

                  {line.type === "command" && (
                    <span className="prompt">
                      <span className="time">[{getTime()}]</span>{" "}
                      <span className="user">paulo@kali</span>
                      <span className="path">:~</span>{" "}
                      <span className="git">(portfolio)</span>{" "}
                      <span className="dollar">$</span>{" "}
                      {line.text}
                    </span>
                  )}

                  {line.type === "ascii" && !isMobile && (
                    <pre>{asciiFrames[asciiFrame]}</pre>
                  )}

                  {line.type === "progress" && (
                    <div className="progress-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                      />
                      <span className="progress-text">
                        Building… {Math.floor(progress)}%
                      </span>
                    </div>
                  )}

                  {["output", "warning", "success"].includes(line.type) && (
                    <span>{line.text}</span>
                  )}
                </motion.div>
              ))}

              <div className="line command">
                <span className="prompt">
                  <span className="time">[{getTime()}]</span>{" "}
                  <span className="user">paulo@kali</span>
                  <span className="path">:~</span>{" "}
                  <span className="git">(portfolio)</span>{" "}
                  <span className="dollar">$</span>{" "}
                </span>
                <span className="cursor">█</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
