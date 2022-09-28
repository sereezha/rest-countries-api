import { createContext, useContext, useState } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const initialValue: ContextValue = {
  theme: Theme.LIGHT,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ContextValue>(initialValue);
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return Theme.LIGHT;
    const storageTheme = localStorage.getItem("theme") as Theme;
    if (storageTheme) {
      document.documentElement.setAttribute("data-theme", storageTheme);
      return storageTheme;
    }

    const isDark = window?.matchMedia(COLOR_SCHEME_QUERY).matches;
    const initialTheme = isDark ? Theme.DARK : Theme.LIGHT;
    document.documentElement.setAttribute("data-theme", initialTheme);
    return initialTheme;
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
