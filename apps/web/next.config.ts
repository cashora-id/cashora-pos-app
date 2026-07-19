import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Compiler ──────────────────────────────────────────────────────────────
  reactStrictMode: true,

  // ── Experimental ──────────────────────────────────────────────────────────
  experimental: {
    // Enable React compiler for automatic memoization
    reactCompiler: true,
  },
  // Server-side packages that should not be bundled
  serverExternalPackages: [],

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
  // Note: CSP is enforced via middleware.ts for nonce-based dynamic CSP.
  // These headers apply to all routes as a baseline.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "X-XSS-Protection",          value: "1; mode=block" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
