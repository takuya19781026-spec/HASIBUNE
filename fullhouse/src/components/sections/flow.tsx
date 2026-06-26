import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  { step: "STEP 1", title: "お問い合わせ", description: "電話・LINE・フォームよりお気軽にご連絡ください。" },
  { step: "STEP 2", title: "現地調査", description: "専門スタッフが現地を確認し、最適なプランをご提案します。" },
  { step: "STEP 3", title: "お見積り", description: "内訳が明確な見積りをご提示。ご納得いただいた上で契約します。" },
  { step: "STEP 4", title: "施工", description: "近隣への配慮を徹底し、安全かつ丁寧に施工いたします。" },
  { step: "STEP 5", title: "完了", description: "最終確認後、引き渡しとなります。アフターサポートも対応。" },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-fh-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-fh-gold">FLOW</p>
          <h2 className="mt-3 text-3xl font-black tracking-wide sm:text-4xl">
            ご依頼の流れ
          </h2>
        </FadeIn>

        <div className="mt-16 flex flex-col">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-fh-black text-sm font-bold text-fh-gold">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="my-2 h-full w-px flex-1 bg-fh-black/15" />
                  )}
                </div>
                <div className="pb-12">
                  <p className="text-xs font-bold tracking-[0.2em] text-fh-gold">{s.step}</p>
                  <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fh-black/70">{s.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
