import { ShieldCheck, ReceiptText, MapPin, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const reasons = [
  {
    icon: ShieldCheck,
    title: "安心対応",
    description: "資格を持つスタッフが丁寧に対応。保険加入済みで万が一の際も安心です。",
  },
  {
    icon: ReceiptText,
    title: "明朗会計",
    description: "現地調査後、内訳が明確なお見積りをご提示。追加費用の心配はありません。",
  },
  {
    icon: MapPin,
    title: "地域密着",
    description: "地域の事情に詳しいスタッフが、最適なプランをご提案します。",
  },
  {
    icon: Zap,
    title: "スピード対応",
    description: "お問い合わせから現地調査、施工まで迅速に対応いたします。",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-fh-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-fh-gold">WHY US</p>
          <h2 className="mt-3 text-3xl font-black tracking-wide sm:text-4xl">
            選ばれる理由
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-fh-white p-8 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-fh-black">
                  <reason.icon className="text-fh-gold" size={28} aria-hidden />
                </div>
                <h3 className="mt-6 text-lg font-bold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fh-black/70">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
