"use client";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Sidebar open={navOpen} onClose={() => setNavOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar onMenuClick={() => setNavOpen(true)} />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1600px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
