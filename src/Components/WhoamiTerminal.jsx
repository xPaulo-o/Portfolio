import { motion, AnimatePresence } from "framer-motion";

export function WhoamiTerminal({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-black/95 font-mono flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl border border-white/10 bg-black p-6 rounded-xl text-sm text-zinc-300"
        >
          <p className="text-[#4af626] mb-2">$ whoami</p>
          <p>paulo@portfolio</p>
          <p className="text-zinc-500 mt-4 text-xs">Press ESC to exit</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
