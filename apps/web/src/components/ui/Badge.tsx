import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold font-body transition-colors",
  {
    variants: {
      variant: {
        emerald: "bg-[#E6F9F4] text-[#00A87E]",
        navy: "bg-[#0A2540]/10 text-[#0A2540]",
        success: "bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]",
        warning: "bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]",
        danger: "bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA]",
        info: "bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE]",
        outline: "border border-gray-200 text-[#0A2540] bg-white",
      },
    },
    defaultVariants: {
      variant: "emerald",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
