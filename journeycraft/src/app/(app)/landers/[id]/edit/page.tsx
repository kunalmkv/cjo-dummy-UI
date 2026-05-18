import Link from "next/link";
import {
  AlignLeft,
  ChevronLeft,
  Code,
  Eye,
  Globe2,
  Image as ImageIcon,
  LayoutGrid,
  Monitor,
  MoreHorizontal,
  Palette,
  Plus,
  Smartphone,
  Sparkles,
  Tablet,
  Type as TypeIcon,
  Undo2,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";

const blockLibrary: { icon: LucideIcon; label: string }[] = [
  { icon: TypeIcon, label: "Heading" },
  { icon: AlignLeft, label: "Text" },
  { icon: ImageIcon, label: "Image" },
  { icon: LayoutGrid, label: "Grid" },
  { icon: Palette, label: "CTA" },
  { icon: Sparkles, label: "Logos" },
  { icon: Code, label: "Embed" },
];

const layers = [
  { name: "Navigation", depth: 0, active: false },
  { name: "Hero", depth: 0, active: true, children: [
    { name: "Eyebrow", depth: 1 },
    { name: "Headline", depth: 1, active: true },
    { name: "Sub-headline", depth: 1 },
    { name: "CTA group", depth: 1, children: [
      { name: "Primary button", depth: 2 },
      { name: "Secondary link", depth: 2 },
    ]},
  ]},
  { name: "Logo strip", depth: 0 },
  { name: "Pricing", depth: 0, children: [
    { name: "Starter", depth: 1 },
    { name: "Pro", depth: 1 },
    { name: "Team", depth: 1 },
  ]},
  { name: "Testimonials", depth: 0 },
  { name: "Footer", depth: 0 },
];

function flattenLayers(items: any[], out: { name: string; depth: number; active?: boolean }[] = []) {
  for (const it of items) {
    out.push({ name: it.name, depth: it.depth, active: it.active });
    if (it.children) flattenLayers(it.children, out);
  }
  return out;
}

export default function LanderEditor() {
  const layerList = flattenLayers(layers);
  return (
    <div className="-mx-4 -my-6 sm:-mx-6 lg:-mx-8 lg:-my-8 h-[calc(100vh-3.5rem)] flex flex-col bg-[var(--color-bg-muted)]">
      <header className="h-12 shrink-0 border-b border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 flex items-center gap-2">
        <Link href="/landers" className="size-8 rounded-md flex items-center justify-center hover:bg-[var(--color-bg-muted)] cursor-pointer">
          <ChevronLeft className="size-4" />
        </Link>
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="size-6 rounded-md bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)] flex items-center justify-center text-white">
            <Globe2 className="size-3.5" />
          </span>
          <span className="text-[13px] font-semibold truncate">Q4 Pricing — variant A</span>
          <Badge tone="brand" className="ml-1">Draft</Badge>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-muted)] p-0.5">
            {[
              { icon: Monitor, label: "Desktop", active: true },
              { icon: Tablet, label: "Tablet" },
              { icon: Smartphone, label: "Mobile" },
            ].map((v) => (
              <button
                key={v.label}
                aria-label={v.label}
                className={
                  "size-7 rounded-[5px] inline-flex items-center justify-center cursor-pointer " +
                  (v.active
                    ? "bg-[var(--color-bg-elev)] text-[var(--color-fg)] shadow-[var(--shadow-card)]"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]")
                }
              >
                <v.icon className="size-3.5" />
              </button>
            ))}
          </div>
        </div>

        <Button variant="ghost" size="sm" leftIcon={<Undo2 className="size-4" />}>Undo</Button>
        <Button variant="secondary" size="sm" leftIcon={<Eye className="size-4" />}>Preview</Button>
        <Button size="sm">Publish</Button>
      </header>

      <div className="flex-1 grid grid-cols-12 gap-0 min-h-0">
        <aside className="col-span-12 lg:col-span-2 border-r border-[var(--color-border)] bg-[var(--color-bg-elev)] overflow-y-auto scrollbar-thin">
          <div className="p-3 border-b border-[var(--color-border)]">
            <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)] mb-2">Add block</div>
            <div className="grid grid-cols-3 gap-1.5">
              {blockLibrary.map((b) => (
                <button
                  key={b.label}
                  className="flex flex-col items-center gap-1 p-2 rounded-md border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-muted)] text-[10.5px] text-[var(--color-fg-muted)] cursor-pointer"
                >
                  <b.icon className="size-3.5" strokeWidth={1.75} />
                  {b.label}
                </button>
              ))}
            </div>
          </div>
          <div className="p-3">
            <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)] mb-2 flex items-center justify-between">
              Layers
              <button className="text-[10.5px] font-medium text-[var(--color-brand-600)] cursor-pointer hover:underline">All</button>
            </div>
            <ul className="space-y-px">
              {layerList.map((l, i) => (
                <li key={i}>
                  <button
                    className={
                      "w-full text-left flex items-center gap-1.5 px-2 py-1 rounded text-[12px] transition-colors cursor-pointer " +
                      (l.active
                        ? "bg-[color-mix(in_oklch,var(--color-brand-500)_12%,transparent)] text-[var(--color-brand-700)] dark:text-[var(--color-brand-300)] font-medium"
                        : "text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-muted)]")
                    }
                    style={{ paddingLeft: 8 + l.depth * 12 }}
                  >
                    <span className="size-1 rounded-full bg-current opacity-60" />
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="col-span-12 lg:col-span-7 overflow-auto scrollbar-thin grid-bg p-6 flex items-start justify-center">
          <LanderPreview />
        </section>

        <aside className="col-span-12 lg:col-span-3 border-l border-[var(--color-border)] bg-[var(--color-bg-elev)] flex flex-col">
          <div className="p-3 border-b border-[var(--color-border)] flex items-center justify-between">
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
                Inspector
              </div>
              <div className="text-[13px] font-semibold">Hero · Headline</div>
            </div>
            <MoreHorizontal className="size-4 text-[var(--color-fg-subtle)]" />
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-thin p-3 space-y-4">
            <Group title="Content">
              <Field label="Text">
                <Input defaultValue="Customer journeys, beautifully crafted." />
              </Field>
              <Field label="Eyebrow">
                <Input defaultValue="Now in public beta" />
              </Field>
            </Group>

            <Group title="Typography">
              <div className="grid grid-cols-2 gap-2">
                <Field label="Font">
                  <Input defaultValue="Display Sans" />
                </Field>
                <Field label="Weight">
                  <Input defaultValue="700" />
                </Field>
                <Field label="Size">
                  <Input defaultValue="64 / 72" />
                </Field>
                <Field label="Tracking">
                  <Input defaultValue="-2%" />
                </Field>
              </div>
            </Group>

            <Group title="Color">
              <div className="grid grid-cols-5 gap-2">
                {["#11142C", "#635BFF", "#0A2540", "#FF5996", "#00D924"].map((c) => (
                  <span key={c} className="size-7 rounded-md border border-[var(--color-border)] cursor-pointer" style={{ background: c }} />
                ))}
                <button className="size-7 rounded-md border border-dashed border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-fg-subtle)] cursor-pointer">
                  <Plus className="size-3" />
                </button>
              </div>
            </Group>

            <Group title="Spacing">
              <div className="grid grid-cols-4 gap-1.5 text-[11px]">
                {[
                  { l: "Top", v: "120" },
                  { l: "Right", v: "0" },
                  { l: "Bottom", v: "32" },
                  { l: "Left", v: "0" },
                ].map((s) => (
                  <label key={s.l} className="block">
                    <span className="block text-[10px] text-[var(--color-fg-subtle)] mb-0.5">{s.l}</span>
                    <input
                      defaultValue={s.v}
                      className="w-full h-8 px-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-muted)] text-center font-mono"
                    />
                  </label>
                ))}
              </div>
            </Group>

            <div className="rounded-lg border border-dashed border-[var(--color-border-strong)] bg-[var(--color-bg-muted)] p-3">
              <div className="text-[12px] font-semibold inline-flex items-center gap-1.5">
                <Wand2 className="size-3.5 text-[var(--color-accent-500)]" /> AI rewrite this block
              </div>
              <p className="text-[11px] text-[var(--color-fg-muted)] mt-1">
                Generate 5 headline variants tuned to "growth-focused product teams".
              </p>
              <Button variant="secondary" size="xs" className="mt-2 w-full">Generate variants</Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">{title}</div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-medium text-[var(--color-fg-muted)] mb-1">{label}</span>
      {children}
    </label>
  );
}

function LanderPreview() {
  return (
    <div className="w-full max-w-[920px] bg-[var(--color-bg-elev)] rounded-xl border border-[var(--color-border)] shadow-[var(--shadow-float)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--color-border)] bg-[var(--color-bg-muted)]">
        <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_27)]" />
        <span className="size-2.5 rounded-full bg-[oklch(0.78_0.16_80)]" />
        <span className="size-2.5 rounded-full bg-[oklch(0.7_0.18_140)]" />
        <span className="ml-3 text-[11px] font-mono text-[var(--color-fg-muted)]">journeycraft.io/pricing</span>
      </div>
      <div className="px-10 pt-14 pb-12 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
          Now in public beta
        </div>
        <h2 className="mt-3 text-[44px] leading-[1.05] font-display font-bold tracking-tight text-balance ring-2 ring-[var(--color-brand-500)] ring-offset-4 ring-offset-[var(--color-bg-elev)] rounded-md inline-block px-2 -mx-2 cursor-text">
          Customer journeys,<br />beautifully crafted.
        </h2>
        <p className="mt-4 text-[16px] text-[var(--color-fg-muted)] max-w-xl mx-auto text-pretty">
          One workspace to orchestrate emails, push, SMS and landers. Built for the product teams that grow fastest.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <button className="h-11 px-5 rounded-lg bg-[var(--color-fg)] text-[var(--color-bg)] font-semibold text-[14px] cursor-pointer">
            Start free trial
          </button>
          <button className="h-11 px-5 rounded-lg border border-[var(--color-border-strong)] font-semibold text-[14px] cursor-pointer">
            Book a demo
          </button>
        </div>
        <div className="mt-10 grid grid-cols-5 gap-6 opacity-50">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-5 rounded bg-[var(--color-bg-muted)]" />
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] px-10 py-12 grid grid-cols-3 gap-4 bg-[var(--color-bg-muted)]">
        {[
          { name: "Starter", price: "$0", desc: "For teams just getting started.", featured: false },
          { name: "Pro", price: "$49", desc: "For growing teams. Most popular.", featured: true },
          { name: "Team", price: "$199", desc: "Advanced workflows + SSO.", featured: false },
        ].map((p) => (
          <div
            key={p.name}
            className={
              "rounded-xl border bg-[var(--color-bg-elev)] p-5 " +
              (p.featured
                ? "border-[var(--color-brand-500)] ring-2 ring-[color-mix(in_oklch,var(--color-brand-500)_25%,transparent)]"
                : "border-[var(--color-border)]")
            }
          >
            <div className="flex items-center justify-between">
              <div className="text-[12px] font-semibold uppercase tracking-wider">{p.name}</div>
              {p.featured && <Badge tone="brand">Popular</Badge>}
            </div>
            <div className="mt-2 text-[28px] font-display font-bold tracking-tight">{p.price}<span className="text-[12px] text-[var(--color-fg-muted)] font-medium">/mo</span></div>
            <p className="text-[12px] text-[var(--color-fg-muted)] mt-1">{p.desc}</p>
            <button
              className={
                "mt-4 h-9 w-full rounded-md font-semibold text-[13px] cursor-pointer " +
                (p.featured
                  ? "bg-[var(--color-fg)] text-[var(--color-bg)]"
                  : "border border-[var(--color-border-strong)]")
              }
            >
              Choose {p.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
