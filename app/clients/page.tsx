import React from "react";
import { Metadata } from "next";
import { Clients } from "@/components/sections/Clients";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Our Clients | Hansindo Maritime & Offshore Partners",
  description: "Discover the industry leaders across oil & gas, mining, and infrastructure who trust Hansindo for reliable maritime logistics and offshore engineering services.",
};

export default function ClientsPage() {
  return (
    <div className="pt-8">
      <div className="bg-slate-900 text-white py-16">
        <Container>
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            Strategic Partners
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Our Trusted Clients
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mt-4 font-normal">
            Partnering with leading operators in oil &amp; gas, mining, and energy infrastructure across Southeast Asia and beyond.
          </p>
        </Container>
      </div>

      <Clients />
      <Testimonials />
      <CTA />
    </div>
  );
}
