import { useLanguage } from '../Components/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold mb-4">{t.education}</h2>
      <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20">
        <h3 className="text-sm font-bold">{t.graduation}</h3>
        <p className="text-xs text-zinc-400 mt-1">
          {t.university}
        </p>
        <p className="text-[10px] text-blue-400 mt-2 font-medium italic">
          {t.education}
        </p>
      </div>

      <br />

      <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/20">
        <h3 className="text-sm font-bold">{t.graduation2}</h3>
        <p className="text-xs text-zinc-400 mt-1">
          {t.university2}
        </p>
        <p className="text-[10px] text-blue-400 mt-2 font-medium italic">
          {t.education}
        </p>
      </div>
    </section>


  );
}