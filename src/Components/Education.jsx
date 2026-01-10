import { useLanguage } from "../Components/LanguageContext";
import { TypingText } from "../Components/TypingText";
import { Reveal } from "../Components/Reveal";
import { useOnScreen } from "../Components/useOnScreen";
import { HiAcademicCap } from "react-icons/hi";

export function Education() {
  const { t } = useLanguage();
  const [ref, isVisible] = useOnScreen("-120px");

  return (
    <section ref={ref} className="py-12 font-mono">
      {/* título */}
      <h2 className="text-xl font-bold mb-6 text-white">
        {t.education}
      </h2>

      {/* comando fake */}
      <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6">
        <span className="text-[#4af626]">$</span>
        <TypingText
          text={t.education_cmd || "cat education.txt"}
          start={isVisible}
        />
      </div>

      <div className="space-y-5">
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
      </div>
    </section>
  );
}
