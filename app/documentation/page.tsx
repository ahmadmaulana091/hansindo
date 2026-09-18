import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { DocumentationGallery } from "@/components/sections/DocumentationGallery";

export const metadata: Metadata = {
  title: "Documentation | Hansindo Logistik",
  description:
    "Work activity and project documentation from PT. Hansindo Berkat Jaya Logistik — logistics operations, cargo handling, and field activity photos.",
  alternates: { canonical: "https://hansindologistik.com/documentation" },
  openGraph: {
    title: "Documentation | PT. Hansindo Berkat Jaya Logistik",
    description: "Project cargo and logistics operation documentation — field activity photos from Hansindo Logistik.",
    url: "https://hansindologistik.com/documentation",
    images: [{ url: "/images/content/truk_putih_loading_cargo.png", width: 1200, height: 630, alt: "Hansindo Logistik Documentation" }],
  },
};

export default function DocumentationPage() {
  return (
    <div>
      {/* ── PAGE HERO ──────────────────────────────────────────────── */}
      <div className="relative bg-[#0B4DA2] text-white overflow-hidden">
        {/* Background fleet photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/content/truk_putih_loading_cargo.png"
            alt="Hansindo Logistik Documentation"
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
              <span className="text-[#F26522]">Documentation</span>
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
              Work activity and project documentation.
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-sm text-blue-300">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-white font-semibold">Documentation</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ── GALLERY ───────────────────────────────────────────────── */}
      <DocumentationGallery />
    </div>
  );
}
