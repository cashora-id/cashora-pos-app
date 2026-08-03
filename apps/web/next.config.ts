import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Compiler ──────────────────────────────────────────────────────────────
  reactStrictMode: true,
  serverExternalPackages: [],

  // ── Experimental ──────────────────────────────────────────────────────────
  experimental: {
    // Enable React compiler for automatic memoization
    reactCompiler: true,
  },

  // ── WebAssembly ───────────────────────────────────────────────────────────
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    return config;
  },

  // ── Image Domains ─────────────────────────────────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cashora.id",
      },
    ],
  },

  // ── HTTP Headers (Security) ───────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
