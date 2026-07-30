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
        navy: {
          DEFAULT: "#0A2A6B",
          dark: "#071D4A",
          light: "#1A3F8F",
        },
        royal: {
          DEFAULT: "#156FEA",
          hover: "#0F5FD0",
          light: "#E8F2FE",
        },
        cyan: {
          DEFAULT: "#24C7FF",
          light: "#E6F9FF",
        },
        page: "#F4F8FC",
        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#F8FAFC",
        },
        card: "#FFFFFF",
        text: {
          main: "#0F172A",
          secondary: "#64748B",
          muted: "#94A3B8",
        },
        border: {
          DEFAULT: "#E2E8F0",
          light: "#F1F5F9",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        brand: "14px",
        "brand-lg": "20px",
        "brand-xl": "28px",
        pill: "9999px",
      },
      boxShadow: {
        brand: "0 1px 2px rgba(10, 42, 107, 0.04)",
        "brand-md":
          "0 2px 6px rgba(10, 42, 107, 0.05), 0 4px 12px rgba(10, 42, 107, 0.04)",
        "brand-lg": "0 4px 14px rgba(10, 42, 107, 0.06)",
        "brand-xl": "0 6px 20px rgba(10, 42, 107, 0.07)",
        glow: "0 4px 18px rgba(21, 111, 234, 0.1)",
        "glow-cyan": "0 4px 18px rgba(36, 199, 255, 0.1)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0A2A6B 0%, #156FEA 55%, #24C7FF 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(10,42,107,0.04) 0%, rgba(21,111,234,0.06) 50%, rgba(36,199,255,0.04) 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #071D4A 0%, #0A2A6B 35%, #156FEA 70%, #1A8FFF 100%)",
        "mesh-gradient":
          "radial-gradient(at 0% 0%, rgba(36,199,255,0.15) 0%, transparent 50%), radial-gradient(at 100% 0%, rgba(21,111,234,0.12) 0%, transparent 50%), radial-gradient(at 50% 100%, rgba(10,42,107,0.08) 0%, transparent 50%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)",
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "ken-burns": "ken-burns 14s ease-out forwards",
        "progress-fill": "progress-fill 5.5s linear forwards",
        aurora: "aurora 18s ease-in-out infinite",
        "aurora-delayed": "aurora 22s ease-in-out infinite reverse",
        "border-glow": "border-glow 4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.14) translate(-1.5%, -1%)" },
        },
        "progress-fill": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.08)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.95)" },
        },
        "border-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
