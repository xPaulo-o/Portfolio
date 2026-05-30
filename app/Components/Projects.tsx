"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Tetris CSharp",
    category: "Game Development",
    image:
      "/projects/Tetris.png",
    repository: "https://github.com/xPaulo-o/Tetris-CSharp",
  },
  {
    title: "Typing Hero",
    category: "Game Development",
    image:
      "/projects/Typinghero.png",
    repository: "https://github.com/xPaulo-o/typing_hero",
  },
  {
    title: "Comming Soon",
    category: "Level Design",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    repository: "",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-8 text-white md:px-16 md:py-10 lg:px-24">

      {/* ===================================== */}
      {/* LINHAS DECORATIVAS LARANJAS (BACKGROUND) */}
      {/* ===================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        {/* Linha Horizontal Superior Esquerda */}
        <div className="absolute left-6 top-12 h-[1px] w-32 bg-gradient-to-r from-orange-500 to-transparent md:left-16 lg:left-24" />
        {/* Linha Vertical Superior Esquerda */}
        <div className="absolute left-6 top-12 h-24 w-[1px] bg-gradient-to-b from-orange-500 to-transparent md:left-16 lg:left-24" />
        
        {/* Linha Fina de Suporte no canto inferior direito perto dos pontos */}
        <div className="absolute right-6 bottom-20 h-[1px] w-48 bg-gradient-to-l from-orange-500 via-orange-500/30 to-transparent md:right-16 lg:right-24" />
      </div>

      {/* CONTAINER LIMITADOR */}
      <div className="relative z-10 w-full max-w-5xl">
        
        {/* PROJECTS GRID */}
        <div className="grid w-full gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[24px] border border-orange-500/20 bg-zinc-950/70 backdrop-blur-sm"
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-orange-500/0 transition-all duration-500 group-hover:bg-orange-500/5" />

              {/* IMAGE */}
              <div className="relative h-[190px] overflow-hidden md:h-[220px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* HEXAGON DETAIL */}
                <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 border border-orange-500/20 clip-hexagon opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </div>

              {/* CONTENT AREA */}
              <div className="relative z-10 px-7 pb-7 pt-5">

                {/* CATEGORY */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-6 bg-orange-500" />
                  <span className="text-[10px] uppercase tracking-[0.35em] text-orange-400">
                    {project.category}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black uppercase tracking-[0.06em] leading-tight">
                    {project.title}
                  </h3>

                  <a
                    href={project.repository || undefined}
                    target={project.repository ? "_blank" : undefined}
                    rel={project.repository ? "noopener noreferrer" : undefined}
                    aria-label={`View ${project.title} repository`}
                    aria-disabled={!project.repository}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/5 transition-all duration-300 hover:bg-orange-500/10 ${
                      project.repository ? "" : "pointer-events-none opacity-50"
                    }`}
                  >
                    <ArrowUpRight
                      size={16}
                      className="text-orange-400"
                    />
                  </a>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">

                  {/* REPO */}
                  <a
                    href={project.repository || undefined}
                    target={project.repository ? "_blank" : undefined}
                    rel={project.repository ? "noopener noreferrer" : undefined}
                    aria-disabled={!project.repository}
                    className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-orange-500/30 bg-black/40 px-4 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-500/10 ${
                      project.repository ? "" : "pointer-events-none opacity-50"
                    }`}
                  >
                    <FaGithub
                      size={14}
                      className="text-orange-400"
                    />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-300">
                      View Repo
                    </span>
                  </a>

                  {/* CODE */}
                  <a
                    href={project.repository || undefined}
                    target={project.repository ? "_blank" : undefined}
                    rel={project.repository ? "noopener noreferrer" : undefined}
                    aria-label={`View ${project.title} code`}
                    aria-disabled={!project.repository}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-black/40 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-500/10 ${
                      project.repository ? "" : "pointer-events-none opacity-50"
                    }`}
                  >
                    <Code2
                      size={15}
                      className="text-orange-400"
                    />
                  </a>
                </div>
              </div>

              {/* BORDER LIGHT */}
              <div className="absolute inset-0 rounded-[24px] border border-orange-500/0 transition-all duration-500 group-hover:border-orange-500/30" />
            </div>
          ))}
        </div>
      </div>

      {/* ===================================== */}
      {/* BOTTOM DOTS */}
      {/* ===================================== */}
      <div className="absolute bottom-6 right-6 hidden grid-cols-4 gap-3 md:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-[2px] w-[2px] rounded-full bg-orange-500"
          />
        ))}
      </div>

      {/* HEXAGON STYLE */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 5%,
            75% 5%,
            100% 50%,
            75% 95%,
            25% 95%,
            0% 50%
          );
        }
      `}</style>
    </section>
  );
}
