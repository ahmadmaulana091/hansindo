"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/data";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Kencana Tower, Mezzanine Floor No. 88, West Jakarta, Indonesia",
    color: "text-[#0B4DA2]",
    bg: "bg-blue-50 border-blue-100",
    href: "https://maps.google.com/?q=Kencana+Tower+West+Jakarta",
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY_INFO.phone,
    color: "text-[#F26522]",
    bg: "bg-orange-50 border-orange-100",
    href: `tel:${COMPANY_INFO.phone}`,
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: `${COMPANY_INFO.whatsappNumber} (Chat / WhatsApp)`,
    color: "text-[#0B4DA2]",
    bg: "bg-blue-50 border-blue-100",
    href: COMPANY_INFO.whatsappUrl,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY_INFO.email,
    color: "text-[#F26522]",
    bg: "bg-orange-50 border-orange-100",
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: Clock,
    label: "Operational Hours",
    value: "Monday – Friday, 08.00 – 17.00 WIB",
    color: "text-[#0B4DA2]",
    bg: "bg-blue-50 border-blue-100",
    href: null,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50">
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
            Contact <span className="text-[#0B4DA2]">Information</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl">
            Reach out to us directly via phone, WhatsApp, or email. Our team is ready to assist with your logistics needs.
          </p>
        </motion.div>

        {/* Two-column layout: Contact Cards + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Left — Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {CONTACT_INFO.map(({ icon: Icon, label, value, color, bg, href }, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className={`w-11 h-11 rounded-xl ${bg} border flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug hover:text-[#F26522] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[420px] lg:h-full min-h-[360px]"
          >
            <iframe
              title="Hansindo Logistik Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273641234!2d106.8080!3d-6.2250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15000000001%3A0x0!2sKencana%20Tower%20West%20Jakarta!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
