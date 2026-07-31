import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Our Services | Hansindo Logistik",
  description:
    "Explore Hansindo Logistik's professional services — Project Cargo, Heavy Lift Load, and domestic & international freight across Indonesia.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* ── PAGE HERO ──────────────────────────────────────────────── */}
      <div className="relative bg-[#0B4DA2] text-white overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/truk_project_cargo.png"
            alt="Hansindo Logistik Services"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B4DA2] via-[#0B4DA2]/90 to-[#0B4DA2]/60" />

        <Container className="relative z-10 py-16 sm:py-20">
          <div className="max-w-2xl">


            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Our <span className="text-[#F26522]">Services</span>
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
              From oversized project cargo to heavy industrial transport — we deliver safe, reliable, and professional logistics services across all of Indonesia.
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-sm text-blue-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white font-semibold">Our Services</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ── SECTIONS ───────────────────────────────────────────────── */}
      <Services />
      <CTA />
    </div>
  );
}
