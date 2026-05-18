import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Eye,
  Globe2,
  Lightbulb,
  Link as LinkIcon,
  MoreHorizontal,
  Plus,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const sources = [
  "yoursite.com/pricing",
  "example.com/product",
  "example.com/affiliate",
  "yoursite.com/launch",
  "competitor.com/pricing",
];

const recent = [
  { name: "Q4 Pricing — variant A", src: "yoursite.com/pricing", visits: "12,480", cr: "8.4%", status: "live" as const, hue: 258 },
  { name: "Pro launch landing", src: "yoursite.com/pro", visits: "8,210", cr: "5.1%", status: "live" as const, hue: 70 },
  { name: "Affiliate program", src: "yoursite.com/affiliates", visits: "2,108", cr: "11.2%", status: "draft" as const, hue: 200 },
  { name: "Black Friday deal", src: "yoursite.com/bf", visits: "—", cr: "—", status: "scheduled" as const, hue: 340 },
];

const stTone = {
  live: { tone: "success" as const, dot: true, label: "Live" },
  draft: { tone: "neutral" as const, dot: false, label: "Draft" },
  scheduled: { tone: "brand" as const, dot: false, label: "Scheduled" },
};

export default function LandersPage() {
  return (
    <div className="space-y-7">
      <PageHeader
        eyebrow={<Badge tone="accent">Beta</Badge>}
        title="Clone any landing page. Make it yours in minutes."
        description="Paste a URL. We pull down the structure, copy, images and styles — and turn them into editable blocks you can swap, restyle and publish on your own domain."
        actions={
          <>
            <Button variant="secondary" size="sm" leftIcon={<Lightbulb className="size-4" />}>
              How it works
            </Button>
            <Link href="/landers/clone">
              <Button size="sm" leftIcon={<Plus className="size-4" />}>
                Clone a page
              </Button>
            </Link>
          </>
        }
      />

      <Card className="overflow-hidden">
        <div className="relative mesh-bg p-6 lg:p-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 space-y-5">
              <h2 className="font-display text-[22px] sm:text-[26px] font-semibold tracking-tight text-balance">
                Paste a URL — get a fully editable replica
              </h2>
              <form className="relative">
                <div className="flex flex-col sm:flex-row gap-2">
                  <label className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-fg-subtle)]">
                      <LinkIcon className="size-4" />
                    </span>
                    <input
                      defaultValue="https://yoursite.com/pricing"
                      className="w-full h-12 pl-10 pr-3 rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] text-[15px] font-mono placeholder:text-[var(--color-fg-subtle)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-4 focus:ring-[color-mix(in_oklch,var(--color-brand-500)_18%,transparent)]"
                      placeholder="https://example.com/landing"
                    />
                  </label>
                  <Link href="/landers/clone">
                    <Button size="lg" rightIcon={<ArrowRight className="size-4" />}>
                      Clone page
                    </Button>
                  </Link>
                </div>
              </form>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11.5px] text-[var(--color-fg-muted)]">Try:</span>
                {sources.map((s) => (
                  <button
                    key={s}
                    className="text-[11.5px] font-mono px-2 py-1 rounded border border-[var(--color-border)] bg-[var(--color-bg-elev)] text-[var(--color-fg-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)] cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Feature icon={Zap} title="Sub-30s clone" desc="HTML, assets and styles in one pass." hue="258" />
                <Feature icon={Wand2} title="Block-based editor" desc="Edit copy, swap images, restyle." hue="70" />
                <Feature icon={ClipboardCheck} title="Publish anywhere" desc="One-click deploy, custom domain." hue="150" />
              </ul>
            </div>

            <div className="lg:col-span-2">
              <CloneCard />
            </div>
          </div>
        </div>
      </Card>

      <section className="space-y-3">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-sm font-semibold font-display">Recent landers</h2>
            <p className="text-[11.5px] text-[var(--color-fg-muted)] mt-0.5">
              From clones, blank canvases and AI-generated drafts.
            </p>
          </div>
          <button className="text-[12px] font-medium text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] hover:underline cursor-pointer">
            View all
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {recent.map((r) => {
            const s = stTone[r.status];
            return (
              <Card key={r.name} className="group overflow-hidden hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-pop)] transition-all">
                <div
                  className="h-36 relative overflow-hidden border-b border-[var(--color-border)]"
                  style={{ background: `linear-gradient(135deg, oklch(0.96 0.06 ${r.hue}), oklch(0.9 0.1 ${r.hue}))` }}
                >
                  <span className="absolute inset-3 rounded-md bg-[var(--color-bg-elev)] shadow-[var(--shadow-pop)] p-3">
                    <span className="block h-2 w-1/3 rounded bg-[var(--color-fg)]/70" />
                    <span className="mt-1.5 block h-1.5 w-3/4 rounded bg-[var(--color-bg-muted)]" />
                    <span className="mt-1 block h-1.5 w-2/3 rounded bg-[var(--color-bg-muted)]" />
                    <span className="mt-3 block h-10 rounded bg-[var(--color-bg-muted)]" />
                    <span className="mt-2 flex justify-center">
                      <span
                        className="h-3.5 px-3 rounded text-[7px] text-white font-semibold flex items-center"
                        style={{ background: `oklch(0.5 0.2 ${r.hue})` }}
                      >
                        Get started
                      </span>
                    </span>
                  </span>
                  <Badge tone={s.tone} dot={s.dot} className="absolute top-2 left-2 bg-[var(--color-bg-elev)]/85 backdrop-blur">
                    {s.label}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-display font-semibold text-[14px] tracking-tight truncate">{r.name}</h3>
                  <div className="text-[11.5px] text-[var(--color-fg-muted)] font-mono mt-0.5 truncate flex items-center gap-1">
                    <Globe2 className="size-3" /> {r.src}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-[10px] uppercase text-[var(--color-fg-subtle)]">Visits</div>
                        <div className="font-semibold tabular-nums">{r.visits}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase text-[var(--color-fg-subtle)]">CR</div>
                        <div className="font-semibold tabular-nums">{r.cr}</div>
                      </div>
                    </div>
                    <button className="size-7 rounded-md inline-flex items-center justify-center text-[var(--color-fg-subtle)] hover:bg-[var(--color-bg-muted)] cursor-pointer">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
  hue,
}: {
  icon: typeof Zap;
  title: string;
  desc: string;
  hue: string;
}) {
  return (
    <li className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3.5">
      <span
        className="size-7 rounded-md flex items-center justify-center text-white"
        style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${hue}), oklch(0.5 0.2 ${hue}))` }}
      >
        <Icon className="size-3.5" strokeWidth={2.2} />
      </span>
      <div className="mt-2 text-[13px] font-semibold font-display">{title}</div>
      <p className="text-[11.5px] text-[var(--color-fg-muted)] mt-0.5">{desc}</p>
    </li>
  );
}

function CloneCard() {
  const steps = [
    { label: "Fetching markup", state: "done", detail: "1,248 elements parsed" },
    { label: "Downloading assets", state: "done", detail: "62 images · 14 fonts" },
    { label: "Detecting sections", state: "active", detail: "Hero, pricing, FAQ, footer …" },
    { label: "Generating blocks", state: "pending", detail: "Mapping to editable layout" },
    { label: "Ready to edit", state: "pending", detail: "Open in editor" },
  ];
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
            Live clone preview
          </div>
          <div className="font-display font-semibold text-[14px] mt-0.5">yoursite.com/pricing</div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-success-500)]">
          <span className="pulse-dot size-1.5 rounded-full bg-[var(--color-success-500)]" />
          24s
        </span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-start gap-2.5">
            <span
              className={
                "mt-0.5 size-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 " +
                (s.state === "done"
                  ? "bg-[var(--color-success-500)] text-white"
                  : s.state === "active"
                  ? "bg-[var(--color-brand-500)] text-white animate-pulse"
                  : "bg-[var(--color-bg-muted)] text-[var(--color-fg-subtle)] border border-[var(--color-border)]")
              }
            >
              {s.state === "done" ? "✓" : i + 1}
            </span>
            <div className="min-w-0">
              <div className={"text-[12.5px] font-medium " + (s.state === "pending" ? "text-[var(--color-fg-muted)]" : "")}>
                {s.label}
              </div>
              <div className="text-[11px] text-[var(--color-fg-muted)] truncate">{s.detail}</div>
            </div>
            {s.state === "active" && (
              <span className="ml-auto inline-flex items-center text-[10.5px] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                <Sparkles className="size-3 mr-1" /> AI
              </span>
            )}
          </li>
        ))}
      </ul>

      <Link href="/landers/q4-pricing/edit">
        <Button size="md" className="w-full mt-4" rightIcon={<Eye className="size-4" />}>
          Open editor
        </Button>
      </Link>
    </div>
  );
}
