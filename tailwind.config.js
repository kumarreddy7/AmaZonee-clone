/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // "class" = dark mode controlled by adding "dark" class to <html>
  // We toggle this via our ThemeContext
  darkMode: "class",

  theme: {
    extend: {
      // Custom Amazon color palette
      colors: {
        az: {
          dark: "#0F1111", // Amazon darkest
          nav: "#232F3E", // Amazon nav bar
          orange: "#FF9900", // Amazon orange
          yellow: "#FFD814", // Amazon button yellow
          blue: "#146EB4", // Amazon blue
          teal: "#007185", // Amazon link teal
          border: "#E3E6E6", // Amazon border
          muted: "#565959", // Amazon muted text
          light: "#FAFAFA", // Light background
          red: "#CC0C39", // Amazon prime red
        },
        // Dark mode surfaces
        dk: {
          bg: "#0D1117",
          surface: "#161B22",
          card: "#1C2128",
          border: "#30363D",
          muted: "#848D97",
          text: "#E6EDF3",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      // Premium shadow system
      boxShadow: {
        "sm-warm": "0 1px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "md-warm": "0 4px 16px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        "lg-warm": "0 8px 32px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
        "glow-orange": "0 0 24px rgba(255,153,0,0.25)",
        "dark-md": "0 4px 24px rgba(0,0,0,0.40)",
        "dark-lg": "0 8px 40px rgba(0,0,0,0.60)",
      },

      // Smooth transitions
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },

      // Blur for glass effects
      backdropBlur: {
        xs: "2px",
      },

      screens: {
        xs: "480px",
        // sm: 640px  (default)
        // md: 768px  (default)
        // lg: 1024px (default)
        // xl: 1280px (default)
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
