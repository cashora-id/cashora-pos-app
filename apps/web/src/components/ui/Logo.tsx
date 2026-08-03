import React from "react";
import Link from "next/link";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = true, className = "" }) => {
  return (
    <Link href="/" className={`flex items-center gap-3 shrink-0 ${className}`}>
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C897] to-[#0A2540] p-0.5 shadow-md flex items-center justify-center">
        <div className="w-full h-full bg-[#0A2540] rounded-[10px] flex items-center justify-center">
          <span className="font-sans font-extrabold text-[#00C897] text-lg tracking-wider">C</span>
        </div>
      </div>
      <span className={`font-sans font-bold text-2xl tracking-tight ${light ? "text-white" : "text-[#0A2540]"}`}>
        Cashora
      </span>
    </Link>
  );
};
