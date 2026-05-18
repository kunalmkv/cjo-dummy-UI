"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "size-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] flex items-center justify-center hover:border-[var(--color-border-strong)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] cursor-pointer transition-colors",
        className,
      )}
    >
      {dark ? <Sun className="size-4" strokeWidth={1.75} /> : <Moon className="size-4" strokeWidth={1.75} />}
    </button>
  );
}
