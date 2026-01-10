import { TerminalSection } from "./TerminalSection";
import { useLanguage } from "./LanguageContext";
import { HiBriefcase } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-6 space-y-2">

          {/* timeline dot */}
          <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#4af626]" />

          {/* role + status */}
          <div className="flex items-center gap-2 flex-wrap">
            <HiBriefcase className="text-[#4af626]" />

            <span className="text-sm font-bold text-zinc-200">
              {exp.role}
            </span>

            <span className="
              text-[10px]
              px-2 py-0.5
              rounded-full
              bg-[#4af626]/10
              text-[#4af626]
              border border-[#4af626]/30
            ">
              {exp.status}
            </span>
          </div>

          {/* company + link */}
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-xs text-zinc-400
              hover:text-[#4af626]
              transition-colors
              w-fit
            "
          >
            {exp.company}
            <FaExternalLinkAlt className="text-[10px]" />
          </a>

          {/* description */}
          <p className="text-xs text-zinc-300 leading-relaxed max-w-xl">
            {exp.description}
          </p>

          {/* boot feedback */}
          <p className="text-[10px] text-zinc-500 italic">
            [ OK ] experience entry loaded
          </p>
        </div>
      ))}
    </TerminalSection>
  );
}
