import { TypingText } from "./TypingText";
import { useOnScreen } from "./useOnScreen";

export function TerminalSection({ command, children }) {
  const [ref, isVisible] = useOnScreen("-120px");

  return (
    <div ref={ref} className="font-mono text-sm mb-10">
      
      <div className="flex items-center gap-2 text-zinc-400 mb-4">
        <span className="text-[#4af626]">$</span>
        <TypingText text={command} start={isVisible} />
      </div>

      <div className="ml-4 border-l border-white/10 pl-4 space-y-3">
        {children}
      </div>
    </div>
  );
}
