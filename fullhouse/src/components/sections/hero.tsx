"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-fh-black">
      <div
        className="absolute inset-0 bg-[url('/images/hero.svg')] bg-cover bg-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-fh-black/30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-fh-black/70 via-transparent to-fh-black/40" aria-hidden />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-black tracking-[0.15em] text-fh-white sm:text-7xl lg:text-8xl"
        >
          FULL<span className="text-fh-gold">HOUSE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg font-medium tracking-wide text-fh-white/90 sm:text-2xl"
        >
          解体から、新しい未来を。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#contact" variant="gold">
            無料見積り
          </Button>
          <Button href="tel:0000000000" variant="outline">
            電話する
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-fh-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} aria-hidden />
      </motion.div>
    </section>
  );
}
