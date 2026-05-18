import {
  CheckCircle2,
  GitBranch,
  Globe2,
  Mail,
  type LucideIcon,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

type Activity = {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: React.ReactNode;
  meta: string;
  time: string;
  badge?: { text: string; tone?: React.ComponentProps<typeof Badge>["tone"] };
};

const items: Activity[] = [
  {
    icon: GitBranch,
    iconBg: "color-mix(in oklch, var(--color-brand-500) 15%, transparent)",
    iconColor: "var(--color-brand-600)",
    title: (
      <>
        <b>Onboarding · Welcome Flow</b> went live
      </>
    ),
    meta: "Sara published v4 with 2 new branches",
    time: "2m",
    badge: { text: "Journey", tone: "brand" },
  },
  {
    icon: Mail,
    iconBg: "color-mix(in oklch, var(--color-accent-500) 16%, transparent)",
    iconColor: "color-mix(in oklch, var(--color-accent-500) 70%, black)",
    title: (
      <>
        Campaign <b>Black Friday → Tier 1</b> sent to 24,180 people
      </>
    ),
    meta: "Open rate trending +18% vs avg",
    time: "27m",
    badge: { text: "Campaign", tone: "accent" },
  },
  {
    icon: Globe2,
    iconBg: "color-mix(in oklch, var(--color-info-500) 16%, transparent)",
    iconColor: "color-mix(in oklch, var(--color-info-500) 70%, black)",
    title: (
      <>
        Lander <b>/pricing-q4</b> cloned from <span className="font-mono">example.com/pricing</span>
      </>
    ),
    meta: "Imported 18 sections, 6 images",
    time: "1h",
    badge: { text: "Lander", tone: "info" },
  },
  {
    icon: UserPlus,
    iconBg: "color-mix(in oklch, var(--color-success-500) 16%, transparent)",
    iconColor: "color-mix(in oklch, var(--color-success-500) 70%, black)",
    title: (
      <>
        Segment <b>Power users · NA</b> grew by 1,204
      </>
    ),
    meta: "Threshold rule: events ≥ 12 in 7d",
    time: "2h",
    badge: { text: "Audience", tone: "success" },
  },
  {
    icon: TrendingUp,
    iconBg: "color-mix(in oklch, var(--color-warning-500) 20%, transparent)",
    iconColor: "color-mix(in oklch, var(--color-warning-500) 60%, black)",
    title: (
      <>
        A/B test <b>Pricing CTA · variant B</b> reached significance
      </>
    ),
    meta: "B wins +12.3% with 94% confidence",
    time: "4h",
    badge: { text: "Experiment", tone: "warning" },
  },
  {
    icon: CheckCircle2,
    iconBg: "var(--color-bg-muted)",
    iconColor: "var(--color-fg-muted)",
    title: (
      <>
        Webhook <b>checkout.completed</b> received 412 events
      </>
    ),
    meta: "All 412 events routed successfully",
    time: "6h",
    badge: { text: "System", tone: "neutral" },
  },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Activity</CardTitle>
          <p className="text-xs text-[var(--color-fg-muted)] mt-1">
            What's happening across your workspace
          </p>
        </div>
        <button className="text-[12px] font-medium text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] hover:underline cursor-pointer">
          View all
        </button>
      </CardHeader>
      <CardContent className="pt-1">
        <ol className="relative space-y-1">
          {items.map((it, i) => (
            <li key={i} className="flex gap-3 group rounded-lg p-2 -mx-2 hover:bg-[var(--color-bg-muted)] transition-colors">
              <div className="relative pt-0.5">
                <span
                  className="size-7 rounded-lg flex items-center justify-center"
                  style={{ background: it.iconBg, color: it.iconColor }}
                >
                  <it.icon className="size-3.5" strokeWidth={2} />
                </span>
                {i !== items.length - 1 && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-9 h-[calc(100%-8px)] w-px bg-[var(--color-border)]" />
                )}
              </div>
              <div className="min-w-0 flex-1 pb-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[13px] text-[var(--color-fg)] leading-snug">{it.title}</p>
                  <span className="text-[11px] text-[var(--color-fg-subtle)] shrink-0">{it.time}</span>
                </div>
                <div className="mt-0.5 flex items-center gap-2">
                  {it.badge && <Badge tone={it.badge.tone}>{it.badge.text}</Badge>}
                  <p className="text-[11.5px] text-[var(--color-fg-muted)] truncate">{it.meta}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
