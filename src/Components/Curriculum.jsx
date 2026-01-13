import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { FaFileDownload, FaTimes, FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import curriculum_pt from "/Curriculum/CV_Paulo_Augusto_BR.pdf";
import curriculum_en from "/Curriculum/CV_Paulo_Augusto_EN.pdf";
import curriculum_es from "/Curriculum/CV_Paulo_Augusto_ES.pdf";

export default function Curriculum() {
  const [open, setOpen] = useState(false);
  const { t, accent } = useLanguage();

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (

    <div className="max-w-2xl mx-auto px-6 relative z-10 -mt-6 mb-12">
      
      {/* Botão Principal */}
      <button
        onClick={() => setOpen(true)}
        style={{
          "--accent": accent,
          "--accent-dim": accent + "40",
        }}
        className="
          group flex items-center gap-3 px-5 py-2.5 rounded-xl 
          border border-white/10 bg-white/5 backdrop-blur-sm
          text-zinc-300 font-mono text-sm transition-all duration-300 mobile-glow
          hover:text-white hover:border-[var(--accent)] 
          hover:bg-white/10
          hover:shadow-[0_0_20px_-5px_var(--accent-dim)]
          active:scale-95
        "
      >
        <FaFileDownload className="text-lg group-hover:text-[var(--accent)] transition-colors" />
        <span>{t.download_cv || "Curriculum"}</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Escuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Conteúdo do Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              style={{ "--accent": accent }}
              className="
                relative z-10 w-full max-w-2xl 
                bg-[#0a0a0a] border border-white/10 rounded-2xl 
                shadow-2xl overflow-hidden font-mono
              "
            >
              {/* Cabeçalho */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <FaFileDownload className="text-[var(--accent)]" />
                  {t.download_cv || "Download Curriculum"}
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Opções de Download */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <CVOption 
                  lang="Português" 
                  desc="Currículo em PT-BR" 
                  file= {curriculum_pt}
                  accent={accent}
                />
                <CVOption 
                  lang="English" 
                  desc="Resume in English" 
                  file={curriculum_en} 
                  accent={accent}
                />
                <CVOption 
                  lang="Español" 
                  desc= "Curriculum en Español"
                  file={curriculum_es} 
                  accent={accent}
                />
              </div>

              {/* Rodapé */}
              <div className="px-6 py-3 border-t border-white/10 bg-white/5 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  [ ESC ] to close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Componente auxiliar para as opções de download
function CVOption({ lang, desc, file, accent }) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex flex-col items-center justify-center p-6 rounded-xl
        border border-white/5 bg-white/5
        transition-all duration-300 group mobile-glow
        hover:border-[var(--accent)] hover:bg-[var(--accent)]/5
        hover:shadow-[0_0_20px_-5px_var(--accent-dim)]
      "
      style={{ "--accent": accent, "--accent-dim": accent + "40" }}
    >
      <FaDownload className="text-2xl mb-3 text-zinc-500 group-hover:text-[var(--accent)] transition-colors" />
      <h3 className="text-white font-bold mb-1">{lang}</h3>
      <p className="text-xs text-zinc-500 group-hover:text-zinc-300 text-center">{desc}</p>
    </a>
  );
}
