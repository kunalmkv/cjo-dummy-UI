import Link from "next/link";
import {
  Bell,
  ChevronLeft,
  Clock,
  GitBranch,
  History,
  Mail,
  MessageSquare,
  Play,
  Save,
  Sliders,
  Smartphone,
  Sparkles,
  Target,
  Webhook,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { JourneyCanvas } from "@/components/journey/Canvas";
import { Input, Textarea } from "@/components/ui/Input";

const palette = [
  {
    group: "Triggers",
    items: [
      { icon: Zap, label: "Event", hue: 258 },
      { icon: Sparkles, label: "Segment entry", hue: 70 },
    ],
  },
  {
    group: "Timing",
    items: [
      { icon: Clock, label: "Wait", hue: 230 },
      { icon: Clock, label: "Wait until", hue: 230 },
    ],
  },
  {
    group: "Logic",
    items: [
      { icon: GitBranch, label: "If / else", hue: 280 },
      { icon: GitBranch, label: "Split traffic", hue: 280 },
    ],
  },
  {
    group: "Messages",
    items: [
      { icon: Mail, label: "Email", hue: 220 },
      { icon: Bell, label: "Push", hue: 200 },
      { icon: MessageSquare, label: "SMS", hue: 150 },
      { icon: Smartphone, label: "In-app", hue: 320 },
    ],
  },
  {
    group: "Actions",
    items: [
      { icon: Webhook, label: "Webhook", hue: 40 },
      { icon: Target, label: "Goal", hue: 140 },
    ],
  },
];

export default function JourneyBuilderPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/journeys"
            className="size-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] flex items-center justify-center hover:bg-[var(--color-bg-muted)] cursor-pointer"
          >
            <ChevronLeft className="size-4" />
          </Link>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-[19px] font-semibold tracking-tight font-display truncate">
                Welcome onboarding
              </h1>
              <Badge tone="success" dot>Running · v4</Badge>
            </div>
            <p className="text-[12px] text-[var(--color-fg-muted)] mt-0.5">
              Last published 2h ago by Sara · 9 steps · 3 branches · 24,180 enrolled
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="sm" leftIcon={<History className="size-4" />}>
            History
          </Button>
          <Button variant="secondary" size="sm" leftIcon={<Save className="size-4" />}>
            Save draft
          </Button>
          <Button size="sm" leftIcon={<Play className="size-4" />}>
            Publish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12 lg:col-span-2 h-[640px] flex flex-col">
          <div className="p-3 border-b border-[var(--color-border)]">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
              Palette
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-thin p-2 space-y-3">
            {palette.map((g) => (
              <div key={g.group}>
                <div className="px-1 pb-1 text-[10.5px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
                  {g.group}
                </div>
                <div className="space-y-1">
                  {g.items.map((it) => (
                    <button
                      key={it.label}
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[var(--color-bg-muted)] text-[12.5px] text-[var(--color-fg)] transition-colors cursor-grab"
                    >
                      <span
                        className="size-6 rounded-md flex items-center justify-center text-white"
                        style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${it.hue}), oklch(0.5 0.2 ${it.hue}))` }}
                      >
                        <it.icon className="size-3" strokeWidth={2.2} />
                      </span>
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="col-span-12 lg:col-span-7">
          <JourneyCanvas />
        </div>

        <Card className="col-span-12 lg:col-span-3 h-[640px] flex flex-col">
          <CardHeader className="border-b border-[var(--color-border)] px-4 pt-4 pb-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="size-6 rounded-md flex items-center justify-center bg-[color-mix(in_oklch,var(--color-info-500)_15%,transparent)] text-[var(--color-info-500)]">
                  <Mail className="size-3.5" />
                </span>
                <CardTitle className="text-[13px]">Welcome email</CardTitle>
              </div>
              <p className="text-[11px] text-[var(--color-fg-muted)] mt-1">
                Template · welcome-v3
              </p>
            </div>
            <Sliders className="size-4 text-[var(--color-fg-subtle)]" />
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto scrollbar-thin space-y-4 p-4">
            <Field label="Subject">
              <Input defaultValue="Welcome to {{workspace.name}}, {{user.first_name}}!" />
            </Field>
            <Field label="Preview text">
              <Input defaultValue="Here's what to do in your first 10 minutes." />
            </Field>
            <Field label="From">
              <Input defaultValue="Sara from JourneyCraft <sara@journey.app>" />
            </Field>
            <Field label="Send at">
              <div className="flex gap-2">
                <Input defaultValue="Immediately" />
              </div>
            </Field>
            <Field label="Audience">
              <div className="rounded-lg border border-[var(--color-border)] p-2.5 bg-[var(--color-bg-muted)] text-[12px]">
                <div className="flex items-center justify-between">
                  <span className="font-medium">All new sign-ups</span>
                  <Badge tone="brand">live</Badge>
                </div>
                <p className="text-[11px] text-[var(--color-fg-muted)] mt-1">
                  24,180 people match · refreshes every minute
                </p>
              </div>
            </Field>
            <Field label="Body">
              <Textarea
                defaultValue={
                  "Hey {{user.first_name}},\n\nThanks for joining! Pick a starting point — and we'll guide you the rest of the way."
                }
                className="min-h-[100px] font-mono text-[12px]"
              />
            </Field>

            <div className="rounded-lg border border-dashed border-[var(--color-border-strong)] p-3 bg-[var(--color-bg-muted)]">
              <div className="flex items-center gap-1.5 text-[12px] font-semibold">
                <Sparkles className="size-3.5 text-[var(--color-accent-500)]" /> Optimize with AI
              </div>
              <p className="text-[11px] text-[var(--color-fg-muted)] mt-1">
                Generate 3 subject-line variants and auto-pick the best after 1,000 sends.
              </p>
              <Button size="xs" variant="secondary" className="mt-2">Run optimizer</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-medium text-[var(--color-fg-muted)]">{label}</label>
      {children}
    </div>
  );
}
