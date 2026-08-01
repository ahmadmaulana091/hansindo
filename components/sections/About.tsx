"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  CheckCircle2,
  MapPin,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/data";

/* ── Social share icons (inline SVG to avoid extra deps) ── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon, color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]" },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon, color: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]" },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon, color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:border-transparent" },
  { label: "Twitter / X", href: "https://x.com", Icon: TwitterXIcon, color: "hover:bg-slate-900 hover:text-white hover:border-slate-900" },
  { label: "WhatsApp", href: "https://wa.me/622158908888", Icon: WhatsAppIcon, color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]" },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">("vision");

  return (
    <section id="about" className="bg-white">

      {/* ── COMPANY INTRO ─────────────────────────────────────────── */}
      <div className="py-16 lg:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left – Text content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >


              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Trusted Logistics Partner{" "}
                <span className="text-[#0B4DA2]">Across Indonesia</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-4">
                <strong className="text-slate-800">{COMPANY_INFO.fullName}</strong> is a
                logistics service provider covering all of Indonesia. Established
                since <strong>{COMPANY_INFO.established}</strong>, headquartered at{" "}
                <strong>{COMPANY_INFO.headquarters}</strong>, we focus on delivering
                the best transportation services for our clients. We are dedicated to maintaining service quality and becoming yout trusted logistics partner.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {COMPANY_INFO.descriptionParagraph2}
              </p>



              {/* Share Our Company */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-md font-bold text-slate-800 uppercase tracking-wide shrink-0">
                  Share Our Company
                </span>
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map(({ label, href, Icon, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 ${color}`}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right – Photo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Main photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/truk_putih_lift_load.png"
                  alt="Armada Truk Hansindo Logistik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              </div>


            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >

          </motion.div>
        </Container>
      </div>



      {/* ── VISION / MISSION / VALUES + FLEET PHOTO ───────────────── */}
      <div className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Right – Fleet photo + Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              {/* Fleet photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
                <Image
                  src="/images/truk_putih_loading_warehouse.png"
                  alt="Hansindo Operations - Loading & Cargo Handling"
                  fill
                  className="object-cover object-[center_60%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Left – Vision Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0B4DA2] bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full mb-5">
                Vision &amp; Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
                Our Commitment to Service Excellence
              </h2>

              {/* Tab bar */}
              <div className="flex gap-1 p-1 bg-slate-100 rounded-xl mb-6">
                {(["vision", "mission", "values"] as const).map((tab) => {
                  const labels = { vision: "Vision", mission: "Mission", values: "Values" };
                  const icons = { vision: Eye, mission: Target, values: Award };
                  const Icon = icons[tab];
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-lg transition-all duration-200 ${activeTab === tab
                        ? "bg-white text-[#0B4DA2] shadow-sm"
                        : "text-slate-500 hover:text-slate-800"
                        }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {labels[tab]}
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 min-h-[160px]">
                {activeTab === "vision" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <Eye className="w-4 h-4 text-[#0B4DA2]" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm pt-1.5">Company Vision</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Estabilishing Hansindo Logistik as Tour Reliable Choice For Managing Export and Import Shipments Throughout Indonesia.
                    </p>
                  </motion.div>
                )}
                {activeTab === "mission" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                        <Target className="w-4 h-4 text-[#F26522]" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm pt-1.5">Company Mission</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        "Providing Professional Services With an Experienced Team Specialized in Cargo Logistics Management.",
                        "Delivering Significant Benefits For Employee Welfare, Company Growth, and Creating a Positive Impact on The Environment and The Surrounding Community.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                {activeTab === "values" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-[#0B4DA2]" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm pt-1.5">Company Values</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "Service Quality", color: "bg-orange-500" },
                        { label: "Professional Team", color: "bg-blue-700" },
                        { label: "Export/Import Focus", color: "bg-blue-700" },
                        { label: "Client Trust", color: "bg-orange-500" },
                      ].map((v, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-2.5">
                          <span className={`w-2 h-2 rounded-full ${v.color} shrink-0`} />
                          <span className="text-xs font-semibold text-slate-700">{v.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>


          </div>
        </Container>
      </div>
    </section>
  );
};
