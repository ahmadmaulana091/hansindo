"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, ShieldCheck, HardHat, Zap, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WHY_CHOOSE_US } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8 text-secondary" />,
  Award: <Award className="w-8 h-8 text-secondary" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-secondary" />,
  HardHat: <HardHat className="w-8 h-8 text-secondary" />,
  Zap: <Zap className="w-8 h-8 text-secondary" />,
  Clock: <Clock className="w-8 h-8 text-secondary" />,
};

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <SectionTitle
          badge="The Hansindo Advantage"
          title="Engineered for Reliability & Uncompromising Safety"
          subtitle="We combine high-specification marine assets with rigorous HSE compliance to deliver total confidence for critical offshore infrastructure projects."
          dark
        />

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-dark p-8 rounded-2xl border border-slate-800 hover:border-sky-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with Hover Glow */}
                <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {ICON_MAP[item.icon]}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent Indicator */}
              <div className="w-12 h-1 bg-slate-800 rounded-full mt-8 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-sky-400 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
