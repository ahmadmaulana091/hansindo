import React from "react";
import { Metadata } from "next";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Us | Hansindo Maritime & Offshore Engineering",
  description: "Learn about Hansindo's 17+ year track record, executive leadership, vision, mission, and commitment to maritime safety and zero-LTI operations.",
};

export default function AboutPage() {
  return (
    <div className="pt-8">
      <div className="bg-slate-900 text-white py-16">
        <Container>
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            Corporate Overview
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            About Hansindo Maritime
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mt-4 font-normal">
            Pioneering Southeast Asia's offshore supply chain through technical integrity and zero-harm operations.
          </p>
        </Container>
      </div>

      <About />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}
