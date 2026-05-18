"use client";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ClientOnly } from "@/components/ui/ClientOnly";

function Fb() {
  return <div className="h-full w-full rounded-lg shimmer" />;
}

const steps = [
  { step: "Visited", value: 184210 },
  { step: "Signed up", value: 24180 },
  { step: "Activated", value: 11240 },
  { step: "Upgraded to Pro", value: 4180 },
  { step: "Renewed", value: 2840 },
];

const colors = [
  "var(--color-brand-500)",
  "var(--color-brand-600)",
  "var(--color-accent-500)",
  "var(--color-accent-600)",
  "var(--color-success-500)",
];

export function FunnelChart() {
  return (
    <ClientOnly fallback={<Fb />}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={steps} layout="vertical" margin={{ left: 12, right: 36, top: 4, bottom: 0 }}>
        <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" horizontal={false} />
        <XAxis
          type="number"
          stroke="var(--color-fg-subtle)"
          tickLine={false}
          axisLine={false}
          fontSize={11}
          tickFormatter={(v) => (v >= 1000 ? `${Math.round(v / 1000)}k` : v)}
        />
        <YAxis
          type="category"
          dataKey="step"
          stroke="var(--color-fg-subtle)"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          width={120}
        />
        <Tooltip
          cursor={{ fill: "color-mix(in oklch, var(--color-brand-500) 6%, transparent)" }}
          contentStyle={{
            background: "var(--color-bg-elev)",
            border: "1px solid var(--color-border)",
            borderRadius: 10,
            fontSize: 12,
            boxShadow: "var(--shadow-pop)",
          }}
          formatter={(v) => [(v as number).toLocaleString(), "People"]}
        />
        <Bar dataKey="value" radius={[0, 8, 8, 0]}>
          {steps.map((_, i) => (
            <Cell key={i} fill={colors[i % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </ClientOnly>
  );
}

const cohort = [
  { week: "W0", retained: 100 },
  { week: "W1", retained: 82 },
  { week: "W2", retained: 71 },
  { week: "W3", retained: 64 },
  { week: "W4", retained: 58 },
  { week: "W5", retained: 54 },
  { week: "W6", retained: 51 },
  { week: "W7", retained: 49 },
  { week: "W8", retained: 47 },
];

export function RetentionChart() {
  return (
    <ClientOnly fallback={<Fb />}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={cohort} margin={{ left: 0, right: 8, top: 4, bottom: 0 }}>
        <defs>
          <linearGradient id="ret-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-500)" stopOpacity={0.9} />
            <stop offset="100%" stopColor="var(--color-brand-500)" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="week" stroke="var(--color-fg-subtle)" tickLine={false} axisLine={false} fontSize={11} />
        <YAxis
          stroke="var(--color-fg-subtle)"
          tickLine={false}
          axisLine={false}
          fontSize={11}
          width={32}
          tickFormatter={(v) => `${v}%`}
        />
        <Tooltip
          contentStyle={{
            background: "var(--color-bg-elev)",
            border: "1px solid var(--color-border)",
            borderRadius: 10,
            fontSize: 12,
          }}
        />
        <Bar dataKey="retained" radius={[6, 6, 0, 0]} fill="url(#ret-grad)" />
      </BarChart>
    </ResponsiveContainer>
    </ClientOnly>
  );
}
