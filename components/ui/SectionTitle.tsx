"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-3xl mb-16",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 transition-all",
            dark
              ? "bg-[#F26522]/15 text-[#F26522] border border-[#F26522]/30"
              : "bg-blue-50 text-[#0B4DA2] border border-blue-200"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F26522] animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed font-normal",
            dark ? "text-slate-400" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
