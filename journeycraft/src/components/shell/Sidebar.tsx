"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  LayoutDashboard,
  GitBranch,
  Send,
  Users,
  FileText,
  Globe2,
  BarChart3,
  Plug,
  Settings,
  ChevronsUpDown,
  Sparkles,
  HelpCircle,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/Badge";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: { text: string; tone?: React.ComponentProps<typeof Badge>["tone"] };
};

const primary: NavItem[] = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/journeys", label: "Journeys", icon: GitBranch, badge: { text: "12", tone: "neutral" } },
  { href: "/campaigns", label: "Campaigns", icon: Send },
  { href: "/audience", label: "Audience", icon: Users },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
];

const create: NavItem[] = [
  { href: "/landers", label: "Landers", icon: Globe2, badge: { text: "Beta", tone: "accent" } },
  { href: "/templates", label: "Templates", icon: FileText },
];

const system: NavItem[] = [
  { href: "/integrations", label: "Integrations", icon: Plug },
  { href: "/settings", label: "Settings", icon: Settings },
];

function NavLink({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const pathname = usePathname();
  const active = pathname === item.href || pathname.startsWith(item.href + "/");
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        "group relative flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150",
        active
          ? "bg-[var(--color-bg-elev)] text-[var(--color-fg)] shadow-[var(--shadow-card)]"
          : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-elev)]",
      )}
    >
      {active && (
        <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r-full bg-[var(--color-brand-500)]" />
      )}
      <Icon
        className={cn(
          "size-4 shrink-0 transition-colors",
          active ? "text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]" : "",
        )}
        strokeWidth={1.75}
      />
      <span className="flex-1 truncate">{item.label}</span>
      {item.badge && <Badge tone={item.badge.tone}>{item.badge.text}</Badge>}
    </Link>
  );
}

function NavGroup({ label, items, onNavigate }: { label: string; items: NavItem[]; onNavigate?: () => void }) {
  return (
    <div className="space-y-0.5">
      <div className="px-2.5 pb-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
        {label}
      </div>
      {items.map((it) => (
        <NavLink key={it.href} item={it} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

export function Sidebar({ open = false, onClose }: { open?: boolean; onClose?: () => void } = {}) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      <aside
        className={cn(
          "fixed lg:sticky inset-y-0 left-0 z-50 flex flex-col w-[260px] lg:w-[244px] shrink-0 h-screen top-0",
          "border-r border-[var(--color-border)] bg-[var(--color-bg-muted)]",
          "transition-transform duration-200 ease-out",
          "lg:translate-x-0",
          open ? "translate-x-0 shadow-[var(--shadow-float)]" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between lg:block">
          <WorkspaceSwitcher />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="lg:hidden mr-3 size-8 rounded-md flex items-center justify-center hover:bg-[var(--color-bg-elev)] cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

      <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-3 space-y-5">
        <NavGroup label="Engage" items={primary} onNavigate={onClose} />
        <NavGroup label="Create" items={create} onNavigate={onClose} />
        <NavGroup label="System" items={system} onNavigate={onClose} />
      </nav>

      <div className="p-3 border-t border-[var(--color-border)]">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3.5 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 size-24 rounded-full bg-[color-mix(in_oklch,var(--color-brand-500)_22%,transparent)] blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]" strokeWidth={2} />
              <span className="text-xs font-semibold">Free trial</span>
            </div>
            <p className="text-[11px] text-[var(--color-fg-muted)] mt-1 leading-snug">
              14 days left. Upgrade to unlock unlimited journeys.
            </p>
            <button className="mt-2.5 w-full rounded-md bg-[var(--color-fg)] text-[var(--color-bg)] text-[11px] font-semibold h-7 hover:opacity-90 transition-opacity cursor-pointer">
              Upgrade
            </button>
          </div>
        </div>
        <button className="mt-2 w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[12px] text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-elev)] cursor-pointer">
          <HelpCircle className="size-3.5" strokeWidth={1.75} /> Help & docs
        </button>
      </div>
    </aside>
    </>
  );
}

function WorkspaceSwitcher() {
  return (
    <div className="px-3 pt-3 pb-2">
      <button className="w-full flex items-center gap-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-2 hover:border-[var(--color-border-strong)] transition-colors cursor-pointer">
        <span className="size-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)] text-white shadow-[var(--shadow-pop)]">
          <Logo className="size-4" />
        </span>
        <span className="flex-1 min-w-0 text-left">
          <span className="block text-[13px] font-semibold leading-tight font-display truncate">SilvaPixel</span>
          <span className="block text-[10.5px] text-[var(--color-fg-muted)] leading-tight truncate">acme · Pro</span>
        </span>
        <ChevronsUpDown className="size-3.5 text-[var(--color-fg-subtle)]" strokeWidth={2} />
      </button>
    </div>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 18c4 0 4-12 8-12s4 12 8 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="4" cy="18" r="2" fill="currentColor" />
      <circle cx="20" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}
