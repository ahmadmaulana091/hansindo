"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, MapPin, Building, X, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { PROJECTS_DATA } from "@/lib/data";
import { ProjectItem } from "@/types";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "offshore", label: "Offshore Engineering" },
  { id: "maritime", label: "Maritime Logistics" },
  { id: "logistics", label: "Heavy Lift & Ports" },
  { id: "engineering", label: "Subsea & ROV" },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <Container>
        <SectionTitle
          badge="Track Record"
          title="Major Maritime & Offshore Track Record"
          subtitle="Discover our portfolio of flagship chartering campaigns, subsea engineering, and heavy module transport operations across Southeast Asia."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-200 hover:border-slate-400 transition-all duration-500 flex flex-col"
              >
                {/* Image Aspect Box */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {project.categoryLabel}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-xs font-black">
                    {project.year}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-950 to-slate-900 text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Quick Stats Ribbon */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-slate-800 text-center mb-6">
                      {project.stats.map((st, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-xs font-bold text-white">{st.value}</span>
                          <span className="text-[10px] text-slate-400 font-normal">{st.label}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="outline"
                      size="sm"
                      fullWidth
                      className="text-white border-slate-700 hover:bg-slate-800"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-slate-900 text-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative border border-slate-800"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 mb-2 inline-block">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-6 text-sm text-slate-300 border-b border-slate-800 pb-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-sky-400" />
                    <span>Client: <strong className="text-white">{selectedProject.client}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>Location: <strong className="text-white">{selectedProject.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>Year: <strong className="text-white">{selectedProject.year}</strong></span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Campaign Executive Summary
                </h4>
                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                  Operational Metrics & Key Deliverables
                </h4>
                <div className="grid grid-cols-3 gap-4 bg-slate-950 p-6 rounded-xl border border-slate-800 mb-8">
                  {selectedProject.stats.map((s, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl sm:text-2xl font-black text-sky-400">{s.value}</div>
                      <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setSelectedProject(null)} className="text-white border-slate-700">
                    Close Case Study
                  </Button>
                  <Button href="/contact" variant="secondary" onClick={() => setSelectedProject(null)}>
                    Inquire Similar Campaign
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
