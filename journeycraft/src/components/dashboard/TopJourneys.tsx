import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const journeys = [
  {
    name: "Welcome onboarding · v4",
    status: "running",
    people: "24,180",
    completion: 78,
    delta: "+12.4%",
    trend: "up",
  },
  {
    name: "Trial → Paid conversion",
    status: "running",
    people: "8,410",
    completion: 52,
    delta: "+4.1%",
    trend: "up",
  },
  {
    name: "Win-back · 30d inactive",
    status: "running",
    people: "12,940",
    completion: 41,
    delta: "-2.3%",
    trend: "down",
  },
  {
    name: "Cart abandonment recovery",
    status: "paused",
    people: "3,201",
    completion: 27,
    delta: "+0.8%",
    trend: "up",
  },
  {
    name: "Feature announcement · Pro",
    status: "draft",
    people: "—",
    completion: 0,
    delta: "—",
    trend: "up",
  },
];

const statusTone = {
  running: { tone: "success" as const, dot: true, label: "Running" },
  paused: { tone: "warning" as const, dot: false, label: "Paused" },
  draft: { tone: "neutral" as const, dot: false, label: "Draft" },
};

export function TopJourneys() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Top journeys</CardTitle>
          <p className="text-xs text-[var(--color-fg-muted)] mt-1">
            By people in active steps · last 7 days
          </p>
        </div>
        <button className="inline-flex items-center gap-1 text-[12px] font-medium text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] hover:underline cursor-pointer">
          Manage <ArrowUpRight className="size-3.5" />
        </button>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
              <th className="text-left font-medium pl-5 pr-2 py-2">Journey</th>
              <th className="text-left font-medium px-2 py-2 hidden sm:table-cell">Status</th>
              <th className="text-right font-medium px-2 py-2">People</th>
              <th className="text-left font-medium px-2 py-2 hidden md:table-cell w-44">Completion</th>
              <th className="text-right font-medium pl-2 pr-5 py-2">Δ 7d</th>
            </tr>
          </thead>
          <tbody>
            {journeys.map((j) => {
              const s = statusTone[j.status as keyof typeof statusTone];
              const up = j.trend === "up";
              return (
                <tr key={j.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-bg-muted)] transition-colors group">
                  <td className="pl-5 pr-2 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className="size-7 rounded-md bg-[var(--color-bg-muted)] flex items-center justify-center text-[var(--color-fg-muted)] group-hover:bg-[var(--color-bg-elev)] transition-colors">
                        {j.status === "paused" ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                      </span>
                      <span className="font-medium text-[13.5px] truncate">{j.name}</span>
                    </div>
                  </td>
                  <td className="px-2 py-3 hidden sm:table-cell">
                    <Badge tone={s.tone} dot={s.dot}>{s.label}</Badge>
                  </td>
                  <td className="px-2 py-3 text-right tabular-nums font-medium">{j.people}</td>
                  <td className="px-2 py-3 hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-[var(--color-bg-muted)] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-700)]"
                          style={{ width: `${j.completion}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-[var(--color-fg-muted)] tabular-nums w-8 text-right">{j.completion}%</span>
                    </div>
                  </td>
                  <td className="pl-2 pr-5 py-3 text-right">
                    <span
                      className={
                        up
                          ? "text-[color-mix(in_oklch,var(--color-success-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-success-500)_75%,white)] text-[12px] font-semibold tabular-nums"
                          : "text-[color-mix(in_oklch,var(--color-danger-500)_75%,black)] dark:text-[color-mix(in_oklch,var(--color-danger-500)_75%,white)] text-[12px] font-semibold tabular-nums"
                      }
                    >
                      {j.delta}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
