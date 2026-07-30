"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Package, ArrowRight, CheckCircle, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SERVICES_DATA } from "@/lib/data";
import { ServiceItem } from "@/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-7 h-7 text-white" />,
  Container: <Package className="w-7 h-7 text-white" />,
};

export const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background Port Image (like the slide) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
          alt="Container Port Background"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/95" />
      </div>

      <Container className="relative z-10">
        {/* Top Logo - matching slide top-left brand placement */}
        <div className="flex justify-start mb-10">
          <Logo size="md" showSubtext={true} />
        </div>

        {/* Section Header - "Our Service" centered with border box like slide */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="inline-block border-2 border-[#0B4DA2] rounded-sm px-10 py-3 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight font-sans text-center">
              Our Service
            </h2>
          </div>

          {/* Service Cards Row */}
          <div className="relative w-full">
            {/* Connector Line (horizontal bar at top) */}
            <div className="hidden lg:block absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#0A192F] translate-y-0" />
            {/* Vertical connectors from center line down */}
            <div className="hidden lg:block absolute top-0 left-1/4 w-0.5 h-10 bg-[#0A192F]" />
            <div className="hidden lg:block absolute top-0 right-1/4 w-0.5 h-10 bg-[#0A192F]" />

            {/* Service Labels above circles */}
            <div className="hidden lg:grid grid-cols-2 gap-8 mb-4">
              {SERVICES_DATA.map((service) => (
                <div key={service.id} className="flex justify-center">
                  <div className="border-2 border-[#0A192F] rounded-sm px-6 py-2.5">
                    <span className="text-xl sm:text-2xl font-black text-[#0A192F]">{service.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-2">
              {SERVICES_DATA.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="flex flex-col items-center gap-6"
                >
                  {/* Mobile: label above image */}
                  <div className="lg:hidden border-2 border-[#0A192F] rounded-sm px-6 py-2.5">
                    <span className="text-xl font-black text-[#0A192F]">{service.title}</span>
                  </div>

                  {/* Circular Image - like slide */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[6px] border-white shadow-2xl shadow-slate-400/40 group cursor-pointer focus:outline-none"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Port Background Reveal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0B4DA2]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6">
                      <div className="w-12 h-12 rounded-full bg-[#F26522] flex items-center justify-center">
                        {ICON_MAP[service.iconName]}
                      </div>
                      <span className="text-white font-bold text-lg text-center">{service.title}</span>
                      <span className="text-xs text-blue-100 text-center leading-relaxed">{service.shortDesc}</span>
                      <div className="flex items-center gap-1 text-[#F26522] font-bold text-xs mt-1">
                        <span>Lihat Detail</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </button>

                  {/* Short Description */}
                  <div className="text-center max-w-xs">
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="mt-3 inline-flex items-center gap-1.5 text-[#0B4DA2] font-bold text-xs hover:text-[#F26522] transition-colors"
                    >
                      Selengkapnya <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative border border-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/60 text-white flex items-center justify-center hover:bg-slate-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#F26522] flex items-center justify-center">
                      {ICON_MAP[selectedService.iconName]}
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-1">{selectedService.title}</h3>
                  <span className="text-xs text-[#F26522] font-bold tracking-wider uppercase">
                    PT. HANSINDO BERKAT JAYA LOGISTIK
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <p className="text-slate-600 text-base leading-relaxed mb-6">{selectedService.fullDesc}</p>

                <h4 className="text-sm font-black text-[#0B4DA2] uppercase tracking-wider mb-3">
                  Layanan Unggulan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <CheckCircle className="w-4 h-4 text-[#F26522] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <Button variant="ghost" onClick={() => setSelectedService(null)}>Tutup</Button>
                  <Button href="/contact" variant="accent" onClick={() => setSelectedService(null)}>
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

