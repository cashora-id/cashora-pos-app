import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CASHORA BRAND DESIGN TOKENS
        brand: {
          navy: {
            DEFAULT: "#0A2540",
            light: "#12365C",
            dark: "#06182B",
          },
          emerald: {
            DEFAULT: "#00C897",
            dark: "#00A87E",
            light: "#E6F9F4",
          },
          bg: "#F5F7FA",
          surface: "#FFFFFF",
        },
        // SEMANTIC STATE COLORS (Toasts, Badges, Alerts, Buttons)
        state: {
          success: {
            DEFAULT: "#10B981",
            bg: "#ECFDF5",
            border: "#A7F3D0",
            text: "#065F46",
          },
          warning: {
            DEFAULT: "#F59E0B",
            bg: "#FFFBEB",
            border: "#FDE68A",
            text: "#92400E",
          },
          danger: {
            DEFAULT: "#EF4444",
            bg: "#FEF2F2",
            border: "#FECACA",
            text: "#991B1B",
          },
          info: {
            DEFAULT: "#3B82F6",
            bg: "#EFF6FF",
            border: "#BFDBFE",
            text: "#1E40AF",
          },
        },
        // NEUTRAL SCALE
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        emerald: "0 10px 25px -5px rgba(0, 200, 151, 0.25)",
        navy: "0 10px 25px -5px rgba(10, 37, 64, 0.15)",
        toast: "0 8px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
