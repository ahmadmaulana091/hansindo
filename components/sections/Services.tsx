"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Package, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-6 h-6" />,
  Container: <Package className="w-6 h-6" />,
};

export const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES_DATA[0]?.id ?? null);

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            What We Offer
          </h2>
          <p className="text-slate-500 text-base max-w-xl">
            Professional logistics solutions tailored for project cargo and heavy industrial transport across Indonesia and beyond.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-6">
          {SERVICES_DATA.map((service, index) => {
            const isOpen = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                {/* Card Header — always visible, click to expand */}
                <button
                  onClick={() => setExpandedId(isOpen ? null : service.id)}
                  className="w-full text-left flex items-center gap-4 p-6 hover:bg-slate-50 transition-colors"
                >
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#0B4DA2] flex items-center justify-center text-white shrink-0">
                    {ICON_MAP[service.iconName]}
                  </div>

                  {/* Title + short desc */}
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-extrabold text-slate-900">{service.title}</p>
                    <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">{service.shortDesc}</p>
                  </div>

                  {/* Expand indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#0B4DA2] text-white" : "bg-slate-100 text-slate-500"}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-slate-100">
                        {/* Left – Photo */}
                        <div className="relative h-60 lg:h-auto min-h-[280px]">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300">
                              PT. Hansindo Berkat Jaya Logistik
                            </span>
                          </div>
                        </div>

                        {/* Right – Details */}
                        <div className="p-6 lg:p-8 flex flex-col justify-between gap-6">
                          <div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">
                              {service.fullDesc}
                            </p>

                            <p className="text-xs font-bold text-[#0B4DA2] uppercase tracking-wider mb-3">
                              Key Capabilities
                            </p>
                            <ul className="space-y-2">
                              {service.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                                  <CheckCircle className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                            <Button href="/contact" variant="accent" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                              Request This Service
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
