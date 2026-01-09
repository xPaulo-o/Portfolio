import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { Experience } from './Components/Experience';
import { Education } from './Components/Education';
import ProjectGrid from './Components/ProjectGrid';
import { useLanguage } from './Components/LanguageContext';
import { Reveal } from './Components/Reveal';
import { HiBadgeCheck } from 'react-icons/hi'
import { SiReact, SiTailwindcss, SiJavascript, SiPython, SiLinux, SiPostgresql, SiDocker, SiKalilinux } from 'react-icons/si';
import { HiLightningBolt } from 'react-icons/hi';
import './App.css'

function App() {
  const { t, lang } = useLanguage();

  return (


    <main className="relative min-h-screen pb-20 overflow-hidden">

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 pt-16">

        <Navbar />
        <div className="max-w-2xl mx-auto px-6">
          <section id="inicio py-12 py-20" >
            <Reveal><Hero /></Reveal>
          </section>


          <section id="sobre py-12 py-20">
            <Reveal>
              <section className="py-8">
                <h2 className="text-xl font-bold mb-4">{t.about}</h2>
                <p className="text-sm text-zinc-400">{t.objective}</p>
              </section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
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
                ].map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank" // Abre em uma nova aba
                    rel="noopener noreferrer" // Segurança ao abrir links externos
                    className="p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-medium text-blue-400 uppercase tracking-widest">{cert.org}</span>
                        <span className="text-[10px] text-zinc-500">{cert.year}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <HiBadgeCheck className="text-blue-500 text-lg flex-shrink-0 group-hover:scale-110 transition-transform" />
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
            </Reveal>
          </section>

          <section id="experiencia py-12 py-20">
            <Reveal><Experience /></Reveal>

            <section id="habilidades" className="py-12 border-t border-white/5">
              <h3 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
                <HiLightningBolt className="text-yellow-400" />
                {lang === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills'}
              </h3>

              <div className="flex flex-wrap gap-3">
                {/* Skill Badge */}
                {[
                  { name: "React", icon: <SiReact className="group-hover:text-[#61DAFB]" />, color: "hover:border-[#61DAFB]/50" },
                  { name: "Tailwind", icon: <SiTailwindcss className="group-hover:text-[#38BDF8]" />, color: "hover:border-[#38BDF8]/50" },
                  { name: "JavaScript", icon: <SiJavascript className="group-hover:text-[#F7DF1E]" />, color: "hover:border-[#F7DF1E]/50" },
                  { name: "Python", icon: <SiPython className="group-hover:text-[#3776AB]" />, color: "hover:border-[#3776AB]/50" },
                  { name: "Kali Linux", icon: <SiKalilinux />, color: "hover:text-[#557C94] hover:border-[#557C94]/40" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-zinc-400 text-sm font-medium transition-all duration-300 group hover:bg-white/10 hover:text-white ${skill.color}`}
                  >
                    <span className="text-lg transition-colors duration-300">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </section>

            <Reveal><Education /></Reveal>
          </section>

          <section id="projetos py-12 py-20">
            <Reveal><ProjectGrid /></Reveal>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;