"use client";
import { Search, Bell, Command, Plus, Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Topbar({ onMenuClick }: { onMenuClick?: () => void } = {}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <header className="sticky top-0 z-30 h-14 border-b border-[var(--color-border)] bg-[color-mix(in_oklch,var(--color-bg)_85%,transparent)] backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklch,var(--color-bg)_70%,transparent)]">
      <div className="flex h-full items-center gap-3 px-4 lg:px-6">
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="lg:hidden -ml-1 size-9 rounded-md flex items-center justify-center hover:bg-[var(--color-bg-muted)] cursor-pointer"
        >
          <Menu className="size-5" strokeWidth={1.75} />
        </button>

        <div className="flex-1 max-w-md">
          <button className="w-full h-9 inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 text-[13px] text-[var(--color-fg-subtle)] hover:border-[var(--color-border-strong)] transition-colors cursor-pointer">
            <Search className="size-4" strokeWidth={1.75} />
            <span className="flex-1 text-left">Search journeys, people, campaigns…</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-1.5 py-0.5 text-[10px] font-mono text-[var(--color-fg-muted)]">
              <Command className="size-3" /> K
            </kbd>
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <Button size="sm" variant="secondary" leftIcon={<Plus className="size-4" />}>
            Create
          </Button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="size-9 rounded-md flex items-center justify-center hover:bg-[var(--color-bg-muted)] text-[var(--color-fg-muted)] cursor-pointer"
          >
            {dark ? <Sun className="size-4.5" strokeWidth={1.75} /> : <Moon className="size-4.5" strokeWidth={1.75} />}
          </button>

          <button
            aria-label="Notifications"
            className="relative size-9 rounded-md flex items-center justify-center hover:bg-[var(--color-bg-muted)] text-[var(--color-fg-muted)] cursor-pointer"
          >
            <Bell className="size-4.5" strokeWidth={1.75} />
            <span className="absolute top-2 right-2 size-1.5 rounded-full bg-[var(--color-danger-500)] ring-2 ring-[var(--color-bg)]" />
          </button>

          <div className="mx-1.5 h-6 w-px bg-[var(--color-border)]" />

          <button className="flex items-center gap-2 rounded-lg p-0.5 pr-2 hover:bg-[var(--color-bg-muted)] cursor-pointer">
            <Avatar name="Tanvir Ahmed" size="sm" />
            <div className="hidden md:flex flex-col items-start leading-tight">
              <span className="text-[12px] font-semibold">Tanvir Ahmed</span>
              <span className="text-[10px] text-[var(--color-fg-muted)]">Owner</span>
            </div>
          </button>
        </div>
      </div>
      <EnvironmentBar />
    </header>
  );
}

function EnvironmentBar() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden xl:flex items-center gap-2 px-3 py-1 rounded-b-xl border border-t-0 border-[var(--color-border)] bg-[var(--color-bg-elev)] text-[11px] shadow-[var(--shadow-card)]">
      <Badge tone="success" dot>Live</Badge>
      <span className="text-[var(--color-fg-muted)]">api.journeycraft.io · v 16.2</span>
    </div>
  );
}
