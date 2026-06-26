import Link from "next/link";

const menu = [
  { href: "#services", label: "サービス" },
  { href: "#why-us", label: "選ばれる理由" },
  { href: "#works", label: "施工事例" },
  { href: "#flow", label: "ご依頼の流れ" },
  { href: "#faq", label: "よくある質問" },
  { href: "#company", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="bg-fh-black text-fh-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-fh-white/10 pb-10 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-fh-gold text-fh-gold font-black">
              FH
            </span>
            <span className="text-xl font-black tracking-widest">FULLHOUSE</span>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-fh-white/70 transition-colors hover:text-fh-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="pt-8 text-center text-xs text-fh-white/40">
          &copy; {new Date().getFullYear()} FULLHOUSE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
