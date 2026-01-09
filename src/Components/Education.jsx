import { useLanguage } from '../Components/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold mb-4">{t.projects}</h2> {/* Ou crie uma chave 'education' no contexto */}
      <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20">
        <h3 className="text-sm font-bold">Tecnologia da Informação</h3>
        <p className="text-xs text-zinc-400 mt-1">
          Faculdades e Colégio Aphonsiano, Trindade - GO
        </p>
        <p className="text-[10px] text-blue-400 mt-2 font-medium italic">
          {t.education}
        </p>
      </div>
    </section>
  );
}