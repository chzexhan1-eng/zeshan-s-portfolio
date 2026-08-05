import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        "bg-secondary": "#090d16",
        "bg-card": "rgba(255, 255, 255, 0.03)",
        "text-primary": "#e5e7eb",
        "text-secondary": "#9ca3af",
        "accent-blue": "#3b82f6",
        "accent-cyan": "#22d3ee",
        "accent-purple": "#a855f7",
        "accent-emerald": "#10b981",
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.8rem, 5.5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "section-title": ["clamp(1.8rem, 3vw, 2.8rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.76, 0, 0.24, 1) forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(60px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
