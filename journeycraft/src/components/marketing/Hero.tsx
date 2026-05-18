import Link from "next/link";
import { ArrowRight, Bell, Check, Clock, GitBranch, Mail, MessageSquare, Sparkles, Target, Zap, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const flowNodes: { x: number; y: number; icon: LucideIcon; label: string; hue: number; status?: "live" }[] = [
  { x: 20, y: 130, icon: Zap, label: "Signed up", hue: 258, status: "live" },
  { x: 200, y: 130, icon: Clock, label: "Wait 5m", hue: 230 },
  { x: 380, y: 60, icon: Mail, label: "Welcome", hue: 220 },
  { x: 380, y: 200, icon: Bell, label: "Push", hue: 200 },
  { x: 560, y: 60, icon: GitBranch, label: "Branch", hue: 280 },
  { x: 740, y: 20, icon: MessageSquare, label: "SMS", hue: 150 },
  { x: 740, y: 100, icon: Mail, label: "Day 2 email", hue: 220 },
  { x: 920, y: 130, icon: Target, label: "Upgraded", hue: 140, status: "live" },
];

type EdgeTone = "default" | "yes" | "no";
const edges: [number, number, EdgeTone][] = [
  [0, 1, "default"],
  [1, 2, "default"],
  [1, 3, "default"],
  [2, 4, "default"],
  [4, 5, "yes"],
  [4, 6, "no"],
  [5, 7, "default"],
  [6, 7, "default"],
  [3, 7, "default"],
];

const NW = 140;
const NH = 56;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-border)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] pl-1 pr-3 py-1 text-[12px] font-medium shadow-[var(--shadow-card)]"
            >
              <Badge tone="brand">New</Badge>
              <span className="text-[var(--color-fg-muted)]">AI subject-line testing is live</span>
              <ArrowRight className="size-3 text-[var(--color-fg-subtle)]" />
            </Link>

            <h1 className="mt-5 font-display text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.02] font-bold tracking-tight text-balance">
              Customer journeys,
              <br />
              <span className="bg-gradient-to-r from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">
                beautifully crafted.
              </span>
            </h1>

            <p className="mt-5 text-[17px] lg:text-[18px] leading-[1.55] text-[var(--color-fg-muted)] max-w-xl text-pretty">
              Orchestrate email, push, SMS and in-app from a single visual canvas. Clone any landing page in
              seconds. Ship the whole growth motion from one calm workspace.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
              <Link href="/dashboard">
                <Button size="lg" rightIcon={<ArrowRight className="size-4" />}>
                  Start free 14-day trial
                </Button>
              </Link>
              <Link href="#journeys">
                <Button size="lg" variant="secondary">
                  See it in action
                </Button>
              </Link>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[var(--color-fg-muted)]">
              {["No credit card needed", "SOC 2 · HIPAA-ready", "GDPR + DPA"].map((s) => (
                <li key={s} className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-[var(--color-success-500)]" /> {s}
                </li>
              ))}
            </ul>

          </div>

          <div className="lg:col-span-6 relative">
            <FlowGraphic />
          </div>
        </div>
      </div>

    </section>
  );
}

