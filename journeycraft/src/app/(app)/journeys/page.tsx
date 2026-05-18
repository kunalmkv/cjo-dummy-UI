import Link from "next/link";
import {
  ChevronRight,
  Filter,
  GitBranch,
  Plus,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { AvatarStack } from "@/components/ui/Avatar";
import { Sparkline } from "@/components/ui/Sparkline";

const tabs = [
  { label: "All", count: 24 },
  { label: "Running", count: 12 },
  { label: "Paused", count: 4 },
  { label: "Drafts", count: 8 },
  { label: "Archived", count: 6 },
];

const journeys = [
  {
    name: "Welcome onboarding",
    description: "Greet new sign-ups across email + push, with branching by plan tier.",
    status: "running",
    starred: true,
    enrolled: "24,180",
    conversion: 38,
    delta: 12.4,
    steps: 9,
    branches: 3,
    owners: [{ name: "Sara K." }, { name: "Mohit P." }, { name: "Lana D." }],
    updated: "Updated 2h ago",
    spark: [10, 14, 12, 18, 22, 24, 27, 30, 33, 36, 38, 42, 45, 48],
  },
  {
    name: "Trial → Paid",
    description: "Nudge trial users to upgrade based on activation milestones.",
    status: "running",
    starred: true,
    enrolled: "8,410",
    conversion: 22,
    delta: 4.1,
    steps: 6,
    branches: 2,
    owners: [{ name: "Tanvir A." }, { name: "Mohit P." }],
    updated: "Updated 6h ago",
    spark: [20, 22, 24, 23, 26, 28, 30, 31, 33, 34, 35, 37, 38, 41],
  },
  {
    name: "Win-back · 30d inactive",
    description: "Re-engage dormant accounts with a 4-touch sequence and a personalized offer.",
    status: "running",
    starred: false,
    enrolled: "12,940",
    conversion: 11,
    delta: -2.3,
    steps: 7,
    branches: 2,
    owners: [{ name: "Lana D." }],
    updated: "Updated yesterday",
    spark: [40, 38, 39, 37, 36, 34, 33, 30, 29, 28, 26, 25, 24, 22],
  },
  {
    name: "Cart abandonment recovery",
    description: "Trigger on cart_abandoned, hold for 1h, then send 3 touches.",
    status: "paused",
    starred: false,
    enrolled: "3,201",
    conversion: 18,
    delta: 0.8,
    steps: 5,
    branches: 1,
    owners: [{ name: "Sara K." }, { name: "Lana D." }],
    updated: "Paused 3d ago",
    spark: [22, 22, 23, 24, 22, 21, 23, 24, 22, 23, 24, 25, 24, 25],
  },
  {
    name: "Feature announcement · Pro",
    description: "Targeted to Pro plan workspaces with the new AI assistant.",
    status: "draft",
    starred: false,
    enrolled: "—",
    conversion: 0,
    delta: 0,
    steps: 4,
    branches: 1,
    owners: [{ name: "Tanvir A." }],
    updated: "Edited 30m ago",
    spark: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "NPS survey · post-purchase",
    description: "Send NPS survey 7 days after first successful order.",
    status: "running",
    starred: false,
    enrolled: "4,118",
    conversion: 41,
    delta: 1.6,
    steps: 3,
    branches: 0,
    owners: [{ name: "Mohit P." }],
    updated: "Updated 4d ago",
    spark: [30, 31, 32, 31, 33, 34, 33, 35, 34, 36, 37, 36, 38, 40],
  },
];

const statusTone = {
  running: { tone: "success" as const, dot: true, label: "Running" },
  paused: { tone: "warning" as const, dot: false, label: "Paused" },
  draft: { tone: "neutral" as const, dot: false, label: "Draft" },
};

export default function JourneysPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Journeys"
        title="Orchestrate every step of the customer lifecycle"
        description="Branch, wait, message, score. Ship visual workflows that adapt to what each person does next."
        actions={
          <>
            <Button variant="secondary" size="sm" leftIcon={<Sparkles className="size-4" />}>
              AI assist
            </Button>
            <Button size="sm" leftIcon={<Plus className="size-4" />}>
              <Link href="/journeys/welcome-onboarding">New journey</Link>
            </Button>
          </>
        }
      />

      <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin -mx-1 px-1">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              className={
                "shrink-0 inline-flex items-center gap-1.5 px-3 h-8 rounded-md text-[13px] font-medium transition-colors cursor-pointer " +
                (i === 0
                  ? "bg-[var(--color-bg-elev)] border border-[var(--color-border)] text-[var(--color-fg)] shadow-[var(--shadow-card)]"
                  : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)]")
              }
            >
              {t.label}
              <span className="text-[11px] text-[var(--color-fg-subtle)] tabular-nums">{t.count}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-72">
            <Input placeholder="Search journeys…" leftIcon={<Search className="size-4" />} />
          </div>
          <Button variant="secondary" size="md" leftIcon={<Filter className="size-4" />}>
            Filters
          </Button>
          <Button variant="ghost" size="icon" aria-label="View settings">
            <SlidersHorizontal className="size-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {journeys.map((j) => {
          const s = statusTone[j.status as keyof typeof statusTone];
          return (
            <Link key={j.name} href={`/journeys/${slug(j.name)}`}>
              <Card className="group h-full flex flex-col cursor-pointer hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-pop)] transition-all">
                <div className="flex items-start justify-between p-5 pb-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="size-9 rounded-lg flex items-center justify-center bg-[color-mix(in_oklch,var(--color-brand-500)_12%,transparent)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                      <GitBranch className="size-4" strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-display font-semibold text-[15px] tracking-tight truncate">
                          {j.name}
                        </h3>
                        {j.starred && <Star className="size-3.5 fill-[var(--color-accent-500)] text-[var(--color-accent-500)]" />}
                      </div>
                      <p className="text-[12.5px] text-[var(--color-fg-muted)] mt-0.5 line-clamp-2">
                        {j.description}
                      </p>
                    </div>
                  </div>
                  <Badge tone={s.tone} dot={s.dot}>{s.label}</Badge>
                </div>

                <div className="px-5 grid grid-cols-3 gap-3 text-[12px]">
                  <Stat label="Enrolled" value={j.enrolled} />
                  <Stat label="Conversion" value={`${j.conversion}%`} delta={j.delta} />
                  <Stat label="Steps" value={`${j.steps} · ${j.branches}b`} />
                </div>

                <div className="mt-4 h-12 px-2">
                  <Sparkline id={`jspark-${slug(j.name)}`} data={j.spark} />
                </div>

                <div className="mt-auto p-4 pt-3 flex items-center justify-between border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-2">
                    <AvatarStack people={j.owners} size="xs" />
                    <span className="text-[11.5px] text-[var(--color-fg-muted)]">{j.updated}</span>
                  </div>
                  <ChevronRight className="size-4 text-[var(--color-fg-subtle)] group-hover:translate-x-0.5 group-hover:text-[var(--color-fg-muted)] transition-all" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Stat({ label, value, delta }: { label: string; value: string; delta?: number }) {
  return (
    <div>
      <div className="text-[10.5px] uppercase tracking-wider text-[var(--color-fg-subtle)]">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className="text-[15px] font-semibold tabular-nums">{value}</span>
        {delta !== undefined && delta !== 0 && (
          <span
            className={
              "text-[10.5px] font-semibold " +
              (delta > 0
                ? "text-[color-mix(in_oklch,var(--color-success-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-success-500)_70%,white)]"
                : "text-[color-mix(in_oklch,var(--color-danger-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-danger-500)_70%,white)]")
            }
          >
            {delta > 0 ? "+" : ""}
            {delta}%
          </span>
        )}
      </div>
    </div>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
