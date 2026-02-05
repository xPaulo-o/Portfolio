"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speedMs?: number;
  className?: string;
};

export default function Typewriter(props: Props) {
  return <TypewriterInner key={props.text} {...props} />;
}

function TypewriterInner({ text, speedMs = 120, className }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    const interval = window.setInterval(() => {
      setIndex(prev => {
        if (prev >= text.length) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speedMs);

    return () => window.clearInterval(interval);
  }, [text, speedMs]);

  const visible = text.slice(0, index);
  const done = index >= text.length;

  return (
    <span className={className}>
      {visible}
      <span
        className={`inline-block w-[2px] h-[1.1em] align-[-0.1em] ml-1 bg-violet-400 ${
          done ? "animate-[blink_1.6s_infinite]" : "opacity-0"
        }`}
      />
    </span>
  );
}
