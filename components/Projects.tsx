"use client";

import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/components/language";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12">
        {t.projects.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {t.projects.items.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tech={project.tech}
            description={project.description}
            tags={project.tags}
            href={project.url}
          />
        ))}
      </div>
    </section>
  );
}
