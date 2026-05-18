import { Check, ExternalLink, Filter, Plus, Search, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

const categories = [
  "All", "Connected", "Email", "SMS", "CRM", "Analytics", "Data warehouse", "Reverse ETL", "Productivity", "Ads",
];

type Integration = {
  name: string;
  desc: string;
  category: string;
  hue: number;
  connected?: boolean;
  trending?: boolean;
};

const items: Integration[] = [
  { name: "Payments connector", desc: "Sync payments, subscriptions and lifetime value.", category: "CRM", hue: 258, connected: true },
  { name: "Event pipeline", desc: "Pipe events from anywhere into JourneyCraft.", category: "Analytics", hue: 200, connected: true },
  { name: "Warehouse — reverse ETL", desc: "Activate warehouse audiences with reverse ETL.", category: "Data warehouse", hue: 195, connected: true },
  { name: "SMS provider", desc: "Send SMS at scale across global carriers.", category: "SMS", hue: 350 },
  { name: "Transactional email", desc: "Transactional email with reliable deliverability.", category: "Email", hue: 30, trending: true },
  { name: "Marketing email ESP", desc: "High-volume email platform for marketing sends.", category: "Email", hue: 220 },
  { name: "CRM (mid-market)", desc: "Two-way sync contacts, deals and lifecycle stages.", category: "CRM", hue: 16 },
  { name: "CRM (enterprise)", desc: "Enterprise CRM sync with field-level mapping.", category: "CRM", hue: 200 },
  { name: "Warehouse — query", desc: "Stream events and run cohort queries.", category: "Data warehouse", hue: 230 },
  { name: "Team chat", desc: "Notify the right channel when key events fire.", category: "Productivity", hue: 280, trending: true },
  { name: "Product analytics A", desc: "Forward events for product analytics.", category: "Analytics", hue: 270 },
  { name: "Product analytics B", desc: "Sync cohorts and behavioral data.", category: "Analytics", hue: 240 },
  { name: "Ads — social network", desc: "Build look-alike audiences from segments.", category: "Ads", hue: 230 },
  { name: "Ads — search engine", desc: "Sync audiences for retargeting and exclusions.", category: "Ads", hue: 30 },
  { name: "Issue tracker", desc: "Open issues when experiments need follow-up.", category: "Productivity", hue: 258 },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Integrations"
        title="Connect the rest of your stack"
        description="Pre-built connectors and a full webhook API. Sync data both ways without writing glue code."
        actions={
          <>
            <Button variant="secondary" size="sm" leftIcon={<ExternalLink className="size-4" />}>
              API docs
            </Button>
            <Button size="sm" leftIcon={<Plus className="size-4" />}>
              Request integration
            </Button>
          </>
        }
      />

      <Card className="overflow-hidden">
        <div className="p-5 mesh-bg">
          <div className="flex items-center gap-3 max-w-3xl">
            <span className="size-10 rounded-xl bg-[var(--color-bg-elev)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent-500)] shadow-[var(--shadow-pop)]">
              <Sparkles className="size-4.5" />
            </span>
            <div className="flex-1">
              <div className="text-[14px] font-display font-semibold tracking-tight">
                Build your own with the Universal connector
              </div>
              <p className="text-[12px] text-[var(--color-fg-muted)]">
                Define a config in YAML — get an integration with auth, retries and observability out of the box.
              </p>
            </div>
            <Button size="sm" variant="secondary">
              Try the SDK
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
          {categories.map((c, i) => (
            <button
              key={c}
              className={
                "shrink-0 inline-flex items-center px-3 h-8 rounded-md text-[12.5px] font-medium transition-colors cursor-pointer " +
                (i === 0
                  ? "bg-[var(--color-bg-elev)] border border-[var(--color-border)] text-[var(--color-fg)] shadow-[var(--shadow-card)]"
                  : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)]")
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-72">
            <Input placeholder="Search integrations…" leftIcon={<Search className="size-4" />} />
          </div>
          <Button variant="secondary" size="md" leftIcon={<Filter className="size-4" />}>
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {items.map((it) => (
          <Card key={it.name} className="group p-4 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-pop)] transition-all cursor-pointer relative overflow-hidden">
            <div className="flex items-start gap-3">
              <span
                className="size-10 rounded-xl flex items-center justify-center text-white font-display font-bold text-[14px] shadow-[var(--shadow-pop)] shrink-0"
                style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${it.hue}), oklch(0.5 0.2 ${it.hue}))` }}
              >
                {it.name[0]}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display font-semibold text-[14px] tracking-tight truncate">{it.name}</h3>
                  {it.trending && <Badge tone="accent">Trending</Badge>}
                </div>
                <p className="text-[11.5px] text-[var(--color-fg-muted)] mt-0.5 line-clamp-2">{it.desc}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10.5px] uppercase tracking-wider text-[var(--color-fg-subtle)] font-semibold">
                {it.category}
              </span>
              {it.connected ? (
                <Badge tone="success" dot>
                  <Check className="size-2.5 -ml-0.5" /> Connected
                </Badge>
              ) : (
                <Button size="xs" variant="secondary">Connect</Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
