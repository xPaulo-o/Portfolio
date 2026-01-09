import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { Experience } from './Components/Experience';
import { Education } from './Components/Education';
import ProjectGrid from './Components/ProjectGrid';
import { useLanguage } from './Components/LanguageContext';
import { Reveal } from './Components/Reveal';
import { HiBadgeCheck } from 'react-icons/hi'
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
            <Reveal><Education /></Reveal>
          </section>

          <section id="habilidades py-12 py-20">
            <Reveal><ProjectGrid /></Reveal>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;