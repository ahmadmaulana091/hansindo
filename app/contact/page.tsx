import React from "react";
import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact Commercial Desk | Hansindo Maritime Logistics",
  description: "Get in touch with Hansindo's 24/7 commercial charter desk for vessel availability, rate cards, and technical inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <div className="bg-slate-900 text-white py-16">
        <Container>
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            24/7 Operations Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Contact Commercial Chartering
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mt-4 font-normal">
            Our dispatch engineers and chartering team respond within 2 hours to technical requests.
          </p>
        </Container>
      </div>

      <Contact />
    </div>
  );
}
