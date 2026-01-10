import { TerminalSection } from "./TerminalSection";
import { useLanguage } from "./LanguageContext";
import { HiBriefcase } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TypingText } from "./TypingText";
import { useOnScreen } from "./useOnScreen";
import { Reveal } from "./Reveal";

function ExperienceCard({ exp }) {
  const { accent } = useLanguage();
  const [ref, isVisible] = useOnScreen("-80px");

  // Gera um nome de arquivo fake baseado na empresa
  const filename = `${exp.company.split(" ")[0].toLowerCase()}_log.txt`;

  return (
    <a
      ref={ref}
      href={exp.link}
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
        <TypingText text={`cat ${filename}`} start={isVisible} />
      </div>

      <div className="flex items-center gap-3 mb-2">
        <HiBriefcase className="text-[var(--accent)] text-lg" />
        <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
          {exp.role}
        </h3>
      </div>

      <div className="ml-7">
        <p className="text-xs text-zinc-400 flex items-center gap-2 mb-3">
          {exp.company}
          <FaExternalLinkAlt className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity" />
        </p>

        <p className="text-xs text-zinc-300 leading-relaxed opacity-90">
          {exp.description}
        </p>

        <p className="text-[10px] text-[var(--accent)] mt-3 italic opacity-80">
          ✔ {exp.status}
        </p>
      </div>
    </a>
  );
}

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Infortel Soluções em Informática",
      role: t.infortel_role,
      description: t.exp_desc_infortel,
      link: "https://www.instagram.com/infortel.informatica/",
      status: "Completed",
    },
    {
      company: "Dipcell",
      role: t.dipcell_role,
      description: t.exp_desc_dipcell,
      link: "https://www.instagram.com/dip_cell_nzr_/",
      status: "Completed",
    },
    {
      company: "Gelnex LTDA",
      role:
        t.gelnex_role,
      description:
        t.exp_desc_gelnex,
      link: "https://menvievagas.com.br/sobre/gelnex",
      status: "Completed",
    },
  ];

  return (
    <TerminalSection command="cat experience.log --timeline">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Reveal key={index}>
            <ExperienceCard exp={exp} />
          </Reveal>
        ))}
      </div>
    </TerminalSection>
  );
}
