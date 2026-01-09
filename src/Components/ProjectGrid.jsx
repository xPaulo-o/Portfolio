const projects = [
  {
    title: "Sistema Dipcell",
    description: "EPequeno sistema de Os e de vendas desenvolvido para a loja Dipcell.",
    tech: ["Python", "Tkinter", "SQLite"],
    link: "https://github.com/xPaulo-o/Sistema_Dipcell",
  },
  {
    title: "Jogo com Python",
    description: "Um pequeno jogo desenvolvido em Python usando Pygame.",
    tech: ["Python", "Pygame"],
    link: "https://github.com/xPaulo-o/typing_hero",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group border border-gray-200 dark:border-zinc-800 rounded-xl p-5 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-zinc-400 mt-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((item) => (
          <span key={item} className="text-[10px] font-medium bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-gray-600 dark:text-zinc-300">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <a 
          href={project.link} 
          className="text-xs font-medium text-blue-600 hover:underline"
          target="_blank" 
          rel="noreferrer"
        >
          Ver projeto →
        </a>
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Projetos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </section>
  );
}

  const experiences = [
  {
    company: "Infortel Soluções em Informática",
    role: "Operador de Rede de Teleprocessamento",
    description: "Atuação com redes, monitoramento e suporte técnico.", 
  },
  {
    company: "Dipcell",
    role: "Assistente Técnico e Vendedor",
    description: "Atendimento ao cliente e suporte técnico em informática.",
  }
];