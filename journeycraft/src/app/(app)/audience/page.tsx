import {
  Building2,
  Crown,
  Database,
  Download,
  Filter,
  Heart,
  MapPin,
  Plus,
  Search,
  Snowflake,
  Sparkles,
  TrendingDown,
  TrendingUp,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Avatar, AvatarStack } from "@/components/ui/Avatar";

type Segment = {
  icon: LucideIcon;
  hue: number;
  name: string;
  description: string;
  size: string;
  delta: number;
  rules: string[];
  tag?: { text: string; tone: React.ComponentProps<typeof Badge>["tone"] };
};

const segments: Segment[] = [
  {
    icon: Crown,
    hue: 60,
    name: "VIP customers",
    description: "Lifetime spend > $5,000 and active in last 30 days",
    size: "2,184",
    delta: 6.4,
    rules: ["LTV > $5,000", "Last seen ≤ 30d", "Plan = Pro+"],
    tag: { text: "Top tier", tone: "accent" },
  },
  {
    icon: Sparkles,
    hue: 258,
    name: "Power users · NA",
    description: "Triggered 12+ key events in last 7 days, located in NA",
    size: "8,910",
    delta: 12.4,
    rules: ["events ≥ 12 in 7d", "country in [US, CA]"],
    tag: { text: "Behavioral", tone: "brand" },
  },
  {
    icon: Heart,
    hue: 350,
    name: "Promoters · NPS ≥ 9",
    description: "Responded 9 or 10 in the last NPS survey",
    size: "1,420",
    delta: 2.1,
    rules: ["nps_score ≥ 9", "survey ≤ 60d"],
    tag: { text: "Loyalty", tone: "success" },
  },
  {
    icon: Snowflake,
    hue: 200,
    name: "Dormant · 30d inactive",
    description: "Hasn't opened the app or email in last 30 days",
    size: "12,940",
    delta: -4.8,
    rules: ["last_session > 30d", "last_email_open > 30d"],
    tag: { text: "Win-back", tone: "warning" },
  },
  {
    icon: Building2,
    hue: 30,
    name: "Mid-market accounts",
    description: "Companies with 50–500 employees, plan = Team",
    size: "612",
    delta: 8.1,
    rules: ["company.size 50-500", "plan = team"],
    tag: { text: "B2B", tone: "info" },
  },
  {
    icon: MapPin,
    hue: 150,
    name: "Trial · APAC",
    description: "Trial users from APAC currently on day 5–11",
    size: "1,805",
    delta: 14.2,
    rules: ["plan = trial", "trial_day 5-11", "region = APAC"],
    tag: { text: "Lifecycle", tone: "brand" },
  },
];

const people = [
  { name: "Aiko Tanaka", email: "aiko@designed.co", plan: "Pro", country: "JP", events: 184, lifetime: "$4,210" },
  { name: "Marcus Owens", email: "marcus@northgrid.io", plan: "Team", country: "US", events: 412, lifetime: "$18,440" },
  { name: "Priya Banerjee", email: "priya@beamble.app", plan: "Trial", country: "IN", events: 62, lifetime: "—" },
  { name: "Lucas Romero", email: "lucas@fjordlabs.io", plan: "Pro", country: "BR", events: 248, lifetime: "$6,902" },
  { name: "Helena Schmidt", email: "helena@orbita.gmbh", plan: "Team", country: "DE", events: 312, lifetime: "$24,180" },
];

