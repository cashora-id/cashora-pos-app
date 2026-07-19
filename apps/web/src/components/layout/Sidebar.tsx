"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CreditCard, 
  Truck, 
  Package, 
  BookOpen, 
  Settings, 
  LifeBuoy, 
  Terminal 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Payments", href: "/payments", icon: CreditCard },
    { name: "Delivery", href: "/delivery", icon: Truck },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Ledger", href: "/ledger", icon: BookOpen },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside className={cn("w-64 bg-[#0B0F19] border-r border-[#1E293B]/50 flex flex-col min-h-screen text-gray-400 p-4", className)}>
      {/* Brand Header */}
      <div className="flex items-center gap-2 px-3 py-4 mb-6">
        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
          <span className="text-teal-400 font-bold text-lg">C</span>
        </div>
        <span className="text-white font-semibold text-lg tracking-tight">Cashora</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1.5">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:text-white hover:bg-[#1E293B]/30",
                isActive ? "text-teal-400 bg-[#1E293B]/50 font-semibold" : "text-gray-400"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-teal-400" : "text-gray-400")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Account Actions */}
      <div className="pt-4 border-t border-[#1E293B]/40 space-y-3">
        {/* Open Terminal Call-to-Action */}
        <Button 
          variant="default" 
          className="w-full bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-[#0B0F19] font-semibold py-2.5 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10"
        >
          <Terminal className="w-4 h-4" />
          Open Terminal
        </Button>

        {/* Support Link */}
        <Link
          href="/support"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:text-white hover:bg-[#1E293B]/30"
        >
          <LifeBuoy className="w-5 h-5" />
          Support
        </Link>

        {/* User Card */}
        <div className="flex items-center gap-3 p-2 rounded-lg bg-[#1E293B]/20 border border-[#1E293B]/30">
          <div className="w-9 h-9 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400 font-bold text-sm">
            AB
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Alex Brut</p>
            <p className="text-gray-500 text-xs truncate">Waiter</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
