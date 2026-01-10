import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import TerminalSequence from './TerminalSequence';

const TerminalWindow = ({ title, label, value, link, isVisible }) => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-xl border border-white/10 shadow-2xl relative flex flex-col h-full min-h-[160px] w-full">

      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-mono truncate ml-4">
          {title}
        </span>
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
          <span className="text-[#4af626] opacity-50">$</span>
          <span>{label}</span>
        </div>

        <div className="pl-5 border-l-2 border-[#4af626]/20 py-2">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="block group"
          >
            <div className="text-[11px] sm:text-sm md:text-lg font-bold text-[#4af626] font-mono">

              <TerminalSequence
                start={isVisible}
                speed={35}
                autoScroll={true}
                steps={[
                  {
                    command: `echo "${value}"`,
                    output: value,
                    fast: true,
                  }
                ]}
              />
            </div>

            <div className="mt-2 text-[8px] text-[#4af626]/50 font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              {'>'} Execute: Protocol_Click
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default function FooterTerminal() {
  const { t } = useLanguage();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, margin: "-100px" });

  const contactData = {
    whatsapp: {
      number: "+55 (64) 9 9263-9076",
      link: "https://wa.me/5564992639076",
    },
    email: {
      address: "pauloaugusto2355@gmail.com",
      link: "mailto:pauloaugusto2355@gmail.com",
    },
  };

  return (
    <footer
      ref={footerRef}
      className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-white/5"
    >

      <h2 className="text-xl font-bold mb-10 text-center">{t.contact}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <TerminalWindow
          title="whatsapp_session.sh"
          label={t.terminal_contact || "Contact via WhatsApp"}
          value={contactData.whatsapp.number}
          link={contactData.whatsapp.link}
          isVisible={isInView}
        />

        <TerminalWindow
          title="mail_protocol.sh"
          label={t.terminal_email || "Send an Email"}
          value={contactData.email.address}
          link={contactData.email.link}
          isVisible={isInView}
        />
      </div>

      <div className="mt-12 text-center font-mono">
        <p className="text-zinc-600 text-[9px] uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Paulo Augusto • All Systems Nominal
        </p>
      </div>
    </footer>
  );
}
