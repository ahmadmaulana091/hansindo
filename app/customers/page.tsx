import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Clients } from "@/components/sections/Clients";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Our Customers | Hansindo Logistik",
  description:
    "Discover the companies that trust Hansindo Logistik for professional project cargo and heavy lift transport services across Indonesia.",
};

export default function CustomersPage() {
  return (
    <div>
      {/* ── PAGE HERO ──────────────────────────────────────────────── */}
      <div className="relative bg-[#0B4DA2] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/truk_putih_loading_cargo.png"
            alt="Hansindo Logistik Customers"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B4DA2] via-[#0B4DA2]/90 to-[#0B4DA2]/60" />

        <Container className="relative z-10 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Our <span className="text-[#F26522]">Customers</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
              Leading companies across Indonesia's key industries rely on Hansindo Logistik for safe, professional, and on-time cargo delivery.
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-blue-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white font-semibold">Our Customers</span>
            </div>
          </div>
        </Container>
      </div>

      <Clients />
      <CTA />
    </div>
  );
}
