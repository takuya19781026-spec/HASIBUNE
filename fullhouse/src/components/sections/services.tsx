import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const services = [
  {
    title: "解体工事",
    image: "/images/service-demolition.svg",
    description:
      "木造・RC造・鉄骨造まで、住宅から店舗・倉庫の解体まで幅広く対応。近隣への配慮を徹底し、安全かつ迅速に施工します。",
    href: "#contact",
  },
  {
    title: "庭撤去",
    image: "/images/service-garden.svg",
    description:
      "庭木の伐採・撤去から、庭石・物置の処分まで対応。空き家管理や住み替え前の整地もお任せください。",
    href: "#contact",
  },
  {
    title: "遺品整理",
    image: "/images/service-estate.svg",
    description:
      "ご遺族のお気持ちに寄り添い、丁寧かつ迅速に整理・搬出を行います。供養や仕分けのご相談にも対応します。",
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-fh-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-fh-gold">SERVICE</p>
          <h2 className="mt-3 text-3xl font-black tracking-wide sm:text-4xl">
            サービス
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-fh-gray transition-shadow duration-300 hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-fh-black/70">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-fh-gold transition-colors hover:text-fh-black"
                  >
                    詳しく見る
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
