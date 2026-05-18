"use client";
import {
  Bell,
  Clock,
  GitBranch,
  Mail,
  MessageSquare,
  Play,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Webhook,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

type NodeKind = "trigger" | "wait" | "branch" | "email" | "push" | "sms" | "inapp" | "webhook" | "goal" | "ai";

type NodeDef = {
  id: string;
  kind: NodeKind;
  title: string;
  subtitle?: string;
  meta?: string;
  x: number;
  y: number;
  status?: "running" | "warning" | "ok";
};

type Edge = { from: string; to: string; label?: string; tone?: "neutral" | "yes" | "no" };

const nodes: NodeDef[] = [
  { id: "t1", kind: "trigger", title: "Signed up", subtitle: "Event · user.created", x: 60, y: 230, status: "running" },
  { id: "w1", kind: "wait", title: "Wait 5 minutes", subtitle: "Fixed delay", x: 280, y: 230 },
  { id: "e1", kind: "email", title: "Welcome email", subtitle: "Template · welcome-v3", meta: "Sent 24,180 · 62% open", x: 480, y: 230, status: "ok" },
  { id: "b1", kind: "branch", title: "Plan tier", subtitle: "user.plan", x: 720, y: 230 },
  { id: "e2", kind: "email", title: "Pro onboarding", subtitle: "Template · pro-tour", meta: "Sent 4,210 · 71% open", x: 940, y: 120, status: "ok" },
  { id: "p1", kind: "push", title: "Install the app", subtitle: "Native push", meta: "1,840 delivered", x: 940, y: 360 },
  { id: "w2", kind: "wait", title: "Wait 1 day", subtitle: "Day boundary", x: 1180, y: 120 },
  { id: "i1", kind: "inapp", title: "Show product tour", subtitle: "In-app · tour-v2", x: 1380, y: 120 },
  { id: "s1", kind: "sms", title: "Trial reminder", subtitle: "SMS · short copy", meta: "Sent 1,840", x: 1180, y: 360, status: "warning" },
  { id: "g1", kind: "goal", title: "Goal · upgraded", subtitle: "user.plan = pro", meta: "938 reached · 38%", x: 1580, y: 230, status: "running" },
  { id: "a1", kind: "ai", title: "AI subject test", subtitle: "Variant winner", x: 480, y: 60 },
  { id: "wh", kind: "webhook", title: "Notify team", subtitle: "POST → /activations", x: 1580, y: 60 },
];

const edges: Edge[] = [
  { from: "t1", to: "w1" },
  { from: "w1", to: "e1" },
  { from: "e1", to: "b1" },
  { from: "b1", to: "e2", label: "Pro", tone: "yes" },
  { from: "b1", to: "p1", label: "Free", tone: "no" },
  { from: "e2", to: "w2" },
  { from: "w2", to: "i1" },
  { from: "p1", to: "s1" },
  { from: "i1", to: "g1" },
  { from: "s1", to: "g1" },
  { from: "a1", to: "e1", tone: "neutral" },
  { from: "g1", to: "wh", tone: "neutral" },
];

const kindStyles: Record<NodeKind, { icon: LucideIcon; hue: number; family: string }> = {
  trigger: { icon: Zap, hue: 258, family: "Trigger" },
  wait: { icon: Clock, hue: 230, family: "Timing" },
  branch: { icon: GitBranch, hue: 280, family: "Logic" },
  email: { icon: Mail, hue: 220, family: "Message" },
  push: { icon: Bell, hue: 200, family: "Message" },
  sms: { icon: MessageSquare, hue: 150, family: "Message" },
  inapp: { icon: Smartphone, hue: 320, family: "Message" },
  webhook: { icon: Webhook, hue: 40, family: "Action" },
  goal: { icon: Target, hue: 140, family: "Goal" },
  ai: { icon: Sparkles, hue: 70, family: "AI" },
};

const NODE_W = 196;
const NODE_H = 84;

export function JourneyCanvas() {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="relative h-[640px] w-full overflow-auto scrollbar-thin rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-muted)]">
      <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />

      <div className="relative" style={{ width: 1840, height: 640 }}>
        <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-border-strong)" />
            </marker>
            <marker id="arrow-yes" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-success-500)" />
            </marker>
            <marker id="arrow-no" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent-500)" />
            </marker>
          </defs>
          {edges.map((e, i) => {
            const a = nodeMap[e.from];
            const b = nodeMap[e.to];
            if (!a || !b) return null;
            const x1 = a.x + NODE_W;
            const y1 = a.y + NODE_H / 2;
            const x2 = b.x;
            const y2 = b.y + NODE_H / 2;
            const dx = Math.max(60, (x2 - x1) / 2);
            const path = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
            const stroke =
              e.tone === "yes"
                ? "var(--color-success-500)"
                : e.tone === "no"
                ? "var(--color-accent-500)"
                : "var(--color-border-strong)";
            const marker =
              e.tone === "yes" ? "url(#arrow-yes)" : e.tone === "no" ? "url(#arrow-no)" : "url(#arrow)";
            return (
              <g key={i}>
                <path d={path} fill="none" stroke={stroke} strokeWidth={1.75} markerEnd={marker} />
                {e.label && (
                  <g>
                    <rect
                      x={(x1 + x2) / 2 - 18}
                      y={(y1 + y2) / 2 - 10}
                      width={36}
                      height={20}
                      rx={6}
                      fill="var(--color-bg-elev)"
                      stroke={stroke}
                    />
                    <text
                      x={(x1 + x2) / 2}
                      y={(y1 + y2) / 2 + 3}
                      textAnchor="middle"
                      fontSize={10}
                      fontWeight={600}
                      fill="var(--color-fg)"
                    >
                      {e.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {nodes.map((n) => (
          <JourneyNode key={n.id} node={n} />
        ))}
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-1 shadow-[var(--shadow-pop)]">
        <button className="size-7 rounded-md hover:bg-[var(--color-bg-muted)] flex items-center justify-center text-[var(--color-fg-muted)] cursor-pointer" aria-label="Zoom out">
          −
        </button>
        <span className="text-[11px] font-mono px-1">100%</span>
        <button className="size-7 rounded-md hover:bg-[var(--color-bg-muted)] flex items-center justify-center text-[var(--color-fg-muted)] cursor-pointer" aria-label="Zoom in">
          +
        </button>
        <span className="h-4 w-px bg-[var(--color-border)] mx-1" />
        <button className="px-2 h-7 rounded-md hover:bg-[var(--color-bg-muted)] flex items-center justify-center text-[11px] text-[var(--color-fg-muted)] cursor-pointer">
          Fit
        </button>
      </div>

      <div className="absolute top-3 left-3 flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-1.5 shadow-[var(--shadow-pop)] text-[11.5px]">
        <span className="pulse-dot size-2 rounded-full bg-[var(--color-success-500)]" />
        Live · 24,180 people moving
      </div>
    </div>
  );
}

function JourneyNode({ node }: { node: NodeDef }) {
  const style = kindStyles[node.kind];
  const Icon = style.icon;
  return (
    <div
      className={cn(
        "absolute group rounded-xl border bg-[var(--color-bg-elev)] shadow-[var(--shadow-card)] transition-all duration-150",
        "hover:shadow-[var(--shadow-pop)] hover:-translate-y-px cursor-grab active:cursor-grabbing",
        node.status === "running" && "ring-2 ring-[color-mix(in_oklch,var(--color-brand-500)_30%,transparent)]",
      )}
      style={{ left: node.x, top: node.y, width: NODE_W, height: NODE_H, borderColor: "var(--color-border)" }}
    >
      <span
        className="absolute -top-px left-3 right-3 h-0.5 rounded-b-full"
        style={{ background: `oklch(0.65 0.2 ${style.hue})` }}
      />
      <div className="p-3 h-full flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span
            className="size-7 rounded-md flex items-center justify-center text-white"
            style={{ background: `linear-gradient(135deg, oklch(0.62 0.18 ${style.hue}), oklch(0.5 0.2 ${style.hue}))` }}
          >
            <Icon className="size-3.5" strokeWidth={2.2} />
          </span>
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)] leading-none">
              {style.family}
            </div>
            <div className="text-[13px] font-semibold tracking-tight leading-tight truncate font-display">
              {node.title}
            </div>
          </div>
          {node.status === "running" && (
            <span className="ml-auto inline-flex items-center text-[var(--color-success-500)]">
              <Play className="size-3" fill="currentColor" />
            </span>
          )}
        </div>
        {node.subtitle && (
          <div className="text-[11px] text-[var(--color-fg-muted)] truncate">{node.subtitle}</div>
        )}
        {node.meta && (
          <div className="text-[10.5px] text-[var(--color-fg-subtle)] truncate flex items-center gap-1">
            <TrendingUp className="size-2.5" /> {node.meta}
          </div>
        )}
      </div>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-2.5 rounded-full bg-[var(--color-bg-elev)] border border-[var(--color-border-strong)]" />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-2.5 rounded-full bg-[var(--color-bg-elev)] border border-[var(--color-border-strong)]" />
    </div>
  );
}
