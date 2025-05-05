
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neon: {
          pink: "#ff2cc4",
          blue: "#4cc9ff",
          purple: "#bd00ff",
          green: "#00ff9f",
          yellow: "#ffea00",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "flicker": {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: "0.99",
            filter: "drop-shadow(0 0 1px rgba(252, 211, 77, 0.7)) drop-shadow(0 0 15px rgba(245, 158, 11, 0.7)) drop-shadow(0 0 1px rgba(252, 211, 77, 0.7))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: "0.4",
            filter: "none",
          },
        },
        "neon-glow": {
          "0%, 100%": { 
            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff2cc4, 0 0 20px #ff2cc4, 0 0 25px #ff2cc4, 0 0 30px #ff2cc4, 0 0 35px #ff2cc4"
          },
          "50%": { 
            textShadow: "0 0 5px #fff, 0 0 15px #4cc9ff, 0 0 20px #4cc9ff, 0 0 25px #4cc9ff, 0 0 30px #4cc9ff, 0 0 35px #4cc9ff, 0 0 40px #4cc9ff"
          },
        },
        "scan-lines": {
          "0%": { 
            transform: "translateY(0%)" 
          },
          "100%": { 
            transform: "translateY(100%)" 
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "flicker": "flicker 3s linear infinite",
        "neon-glow": "neon-glow 1.5s ease-in-out infinite alternate",
        "scan-lines": "scan-lines 8s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
