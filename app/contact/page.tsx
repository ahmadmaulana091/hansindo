import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact Us | Hansindo Logistik",
  description:
    "Contact PT. Hansindo Berkat Jaya Logistik for project cargo, heavy lift transport, and logistics inquiries across Indonesia.",
  alternates: { canonical: "https://hansindologistik.com/contact" },
  openGraph: {
    title: "Contact Us | PT. Hansindo Berkat Jaya Logistik",
    description: "Get in touch for project cargo, heavy lift transport, and container logistics services across Indonesia.",
    url: "https://hansindologistik.com/contact",
    images: [{ url: "/images/content/truk_putih_loading_cargo.png", width: 1200, height: 630, alt: "Contact Hansindo Logistik" }],
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* ── PAGE HERO ──────────────────────────────────────────────── */}
      <div className="relative bg-[#0B4DA2] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/content/truk_putih_loading_cargo.png"
            alt="Hansindo Logistik Contact"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B4DA2] via-[#0B4DA2]/90 to-[#0B4DA2]/60" />

        <Container className="relative z-10 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Contact <span className="text-[#F26522]">Us</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
              Have a question or need a logistics quote? Our team is ready to help you with project cargo, heavy lift transport, and more.
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-blue-300">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white font-semibold">Contact</span>
            </div>
          </div>
        </Container>
      </div>

      <Contact />
    </div>
  );
}
