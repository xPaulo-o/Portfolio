"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold text-white">{t.contact.title}</h2>
      <p className="mt-4 text-zinc-400">{t.contact.description}</p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition"
      >
        {t.contact.button}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8"
              onClick={event => event.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white">
                {t.contact.modalTitle}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {t.contact.modalDescription}
              </p>

              <div className="mt-6 space-y-3">
                <motion.a
                  href="mailto:pauloaugusto2355@gamil.com"
                  className="flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 px-5 py-6 text-white hover:border-violet-500/60 hover:shadow-[0_0_18px_rgba(167,139,250,0.45)] transition"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 12V8.24l-7.4 6.47a1 1 0 0 1-1.2 0L4 8.24V18h16z" />
                    </svg>
                  </span>
                  <span className="block">
                    <span className="block font-semibold text-lg">
                      {t.contact.email}
                    </span>
                    <span className="block mt-1 text-sm text-zinc-400">
                      pauloaugusto2355@gamil.com
                    </span>
                  </span>
                </motion.a>
                <motion.a
                  href="https://wa.me/5564992639076"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 px-5 py-6 text-white hover:border-violet-500/60 hover:shadow-[0_0_18px_rgba(167,139,250,0.45)] transition"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 1.64 6.06L0 24l6.19-1.62A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22a10 10 0 0 1-5.12-1.41l-.37-.22-3.67.96.98-3.57-.24-.38A10 10 0 1 1 22 12c0 5.52-4.48 10-10 10zm5.4-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
                    </svg>
                  </span>
                  <span className="block">
                    <span className="block font-semibold text-lg">
                      {t.contact.whatsapp}
                    </span>
                    <span className="block mt-1 text-sm text-zinc-400">
                      +55 64 99263-9076
                    </span>
                  </span>
                </motion.a>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 w-full rounded-xl border border-white/10 px-5 py-3 text-zinc-300 hover:text-white hover:border-white/30 transition"
              >
                {t.contact.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
