import { HiBadgeCheck } from 'react-icons/hi'

export function Certificados() {
    const listaCertificados = [
        {
            title: "Java (Basic)",
            org: "HackerRank",
            year: "2026",
            link: "https://www.hackerrank.com/certificates/792e7ebd319c",
            info: "Credencial Online ↗"
        },
        {
            title: "Workshop Android Pentester",
            org: "Solyd Offensive Security",
            year: "2026",
            link: "public/certificados/certificado 2.pdf",
            info: "4 horas • Ver PDF ↗"
        },
        {
            title: "Python Básico",
            org: "Solyd Offensive Security",
            year: "2025",
            link: "public/certificados/certificado 3.pdf",
            info: "8 horas • Ver PDF ↗"
        },
        {
            title: "Introdução ao Hacking e Pentest 2.0",
            org: "Solyd Offensive Security",
            year: "2025",
            link: "public/certificados/certificado.pdf",
            info: "8 horas • Ver PDF ↗"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
            {listaCertificados.map((cert, index) => (
                <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group flex flex-col justify-between cursor-pointer"
                >
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-medium text-[#4af626]/80 uppercase tracking-widest">{cert.org}</span>
                            <span className="text-[10px] text-zinc-500">{cert.year}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <HiBadgeCheck className="text-[#4af626] text-lg flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">
                                {cert.title}
                            </h4>
                        </div>
                    </div>

                    <p className="text-xs text-zinc-500 mt-3 flex items-center gap-1">
                        {cert.info}
                    </p>
                </a>
            ))}
        </div>
    );
}

