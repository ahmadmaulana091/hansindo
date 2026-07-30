"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-[#0B4DA2] hover:bg-[#083877] text-white shadow-lg shadow-blue-900/20 focus:ring-[#0B4DA2] border border-blue-400/20",
    secondary:
      "bg-[#1D4ED8] hover:bg-[#1e40af] text-white shadow-lg shadow-blue-600/20 focus:ring-blue-600 border border-blue-500/30",
    accent:
      "bg-[#F26522] hover:bg-[#d95314] text-white font-bold shadow-lg shadow-orange-500/25 focus:ring-[#F26522]",
    outline:
      "border-2 border-slate-300 dark:border-slate-700 hover:border-[#0B4DA2] dark:hover:border-[#F26522] text-slate-800 dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50",
    ghost:
      "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#0B4DA2] dark:hover:text-[#F26522]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 min-h-[52px]",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          "group",
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        "group",
        className
      )}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
};
