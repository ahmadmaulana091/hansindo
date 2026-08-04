"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";

const CUSTOMERS = [
  { id: "c1", name: "Customer 1", logo: "/images/customer/cust_dummy_1.png" },
  { id: "c2", name: "Customer 2", logo: "/images/customer/cust_dummy_2.png" },
  { id: "c3", name: "Customer 3", logo: "/images/customer/cust_dummy_3.png" },
  { id: "c4", name: "Customer 4", logo: "/images/customer/cust_dummy_4.png" },
  { id: "c5", name: "Customer 5", logo: "/images/customer/cust_dummy_5.png" },
];

export const Clients = () => {
  const [activeLogo, setActiveLogo] = useState<string | null>(null);

  return (
    <section id="customers" className="py-16 lg:py-24 bg-slate-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Trusted By
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Leading companies across Indonesia's key industries rely on Hansindo Logistik for safe, professional, and on-time cargo delivery.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {CUSTOMERS.map((customer, index) => (
            <motion.button
              key={customer.id}
              onClick={() => setActiveLogo(customer.logo)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#0B4DA2]/30 transition-all duration-300 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center relative overflow-hidden group cursor-pointer focus:outline-none"
            >
              <div className="relative w-full h-full">
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 144px, 160px"
                />
              </div>

              {/* Hover Zoom Icon Indicator */}
              <div className="absolute inset-0 bg-[#0B4DA2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#0B4DA2] text-white flex items-center justify-center shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {activeLogo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            {/* Click backdrop to close */}
            <div className="absolute inset-0" onClick={() => setActiveLogo(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[85vh] flex flex-col items-center justify-center relative border border-slate-200 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveLogo(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-[#F26522] hover:text-white transition-colors focus:outline-none"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Logo zoomed */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <Image
                  src={activeLogo}
                  alt="Zoomed Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 288px, 320px"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