export default function AudiencePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Audience"
        title="Know who your people are — and what they do"
        description="Build segments from behavior, traits and lifecycle. Sync to journeys, campaigns and integrations."
        actions={
          <>
            <Button variant="secondary" size="sm" leftIcon={<Download className="size-4" />}>
              Export CSV
            </Button>
            <Button variant="secondary" size="sm" leftIcon={<UserPlus className="size-4" />}>
              Import
            </Button>
            <Button size="sm" leftIcon={<Plus className="size-4" />}>
              New segment
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard label="Total people" value="184,210" sub="+1,420 last 7 days" icon={Users} hue="258" />
        <StatCard label="Active 30d" value="62,180" sub="34% of audience" icon={Sparkles} hue="70" />
        <StatCard label="Identified" value="98%" sub="Anonymous · 2%" icon={Database} hue="200" />
        <StatCard label="Avg LTV" value="$214" sub="+6.4% MoM" icon={TrendingUp} hue="140" />
      </div>

      <section className="space-y-3">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-sm font-semibold font-display">Segments</h2>
            <p className="text-[11.5px] text-[var(--color-fg-muted)] mt-0.5">
              Reusable groups that update automatically as people qualify or drop out.
            </p>
          </div>
          <button className="text-[12px] font-medium text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] hover:underline cursor-pointer">
            View all segments
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {segments.map((seg) => (
            <Card key={seg.name} className="group hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-pop)] transition-all cursor-pointer">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <span
                    className="size-10 rounded-xl flex items-center justify-center text-white shadow-[var(--shadow-pop)]"
                    style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${seg.hue}), oklch(0.5 0.2 ${seg.hue}))` }}
                  >
                    <seg.icon className="size-4.5" strokeWidth={2} />
                  </span>
                  {seg.tag && <Badge tone={seg.tag.tone}>{seg.tag.text}</Badge>}
                </div>
                <h3 className="mt-3 font-display font-semibold text-[15px] tracking-tight">{seg.name}</h3>
                <p className="text-[12.5px] text-[var(--color-fg-muted)] mt-0.5 line-clamp-2">{seg.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-[22px] font-semibold tabular-nums font-display">{seg.size}</span>
                  <span
                    className={
                      "inline-flex items-center gap-0.5 text-[11px] font-semibold " +
                      (seg.delta >= 0
                        ? "text-[color-mix(in_oklch,var(--color-success-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-success-500)_75%,white)]"
                        : "text-[color-mix(in_oklch,var(--color-danger-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-danger-500)_70%,white)]")
                    }
                  >
                    {seg.delta >= 0 ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                    {Math.abs(seg.delta)}%
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {seg.rules.map((r) => (
                    <span
                      key={r}
                      className="inline-flex items-center px-2 py-0.5 rounded border border-[var(--color-border)] bg-[var(--color-bg-muted)] text-[10.5px] font-mono text-[var(--color-fg-muted)]"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <CardHeader className="px-5 pt-4 pb-3">
          <div>
            <CardTitle>People</CardTitle>
            <p className="text-[11.5px] text-[var(--color-fg-muted)] mt-1">
              Showing 5 of 184,210 · filtered by Last seen ≤ 30d
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-60">
              <Input placeholder="Search by email, name or id…" leftIcon={<Search className="size-4" />} />
            </div>
            <Button variant="secondary" size="sm" leftIcon={<Filter className="size-4" />}>
              Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
                <th className="text-left font-medium pl-5 pr-2 py-2.5">Person</th>
                <th className="text-left font-medium px-2 py-2.5 hidden sm:table-cell">Plan</th>
                <th className="text-left font-medium px-2 py-2.5 hidden md:table-cell">Country</th>
                <th className="text-right font-medium px-2 py-2.5">Events (30d)</th>
                <th className="text-right font-medium pl-2 pr-5 py-2.5">Lifetime</th>
              </tr>
            </thead>
            <tbody>
              {people.map((p) => (
                <tr key={p.email} className="border-t border-[var(--color-border)] hover:bg-[var(--color-bg-muted)] transition-colors">
                  <td className="pl-5 pr-2 py-3">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={p.name} size="sm" />
                      <div className="min-w-0">
                        <div className="text-[13.5px] font-medium truncate">{p.name}</div>
                        <div className="text-[11.5px] text-[var(--color-fg-muted)] truncate">{p.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3 hidden sm:table-cell">
                    <Badge tone={p.plan === "Pro" ? "brand" : p.plan === "Team" ? "accent" : "neutral"}>{p.plan}</Badge>
                  </td>
                  <td className="px-2 py-3 hidden md:table-cell text-[13px]">{p.country}</td>
                  <td className="px-2 py-3 text-right tabular-nums">{p.events}</td>
                  <td className="pl-2 pr-5 py-3 text-right tabular-nums font-medium">{p.lifetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  hue,
}: {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  hue: string;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[11.5px] font-medium text-[var(--color-fg-muted)]">{label}</div>
          <div className="text-[22px] font-display font-semibold tabular-nums mt-1">{value}</div>
          <div className="text-[11px] text-[var(--color-fg-subtle)] mt-0.5">{sub}</div>
        </div>
        <span
          className="size-8 rounded-lg flex items-center justify-center text-white"
          style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${hue}), oklch(0.5 0.2 ${hue}))` }}
        >
          <Icon className="size-4" />
        </span>
      </div>
    </Card>
  );
}
