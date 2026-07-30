"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { COMPANY_INFO, SERVICES_DATA } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-slate-400 border-t border-slate-800 text-sm relative overflow-hidden">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Logo size="md" variant="dark" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
              {COMPANY_INFO.description}
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F26522] bg-[#F26522]/15 px-3 py-1.5 rounded-full border border-[#F26522]/30">
              <ShieldCheck className="w-4 h-4 text-[#F26522]" />
              <span>Domestik & Export Import Logistics</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/about" className="hover:text-[#F26522] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F26522] transition-colors">Core Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#F26522] transition-colors">Fleet & Projects</Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-[#F26522] transition-colors">Clients & Partners</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F26522] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href="/services" className="hover:text-[#F26522] transition-colors line-clamp-1">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wider">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-300 font-medium mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F26522] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F26522] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Enter work email..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-[#F26522] text-sm text-white placeholder-slate-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#F26522] hover:bg-[#d95314] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
              >
                Subscribe Updates
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Quality Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

