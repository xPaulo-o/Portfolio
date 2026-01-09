import { useLanguage } from '../Components/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Infortel Soluções em Informática",
      role: t.infortel_role,
      description: t.exp_desc_infortel,
    },
    {
      company: "Dipcell",
      role: t.dipcell_role,
      description: t.exp_desc_dipcell,
    }
  ];

  return (
    <section className="py-8">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l border-zinc-800 pl-4">
            <h3 className="text-sm font-bold">{exp.role}</h3>
            <p className="text-xs text-zinc-500 mb-2">{exp.company}</p>
            <p className="text-xs text-zinc-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}