"use client";

import { createContext, useContext } from "react";

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  setIsDark: () => {},
});

export const useTheme = () => useContext(ThemeContext);
