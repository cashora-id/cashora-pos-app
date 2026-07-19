"use client";

import React from "react";
import { Search, ChevronDown, Store, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="h-16 border-b border-[#1E293B]/50 bg-[#0B0F19] px-6 flex items-center justify-between">
      {/* Left: Tenant Switcher */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400">
          <Store className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
          <span className="text-white text-sm font-medium">Grand Indonesia Branch</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Center/Right Search & Profile */}
      <div className="flex items-center gap-6">
        {/* Search Input */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-[50%] translate-y-[-50%] w-4 h-4 text-gray-500" />
          <Input 
            type="search" 
            placeholder="Search transactions..." 
            className="pl-9 bg-[#1E293B]/20 border-[#1E293B]/50 text-white placeholder-gray-500"
          />
        </div>

        {/* Notification Icon */}
        <button className="relative p-1.5 rounded-full hover:bg-[#1E293B]/30 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-teal-400"></span>
        </button>

        {/* Profile Avatar */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
          <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400 font-bold text-xs">
            AB
          </div>
        </div>
      </div>
    </header>
  );
}
