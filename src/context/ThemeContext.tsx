// src/context/ThemeContext.tsx
// Controls light/dark mode for ENTIRE app
// Saves preference to localStorage — persists on refresh

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../theme";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Check localStorage for saved preference, default to light
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("amazone-theme");
    return saved === "dark";
  });

  // Sync "dark" class on <html> element for Tailwind dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("amazone-theme", isDark ? "dark" : "light");
  }, [isDark]);
  // Runs every time isDark changes

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {/* MUI ThemeProvider switches between our two MUI themes */}
      <MuiThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {/* CssBaseline = MUI's global reset — works with our theme */}
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}


// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be inside ThemeProvider");
  return context;
}