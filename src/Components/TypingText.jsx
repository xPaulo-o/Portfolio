import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypingText({
  text = "",
  speed = 40,
  cursor = "block",
  className = "",
  start = true,
  onComplete,
}) {
  const [displayText, setDisplayText] = useState("");

  const cursorMap = {
    block: "█",
    line: "|",
    underscore: "_",
  };

  useEffect(() => {
    if (!start || !text) return;

    let i = 0;
    const stepIncrement = text.length > 200 ? 5 : 1;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i + stepIncrement));
      i += stepIncrement;

      if (i >= text.length) {
        setDisplayText(text);
        clearInterval(typing);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(typing);
  }, [text, speed, start, onComplete]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        {cursorMap[cursor]}
      </motion.span>
    </span>
  );
}