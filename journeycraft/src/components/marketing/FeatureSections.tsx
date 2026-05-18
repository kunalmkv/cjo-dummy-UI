import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  ChevronRight,
  Code2,
  Globe2,
  Layers,
  Mail,
  MessageSquare,
  MousePointer,
  Send,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Type as TypeIcon,
  Users,
  Wand2,
  Webhook,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function JourneySection() {
  return (
    <Section
      id="journeys"
      eyebrow="Visual Journey Builder"
      title="Map every step a customer takes — then automate it."
      desc="Drag triggers, branches, waits and messages onto a canvas. Branch by behavior, lifecycle stage, plan, or anything in your warehouse. Ship in minutes, not sprints."
      reverse
      visual={<JourneyVisual />}
    >
      <FeatureList
        items={[
          { icon: Zap, title: "Realtime triggers", desc: "Events from your app fire within 200ms." },
          { icon: Layers, title: "Branch on anything", desc: "Plan, behavior, location, score, custom traits." },
          { icon: Wand2, title: "AI subject testing", desc: "Auto-pick the winning variant after 1,000 sends." },
          { icon: Webhook, title: "Webhooks & actions", desc: "Trigger jobs in your stack at any node." },
        ]}
      />
    </Section>
  );
}

export function LanderSection() {
  return (
    <Section
      id="landers"
      eyebrow="Lander Clone Maker"
      title="Paste a URL. Get a fully editable replica."
      desc="We pull the structure, copy, assets and brand palette — and rebuild the page as editable blocks. Restyle, swap, publish on your own domain in minutes."
      visual={<LanderVisual />}
    >
      <FeatureList
        items={[
          { icon: Globe2, title: "30-second clone", desc: "HTML, images, fonts, color tokens." },
          { icon: MousePointer, title: "Block-based editor", desc: "Edit copy, swap images, restyle in-place." },
          { icon: TypeIcon, title: "Brand-safe rewrites", desc: "AI rewrites copy in your tone of voice." },
          { icon: Shield, title: "Publish anywhere", desc: "Your domain, our edge — or export the HTML." },
        ]}
      />
    </Section>
  );
}

