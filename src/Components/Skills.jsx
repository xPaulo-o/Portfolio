import { HiLightningBolt } from "react-icons/hi";
import {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiPython,
    SiKalilinux,
} from "react-icons/si";

import { TerminalSection } from "./TerminalSection";
import { useLanguage } from "./LanguageContext";
import { FaJava } from "react-icons/fa";


export function Skills() {
    const { t } = useLanguage();

    const skills = [
        {
            name: "React",
            icon: <SiReact />,
            color: "#61DAFB",
            link: "https://react.dev",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            color: "#38BDF8",
            link: "https://tailwindcss.com/docs",
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />,
            color: "#F7DF1E",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            name: "Python",
            icon: <SiPython />,
            color: "#3776AB",
            link: "https://docs.python.org/3/",
        },
        {
            name: "Java",
            icon: <FaJava />,
            color: "#E76F00",
            link: "https://docs.oracle.com/en/java/",
        },
        {
            name: "Kali Linux",
            icon: <SiKalilinux />,
            color: "#557C94",
            link: "https://www.kali.org/docs/",
        },
    ];

    return (
        <TerminalSection command="ls skills/">
            {/* título */}
            <div className="flex items-center gap-2 mb-4">
                <HiLightningBolt className="text-yellow-400" />
                <h3 className="text-sm font-bold text-zinc-200">
                    {t.technical_skills}
                </h3>
            </div>

            {/* skills */}
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
              cursor-pointer
            "
                        style={{ "--skill": skill.color }}
                        title={`Abrir documentação de ${skill.name}`}
                    >
                        <span className="text-base">{skill.icon}</span>
                        {skill.name}
                    </a>
                ))}
            </div>

            <p className="text-[10px] text-zinc-500 mt-4 italic">
                [ OK ] documentation links ready
            </p>
        </TerminalSection>
    );
}
