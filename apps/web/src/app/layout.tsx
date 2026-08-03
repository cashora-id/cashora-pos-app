import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cashora — Satu POS untuk Semua Skala Bisnis Indonesia",
  description:
    "Platform POS modern dengan mode offline-first, tanpa biaya per cabang, dan keamanan perbankan 7 lapis. Cocok untuk UMKM, restoran, retail, dan korporasi.",
  keywords: ["POS", "Kasir POS", "UMKM", "Restoran", "QRIS TUNTAS", "Offline First POS", "Indonesia"],
  openGraph: {
    title: "Cashora — Satu POS untuk Semua Skala Bisnis",
    description: "Platform POS modern dengan mode offline, tanpa biaya per cabang, dan keamanan perbankan.",
    url: "https://cashora.id",
    siteName: "Cashora",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-[#F5F7FA] text-[#0A2540] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
