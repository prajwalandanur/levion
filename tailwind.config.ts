import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
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
      // ✅ FONTS (Project A)
      fontFamily: {
        display: ["'Slackey'", "cursive"],
        body: ["'Satoshi'", "sans-serif"],
        slackey: ["var(--font-slackey)"],
        satoshi: ["var(--font-satoshi)"],
      },

      // ✅ COLORS (Merged A + B)
      colors: {
        // 🔥 Custom (Project A)
        gold: "#FEC107",

        // 🔥 Base system (Project B + A)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

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

        // 🔥 Sidebar (Project B)
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        // 🔥 Sections (Project A)
        impact: {
          yellow: "hsl(var(--impact-yellow))",
          dark: "hsl(var(--impact-dark))",
          body: "hsl(var(--impact-body))",
          divider: "hsl(var(--impact-divider))",
        },

        winning: {
          yellow: "hsl(var(--winning-yellow))",
          black: "hsl(var(--winning-black))",
          cream: "hsl(var(--winning-cream))",
        },
      },

      // ✅ BORDER
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ✅ KEYFRAMES (Merged A + B)
      keyframes: {
        // From both
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // Project A additions
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        // 🔥 CRITICAL (logo scroll)
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      // ✅ ANIMATIONS (Merged)
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // Project A
        "fade-in-up": "fade-in-up 0.4s ease-out both",
        marquee: "marquee 20s linear infinite",
      },
    },
  },

  // ✅ Plugin (Unified)
  plugins: [animate],
} satisfies Config;