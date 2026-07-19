"use client";

import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  TrendingUp, 
  ShoppingBag, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function DashboardPage() {
  const transactions = [
    { id: "#ORD-0921", time: "14:32:01", method: "QRIS", total: "85,000", status: "PAID" },
    { id: "#ORD-0920", time: "14:30:45", method: "GoFood", total: "142,500", status: "PENDING" },
    { id: "#ORD-0919", time: "14:28:12", method: "Cash", total: "45,000", status: "PAID" },
    { id: "#ORD-0918", time: "14:25:00", method: "GrabFood", total: "210,000", status: "VOIDED" },
    { id: "#ORD-0917", time: "14:22:33", method: "QRIS", total: "95,000", status: "PAID" },
  ];

  return (
    <div className="flex min-h-screen bg-[#060814]">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <main className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1600px] w-full mx-auto">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-white">Dashboard Overview</h1>
              <p className="text-gray-400 text-sm">Real-time performance analytics across stores.</p>
            </div>
            <Button variant="outline" className="border-[#1E293B] text-gray-300 hover:bg-[#1E293B]/20">
              Export Report
            </Button>
          </div>

          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card className="bg-[#0B0F19] border-[#1E293B]/50 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-gray-400">TODAY'S GROSS SALES (IDR)</CardTitle>
                <TrendingUp className="w-4 h-4 text-teal-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">14.2M</div>
                <p className="text-xs text-teal-400 flex items-center gap-1 mt-1">
                  <span>+12%</span> <span className="text-gray-500">vs last week</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0B0F19] border-[#1E293B]/50 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-gray-400">TRANSACTION VOL</CardTitle>
                <ShoppingBag className="w-4 h-4 text-teal-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">342</div>
                <p className="text-xs text-teal-400 flex items-center gap-1 mt-1">
                  <span>+8.2%</span> <span className="text-gray-500">vs yesterday</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0B0F19] border-[#1E293B]/50 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-gray-400">AVERAGE CART SIZE</CardTitle>
                <Layers className="w-4 h-4 text-teal-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">41.5k</div>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <span>0%</span> <span>vs last week</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0B0F19] border-[#1E293B]/50 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-gray-400">ACTIVE POS TERMINALS</CardTitle>
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">4/5</div>
                <div className="flex gap-1.5 mt-2">
                  <span className="w-6 h-1.5 rounded-full bg-teal-400"></span>
                  <span className="w-6 h-1.5 rounded-full bg-teal-400"></span>
                  <span className="w-6 h-1.5 rounded-full bg-teal-400"></span>
                  <span className="w-6 h-1.5 rounded-full bg-teal-400"></span>
                  <span className="w-6 h-1.5 rounded-full bg-gray-700"></span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Section: Omnichannel & Settlement & Alert */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Omnichannel Performance */}
            <Card className="bg-[#0B0F19] border-[#1E293B]/50">
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-white">Omnichannel Sales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#1E293B]/20 border border-[#1E293B]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-sm font-medium text-white">GoFood</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">3 Prep</span>
                    <span className="text-sm font-bold text-white">12</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#1E293B]/20 border border-[#1E293B]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
                    <span className="text-sm font-medium text-white">GrabFood</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">1 Ready</span>
                    <span className="text-sm font-bold text-white">8</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#1E293B]/20 border border-[#1E293B]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                    <span className="text-sm font-medium text-white">ShopeeFood</span>
                  </div>
                  <span className="text-sm font-bold text-white">4</span>
                </div>
              </CardContent>
            </Card>

            {/* Settlement Monitor */}
            <Card className="bg-[#0B0F19] border-[#1E293B]/50 lg:col-span-2 flex flex-col justify-between">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-semibold text-white">Settlement Monitor</CardTitle>
                <Button variant="link" className="text-teal-400 text-xs p-0 flex items-center gap-1 hover:no-underline">
                  View BI SNAP Details <ArrowUpRight className="w-3 h-3" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-[#1E293B]/20 border border-[#1E293B]/30 space-y-1">
                    <span className="text-xs text-gray-500">QRIS (65%)</span>
                    <div className="text-lg font-bold text-white">9.2M</div>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-400 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1E293B]/20 border border-[#1E293B]/30 space-y-1">
                    <span className="text-xs text-gray-500">Cards (20%)</span>
                    <div className="text-lg font-bold text-white">2.8M</div>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1E293B]/20 border border-[#1E293B]/30 space-y-1">
                    <span className="text-xs text-gray-500">E-Wallet (10%)</span>
                    <div className="text-lg font-bold text-white">1.4M</div>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1E293B]/20 border border-[#1E293B]/30 space-y-1">
                    <span className="text-xs text-gray-500">Cash (5%)</span>
                    <div className="text-lg font-bold text-white">710k</div>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-600 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Inventory Alert Banner */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-orange-500/15 text-orange-400">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Inventory Alert</p>
                      <p className="text-xs text-gray-400">2 items running low (Cup 12oz, Aren Sugar)</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-[#1E293B] hover:bg-[#1E293B]/80 text-white border border-[#1E293B]/30">
                    Restock
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section: Live Order Ledger Table */}
          <Card className="bg-[#0B0F19] border-[#1E293B]/50">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-semibold text-white">Live Order Ledger</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-400">
                  <thead>
                    <tr className="border-b border-[#1E293B]/50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      <th className="py-3 px-4">Timestamp</th>
                      <th className="py-3 px-4">Order ID</th>
                      <th className="py-3 px-4">Method</th>
                      <th className="py-3 px-4">Total (IDR)</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]/30">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-[#1E293B]/10 transition-colors">
                        <td className="py-3.5 px-4 text-white font-medium">{tx.time}</td>
                        <td className="py-3.5 px-4 text-teal-400 font-medium cursor-pointer hover:underline">
                          {tx.id}
                        </td>
                        <td className="py-3.5 px-4">{tx.method}</td>
                        <td className="py-3.5 px-4 text-white font-bold">{tx.total}</td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            tx.status === "PAID" 
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                              : tx.status === "PENDING"
                              ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                              : "bg-red-500/10 text-red-400 border-red-500/20"
                          }`}>
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
