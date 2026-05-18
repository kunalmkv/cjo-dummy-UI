import { Bell, FileText, Mail, MessageSquare, Plus, Search, Smartphone, Sparkles, Star, Users } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

const categories = [
  { label: "All", count: 124, icon: FileText },
  { label: "Email", count: 68, icon: Mail },
  { label: "Push", count: 18, icon: Bell },
  { label: "SMS", count: 22, icon: MessageSquare },
  { label: "In-app", count: 16, icon: Smartphone },
];

const featured = [
  {
    name: "Welcome · Minimal",
    desc: "Clean welcome email with a single CTA. Tested across 200+ products.",
    type: "Email",
    hue: 220,
    usage: "Used 1,420 times",
    tag: "Onboarding",
    preview: "welcome-minimal",
  },
  {
    name: "Trial reminder · Day 11",
    desc: "Two-card layout with social proof and a friendly nudge.",
    type: "Email",
    hue: 70,
    usage: "Used 940 times",
    tag: "Lifecycle",
    preview: "trial-reminder",
  },
  {
    name: "Cart recovery · 3-touch",
    desc: "A sequence: nudge, social proof, then a 10% off code.",
    type: "Email",
    hue: 150,
    usage: "Used 612 times",
    tag: "Ecommerce",
    preview: "cart-recovery",
  },
  {
    name: "Push · Re-engagement",
    desc: "Short, punchy copy with deep link to the missed feature.",
    type: "Push",
    hue: 320,
    usage: "Used 380 times",
    tag: "Win-back",
    preview: "push-reengagement",
  },
  {
    name: "SMS · OTP verification",
    desc: "Concise, deliverable across carriers with 6-digit support.",
    type: "SMS",
    hue: 200,
    usage: "Used 2,180 times",
    tag: "Transactional",
    preview: "otp",
  },
  {
    name: "In-app · Feature tour",
    desc: "Four-step tooltip walkthrough with dismissible callouts.",
    type: "In-app",
    hue: 260,
    usage: "Used 220 times",
    tag: "Product",
    preview: "tour",
  },
];

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Templates"
        title="Start with a template, ship in minutes"
        description="A growing library of message and page templates — vetted, theme-able, and ready to drop into any journey or campaign."
        actions={
          <>
            <Button variant="secondary" size="sm" leftIcon={<Sparkles className="size-4" />}>
              Generate with AI
            </Button>
            <Button size="sm" leftIcon={<Plus className="size-4" />}>
              New template
            </Button>
          </>
        }
      />

      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
          {categories.map((c, i) => (
            <button
              key={c.label}
              className={
                "shrink-0 inline-flex items-center gap-1.5 px-3 h-9 rounded-lg text-[13px] font-medium transition-colors cursor-pointer " +
                (i === 0
                  ? "bg-[var(--color-bg-elev)] border border-[var(--color-border)] text-[var(--color-fg)] shadow-[var(--shadow-card)]"
                  : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)]")
              }
            >
              <c.icon className="size-3.5" strokeWidth={1.75} />
              {c.label}
              <span className="text-[11px] text-[var(--color-fg-subtle)] tabular-nums">{c.count}</span>
            </button>
          ))}
        </div>
        <div className="w-full lg:w-80">
          <Input placeholder="Search templates…" leftIcon={<Search className="size-4" />} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {featured.map((t) => (
          <Card key={t.name} className="group overflow-hidden hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-pop)] transition-all cursor-pointer">
            <div
              className="relative h-44 border-b border-[var(--color-border)] overflow-hidden"
              style={{
                background: `linear-gradient(135deg, oklch(0.97 0.04 ${t.hue}), oklch(0.92 0.08 ${t.hue}))`,
              }}
            >
              <span className="absolute -top-10 -right-10 size-40 rounded-full opacity-30 blur-2xl" style={{ background: `oklch(0.7 0.18 ${t.hue})` }} />
              <Mock preview={t.preview} hue={t.hue} type={t.type} />
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                <Badge tone="neutral" className="bg-[var(--color-bg-elev)]/80 backdrop-blur">
                  {t.type}
                </Badge>
                <Badge tone="brand" className="bg-[var(--color-bg-elev)]/80 backdrop-blur">{t.tag}</Badge>
              </div>
              <button className="absolute top-2.5 right-2.5 size-7 rounded-md bg-[var(--color-bg-elev)]/80 backdrop-blur flex items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-accent-500)] cursor-pointer">
                <Star className="size-3.5" />
              </button>
            </div>
            <CardContent className="p-4">
              <h3 className="font-display font-semibold text-[14.5px] tracking-tight">{t.name}</h3>
              <p className="text-[12.5px] text-[var(--color-fg-muted)] mt-0.5 line-clamp-2">{t.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11.5px] text-[var(--color-fg-subtle)] inline-flex items-center gap-1">
                  <Users className="size-3" /> {t.usage}
                </span>
                <Button size="xs" variant="secondary">Preview</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Mock({ preview, hue, type }: { preview: string; hue: number; type: string }) {
  if (type === "SMS" || type === "Push" || type === "In-app") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-44 rounded-3xl border-4 border-[var(--color-fg)]/70 bg-[var(--color-bg-elev)] aspect-[9/16] p-2 shadow-[var(--shadow-float)]">
          <div className="h-1 w-12 mx-auto rounded bg-[var(--color-fg)]/30 mt-1" />
          <div className="mt-4 rounded-xl border border-[var(--color-border)] p-2 space-y-1">
            <div className="text-[8px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
              {type === "SMS" ? "JourneyCraft" : "Notification"}
            </div>
            <div className="text-[9px] leading-tight font-medium">
              {type === "SMS"
                ? "Your code: 482910"
                : type === "Push"
                ? "We miss you! Tap to pick up where you left off →"
                : "Try the new AI assistant"}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-3 rounded-md bg-[var(--color-bg-elev)] shadow-[var(--shadow-pop)] overflow-hidden p-3">
      <div className="flex items-center justify-between">
        <span
          className="size-5 rounded"
          style={{ background: `linear-gradient(135deg, oklch(0.6 0.18 ${hue}), oklch(0.5 0.2 ${hue}))` }}
        />
        <div className="flex gap-1">
          <span className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="size-1.5 rounded-full bg-[var(--color-border-strong)]" />
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-2 w-3/4 rounded bg-[var(--color-fg)]/80" />
        <div className="h-1.5 w-full rounded bg-[var(--color-bg-muted)]" />
        <div className="h-1.5 w-5/6 rounded bg-[var(--color-bg-muted)]" />
        <div className="h-1.5 w-2/3 rounded bg-[var(--color-bg-muted)]" />
      </div>
      <div className="mt-3 h-12 rounded bg-[var(--color-bg-muted)] flex items-end p-1.5">
        <span className="h-1 w-1/3 rounded bg-[var(--color-border-strong)]" />
      </div>
      <div className="mt-2 flex justify-center">
        <span
          className="h-4 px-4 rounded text-[8px] text-white font-semibold flex items-center"
          style={{ background: `oklch(0.5 0.2 ${hue})` }}
        >
          Get started
        </span>
      </div>
    </div>
  );
}
