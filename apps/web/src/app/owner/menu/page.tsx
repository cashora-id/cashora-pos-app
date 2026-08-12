"use client";

import React, { useState } from "react";
import { OwnerKpiHeader, PeriodType } from "@/components/owner/OwnerKpiHeader";
import { OwnerChartSection } from "@/components/owner/OwnerChartSection";
import { OwnerTransactionTable } from "@/components/owner/OwnerTransactionTable";
import { OwnerStoreGrid } from "@/components/owner/OwnerStoreGrid";

export default function OwnerMenuPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("today");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HEADER & KPI SUMMARY CARDS (SCRUM-72) */}
      <OwnerKpiHeader
        selectedPeriod={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
      />

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-20">
        {/* 2. COMPARATIVE LINE CHART & PAYMENT CHANNEL ANALYTICS (SCRUM-73) */}
        <OwnerChartSection />

        {/* 3. PAYMENT & SETTLEMENT TRANSACTION MONITORING TABLE (SCRUM-74) */}
        <OwnerTransactionTable />

        {/* 4. STORE & BRANCH MANAGEMENT CARDS (SCRUM-75) */}
        <OwnerStoreGrid />
      </main>
    </div>
  );
}
