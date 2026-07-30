"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, ChevronDown, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Logo } from "@/components/ui/Logo";
import { COMPANY_INFO } from "@/lib/data";

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0A192F] overflow-hidden pt-10 pb-20">
      {/* Background Container Truck Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hansindo_hero_truck.png"
          alt="Hansindo Logistics Container Truck"
          fill
          priority
          className="object-cover object-right lg:object-center opacity-70 scale-105 transform hover:scale-100 transition-transform duration-10000"
        />
        {/* Soft Multi-layer Gradient Overlays to keep text readable while keeping truck dominant */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/50 to-[#0A192F]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/65 to-transparent" />
      </div>

      {/* Decorative Brand Color Waves */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26522]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B4DA2]/20 rounded-full filter blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F26522]/15 border border-[#F26522]/30 text-[#F26522] text-xs sm:text-sm font-bold mb-6 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-[#F26522]" />
            <span>Trusted Logistics Partner Across Indonesia Since {COMPANY_INFO.established}</span>
          </motion.div>

          {/* Main Title (COMPANY PROFILE text removed as requested) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase font-sans mb-2 drop-shadow-lg">
              {COMPANY_INFO.fullName}
            </h1>
          </motion.div>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-10"
          >
            Logistics service provider covering all of Indonesia. Focused on transportation, domestic cargo delivery, and professional Export-Import cargo handling.
          </motion.p>

          {/* Dual CTAs with Hansindo Orange Primary Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-16"
          >
            <Button
              href="/services"
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Our Logistics Services
            </Button>

            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="text-white border-blue-500/40 hover:bg-blue-600/20"
            >
              Learn About Us
            </Button>
          </motion.div>

          {/* Animated Statistics Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-800/80"
          >
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F26522] tracking-tight font-sans flex items-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-400 text-xs gap-1"
      >
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-[#F26522]" />
      </motion.div>
    </section>
  );
};

