import { FaGithub } from "react-icons/fa";
import { Reveal } from "./Reveal";
import { TypingText } from "./TypingText";
import { useOnScreen } from "./useOnScreen";
import { useLanguage } from "./LanguageContext";


const projects = [
  {
    title: {
      pt: "Sistema Dipcell",
      es: "Sistema Dipcell",
      en: "Dipcell System",
    },
    description: {
      pt: "Sistema de ordens de serviço e vendas desenvolvido para a loja Dipcell.",
      es: "Sistema de órdenes de servicio y ventas desarrollado para la tienda Dipcell.",
      en: "Service order and sales system developed for the Dipcell store.",
    },
    tech: ["Python", "Tkinter", "SQLite"],
    link: "https://github.com/xPaulo-o/Sistema_Dipcell",
    type: "Desktop",
    folder: "desktop_app",
  },
  {
    title: {
      pt: "Typing Hero",
      es: "Typing Hero",
      en: "Typing Hero",
    },
    description: {
      pt: "Jogo estilo Guitar Hero onde palavras caem no ritmo da música.",
      es: "Juego estilo Guitar Hero donde las palabras caen al ritmo de la música.",
      en: "Guitar Hero–style game where words fall to the rhythm of the music.",
    },
    tech: ["Python", "Pygame"],
    link: "https://github.com/xPaulo-o/typing_hero",
    type: "Game",
    folder: "typing_hero_game",
  },
];

function TypeBadge({ type }) {
  const colors = {
    Desktop: "bg-blue-500/10 text-blue-400 border-blue-400/30",
    Web: "bg-purple-500/10 text-purple-400 border-purple-400/30",
    Game: "bg-green-500/10 text-green-400 border-green-400/30",
  };

  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${colors[type]}`}>
      {type}
    </span>
  );
}

function ProjectCard({ project }) {
  const { lang, t } = useLanguage();
  const [ref, isVisible] = useOnScreen("-80px");

  return (
    <Reveal>
      <div
        ref={ref}
        className="
          group rounded-2xl
          border border-white/10
          bg-black/40
          p-6
          font-mono
          transition-all duration-300
          hover:border-[#4af626]/40
          hover:shadow-[0_0_30px_-10px_rgba(74,246,38,0.35)]
        "
      >
        <div className="text-xs text-zinc-400 mb-3 flex items-center gap-2">
          <span className="text-[#4af626]">$</span>
          <TypingText
            text={`${t.projects_open} ${project.folder}`}
            start={isVisible}
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white">
            {project.title[lang]}
          </h3>
          <TypeBadge type={project.type} />
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed">
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-[10px] px-2 py-1 rounded-md border border-white/10 bg-black/30 text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#4af626] hover:underline"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProjectGrid() {
  const { t } = useLanguage();
  const [ref, isVisible] = useOnScreen("-120px");

  return (
    <section ref={ref} className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xl font-bold mb-6 text-white">
        {t.projects}
      </h2>

      <div className="font-mono text-xs text-zinc-400 mb-6 flex gap-2">
        <span className="text-[#4af626]">$</span>
        <TypingText text={t.projects_ls} start={isVisible} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