export function ChannelsSection() {
  const channels: { icon: LucideIcon; name: string; copy: string; hue: number }[] = [
    { icon: Mail, name: "Email", copy: "Drag-drop or code. Hand-tuned deliverability.", hue: 220 },
    { icon: Bell, name: "Push", copy: "iOS, Android & web push from one composer.", hue: 200 },
    { icon: MessageSquare, name: "SMS", copy: "Two-way SMS with carrier-grade deliverability.", hue: 150 },
    { icon: Smartphone, name: "In-app", copy: "Tooltips, banners, modals — no code deploy.", hue: 320 },
    { icon: Webhook, name: "Webhooks", copy: "Trigger any system in your stack.", hue: 40 },
    { icon: Bot, name: "AI assistants", copy: "Conversational outreach across channels.", hue: 70 },
  ];
  return (
    <section className="relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          eyebrow="Every channel, one composer"
          title="Reach customers where they actually pay attention."
          desc="Six channels under one schema. Personalize once, deliver everywhere — with the same audience and analytics."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
          {channels.map((c) => (
            <div
              key={c.name}
              className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-pop)] transition-all overflow-hidden"
            >
              <span
                className="absolute -top-12 -right-10 size-32 rounded-full opacity-40 blur-2xl"
                style={{ background: `oklch(0.7 0.18 ${c.hue})` }}
              />
              <span
                className="relative inline-flex size-10 rounded-xl items-center justify-center text-white shadow-[var(--shadow-pop)]"
                style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${c.hue}), oklch(0.5 0.2 ${c.hue}))` }}
              >
                <c.icon className="size-4.5" strokeWidth={2} />
              </span>
              <div className="relative mt-3 font-display font-semibold text-[16px] tracking-tight">{c.name}</div>
              <p className="relative text-[13px] text-[var(--color-fg-muted)] mt-0.5 text-pretty">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AnalyticsSection() {
  return (
    <Section
      id="analytics"
      eyebrow="Analytics that close the loop"
      title="See revenue attribution down to the step."
      desc="Funnels, cohort retention, experiments and channel ROI — all auto-instrumented. Stop guessing which touch moved the needle."
      reverse
      visual={<AnalyticsVisual />}
    >
      <FeatureList
        items={[
          { icon: BarChart3, title: "Funnels & cohorts", desc: "Slice by segment, channel, journey or step." },
          { icon: Target, title: "Goal-based attribution", desc: "Multi-touch credit, first-touch, last-touch." },
          { icon: Sparkles, title: "Experiments built-in", desc: "Significance, lift and confidence in-line." },
          { icon: Code2, title: "Warehouse sync", desc: "Stream events into your data warehouse." },
        ]}
      />
    </Section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
  visual,
  reverse,
}: {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  children: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center " +
            (reverse ? "lg:[&>*:first-child]:order-2" : "")
          }
        >
          <div className="lg:col-span-5">
            <Badge tone="brand">{eyebrow}</Badge>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[40px] leading-[1.05] font-semibold tracking-tight text-balance">
              {title}
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--color-fg-muted)] text-pretty">{desc}</p>
            <div className="mt-6">{children}</div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] hover:underline"
            >
              Read the docs <ChevronRight className="size-3.5" />
            </a>
          </div>
          <div className="lg:col-span-7">{visual}</div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <Badge tone="brand">{eyebrow}</Badge>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[40px] leading-[1.05] font-semibold tracking-tight text-balance">
        {title}
      </h2>
      <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--color-fg-muted)] text-pretty">{desc}</p>
    </div>
  );
}

function FeatureList({
  items,
}: {
  items: { icon: LucideIcon; title: string; desc: string }[];
}) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((it) => (
        <li
          key={it.title}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3.5"
        >
          <span className="inline-flex size-7 rounded-md items-center justify-center bg-[color-mix(in_oklch,var(--color-brand-500)_14%,transparent)] text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
            <it.icon className="size-3.5" strokeWidth={2} />
          </span>
          <div className="mt-2 text-[13.5px] font-semibold font-display tracking-tight">{it.title}</div>
          <p className="text-[12px] text-[var(--color-fg-muted)] mt-0.5">{it.desc}</p>
        </li>
      ))}
    </ul>
  );
}

function JourneyVisual() {
  const nodes = [
    { x: 12, y: 56, label: "Signed up", icon: Zap, hue: 258 },
    { x: 160, y: 56, label: "Wait 1 day", icon: Send, hue: 230 },
    { x: 308, y: 16, label: "Pro tour", icon: Mail, hue: 220 },
    { x: 308, y: 100, label: "Push install", icon: Bell, hue: 200 },
    { x: 472, y: 56, label: "Upgraded", icon: Target, hue: 140 },
  ];
  return (
    <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[var(--shadow-float)] p-4 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div className="relative h-[280px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
          <path d="M 132 76 C 160 76, 132 76, 160 76" stroke="var(--color-border-strong)" strokeWidth="1.5" fill="none" />
          <path
            d="M 280 76 C 308 76, 290 36, 308 36"
            stroke="var(--color-success-500)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 280 76 C 308 76, 290 120, 308 120"
            stroke="var(--color-accent-500)"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M 428 36 C 460 36, 444 76, 472 76" stroke="var(--color-border-strong)" strokeWidth="1.5" fill="none" />
          <path d="M 428 120 C 460 120, 444 76, 472 76" stroke="var(--color-border-strong)" strokeWidth="1.5" fill="none" />
        </svg>
        {nodes.map((n, i) => (
          <div
            key={i}
            className="absolute rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[var(--shadow-card)] p-2 w-[120px]"
            style={{ left: n.x, top: n.y }}
          >
            <span className="absolute -top-px left-2 right-2 h-0.5 rounded-b-full" style={{ background: `oklch(0.65 0.2 ${n.hue})` }} />
            <div className="flex items-center gap-1.5">
              <span
                className="size-5 rounded flex items-center justify-center text-white"
                style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${n.hue}), oklch(0.5 0.2 ${n.hue}))` }}
              >
                <n.icon className="size-2.5" strokeWidth={2.2} />
              </span>
              <span className="text-[10.5px] font-semibold truncate font-display">{n.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-3 grid grid-cols-3 gap-2">
        <Mini label="Open" value="62.4%" />
        <Mini label="Click" value="18.2%" />
        <Mini label="Upgrade" value="38%" />
      </div>
    </div>
  );
}

function LanderVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 bg-gradient-to-tr from-[var(--color-accent-500)]/15 to-transparent rounded-3xl blur-2xl" />
      <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[var(--shadow-float)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--color-border)] bg-[var(--color-bg-muted)]">
          <span className="size-2 rounded-full bg-[oklch(0.7_0.2_27)]" />
          <span className="size-2 rounded-full bg-[oklch(0.78_0.16_80)]" />
          <span className="size-2 rounded-full bg-[oklch(0.7_0.18_140)]" />
          <span className="ml-3 text-[10.5px] font-mono text-[var(--color-fg-muted)] truncate">
            paste url → yoursite.com/pricing
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--color-success-500)]">
            <span className="size-1.5 rounded-full bg-[var(--color-success-500)] pulse-dot" />
            cloned
          </span>
        </div>
        <div className="grid grid-cols-12 min-h-[320px]">
          <div className="col-span-3 border-r border-[var(--color-border)] bg-[var(--color-bg-muted)] p-2 space-y-1">
            <div className="text-[8.5px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)] px-1.5 mt-0.5">
              Layers
            </div>
            {["Nav", "Hero", "Logos", "Pricing", "FAQ", "Footer"].map((l, i) => (
              <div
                key={l}
                className={
                  "px-1.5 py-1 rounded text-[10.5px] " +
                  (i === 1
                    ? "bg-[color-mix(in_oklch,var(--color-brand-500)_14%,transparent)] text-[var(--color-brand-700)] dark:text-[var(--color-brand-300)] font-medium"
                    : "text-[var(--color-fg-muted)]")
                }
              >
                {l}
              </div>
            ))}
          </div>
          <div className="col-span-9 p-4 flex flex-col items-center justify-center text-center bg-[var(--color-bg-elev)]">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] bg-[color-mix(in_oklch,var(--color-brand-500)_12%,transparent)]">
              Now in public beta
            </span>
            <h3 className="mt-2 text-[22px] font-display font-bold tracking-tight leading-[1.1] ring-2 ring-[var(--color-brand-500)] ring-offset-2 ring-offset-[var(--color-bg-elev)] rounded px-1 -mx-1">
              Customer journeys,
              <br /> beautifully crafted.
            </h3>
            <p className="mt-2 text-[10.5px] text-[var(--color-fg-muted)] max-w-[260px]">
              One workspace to orchestrate emails, push, SMS and landers.
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-7 px-3 rounded-md text-[10px] font-semibold flex items-center bg-[var(--color-fg)] text-[var(--color-bg)]">
                Start free trial
              </span>
              <span className="h-7 px-3 rounded-md text-[10px] font-semibold flex items-center border border-[var(--color-border-strong)]">
                Book a demo
              </span>
            </div>
            <div className="mt-4 w-full grid grid-cols-3 gap-2">
              {["Starter", "Pro", "Team"].map((p, i) => (
                <div
                  key={p}
                  className={
                    "rounded border p-2 text-left " +
                    (i === 1
                      ? "border-[var(--color-brand-500)] bg-[color-mix(in_oklch,var(--color-brand-500)_8%,transparent)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg-muted)]")
                  }
                >
                  <div className="text-[9px] font-semibold uppercase">{p}</div>
                  <div className="text-[12px] font-display font-bold mt-0.5">
                    {i === 0 ? "$0" : i === 1 ? "$49" : "$199"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-muted)] px-3 py-2 flex items-center justify-between text-[10.5px]">
          <span className="text-[var(--color-fg-muted)]">22 sections · 62 images · 9 color tokens</span>
          <span className="inline-flex items-center gap-1 font-semibold text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
            Open in editor <ArrowRight className="size-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const bars = [184, 142, 110, 84, 62];
  return (
    <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[var(--shadow-float)] p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10.5px] uppercase tracking-wider text-[var(--color-fg-subtle)] font-semibold">
            Conversion funnel · 30d
          </div>
          <div className="text-[15px] font-display font-semibold mt-0.5">Visited → Renewed</div>
        </div>
        <Badge tone="success">+12.4% vs prev</Badge>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { label: "Visited", v: 184, n: "184,210" },
          { label: "Signed up", v: 142, n: "24,180" },
          { label: "Activated", v: 110, n: "11,240" },
          { label: "Upgraded", v: 84, n: "4,180" },
          { label: "Renewed", v: 62, n: "2,840" },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 text-[11.5px]">
            <span className="w-16 shrink-0 text-[var(--color-fg-muted)]">{s.label}</span>
            <div className="flex-1 h-7 rounded-md bg-[var(--color-bg-muted)] overflow-hidden relative">
              <div
                className="h-full rounded-md"
                style={{
                  width: `${(bars[i] / bars[0]) * 100}%`,
                  background: `linear-gradient(90deg, var(--color-brand-500), var(--color-brand-700))`,
                }}
              />
            </div>
            <span className="w-16 text-right tabular-nums font-semibold">{s.n}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-[var(--color-border)] grid grid-cols-3 gap-2 text-[11px]">
        <Mini label="Revenue" value="$184K" />
        <Mini label="CAC payback" value="2.1mo" />
        <Mini label="LTV / CAC" value="6.4×" />
      </div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-muted)] px-2 py-1.5">
      <div className="text-[9px] uppercase tracking-wider text-[var(--color-fg-subtle)]">{label}</div>
      <div className="text-[12px] font-semibold font-display tabular-nums">{value}</div>
    </div>
  );
}
