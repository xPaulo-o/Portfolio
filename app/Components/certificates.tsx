"use client";

import { useState } from "react";
import { ChevronDown, Award, ArrowUpRight } from "lucide-react";

const certificates = [
  {
    title: "AWS Technical Essentials",
    issuer: "AWS Training & Certification",
    date: "2026",
    link: "/Certificados/AWS Technical Essentials.pdf",
  },
  {
    title: "Essentials of Prompt Engineering",
    issuer: "AWS Training & Certification",
    date: "2026",
    link: "/Certificados/AWS Training & Certification.pdf",
  },
  {
    title: "Workshop Android Pentester",
    issuer: "Solyd offensive Security",
    date: "2026",
    link: "/Certificados/certificado 2.pdf",
  },
  {
    title: " Python Básico",
    issuer: "Solyd offensive Security",
    date: "2025",
    link: "/Certificados/certificado 3.pdf",
  },
  {
    title: "Introdução ao Hacking e Pentest 2.0",
    issuer: "Solyd offensive Security",
    date: "2025",
    link: "/Certificados/certificado.pdf",
  },
  {
    title: "Java (Basic)",
    issuer: "Hacker Rank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/792e7ebd319c",
  },
];

export default function Certificates() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black px-3 py-4 text-white md:min-h-screen md:px-10 md:py-6 lg:px-16">
      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute left-6 top-12 h-[1px] w-32 bg-gradient-to-r from-orange-500 to-transparent md:left-16 lg:left-24" />
        <div className="absolute left-6 top-12 h-24 w-[1px] bg-gradient-to-b from-orange-500 to-transparent md:left-16 lg:left-24" />
        <div className="absolute right-6 bottom-20 h-[1px] w-48 bg-gradient-to-l from-orange-500 via-orange-500/30 to-transparent md:right-16 lg:right-24" />
      </div>

      {/* HEXAGON BACKGROUND */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 opacity-45 md:h-[680px] md:w-[680px] md:opacity-50"
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
      <div
        className={`relative z-10 flex w-full max-w-6xl flex-col overflow-hidden rounded-[24px] border border-white/10 bg-black/70 px-5 py-7 backdrop-blur-sm md:h-[82vh] md:rounded-[32px] md:px-12 md:py-8 ${
          isOpen
            ? "min-h-[88svh] md:min-h-0"
            : "min-h-[64svh] justify-center md:min-h-0 md:justify-start"
        }`}
      >
        {/* HEADER */}
        <div className="shrink-0 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 md:mb-5 md:gap-4">
            <div className="h-px w-9 bg-orange-500 md:w-12" />
            <span className="text-[10px] uppercase tracking-[0.34em] text-orange-400 md:text-[11px] md:tracking-[0.45em]">
              Certifications
            </span>
            <div className="h-px w-9 bg-orange-500 md:w-12" />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group mx-auto flex items-center justify-center gap-3 md:gap-5"
          >
            <h2 className="text-[clamp(1.75rem,9vw,2.6rem)] font-black uppercase leading-[0.95] tracking-[0.08em] md:text-[clamp(2rem,5vw,4.5rem)] md:tracking-[0.12em]">
              Certificates
            </h2>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-500/50 bg-black/40 transition-all duration-300 group-hover:bg-orange-500/10 md:h-14 md:w-14">
              <ChevronDown
                size={22}
                className={`text-orange-400 transition-transform duration-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>

          <p className="mx-auto mt-5 max-w-[290px] text-sm leading-7 text-zinc-400 md:mt-6 md:max-w-3xl md:text-base">
            A collection of courses, achievements, and professional learning
            milestones.
          </p>
        </div>

        {/* LIST AREA */}
        <div
          className={`relative z-10 mt-6 min-h-0 w-full transition-all duration-700 md:mt-8 ${
            isOpen ? "flex-1 opacity-100" : "h-0 flex-none opacity-0"
          }`}
        >
          <div className="certificates-scroll h-full min-h-0 overflow-y-auto pr-3">
            <div className="grid gap-4 pb-6 md:grid-cols-2">
              {certificates.map((certificate, index) => (
                <a
                  key={index}
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[108px] items-center justify-between rounded-2xl border border-orange-500/20 bg-black/50 p-4 transition-all duration-300 hover:border-orange-500/60 hover:bg-orange-500/10 md:min-h-[120px] md:p-5"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/5">
                      <Award size={20} className="text-orange-400" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-black uppercase tracking-[0.12em] text-white">
                        {certificate.title}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-orange-400">
                        {certificate.issuer}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        {certificate.date}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="ml-4 shrink-0 text-orange-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="shrink-0 pt-6 text-center text-[9px] uppercase tracking-[0.3em] text-zinc-600 md:pt-5 md:text-[10px] md:tracking-[0.35em]">
          Paulo Augusto Portfolio
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

      </div>
    </section>
  );
}
