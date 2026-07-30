"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Award, CheckCircle2, MapPin, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { COMPANY_INFO, TIMELINE_DATA } from "@/lib/data";

export const About = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">("vision");

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <Container>
        {/* Slide 1 Replica Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden mb-16"
        >
          {/* Background Logistics Image (Truck & Container Port Crane) */}
          <div className="absolute inset-0 z-0 hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1800"
              alt="Hansindo Logistik Fleet & Container Crane"
              fill
              priority
              className="object-cover object-right"
            />
            {/* White Gradient Fade Over Image (Exact Slide 1 Effect) */}
            <div className="absolute inset-0 slide-white-fade" />
          </div>

          {/* Mobile Image Layer */}
          <div className="lg:hidden relative h-64 w-full">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
              alt="Hansindo Logistics Truck"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>

          {/* Slide Content Overlay */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl">
            {/* Top Left Company Logo */}
            <div className="mb-8">
              <Logo size="lg" showSubtext={true} />
            </div>

            {/* Main Title: About us */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1D4ED8] tracking-tight mb-8 font-sans">
              About us
            </h2>

            {/* Paragraph 1 - Exact Slide Text */}
            <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed mb-6">
              {COMPANY_INFO.fullName} is a logistics service provider covering all of Indonesia. Established in {COMPANY_INFO.established} and headquartered at {COMPANY_INFO.address}, our company focuses on providing transportation for our clients. We are dedicated to maintaining service quality and becoming your trusted logistics partner.
            </p>

            {/* Paragraph 2 - Exact Slide Text */}
            <p className="text-slate-800 text-base sm:text-lg font-bold leading-relaxed mb-8">
              {COMPANY_INFO.descriptionParagraph2}
            </p>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 bg-blue-50/70 p-3.5 rounded-xl border border-blue-100">
                <Building2 className="w-5 h-5 text-[#0B4DA2] shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">Headquarters</div>
                  <div className="text-xs font-bold text-[#0B4DA2]">Kencana Tower, West Jakarta</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-orange-50/70 p-3.5 rounded-xl border border-orange-100">
                <MapPin className="w-5 h-5 text-[#F26522] shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 font-medium">Service Scope</div>
                  <div className="text-xs font-bold text-[#F26522]">All of Indonesia (Domestic & Int'l)</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision, Mission & Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Vision & Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-black text-[#0B4DA2] mb-6">
              Our Vision & Mission
            </h3>

            {/* Interactive Tab Switcher */}
            <div className="flex border-b border-slate-200 mb-6">
              <button
                onClick={() => setActiveTab("vision")}
                className={`py-3 px-5 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === "vision"
                    ? "border-[#F26522] text-[#F26522]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <Eye className="w-4 h-4" />
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`py-3 px-5 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === "mission"
                    ? "border-[#F26522] text-[#F26522]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <Target className="w-4 h-4" />
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("values")}
                className={`py-3 px-5 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === "values"
                    ? "border-[#F26522] text-[#F26522]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                <Award className="w-4 h-4" />
                Core Values
              </button>
            </div>

            {/* Tab Contents */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 min-h-[150px]">
              {activeTab === "vision" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-800 text-base leading-relaxed font-medium">
                  "To be Indonesia’s premier, most dependable, and innovative logistics provider, recognized for operational excellence, integrity, and seamless cargo delivery across the archipelago and international trade routes."
                </motion.p>
              )}
              {activeTab === "mission" && (
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 text-slate-800 text-sm sm:text-base font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                    <span>Provide consistent, safe, and punctual domestic transport and cargo delivery.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                    <span>Deliver specialized, professional handling for Export and Import cargo operations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                    <span>Maintain high service quality as your long-term trusted logistics partner.</span>
                  </li>
                </motion.ul>
              )}
              {activeTab === "values" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-4 text-slate-800 text-sm font-bold">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F26522]" /> High Service Quality
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0B4DA2]" /> Professional Team
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0B4DA2]" /> Domestic & Export Focus
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F26522]" /> Customer Trust
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Milestones / Growth Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-black text-[#0B4DA2] mb-6">
              Growth & Milestones
            </h3>
            <div className="space-y-4">
              {TIMELINE_DATA.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100">
                  <span className="px-3 py-1 bg-[#0B4DA2] text-white font-extrabold text-xs rounded-md shrink-0">
                    {item.year}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

