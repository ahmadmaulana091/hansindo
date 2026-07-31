"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/data";

export const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center bg-[#0A192F] overflow-hidden pt-12 sm:pt-16 pb-20">
      {/* Background Container Truck Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/truk_putih_loading_cargo.png"
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


          {/* Main Title & Brand Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase font-sans mb-3 drop-shadow-lg">
              Reliable Cargo, <br className="hidden sm:block" />
              <span className="text-[#F26522]">Maximum Efficiency</span>
            </h1>
          </motion.div>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-10"
          >
            Logistics &amp; transportation service provider covering all of Indonesia. Specialized in project cargo, heavy lift load, and seamless domestic &amp; international Export-Import freight.
          </motion.p>

          {/* Dual CTAs: WhatsApp Consultation + Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-16"
          >
            <Button
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Free Consultation
            </Button>

            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="text-white border-blue-500/40 hover:bg-blue-600/20"
            >
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

