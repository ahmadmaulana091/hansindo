"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showSubtext?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showSubtext = true,
  size = "md",
  variant = "light",
}) => {
  const logoSizes = {
    sm: { width: 44, height: 44 },
    md: { width: 60, height: 60 },
    lg: { width: 80, height: 80 },
  };

  const subtextSizes = {
    sm: "text-[8px]",
    md: "text-[9.5px]",
    lg: "text-[11px]",
  };

  const isDark = variant === "dark";
  const { width, height } = logoSizes[size];

  return (
    <Link href="/" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Official Hansindo Logistik Logo Image */}
      <div
        className="shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
        style={{ width, height }}
      >
        <Image
          src="/images/hansindo_logo.png"
          alt="Hansindo Logistik Logo"
          width={width}
          height={height}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Subtext below logo (optional) */}
      {showSubtext && (
        <span
          className={`${subtextSizes[size]} font-bold tracking-wider uppercase ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          PT. HANSINDO BERKAT JAYA LOGISTIK
        </span>
      )}
    </Link>
  );
};

