"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const faqs = [
  {
    q: "対応エリアはどこまでですか？",
    a: "近隣エリアを中心に対応しております。エリア外でもご相談ください。詳細はお問い合わせ時にご確認いただけます。",
  },
  {
    q: "見積りは無料ですか？",
    a: "はい、現地調査・お見積りは無料です。ご納得いただけない場合のキャンセルも可能です。",
  },
  {
    q: "解体工事の費用はどのくらいかかりますか？",
    a: "建物の構造・規模・立地条件により異なります。現地調査の上、内訳が明確なお見積りをご提示します。",
  },
  {
    q: "遺品整理はどのくらいの時間がかかりますか？",
    a: "お部屋の広さや量によりますが、一般的なお部屋であれば半日〜1日程度で完了します。",
  },
  {
    q: "急な依頼にも対応できますか？",
    a: "スケジュールが空いていれば、最短即日での対応も可能です。まずはお電話でご相談ください。",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-fh-gray py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-fh-gold">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-wide sm:text-4xl">
            よくある質問
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-16">
          <Accordion.Root type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((item, i) => (
              <Accordion.Item
                key={item.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl bg-fh-white shadow-sm"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-bold sm:text-base">
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-fh-gold transition-transform duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[fadeDown_0.3s_ease] px-6 pb-5 text-sm leading-relaxed text-fh-black/70">
                  {item.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeIn>
      </div>
    </section>
  );
}
