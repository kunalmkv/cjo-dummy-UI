import { ArrowDownRight, ArrowUpRight, Calendar, Download, Filter, GitCompareArrows } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FunnelChart, RetentionChart } from "@/components/analytics/FunnelChart";

const channels = [
  { name: "Email", delivered: "412,180", open: "62.4%", click: "12.4%", revenue: "$92,410", delta: 8.2 },
  { name: "Push", delivered: "84,210", open: "—", click: "8.4%", revenue: "$18,940", delta: 4.1 },
  { name: "SMS", delivered: "22,840", open: "—", click: "6.1%", revenue: "$11,210", delta: -1.2 },
  { name: "In-app", delivered: "184,210", open: "—", click: "21.4%", revenue: "$42,180", delta: 14.4 },
];

const tests = [
  { name: "Pricing CTA · variant B", lift: 12.3, conf: 94, status: "Winning" },
  { name: "Trial onboarding · 7d delay", lift: 4.1, conf: 81, status: "Running" },
  { name: "Promoter survey · subject test", lift: -2.4, conf: 92, status: "Losing" },
  { name: "Black Friday hero · animation", lift: 0.8, conf: 64, status: "Inconclusive" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Analytics"
        title="What's working — and what's about to"
        description="Conversion funnels, cohort retention, channel performance and experiments. All in one place."
        actions={
          <>
            <Button variant="secondary" size="sm" leftIcon={<Filter className="size-4" />}>
              Filter
            </Button>
            <Button variant="secondary" size="sm" leftIcon={<Calendar className="size-4" />}>
              Last 30 days
            </Button>
            <Button variant="secondary" size="sm" leftIcon={<GitCompareArrows className="size-4" />}>
              Compare
            </Button>
            <Button size="sm" leftIcon={<Download className="size-4" />}>
              Export
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-12 gap-5">
        <Card className="col-span-12 xl:col-span-7">
          <CardHeader>
            <div>
              <CardTitle>Conversion funnel</CardTitle>
              <p className="text-[12px] text-[var(--color-fg-muted)] mt-1">Visited → Signed up → Activated → Upgraded → Renewed</p>
            </div>
            <Badge tone="brand">Last 30d</Badge>
          </CardHeader>
          <CardContent className="h-80 pl-1 pr-2 pb-3">
            <FunnelChart />
          </CardContent>
        </Card>

        <Card className="col-span-12 xl:col-span-5">
          <CardHeader>
            <div>
              <CardTitle>Cohort retention</CardTitle>
              <p className="text-[12px] text-[var(--color-fg-muted)] mt-1">Weekly retention of Nov 2026 cohort</p>
            </div>
            <Badge tone="success">+4.2 wk-over-wk</Badge>
          </CardHeader>
          <CardContent className="h-80 pl-1 pr-2 pb-3">
            <RetentionChart />
          </CardContent>
        </Card>

        <Card className="col-span-12 xl:col-span-7">
          <CardHeader>
            <div>
              <CardTitle>Channel performance</CardTitle>
              <p className="text-[12px] text-[var(--color-fg-muted)] mt-1">Aggregate delivery, engagement and revenue</p>
            </div>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[11px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
                  <th className="text-left font-medium pl-5 pr-2 py-2">Channel</th>
                  <th className="text-right font-medium px-2 py-2">Delivered</th>
                  <th className="text-right font-medium px-2 py-2 hidden sm:table-cell">Open</th>
                  <th className="text-right font-medium px-2 py-2">Click</th>
                  <th className="text-right font-medium px-2 py-2 hidden md:table-cell">Revenue</th>
                  <th className="text-right font-medium pl-2 pr-5 py-2">Δ</th>
                </tr>
              </thead>
              <tbody>
                {channels.map((c) => (
                  <tr key={c.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-bg-muted)] transition-colors">
                    <td className="pl-5 pr-2 py-3 font-medium">{c.name}</td>
                    <td className="px-2 py-3 text-right tabular-nums">{c.delivered}</td>
                    <td className="px-2 py-3 text-right tabular-nums hidden sm:table-cell">{c.open}</td>
                    <td className="px-2 py-3 text-right tabular-nums">{c.click}</td>
                    <td className="px-2 py-3 text-right tabular-nums font-medium hidden md:table-cell">{c.revenue}</td>
                    <td className="pl-2 pr-5 py-3 text-right">
                      <span
                        className={
                          "inline-flex items-center gap-0.5 text-[12px] font-semibold tabular-nums " +
                          (c.delta >= 0
                            ? "text-[color-mix(in_oklch,var(--color-success-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-success-500)_70%,white)]"
                            : "text-[color-mix(in_oklch,var(--color-danger-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-danger-500)_70%,white)]")
                        }
                      >
                        {c.delta >= 0 ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                        {Math.abs(c.delta)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="col-span-12 xl:col-span-5">
          <CardHeader>
            <div>
              <CardTitle>Experiments</CardTitle>
              <p className="text-[12px] text-[var(--color-fg-muted)] mt-1">A/B tests across journeys, landers, campaigns</p>
            </div>
            <button className="text-[12px] font-medium text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] hover:underline cursor-pointer">
              View all
            </button>
          </CardHeader>
          <CardContent className="space-y-2">
            {tests.map((t) => {
              const positive = t.lift >= 0;
              return (
                <div key={t.name} className="rounded-lg border border-[var(--color-border)] p-3 hover:border-[var(--color-border-strong)] transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium truncate">{t.name}</div>
                      <div className="text-[11px] text-[var(--color-fg-muted)] mt-0.5">
                        Confidence {t.conf}% · {t.status}
                      </div>
                    </div>
                    <span
                      className={
                        "shrink-0 inline-flex items-center gap-0.5 text-[12px] font-semibold tabular-nums " +
                        (positive
                          ? "text-[color-mix(in_oklch,var(--color-success-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-success-500)_70%,white)]"
                          : "text-[color-mix(in_oklch,var(--color-danger-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-danger-500)_70%,white)]")
                      }
                    >
                      {positive ? "+" : ""}
                      {t.lift}%
                    </span>
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-[var(--color-bg-muted)] overflow-hidden">
                    <div
                      className={
                        "h-full " + (positive ? "bg-[var(--color-success-500)]" : "bg-[var(--color-danger-500)]")
                      }
                      style={{ width: `${t.conf}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
