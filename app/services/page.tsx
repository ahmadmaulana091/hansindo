import React from "react";
import { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Core Services | Hansindo Maritime & Offshore Solutions",
  description: "Explore Hansindo's 6 core maritime capabilities including DP2 vessel chartering, subsea ROV surveys, heavy lift logistics, and marine warranty consultancy.",
};

export default function ServicesPage() {
  return (
    <div className="pt-8">
      <div className="bg-slate-900 text-white py-16">
        <Container>
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            Technical Division
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Our Maritime & Offshore Capabilities
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mt-4 font-normal">
            High-specification marine assets and engineering solutions tailored for oil, gas, and energy infrastructure.
          </p>
        </Container>
      </div>

      <Services />
      <CTA />
    </div>
  );
}
