"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function resolveTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }
  const saved = localStorage.getItem("midori-theme") as Theme | null;
  if (saved === "light" || saved === "dark") {
    return saved;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(resolveTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("midori-theme", theme);
  }, [theme]);

  const apply = (next: Theme) => {
    setTheme(next);
  };

  return (
    <div className="theme-switch" aria-label="Theme switch">
      <button
        type="button"
        className={theme === "light" ? "active" : ""}
        onClick={() => apply("light")}
        aria-label="Light mode"
      >
        <span className="material-symbols-rounded">light_mode</span>
      </button>
      <button
        type="button"
        className={theme === "dark" ? "active" : ""}
        onClick={() => apply("dark")}
        aria-label="Dark mode"
      >
        <span className="material-symbols-rounded">dark_mode</span>
      </button>
    </div>
  );
}
