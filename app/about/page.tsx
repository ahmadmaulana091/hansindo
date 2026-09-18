import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { About } from "@/components/sections/About";

import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Us | Hansindo Logistik",
  description:
    "PT. Hansindo Berkat Jaya Logistik — a trusted logistics service provider covering all of Indonesia since 2019. Learn about our vision, mission, and professional team.",
  alternates: { canonical: "https://hansindologistik.com/about" },
  openGraph: {
    title: "About Us | PT. Hansindo Berkat Jaya Logistik",
    description: "Trusted logistics partner since 2019. Learn about our vision, mission, HANSINDO values, and professional team.",
    url: "https://hansindologistik.com/about",
    images: [{ url: "/images/content/truk_putih_lift_load.png", width: 1200, height: 630, alt: "Hansindo Logistik Fleet" }],
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* ── PAGE HERO ──────────────────────────────────────────────── */}
      <div className="relative bg-[#0B4DA2] text-white overflow-hidden">
        {/* Background fleet photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/content/truk_putih_loading_cargo.png"
            alt="Hansindo Logistik Fleet"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B4DA2] via-[#0B4DA2]/90 to-[#0B4DA2]/60" />

        <Container className="relative z-10 py-16 sm:py-20">
          <div className="max-w-2xl">


            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              <span className="text-[#F26522]">About</span> Us
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
              Professional logistics solutions for domestic transport and
              international cargo across Indonesia — since 2019.
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-sm text-blue-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white font-semibold">About Us</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ── SECTIONS ───────────────────────────────────────────────── */}
      <About />
      <CTA />
    </div>
  );
}
