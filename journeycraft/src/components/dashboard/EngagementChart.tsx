"use client";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ClientOnly } from "@/components/ui/ClientOnly";

const data = Array.from({ length: 30 }).map((_, i) => {
  const day = i + 1;
  const base = 200 + Math.sin(i / 3) * 60 + i * 8;
  return {
    day: `${day}`,
    delivered: Math.round(base + Math.random() * 30),
    opened: Math.round(base * 0.62 + Math.random() * 30),
    clicked: Math.round(base * 0.18 + Math.random() * 20),
  };
});

export function EngagementChart() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div>
          <CardTitle>Engagement over time</CardTitle>
          <p className="text-xs text-[var(--color-fg-muted)] mt-1">
            Delivered, opened and clicked across all channels
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <Legend swatch="var(--color-brand-500)" label="Delivered" />
          <Legend swatch="var(--color-accent-500)" label="Opened" />
          <Legend swatch="var(--color-success-500)" label="Clicked" />
        </div>
      </CardHeader>
      <CardContent className="h-72 pl-1 pr-3 pb-3">
        <ClientOnly fallback={<div className="h-full w-full rounded-lg shimmer" />}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="grad-delivered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-brand-500)" stopOpacity={0.25} />
                <stop offset="100%" stopColor="var(--color-brand-500)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--color-border)" vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              stroke="var(--color-fg-subtle)"
              tickLine={false}
              axisLine={false}
              fontSize={11}
              dy={6}
            />
            <YAxis
              stroke="var(--color-fg-subtle)"
              tickLine={false}
              axisLine={false}
              fontSize={11}
              width={36}
              tickFormatter={(v) => (v >= 1000 ? `${Math.round(v / 100) / 10}k` : v)}
            />
            <Tooltip
              cursor={{ stroke: "var(--color-border-strong)", strokeDasharray: "3 3" }}
              contentStyle={{
                background: "var(--color-bg-elev)",
                border: "1px solid var(--color-border)",
                borderRadius: 10,
                fontSize: 12,
                boxShadow: "var(--shadow-pop)",
              }}
            />
            <Area
              type="monotone"
              dataKey="delivered"
              stroke="var(--color-brand-500)"
              strokeWidth={2}
              fill="url(#grad-delivered)"
            />
            <Line
              type="monotone"
              dataKey="opened"
              stroke="var(--color-accent-500)"
              strokeWidth={1.75}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="clicked"
              stroke="var(--color-success-500)"
              strokeWidth={1.75}
              strokeDasharray="4 3"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
        </ClientOnly>
      </CardContent>
    </Card>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-fg-muted)]">
      <span className="size-2 rounded-full" style={{ background: swatch }} />
      {label}
    </span>
  );
}

export function ChannelMix() {
  const channels = [
    { name: "Email", value: 64, color: "var(--color-brand-500)" },
    { name: "Push", value: 18, color: "var(--color-accent-500)" },
    { name: "SMS", value: 11, color: "var(--color-success-500)" },
    { name: "In-app", value: 7, color: "var(--color-info-500)" },
  ];
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Channel mix</CardTitle>
          <p className="text-xs text-[var(--color-fg-muted)] mt-1">
            Last 30 days of message volume
          </p>
        </div>
        <Badge tone="neutral">30d</Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex h-2.5 w-full rounded-full overflow-hidden bg-[var(--color-bg-muted)]">
          {channels.map((c) => (
            <span
              key={c.name}
              className="h-full"
              style={{ width: `${c.value}%`, background: c.color }}
            />
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
          {channels.map((c) => (
            <li key={c.name} className="flex items-center justify-between text-[13px]">
              <span className="flex items-center gap-1.5 text-[var(--color-fg-muted)]">
                <span className="size-2 rounded-full" style={{ background: c.color }} />
                {c.name}
              </span>
              <span className="font-semibold tabular-nums">{c.value}%</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
