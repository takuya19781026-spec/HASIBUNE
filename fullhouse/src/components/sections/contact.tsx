import { Phone, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function Contact() {
  return (
    <section id="contact" className="bg-fh-black py-24 text-fh-white lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-fh-gold">CONTACT</p>
          <h2 className="mt-3 text-3xl font-black tracking-wide sm:text-4xl">
            お問い合わせ
          </h2>
          <p className="mt-4 text-sm text-fh-white/70">
            無料見積り・ご相談はお気軽にご連絡ください。
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <a
              href="tel:0000000000"
              className="flex flex-col items-center gap-3 rounded-2xl bg-fh-white/5 px-8 py-10 text-center transition-colors hover:bg-fh-white/10"
            >
              <Phone size={36} className="text-fh-gold" aria-hidden />
              <span className="text-2xl font-black tracking-wide">0000-00-0000</span>
              <span className="text-xs text-fh-white/60">受付時間 9:00〜18:00</span>
            </a>
            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl bg-fh-white/5 px-8 py-10 text-center transition-colors hover:bg-fh-white/10"
            >
              <MessageCircle size={36} className="text-fh-gold" aria-hidden />
              <span className="text-2xl font-black tracking-wide">LINEで相談</span>
              <span className="text-xs text-fh-white/60">24時間受付・即日返信</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form className="mt-12 flex flex-col gap-5 rounded-2xl bg-fh-white/5 p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                お名前
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-[12px] border border-fh-white/20 bg-transparent px-4 py-3 text-fh-white placeholder:text-fh-white/40 focus:border-fh-gold focus:outline-none"
                  placeholder="山田 太郎"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                電話番号
                <input
                  type="tel"
                  name="phone"
                  required
                  className="rounded-[12px] border border-fh-white/20 bg-transparent px-4 py-3 text-fh-white placeholder:text-fh-white/40 focus:border-fh-gold focus:outline-none"
                  placeholder="090-0000-0000"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm">
              メールアドレス
              <input
                type="email"
                name="email"
                required
                className="rounded-[12px] border border-fh-white/20 bg-transparent px-4 py-3 text-fh-white placeholder:text-fh-white/40 focus:border-fh-gold focus:outline-none"
                placeholder="example@email.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              お問い合わせ内容
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-[12px] border border-fh-white/20 bg-transparent px-4 py-3 text-fh-white placeholder:text-fh-white/40 focus:border-fh-gold focus:outline-none"
                placeholder="ご相談内容をご記入ください"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-[12px] bg-fh-gold px-8 py-4 text-sm font-bold text-fh-black transition-colors hover:bg-fh-gold-light"
            >
              送信する
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
