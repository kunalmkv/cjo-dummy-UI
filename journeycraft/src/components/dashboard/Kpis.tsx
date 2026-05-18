import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Sparkline } from "@/components/ui/Sparkline";
import { cn } from "@/lib/cn";

type Kpi = {
  label: string;
  value: string;
  delta: number;
  spark: number[];
  color?: string;
  hint?: string;
};

const kpis: Kpi[] = [
  {
    label: "Active people",
    value: "84,210",
    delta: 12.4,
    hint: "vs last 7 days",
    spark: [20, 24, 22, 28, 30, 27, 32, 34, 33, 38, 41, 40, 45, 48],
    color: "var(--color-brand-500)",
  },
  {
    label: "Messages sent",
    value: "412,807",
    delta: 6.1,
    hint: "vs last 7 days",
    spark: [30, 28, 32, 35, 31, 36, 40, 42, 38, 44, 41, 47, 46, 50],
    color: "var(--color-info-500)",
  },
  {
    label: "Conversion rate",
    value: "4.83%",
    delta: -1.2,
    hint: "vs last 7 days",
    spark: [42, 45, 44, 41, 43, 40, 38, 41, 39, 42, 38, 37, 39, 36],
    color: "var(--color-accent-500)",
  },
  {
    label: "Revenue attributed",
    value: "$184,920",
    delta: 23.7,
    hint: "vs last 7 days",
    spark: [10, 14, 13, 18, 22, 21, 26, 30, 33, 38, 42, 46, 51, 58],
    color: "var(--color-success-500)",
  },
];

export function Kpis() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {kpis.map((k, i) => {
        const positive = k.delta >= 0;
        return (
          <div
            key={k.label}
            className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4 shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-pop)] transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[12px] font-medium text-[var(--color-fg-muted)]">{k.label}</div>
                <div className="mt-1.5 text-2xl font-semibold font-display tracking-tight tabular-nums">
                  {k.value}
                </div>
              </div>
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-semibold border",
                  positive
                    ? "text-[color-mix(in_oklch,var(--color-success-500)_80%,black)] bg-[color-mix(in_oklch,var(--color-success-500)_14%,transparent)] border-[color-mix(in_oklch,var(--color-success-500)_25%,transparent)] dark:text-[color-mix(in_oklch,var(--color-success-500)_75%,white)]"
                    : "text-[color-mix(in_oklch,var(--color-danger-500)_75%,black)] bg-[color-mix(in_oklch,var(--color-danger-500)_14%,transparent)] border-[color-mix(in_oklch,var(--color-danger-500)_25%,transparent)] dark:text-[color-mix(in_oklch,var(--color-danger-500)_75%,white)]",
                )}
              >
                {positive ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {Math.abs(k.delta)}%
              </span>
            </div>
            <div className="mt-3 -mx-1 h-10">
              <Sparkline id={`spark-${i}`} data={k.spark} color={k.color} />
            </div>
            <div className="mt-1 text-[10.5px] text-[var(--color-fg-subtle)]">{k.hint}</div>
          </div>
        );
      })}
    </div>
  );
}
