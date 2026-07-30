"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CLIENT_LOGOS } from "@/lib/data";

export const Clients = () => {
  // Duplicate array for seamless infinite marquee loop
  const doubleLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="clients" className="py-20 bg-slate-950 border-t border-b border-slate-800 relative overflow-hidden">
      <Container className="mb-10 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
          Trusted By Industry Leaders Across Oil & Gas, Mining & Infrastructure
        </span>
      </Container>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Vignette Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Strip */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {doubleLogos.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex flex-col items-center justify-center min-w-[200px] py-4 px-6 rounded-xl bg-slate-900/40 border border-slate-800/80 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-sky-500/40 hover:bg-slate-900 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-lg font-black tracking-tight text-slate-300 group-hover:text-white font-sans">
                {client.logoText}
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 group-hover:text-sky-400 mt-0.5">
                {client.subtext}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
