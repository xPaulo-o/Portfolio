import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";
import { HiAcademicCap } from "react-icons/hi";
import { TerminalSection } from "./TerminalSection";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TypingText } from "./TypingText";
import { useOnScreen } from "./useOnScreen";

function EducationCard({ item }) {
  const { accent } = useLanguage();
  const [ref, isVisible] = useOnScreen("-80px");

  return (
    <a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        "--accent": accent,
        "--accent-dim": accent + "59",
        "--accent-border": accent + "66",
      }}
      className="
        block rounded-2xl
        border border-white/10
        bg-black/40
        p-5
        font-mono
        transition-all duration-300
        hover:border-[var(--accent-border)]
        hover:shadow-[0_0_30px_-10px_var(--accent-dim)]
        group
      "
    >
      {/* Fake command */}
      <div className="flex items-center gap-2 text-sm mb-3 text-zinc-400">
        <span className="text-[var(--accent)]">$</span>
        <TypingText
          text={item.command}
          start={isVisible}
        />
      </div>

      <div className="flex items-center gap-3 mb-2">
        <HiAcademicCap className="text-[var(--accent)] text-lg" />
        <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
          {item.title}
        </h3>
      </div>

      <div className="ml-7">
        <p className="text-xs text-zinc-400 flex items-center gap-2">
          {item.institution}
          <FaExternalLinkAlt className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity" />
        </p>

        <p className="text-[10px] text-[var(--accent)] mt-3 italic opacity-80">
          ✔ {item.status}
        </p>
      </div>
    </a>
  );
}

export function Education() {
  const { t } = useLanguage();

  const educationList = [
    {
      title: t.graduation,
      institution: t.university,
      link: "https://aphonsiano.edu.br",
      command: "cat degree_it.pdf",
      status: t.education
    },
    {
      title: t.graduation2,
      institution: t.university2,
      link: "https://www.instagram.com/visioncursosgo/",
      command: "cat technical_repair.pdf",
      status: t.education
    }
  ];

  return (
    <section className="py-12 font-mono">
      {/* título */}
      <h2 className="text-xl font-bold mb-6 text-white">
        {t.education}
      </h2>

      <TerminalSection command={t.education_cmd || "cat education.txt"}>
        <div className="space-y-4">
          {educationList.map((item, index) => (
            <Reveal key={index}>
              <EducationCard item={item} />
            </Reveal>
          ))}
        </div>
      </TerminalSection>
    </section>
  );
}
