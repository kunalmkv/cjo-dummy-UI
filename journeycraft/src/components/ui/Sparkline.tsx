"use client";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { ClientOnly } from "@/components/ui/ClientOnly";

export function Sparkline({
  data,
  color = "var(--color-brand-500)",
  id,
}: {
  data: number[];
  color?: string;
  id: string;
}) {
  const series = data.map((value, i) => ({ i, value }));
  return (
    <ClientOnly fallback={<div className="h-full w-full rounded bg-[var(--color-bg-muted)]" />}>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={series} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip
          contentStyle={{
            background: "var(--color-bg-elev)",
            border: "1px solid var(--color-border)",
            borderRadius: 8,
            fontSize: 11,
            padding: "4px 8px",
          }}
          labelFormatter={() => ""}
          formatter={(v) => [v as number, "Value"]}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1.75}
          fill={`url(#${id})`}
        />
      </AreaChart>
    </ResponsiveContainer>
    </ClientOnly>
  );
}
