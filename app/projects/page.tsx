import React from "react";
import { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { Clients } from "@/components/sections/Clients";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Featured Projects & Fleet | Hansindo Maritime Track Record",
  description: "View case studies of Natuna platform towage, subsea pipeline ROV surveys, and heavy module barge transport conducted by Hansindo.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-8">
      <div className="bg-slate-900 text-white py-16">
        <Container>
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            Portfolio Track Record
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Offshore & Maritime Case Studies
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mt-4 font-normal">
            Proven execution across complex marine towage, subsea maintenance, and heavy cargo transport.
          </p>
        </Container>
      </div>

      <Projects />
      <Clients />
      <CTA />
    </div>
  );
}
