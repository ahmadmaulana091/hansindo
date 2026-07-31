"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/data";

export const CTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#0B4DA2] to-[#0A192F] text-white p-10 sm:p-16 overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Background Decorative Graphic */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26522]/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-400/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F26522]/15 text-[#F26522] border border-[#F26522]/30 text-xs font-bold uppercase tracking-wider mb-6">
              Partner With Hansindo Logistik
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Need Professional Logistics &amp; Transport Solutions Across Indonesia?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
              Contact our logistics operations team today for instant consultation on project cargo, heavy lift transport, and domestic or export-import handling.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Free Consultation (WhatsApp)
              </Button>

              <Button
                href={`mailto:${COMPANY_INFO.email}`}
                variant="outline"
                size="lg"
                className="text-white border-slate-700 hover:bg-slate-800/60"
                icon={<Mail className="w-5 h-5 text-[#F26522]" />}
              >
                Email Support Team
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
