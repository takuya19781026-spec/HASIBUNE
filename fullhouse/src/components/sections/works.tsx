import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const cases = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `施工事例 ${String(i + 1).padStart(2, "0")}`,
  before: `/images/case-${i + 1}-before.svg`,
  after: `/images/case-${i + 1}-after.svg`,
}));

export default function Works() {
  return (
    <section id="works" className="bg-fh-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-fh-gold">WORKS</p>
          <h2 className="mt-3 text-3xl font-black tracking-wide sm:text-4xl">
            施工事例
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl bg-fh-gray shadow-sm transition-shadow duration-300 hover:shadow-xl">
                <div className="grid grid-cols-2">
                  <div className="relative h-40 overflow-hidden sm:h-48">
                    <Image
                      src={item.before}
                      alt={`${item.title} Before`}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute left-2 top-2 rounded bg-fh-black/70 px-2 py-1 text-xs font-bold text-fh-white">
                      Before
                    </span>
                  </div>
                  <div className="relative h-40 overflow-hidden sm:h-48">
                    <Image
                      src={item.after}
                      alt={`${item.title} After`}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute left-2 top-2 rounded bg-fh-gold px-2 py-1 text-xs font-bold text-fh-black">
                      After
                    </span>
                  </div>
                </div>
                <p className="px-5 py-4 text-sm font-bold">{item.title}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
