"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function SciunitHero() {
  return (
    <section
      id="sciunit-hero"
      className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-white to-[#FFF8E1] overflow-hidden"
    >
      {/* glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#F1B82D]/25 blur-3xl"
      />

      {/* text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-mizzouBlack mb-3 leading-tight">
          Reproducible Research
        </h1>
        <p className="text-xl md:text-2xl text-mizzouGold font-semibold">
          Sciunit & FLINC — Executable Research Objects
        </p>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 cursor-pointer"
        onClick={() =>
          document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown className="w-6 h-6 text-mizzouGold" />
      </motion.div>
    </section>
  );
}
