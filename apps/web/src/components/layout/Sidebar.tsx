"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Utensils,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useUIStore } from "@/store/useUIStore";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useUIStore();
  const { logout, user } = useAuthStore();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "POS Kasir", href: "/dashboard/pos", icon: ShoppingCart },
    { label: "Dapur (KDS)", href: "/dashboard/kds", icon: Utensils },
    { label: "Produk & Stok", href: "/dashboard/produk", icon: Package },
    { label: "Pelanggan & CRM", href: "/dashboard/pelanggan", icon: Users },
    { label: "Laporan Analytics", href: "/dashboard/laporan", icon: BarChart3 },
    { label: "Pengaturan Outlet", href: "/dashboard/pengaturan", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "bg-[#0A2540] text-white flex flex-col justify-between transition-all duration-300 relative border-r border-white/10 z-30 shrink-0",
        sidebarOpen ? "w-64" : "w-20"
      )}
    >
      {/* TOGGLE BUTTON */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-7 w-6 h-6 rounded-full bg-[#00C897] text-[#0A2540] flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        aria-label="Toggle Sidebar"
      >
        {sidebarOpen ? <ChevronLeft className="w-4 h-4 stroke-[3]" /> : <ChevronRight className="w-4 h-4 stroke-[3]" />}
      </button>

      <div>
        {/* HEADER LOGO */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <Logo light={true} className={cn(!sidebarOpen && "justify-center")} />
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="p-4 space-y-1.5 font-body">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all group",
                  isActive
                    ? "bg-[#00C897] text-[#0A2540] shadow-md shadow-[#00C897]/20"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
                title={!sidebarOpen ? item.label : undefined}
              >
                <Icon className={cn("w-5 h-5 shrink-0", isActive ? "text-[#0A2540]" : "text-white/70 group-hover:text-white")} />
                {sidebarOpen && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* FOOTER USER PROFILE */}
      <div className="p-4 border-t border-white/10">
        <div className={cn("flex items-center justify-between gap-3", !sidebarOpen && "justify-center")}>
          {sidebarOpen ? (
            <div className="flex items-center gap-3 truncate">
              <div className="w-9 h-9 rounded-full bg-[#00C897] text-[#0A2540] font-bold text-xs flex items-center justify-center font-sans shrink-0">
                {user?.name ? user.name.slice(0, 2).toUpperCase() : "CS"}
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-white font-sans truncate">{user?.name || "Merchant Cashora"}</p>
                <p className="text-[10px] text-white/50 font-body truncate">{user?.role || "OWNER"}</p>
              </div>
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-[#00C897] text-[#0A2540] font-bold text-xs flex items-center justify-center font-sans">
              CS
            </div>
          )}

          {sidebarOpen && (
            <button
              onClick={logout}
              className="p-2 text-white/50 hover:text-red-400 hover:bg-white/10 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
