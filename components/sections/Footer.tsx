"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { COMPANY_INFO } from "@/lib/data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Customers", href: "/customers" },
  { label: "Documentation", href: "/documentation" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-slate-400 border-t border-slate-800 text-sm relative overflow-hidden">
      <Container className="py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <Logo size="sm" variant="dark" showSubtext={false} />
            </div>
            <p className="text-slate-300 font-bold text-sm mb-1">
              PT. HANSINDO BERKAT JAYA LOGISTIK
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mb-5 max-w-xs">
              Trusted logistics &amp; transportation partner covering all of Indonesia. Specialized in project cargo, heavy lift, and domestic &amp; international freight since {COMPANY_INFO.established}.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#F26522] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-4 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F26522] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#F26522] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#F26522] shrink-0" />
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#F26522] transition-colors">
                  {COMPANY_INFO.whatsappNumber} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F26522] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#F26522] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. All Rights Reserved.
          </div>

        </div>
      </Container>
    </footer>
  );
};
