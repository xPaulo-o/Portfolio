import { CertificadoCard } from "./CertificadoCard";

export function Certificados() {
  const listaCertificados = [
    {
      title: "Java (Basic)",
      org: "HackerRank",
      year: "2026",
      link: "https://www.hackerrank.com/certificates/792e7ebd319c",
      info: "Credencial Online ↗",
      verified: true,
      external: true,
    },
    {
      title: "Workshop Android Pentester",
      org: "Solyd Offensive Security",
      year: "2026",
      link: `${import.meta.env.BASE_URL}Certificados/certificado 2.pdf`,
      info: "4 horas • Ver PDF ↗",
      verified: true,
      external: false,
    },
    {
      title: "Python Básico",
      org: "Solyd Offensive Security",
      year: "2025",
      link: `${import.meta.env.BASE_URL}Certificados/certificado 3.pdf`,
      info: "8 horas • Ver PDF ↗",
      verified: true,
      external: false,
    },
    {
      title: "Introdução ao Hacking e Pentest 2.0",
      org: "Solyd Offensive Security",
      year: "2025",
      link: `${import.meta.env.BASE_URL}Certificados/certificado.pdf`,
      info: "8 horas • Ver PDF ↗",
      verified: true,
      external: false,
    },
        {
      title: "AWS Training & Certification",
      org: "Essentials of PromptEngineering",
      year: "2026",
      link: `${import.meta.env.BASE_URL}Certificados/AWS Training & Certification.pdf`,
      info: "Ver PDF ↗",
      verified: true,
      external: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {listaCertificados.map((cert, index) => (
        <CertificadoCard key={index} cert={cert} index={index} />
      ))}
    </div>
  );
}
