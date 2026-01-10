import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

export default function TerminalEcho({
  command = 'echo "Hello World"',
  output = "",
  speed = 40,
  start = true,
  prompt = "$",
  className = "",
}) {
  const [isCommandFinished, setIsCommandFinished] = useState(false);

  useEffect(() => {
    if (!start) setIsCommandFinished(false);
  }, [start]);

  return (
    <div className={`font-mono text-[#4af626] ${className}`}>
      
      <div className="flex items-center gap-2">
        <span className="opacity-60">{prompt}</span>
        <TypingText
          text={command}
          speed={speed}
          cursor="block"
          start={start}
          onComplete={() => setIsCommandFinished(true)}
        />
      </div>
      
      {isCommandFinished && (
        <motion.div
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          className="pl-5 mt-2 text-zinc-300"
        >
          <TypingText
            text={output}
            speed={speed}
            cursor="underscore"
            start={true}
          />
        </motion.div>
      )}
    </div>
  );
}