function FlowGraphic() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[var(--color-brand-500)]/20 via-transparent to-[var(--color-accent-500)]/15 rounded-3xl blur-2xl" />

      <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)]/90 backdrop-blur shadow-[var(--shadow-float)] p-3">
        <div className="flex items-center justify-between px-2 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[oklch(0.7_0.2_27)]" />
            <span className="size-2 rounded-full bg-[oklch(0.78_0.16_80)]" />
            <span className="size-2 rounded-full bg-[oklch(0.7_0.18_140)]" />
          </div>
          <span className="text-[10.5px] font-mono text-[var(--color-fg-muted)]">welcome-onboarding · v4</span>
          <Badge tone="success" dot>Live</Badge>
        </div>

        <div className="relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-muted)] overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />
          <div className="relative h-[320px] sm:h-[360px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1080 280" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="hero-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-strong)" />
                </marker>
                <marker id="hero-arrow-yes" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-success-500)" />
                </marker>
                <marker id="hero-arrow-no" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent-500)" />
                </marker>
              </defs>
              {edges.map(([fromI, toI, tone = "default"], i) => {
                const a = flowNodes[fromI];
                const b = flowNodes[toI];
                const x1 = a.x + NW;
                const y1 = a.y + NH / 2;
                const x2 = b.x;
                const y2 = b.y + NH / 2;
                const dx = Math.max(40, (x2 - x1) / 2);
                const path = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
                const stroke =
                  tone === "yes"
                    ? "var(--color-success-500)"
                    : tone === "no"
                    ? "var(--color-accent-500)"
                    : "var(--color-border-strong)";
                const marker =
                  tone === "yes" ? "url(#hero-arrow-yes)" : tone === "no" ? "url(#hero-arrow-no)" : "url(#hero-arrow)";
                return (
                  <path
                    key={i}
                    d={path}
                    fill="none"
                    stroke={stroke}
                    strokeWidth={1.5}
                    markerEnd={marker}
                    className={i === 0 || i === 1 ? "flow-line" : undefined}
                  />
                );
              })}
            </svg>

            <div className="absolute inset-0">
              <div className="relative origin-top-left" style={{ width: 1080, height: 280, transform: "scale(var(--s, 1))" }}>
                {flowNodes.map((n, i) => (
                  <div
                    key={i}
                    className="absolute rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[var(--shadow-card)] p-2 flex flex-col gap-1"
                    style={{ left: n.x, top: n.y, width: NW, height: NH }}
                  >
                    <span
                      className="absolute -top-px left-2 right-2 h-0.5 rounded-b-full"
                      style={{ background: `oklch(0.65 0.2 ${n.hue})` }}
                    />
                    <div className="flex items-center gap-1.5">
                      <span
                        className="size-5 rounded flex items-center justify-center text-white"
                        style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${n.hue}), oklch(0.5 0.2 ${n.hue}))` }}
                      >
                        <n.icon className="size-2.5" strokeWidth={2.2} />
                      </span>
                      <span className="text-[10px] font-semibold font-display truncate">{n.label}</span>
                      {n.status === "live" && (
                        <span className="ml-auto size-1.5 rounded-full bg-[var(--color-success-500)] pulse-dot" />
                      )}
                    </div>
                    <div className="text-[8.5px] text-[var(--color-fg-subtle)] truncate">
                      {n.label === "Signed up" ? "user.created" : n.label === "Upgraded" ? "user.plan = pro" : "—"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <Stat label="Enrolled" value="24,180" />
          <Stat label="Conversion" value="38%" delta="+12.4%" />
          <Stat label="Revenue" value="$92,410" />
        </div>
      </div>

      <FloatingChip
        className="-top-4 -left-4 sm:-top-6 sm:-left-6"
        icon={Sparkles}
        title="AI rewrote the subject"
        sub="Variant B wins +18%"
      />
      <FloatingChip
        className="-bottom-3 -right-3 sm:-bottom-5 sm:-right-5"
        icon={Target}
        title="Goal reached"
        sub="938 upgraded today"
        tone="success"
      />
    </div>
  );
}

function Stat({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-muted)] px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)]">{label}</div>
      <div className="flex items-baseline gap-1.5 mt-0.5">
        <span className="text-[15px] font-display font-semibold tabular-nums">{value}</span>
        {delta && (
          <span className="text-[10.5px] font-semibold text-[color-mix(in_oklch,var(--color-success-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-success-500)_70%,white)]">
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}

function FloatingChip({
  className,
  icon: Icon,
  title,
  sub,
  tone = "brand",
}: {
  className?: string;
  icon: LucideIcon;
  title: string;
  sub: string;
  tone?: "brand" | "success";
}) {
  const color =
    tone === "success"
      ? "var(--color-success-500)"
      : "var(--color-brand-500)";
  return (
    <div
      className={
        "absolute hidden md:flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[var(--shadow-float)] pl-2 pr-3 py-2 max-w-[200px] " +
        (className || "")
      }
    >
      <span
        className="size-7 rounded-md flex items-center justify-center text-white shrink-0"
        style={{ background: `linear-gradient(135deg, ${color}, color-mix(in oklch, ${color} 70%, black))` }}
      >
        <Icon className="size-3.5" strokeWidth={2.2} />
      </span>
      <div className="min-w-0">
        <div className="text-[12px] font-semibold tracking-tight truncate">{title}</div>
        <div className="text-[10.5px] text-[var(--color-fg-muted)] truncate">{sub}</div>
      </div>
    </div>
  );
}

