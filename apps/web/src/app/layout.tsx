import type { Metadata } from "next";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cashora Enterprise",
  description: "Point of Sale Admin & Analytics Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen bg-[#0B0F19] text-white">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
