import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[12px] px-8 py-4 text-sm font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        gold: "bg-fh-gold text-fh-black hover:bg-fh-gold-light",
        outline:
          "border border-fh-white/60 text-fh-white hover:bg-fh-white/10 backdrop-blur-sm",
        dark: "bg-fh-black text-fh-white hover:bg-fh-black/85",
      },
    },
    defaultVariants: { variant: "gold" },
  }
);

export function Button({
  href,
  variant,
  className,
  children,
}: {
  href: string;
  children: ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </Link>
  );
}
