"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/data";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Offshore Vessel Chartering",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <Container>
        <SectionTitle
          badge="Commercial Inquiries"
          title="Connect with Our Marine Logistics Experts"
          subtitle="Whether you require immediate spot chartering or long-term offshore support contracts, our commercial team responds within 2 hours."
        />

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Company Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Head Office & Command Center
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Hansindo operates round-the-clock marine dispatch hubs across major strategic Indonesian ports to guarantee immediate vessel deployment.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-secondary flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Address</span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug mt-1">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-secondary flex items-center justify-center shrink-0 border border-blue-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telephone / Charter Desk</span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug mt-1">
                      {COMPANY_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-secondary flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Commercial Email</span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug mt-1">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-secondary flex items-center justify-center shrink-0 border border-blue-100">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operational Hours</span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug mt-1">
                      24/7 Operations Control Room
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Styled Google Maps Iframe Container */}
            <div className="h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-200">
              <iframe
                title="Hansindo Headquarters Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273641234!2d106.8080!3d-6.2250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15000000001%3A0x0!2sSCBD%20Jakarta!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Send Charter & Commercial Inquiry
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Fill out the form below to receive vessel specifications, rate cards, and technical availability.
            </p>

            {status === "success" ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center my-8">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-emerald-900 mb-2">Inquiry Submitted Successfully</h4>
                <p className="text-sm text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out to Hansindo. Our commercial chartering desk has received your details and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="e.g. Capt. James Wilson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="work-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      id="work-email"
                      type="email"
                      required
                      placeholder="j.wilson@energycorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Company Name *
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      required
                      placeholder="e.g. Apex Energy Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-required" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Required Service *
                    </label>
                    <select
                      id="service-required"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary text-sm text-slate-900 bg-slate-50/50"
                    >
                      <option>Offshore Vessel Chartering</option>
                      <option>Global Maritime Logistics</option>
                      <option>Subsea & ROV Engineering</option>
                      <option>Heavy Lift & Cargo Transport</option>
                      <option>Marine Consultancy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project-scope" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Scope & Specifications *
                  </label>
                  <textarea
                    id="project-scope"
                    rows={4}
                    required
                    placeholder="Provide details regarding charter duration, vessel specifications, location, and mobilization timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary text-sm text-slate-900 bg-slate-50/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  fullWidth
                  disabled={status === "submitting"}
                  icon={<Send className="w-5 h-5" />}
                >
                  {status === "submitting" ? "Submitting Inquiry..." : "Submit Inquiry to Commercial Desk"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
