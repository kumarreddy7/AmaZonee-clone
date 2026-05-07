// src/theme/index.ts
// Two complete MUI themes — light and dark
// Uses Amazon color palette from our Tailwind config

import { createTheme } from "@mui/material/styles";

// ─── Shared settings ───
const shared = {
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" as const },
    // textTransform: "none" → MUI buttons don't shout in UPPERCASE
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 600,
          textTransform: "none" as const,
          transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: "12px" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
  },
};

// ─── Light Theme ───
export const lightTheme = createTheme({
  ...shared,
  palette: {
    mode: "light",
    primary: {
      main: "#FF9900", // Amazon orange
      dark: "#E47911",
      light: "#FFB84D",
      contrastText: "#0F1111",
    },
    secondary: {
      main: "#146EB4", // Amazon blue
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F1111",
      secondary: "#565959",
    },
    divider: "#E3E6E6",
    error: { main: "#CC0C39" },
    success: { main: "#067D62" },
  },
});

// ─── Dark Theme ───
export const darkTheme = createTheme({
  ...shared,
  palette: {
    mode: "dark",
    primary: {
      main: "#FF9900",
      dark: "#E47911",
      light: "#FFB84D",
      contrastText: "#0F1111",
    },
    secondary: {
      main: "#4493F8",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#0D1117",
      paper: "#161B22",
    },
    text: {
      primary: "#E6EDF3",
      secondary: "#848D97",
    },
    divider: "#30363D",
    error: { main: "#FF6B6B" },
    success: { main: "#3FB950" },
  },
});
