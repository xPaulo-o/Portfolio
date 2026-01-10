import { HiBadgeCheck } from "react-icons/hi";
import { Reveal } from "./Reveal";

export function Certificados() {
  const listaCertificados = [
    {
      title: "Java (Basic)",
      org: "HackerRank",
      year: "2026",
      link: "https://www.hackerrank.com/certificates/792e7ebd319c",
      info: "Credencial Online ↗",
      verified: true,
    },
    {
      title: "Workshop Android Pentester",
      org: "Solyd Offensive Security",
      year: "2026",
      link: "public/certificados/certificado 2.pdf",
      info: "4 horas • Ver PDF ↗",
      verified: true,
    },
    {
      title: "Python Básico",
      org: "Solyd Offensive Security",
      year: "2025",
      link: "public/certificados/certificado 3.pdf",
      info: "8 horas • Ver PDF ↗",
      verified: true,
    },
    {
      title: "Introdução ao Hacking e Pentest 2.0",
      org: "Solyd Offensive Security",
      year: "2025",
      link: "public/certificados/certificado.pdf",
      info: "8 horas • Ver PDF ↗",
      verified: true,
    },
  ];

  return (
    <div className="space-y-4">
      {listaCertificados.map((cert, index) => (
        <Reveal key={index}>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block rounded-2xl
              border border-white/10
              bg-black/40
              p-5
              font-mono
              transition-all duration-300
              hover:border-[#4af626]/40
              hover:shadow-[0_0_30px_-10px_rgba(74,246,38,0.35)]
              group
            "
          >
            {/* Linha de comando */}
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-[#4af626]">$</span>
              <span className="text-zinc-400">cat</span>
              <span className="text-zinc-300">certificate_{index + 1}.txt</span>
            </div>

            {/* Conteúdo */}
            <div className="ml-4 border-l border-white/10 pl-4 space-y-2">
              <div className="flex items-center gap-2">
                <HiBadgeCheck className="text-[#4af626] text-lg" />
                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white">
                  {cert.title}
                </h4>

                {cert.verified && (
                  <span className="
                    ml-2 px-2 py-0.5
                    text-[10px] font-bold
                    rounded-full
                    bg-[#4af626]/10
                    text-[#4af626]
                    border border-[#4af626]/30
                  ">
                    VERIFIED
                  </span>
                )}
              </div>

              <p className="text-xs text-zinc-500">
                {cert.org} • {cert.year}
              </p>

              <p className="text-xs text-zinc-400">
                &gt; {cert.info}
              </p>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
