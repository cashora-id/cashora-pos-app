"use client";

import React from "react";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastVariant = "success" | "danger" | "warning" | "info";

export interface ToastProps {
  variant?: ToastVariant;
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export function Toast({
  variant = "info",
  title,
  description,
  onClose,
  className,
}: ToastProps) {
  const variantStyles = {
    success: "bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]",
    danger: "bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]",
    warning: "bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]",
    info: "bg-[#EFF6FF] border-[#BFDBFE] text-[#1E40AF]",
  };

  const variantIcons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />,
    danger: <XCircle className="w-5 h-5 text-[#EF4444] shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-[#F59E0B] shrink-0" />,
    info: <Info className="w-5 h-5 text-[#3B82F6] shrink-0" />,
  };

  return (
    <div
      className={cn(
        "p-4 rounded-xl border shadow-lg flex items-start justify-between gap-3 font-body text-xs sm:text-sm transition-all animate-in fade-in slide-in-from-top-2 duration-300",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start gap-3">
        {variantIcons[variant]}
        <div>
          <h4 className="font-bold font-sans text-xs sm:text-sm leading-tight">
            {title}
          </h4>
          {description && (
            <p className="mt-1 opacity-80 leading-relaxed text-xs">
              {description}
            </p>
          )}
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="p-1 opacity-60 hover:opacity-100 transition-opacity rounded-lg"
          title="Tutup"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
