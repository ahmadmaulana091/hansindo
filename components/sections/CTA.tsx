"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const CTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary via-slate-900 to-navy text-white p-10 sm:p-16 overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Background Decorative Graphic */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-sky-400/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-6">
              Partner With Hansindo
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Ready to Upgrade Your Offshore Vessel Charter & Marine Logistics?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
              Contact our marine chartering desk today to discuss vessel availability, engineering specifications, or customized energy transport contracts.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Request Custom Charter Quotation
              </Button>

              <Button
                href="mailto:contact@hansindo.co.id"
                variant="outline"
                size="lg"
                className="text-white border-slate-700 hover:bg-slate-800"
                icon={<Mail className="w-5 h-5 text-sky-400" />}
              >
                Email Commercial Desk
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
