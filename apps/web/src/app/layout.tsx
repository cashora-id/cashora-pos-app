import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QueryProvider } from "@/components/providers/QueryProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cashora — Satu POS untuk Semua Skala Bisnis",
  description:
    "Platform POS modern dengan mode offline, tanpa biaya per cabang, dan keamanan perbankan. Cocok untuk UMKM, restoran, retail, dan korporasi Indonesia.",
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
    <html lang="id" className="scroll-smooth bg-[#0A2540]">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} antialiased font-body bg-[#F5F7FA] text-[#0A2540] min-h-screen flex flex-col`}
      >
        <QueryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
