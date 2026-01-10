import { HiLightningBolt } from "react-icons/hi";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiKalilinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TerminalSection } from "./TerminalSection";
import { useLanguage } from "./LanguageContext";
import { TypingText } from "./TypingText";

export function Skills() {
  const { t, lang, accent } = useLanguage();

  /* ================= TECH SKILLS ================= */
  const skills = [
    { name: "React", icon: <SiReact />, color: "#61DAFB", link: "https://react.dev" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8", link: "https://tailwindcss.com/docs" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", icon: <SiPython />, color: "#3776AB", link: "https://docs.python.org/3/" },
    { name: "Java", icon: <FaJava />, color: "#E76F00", link: "https://docs.oracle.com/en/java/" },
    { name: "Kali Linux", icon: <SiKalilinux />, color: "#557C94", link: "https://www.kali.org/docs/" },
  ];

  /* ================= LANG ================= */
  const langEnv = {
    pt: "pt_BR",
    en: "en_US",
    es: "es_ES",
  };

  const languages = [
    {
      name: "Português",
      level: "Fluent",
      progress: 100,
      cert: "Native",
      color: "#4af626",
    },
    {
      name: "Español",
      level: "Fluent",
      progress: 100,
      cert: "DELE",
      color: "#facc15",
    },
    {
      name: "English",
      level: "Intermediate",
      progress: 65,
      cert: "TOEFL (study)",
      color: "#38bdf8",
    },
  ];

  return (
    <TerminalSection command="ls skills/">
      {/* ================= TECH ================= */}
      <div className="flex items-center gap-2 mb-4">
        <HiLightningBolt className="text-yellow-400" />
        <h3 className="text-sm font-bold text-zinc-200">
          {t.technical_skills}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3 pl-4 border-l border-white/10">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              px-4 py-2
              rounded-lg
              border border-white/10
              bg-black/40
              text-xs text-zinc-300
              font-mono
              transition-all duration-300
              hover:text-white
              hover:border-[var(--skill)]
              hover:shadow-[0_0_25px_-10px_var(--skill)]
            "
            style={{ "--skill": skill.color }}
          >
            <span className="text-base">{skill.icon}</span>
            {skill.name}
          </a>
        ))}
      </div>

      {/* ================= LANGUAGES ================= */}
      <div className="mt-6">
        {/* ENV */}
        <p className="text-xs text-zinc-400 mb-2 font-mono">
          $ echo $LANG{" "}
          <span style={{ color: accent }}>{langEnv[lang]}</span>
        </p>

        {/* CAT JSON */}
        <p className="text-xs text-zinc-400 mb-3 font-mono">
          <TypingText text="cat languages.json" speed={25} />
        </p>

        <div className="pl-4 border-l border-white/10 space-y-3">
          {languages.map((lng, index) => (
            <div
              key={index}
              className="
                p-3 rounded-lg
                border border-white/10
                bg-black/40
                font-mono
                transition-all duration-300
                hover:border-[var(--lang)]
                hover:shadow-[0_0_25px_-10px_var(--lang)]
              "
              style={{ "--lang": lng.color }}
              title={`Certification: ${lng.cert}`}
            >
              {/* HEADER */}
              <div className="flex justify-between text-xs text-zinc-300 mb-2">
                <span className="font-bold">{lng.name}</span>
                <span className="opacity-70">{lng.level}</span>
              </div>

              {/* PROGRESS */}
              <div className="h-1.5 w-full bg-white/10 rounded overflow-hidden">
                <div
                  className="h-full transition-all duration-700"
                  style={{
                    width: `${lng.progress}%`,
                    backgroundColor: lng.color,
                  }}
                />
              </div>

              {/* CERT */}
              <p className="mt-1 text-[10px] text-zinc-500 italic">
                cert: {lng.cert}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-zinc-500 mt-4 italic">
        [ OK ] languages.json loaded successfully
      </p>
    </TerminalSection>
  );
}
