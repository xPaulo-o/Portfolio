import { useLanguage } from "./LanguageContext";
import { Reveal } from "./Reveal";
import { HiAcademicCap } from "react-icons/hi";
import { TerminalSection } from "./TerminalSection";

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="py-12 font-mono">
      {/* título */}
      <h2 className="text-xl font-bold mb-6 text-white">
        {t.education}
      </h2>

      <TerminalSection command={t.education_cmd || "cat education.txt"}>
        {/* graduação 1 */}
        <Reveal>
          <div className="
            rounded-2xl
            border border-white/10
            bg-black/40
            p-5
            transition-all
            hover:border-[#4af626]/40
            hover:shadow-[0_0_30px_-10px_rgba(74,246,38,0.35)]
          ">
            <div className="flex items-center gap-3 mb-2">
              <HiAcademicCap className="text-[#4af626] text-lg" />
              <h3 className="text-sm font-bold text-zinc-200">
                {t.graduation}
              </h3>
            </div>

            <p className="text-xs text-zinc-400 ml-7">
              {t.university}
            </p>

            <p className="text-[10px] text-[#4af626] mt-3 ml-7 italic">
              ✔ {t.education}
            </p>
          </div>
        </Reveal>

        {/* graduação 2 */}
        <Reveal>
          <div className="
            rounded-2xl
            border border-white/10
            bg-black/40
            p-5
            transition-all
            hover:border-[#4af626]/40
            hover:shadow-[0_0_30px_-10px_rgba(74,246,38,0.35)]
          ">
            <div className="flex items-center gap-3 mb-2">
              <HiAcademicCap className="text-[#4af626] text-lg" />
              <h3 className="text-sm font-bold text-zinc-200">
                {t.graduation2}
              </h3>
            </div>

            <p className="text-xs text-zinc-400 ml-7">
              {t.university2}
            </p>

            <p className="text-[10px] text-[#4af626] mt-3 ml-7 italic">
              ✔ {t.education}
            </p>
          </div>
        </Reveal>
      </TerminalSection>
    </section>
  );
}
