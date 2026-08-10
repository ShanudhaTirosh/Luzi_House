"use client";

import { useTheme } from "@/providers/theme-provider";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] p-2 text-[color:var(--text)] transition hover:bg-[color:var(--accent)]/10"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
}

export default ThemeToggle;
