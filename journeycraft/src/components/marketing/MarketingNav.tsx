"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/shell/Sidebar";

const links = [
  { href: "#journeys", label: "Journeys" },
  { href: "#landers", label: "Landers" },
  { href: "#analytics", label: "Analytics" },
  { href: "#pricing", label: "Pricing" },
  { href: "#customers", label: "Customers" },
];

export function MarketingNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color-mix(in_oklch,var(--color-bg)_80%,transparent)] backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklch,var(--color-bg)_65%,transparent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="size-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)] text-white shadow-[var(--shadow-pop)]">
              <Logo className="size-4" />
            </span>
            <span className="font-display font-semibold text-[15px] tracking-tight">JourneyCraft</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 h-9 rounded-md inline-flex items-center text-[13.5px] font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link href="/dashboard">
              <Button
                size="sm"
                variant="secondary"
                rightIcon={<ArrowUpRight className="size-3.5" />}
              >
                Open dashboard
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm">Start free trial</Button>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden size-9 rounded-md border border-[var(--color-border)] flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg-elev)]">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-muted)]"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-[var(--color-border)] space-y-2">
              <Link href="/dashboard" onClick={() => setOpen(false)} className="block">
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-full"
                  rightIcon={<ArrowUpRight className="size-3.5" />}
                >
                  Open dashboard
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Link href="/dashboard" onClick={() => setOpen(false)} className="flex-1">
                  <Button size="sm" className="w-full">Start free trial</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
