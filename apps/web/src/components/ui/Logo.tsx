import React from "react";
import Link from "next/link";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = true, className = "" }) => {
  return (
    <Link href="/" className={`flex items-center gap-3 shrink-0 ${className}`}>
      {/* SVG Emblem Logo with fixed dimensions */}
      <div className="relative w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-gradient-to-br from-[#00C897] via-[#00a87e] to-[#0A2540] p-0.5 shadow-md flex items-center justify-center shrink-0">
        <svg
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 rounded-full shrink-0"
          style={{ width: "36px", height: "36px", minWidth: "36px", minHeight: "36px" }}
        >
          <rect width="40" height="40" rx="20" fill="#0A2540" />
          <path
            d="M26 13.5C24.2 11.9 21.7 11 19 11C13.5 11 9 15.5 9 21C9 26.5 13.5 31 19 31C21.7 31 24.2 30.1 26 28.5"
            stroke="#00C897"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="26" cy="21" r="2.5" fill="#00C897" />
        </svg>
      </div>

      <span className={`font-sans font-bold text-2xl tracking-tight ${light ? "text-white" : "text-[#0A2540]"}`}>
        Cashora
      </span>
    </Link>
  );
};
