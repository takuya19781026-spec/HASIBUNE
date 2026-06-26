"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#services", label: "サービス" },
  { href: "#why-us", label: "選ばれる理由" },
  { href: "#works", label: "施工事例" },
  { href: "#flow", label: "ご依頼の流れ" },
  { href: "#faq", label: "よくある質問" },
  { href: "#company", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-fh-black/55 backdrop-blur-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2" aria-label="FULLHOUSE ホーム">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-fh-gold text-fh-gold font-black tracking-tight">
            FH
          </span>
          <span className="hidden text-lg font-black tracking-widest text-fh-white sm:inline">
            FULLHOUSE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-fh-white/90 transition-colors hover:text-fh-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:0000000000"
            className="flex items-center gap-2 text-sm font-bold text-fh-white hover:text-fh-gold"
          >
            <Phone size={16} className="text-fh-gold" />
            0000-00-0000
          </a>
        </div>

        <button
          aria-label="メニューを開く"
          className="text-fh-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 bg-fh-black/95 px-6 py-4 backdrop-blur-md lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-fh-white/90 border-b border-fh-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
