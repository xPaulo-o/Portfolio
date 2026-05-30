"use client";

import { useState } from "react";
import { Mail, MessageCircle, X, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const email = "pauloaugusto2355@gmail.com";
  const whatsapp = "5564992639076";
  const contactSubject = "Contato pelo portfolio";
  const contactMessage =
    "Ola, Paulo! Vi seu portfolio e gostaria de conversar sobre uma oportunidade/projeto.";
  const emailHref = `mailto:${email}?subject=${encodeURIComponent(
    contactSubject
  )}&body=${encodeURIComponent(contactMessage)}`;
  const whatsappHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    contactMessage
  )}`;

  return (
    <footer className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-6 text-white md:px-10 lg:px-16">
      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute left-6 top-12 h-[1px] w-32 bg-gradient-to-r from-orange-500 to-transparent md:left-16 lg:left-24" />
        <div className="absolute left-6 top-12 h-24 w-[1px] bg-gradient-to-b from-orange-500 to-transparent md:left-16 lg:left-24" />

        <div className="absolute right-6 bottom-20 h-[1px] w-48 bg-gradient-to-l from-orange-500 via-orange-500/30 to-transparent md:right-16 lg:right-24" />
      </div>

      {/* HEXAGON BACKGROUND */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 opacity-70 md:h-[680px] md:w-[680px]"
        viewBox="0 0 700 700"
        fill="none"
      >
        <polygon
          points="350,40 610,175 610,525 350,660 90,525 90,175"
          stroke="rgba(249,115,22,0.22)"
          strokeWidth="1.5"
        />
        <polygon
          points="350,85 565,200 565,500 350,615 135,500 135,200"
          stroke="rgba(249,115,22,0.5)"
          strokeWidth="1.5"
        />
      </svg>

      {/* MAIN CARD */}
      <div className="relative z-10 flex h-[82vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-black/70 px-6 py-10 backdrop-blur-sm">
        <div className="w-full max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-[11px] uppercase tracking-[0.45em] text-orange-400">
              Contact
            </span>
            <div className="h-px w-12 bg-orange-500" />
          </div>

          <h2 className="text-[clamp(2.7rem,7vw,5.8rem)] font-black uppercase leading-[0.95] tracking-[0.12em]">
            Let&apos;s Work
            <br />
            Together
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
            Have a project in mind? I am open to collaborations, full-time
            positions, and freelance opportunities.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="group mx-auto mt-10 flex h-[68px] w-full max-w-[460px] items-center overflow-hidden rounded-full border border-orange-500/70 bg-black/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-orange-500/10"
          >
            <div className="flex flex-1 items-center justify-center">
              <span className="text-[12px] font-semibold uppercase tracking-[0.45em] text-orange-400">
                Say Hello
              </span>
            </div>

            <div className="h-full w-px bg-orange-500/30" />

            <div className="flex h-full w-[82px] items-center justify-center">
              <ArrowUpRight
                size={22}
                strokeWidth={1.8}
                className="text-orange-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </button>

          <div className="mt-10 text-[10px] uppercase tracking-[0.35em] text-zinc-600">
            Paulo Augusto Portfolio
          </div>
        </div>

        {/* LEFT DOTS */}
        <div className="absolute bottom-6 left-6 hidden grid-cols-4 gap-3 md:grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-[2px] w-[2px] rounded-full bg-orange-500"
            />
          ))}
        </div>

        {/* RIGHT DOTS */}
        <div className="absolute bottom-6 right-6 hidden grid-cols-4 gap-3 md:grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-[2px] w-[2px] rounded-full bg-orange-500"
            />
          ))}
        </div>
      </div>

      {/* CONTACT MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-orange-500/30 bg-zinc-950 p-8 shadow-2xl shadow-orange-500/10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 bg-black/40 text-orange-400 transition-all duration-300 hover:bg-orange-500/10"
            >
              <X size={18} />
            </button>

            <div className="mb-8">
              <div className="mb-4 h-px w-16 bg-orange-500" />
              <h3 className="text-3xl font-black uppercase tracking-[0.14em]">
                Say Hello
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Choose one contact option below.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={emailHref}
                className="group flex items-center justify-between rounded-2xl border border-orange-500/20 bg-black/40 p-5 transition-all duration-300 hover:border-orange-500/60 hover:bg-orange-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30">
                    <Mail size={20} className="text-orange-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm text-zinc-300">
                      {email}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-orange-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-orange-500/20 bg-black/40 p-5 transition-all duration-300 hover:border-orange-500/60 hover:bg-orange-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30">
                    <MessageCircle size={20} className="text-orange-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">
                      +55 64 99263-9076
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-orange-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
