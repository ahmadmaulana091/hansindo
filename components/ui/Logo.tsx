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
    sm: { width: 56, height: 56 },
    md: { width: 72, height: 72 },
    lg: { width: 96, height: 96 },
  };

  const subtextSizes = {
    sm: "text-xs sm:text-[13px] md:text-[14px]",
    md: "text-sm sm:text-base",
    lg: "text-base sm:text-xl",
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
          src="/logo.svg"
          alt="Hansindo Logistik Logo"
          width={width}
          height={height}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Subtext beside logo */}
      {showSubtext && (
        <span
          className={`
            ${subtextSizes[size]}
            font-extrabold
            tracking-wider
            uppercase
            leading-tight
            whitespace-nowrap
            ${isDark ? "text-white drop-shadow-sm" : "text-slate-900"}
          `}
        >
          PT. HANSINDO BERKAT JAYA LOGISTIK
        </span>
      )}
    </Link>
  );
};

