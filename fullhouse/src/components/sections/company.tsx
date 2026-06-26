import { FadeIn } from "@/components/ui/fade-in";

const rows = [
  { label: "会社名", value: "株式会社FULLHOUSE" },
  { label: "住所", value: "〒000-0000 〇〇県〇〇市〇〇町0-0-0" },
  { label: "電話番号", value: "0000-00-0000" },
  { label: "営業時間", value: "9:00〜18:00（年中無休）" },
  { label: "対応エリア", value: "〇〇県全域・近隣エリア" },
];

export default function Company() {
  return (
    <section id="company" className="bg-fh-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-fh-gold">COMPANY</p>
          <h2 className="mt-3 text-3xl font-black tracking-wide sm:text-4xl">
            会社概要
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <table className="w-full border-collapse overflow-hidden rounded-2xl bg-fh-gray text-sm">
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-fh-black/10 last:border-0">
                    <th
                      scope="row"
                      className="w-32 whitespace-nowrap bg-fh-black/5 px-5 py-4 text-left font-bold"
                    >
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-fh-black/80">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex h-full min-h-[260px] w-full items-center justify-center rounded-2xl bg-fh-gray text-sm text-fh-black/50">
              Google Map 設置スペース
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
