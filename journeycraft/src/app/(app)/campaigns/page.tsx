import {
  Bell,
  Calendar,
  Copy,
  Filter,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { AvatarStack } from "@/components/ui/Avatar";

type Status = "sent" | "scheduled" | "draft" | "sending" | "failed";

const channels: Record<string, { icon: LucideIcon; color: string; bg: string; label: string }> = {
  email: {
    icon: Mail,
    color: "var(--color-info-500)",
    bg: "color-mix(in oklch, var(--color-info-500) 16%, transparent)",
    label: "Email",
  },
  push: {
    icon: Bell,
    color: "color-mix(in oklch, var(--color-accent-500) 75%, black)",
    bg: "color-mix(in oklch, var(--color-accent-500) 16%, transparent)",
    label: "Push",
  },
  sms: {
    icon: MessageSquare,
    color: "color-mix(in oklch, var(--color-success-500) 75%, black)",
    bg: "color-mix(in oklch, var(--color-success-500) 14%, transparent)",
    label: "SMS",
  },
  inapp: {
    icon: Smartphone,
    color: "var(--color-brand-600)",
    bg: "color-mix(in oklch, var(--color-brand-500) 14%, transparent)",
    label: "In-app",
  },
};

const campaigns = [
  {
    name: "Black Friday · Tier 1 customers",
    channel: "email",
    status: "sent" as Status,
    audience: "VIP — Last 90 days",
    audienceSize: "24,180",
    sent: "24,180",
    open: 62.4,
    click: 18.2,
    revenue: "$92,410",
    scheduled: "Nov 24, 10:00 EST",
    owners: [{ name: "Sara K." }, { name: "Mohit P." }],
  },
  {
    name: "Cyber Monday — final hours",
    channel: "push",
    status: "scheduled" as Status,
    audience: "All app users",
    audienceSize: "62,940",
    sent: "—",
    open: 0,
    click: 0,
    revenue: "—",
    scheduled: "Dec 2, 18:00 EST",
    owners: [{ name: "Lana D." }],
  },
  {
    name: "App update v3.4 announcement",
    channel: "inapp",
    status: "sending" as Status,
    audience: "Active app users",
    audienceSize: "18,720",
    sent: "7,210",
    open: 0,
    click: 12.4,
    revenue: "—",
    scheduled: "In progress",
    owners: [{ name: "Tanvir A." }],
  },
  {
    name: "Trial expiring in 3 days",
    channel: "email",
    status: "sent" as Status,
    audience: "Trial · day 11",
    audienceSize: "4,210",
    sent: "4,210",
    open: 71.2,
    click: 24.1,
    revenue: "$18,940",
    scheduled: "Daily · 09:00 local",
    owners: [{ name: "Mohit P." }],
  },
  {
    name: "Cart abandonment SMS",
    channel: "sms",
    status: "failed" as Status,
    audience: "Cart > $80",
    audienceSize: "1,840",
    sent: "412",
    open: 0,
    click: 8.4,
    revenue: "—",
    scheduled: "SMS provider · failed auth",
    owners: [{ name: "Lana D." }],
  },
  {
    name: "Re-engagement · 30d dormant",
    channel: "email",
    status: "draft" as Status,
    audience: "Dormant · 30d",
    audienceSize: "12,940",
    sent: "—",
    open: 0,
    click: 0,
    revenue: "—",
    scheduled: "—",
    owners: [{ name: "Sara K." }],
  },
];

const statusTone: Record<Status, { tone: React.ComponentProps<typeof Badge>["tone"]; label: string; dot?: boolean }> = {
  sent: { tone: "success", label: "Sent", dot: true },
  sending: { tone: "info", label: "Sending…", dot: true },
  scheduled: { tone: "brand", label: "Scheduled" },
  draft: { tone: "neutral", label: "Draft" },
  failed: { tone: "danger", label: "Failed" },
};

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Campaigns"
        title="Plan and send one-off broadcasts"
        description="Schedule moment-in-time blasts across email, push, SMS and in-app. Track performance in one place."
        actions={
          <>
            <Button variant="secondary" size="sm" leftIcon={<Calendar className="size-4" />}>
              Calendar
            </Button>
            <Button size="sm" leftIcon={<Plus className="size-4" />}>
              New campaign
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Sent · 30d", value: "1.2M", sub: "+18% vs prev" },
          { label: "Avg open rate", value: "48.2%", sub: "Email only" },
          { label: "Avg click rate", value: "12.4%", sub: "All channels" },
          { label: "Attributed revenue", value: "$184K", sub: "Last 30 days" },
        ].map((s) => (
          <Card key={s.label} className="p-4">
            <div className="text-[11.5px] font-medium text-[var(--color-fg-muted)]">{s.label}</div>
            <div className="text-[22px] font-display font-semibold tabular-nums mt-1">{s.value}</div>
            <div className="text-[11px] text-[var(--color-fg-subtle)] mt-0.5">{s.sub}</div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex items-center gap-2 p-3 border-b border-[var(--color-border)]">
          <div className="w-72">
            <Input placeholder="Search campaigns…" leftIcon={<Search className="size-4" />} />
          </div>
          <Button variant="secondary" size="md" leftIcon={<Filter className="size-4" />}>
            Filter
          </Button>
          <div className="ml-auto flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-muted)] p-0.5 text-[12px]">
            {["List", "Calendar", "Performance"].map((m, i) => (
              <button
                key={m}
                className={
                  "px-2.5 h-7 rounded-[5px] cursor-pointer " +
                  (i === 0
                    ? "bg-[var(--color-bg-elev)] text-[var(--color-fg)] shadow-[var(--shadow-card)] font-medium"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]")
                }
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
              <th className="text-left font-medium pl-5 pr-2 py-2.5">Campaign</th>
              <th className="text-left font-medium px-2 py-2.5 hidden md:table-cell">Audience</th>
              <th className="text-left font-medium px-2 py-2.5">Status</th>
              <th className="text-right font-medium px-2 py-2.5 hidden lg:table-cell">Sent</th>
              <th className="text-right font-medium px-2 py-2.5 hidden lg:table-cell">Open</th>
              <th className="text-right font-medium px-2 py-2.5 hidden lg:table-cell">Click</th>
              <th className="text-right font-medium px-2 py-2.5 hidden xl:table-cell">Revenue</th>
              <th className="text-left font-medium px-2 py-2.5 hidden md:table-cell">When</th>
              <th className="text-right font-medium pl-2 pr-5 py-2.5"></th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => {
              const ch = channels[c.channel];
              const st = statusTone[c.status];
              return (
                <tr key={c.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-bg-muted)] transition-colors group">
                  <td className="pl-5 pr-2 py-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="size-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: ch.bg, color: ch.color }}
                      >
                        <ch.icon className="size-4" strokeWidth={2} />
                      </span>
                      <div className="min-w-0">
                        <div className="font-medium text-[13.5px] truncate">{c.name}</div>
                        <div className="text-[11px] text-[var(--color-fg-muted)] mt-0.5 flex items-center gap-2">
                          <span>{ch.label}</span>
                          <span className="size-1 rounded-full bg-[var(--color-border-strong)]" />
                          <AvatarStack people={c.owners} size="xs" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3 hidden md:table-cell">
                    <div className="text-[13px]">{c.audience}</div>
                    <div className="text-[11px] text-[var(--color-fg-muted)] tabular-nums">{c.audienceSize}</div>
                  </td>
                  <td className="px-2 py-3">
                    <Badge tone={st.tone} dot={st.dot}>{st.label}</Badge>
                  </td>
                  <td className="px-2 py-3 text-right tabular-nums hidden lg:table-cell">{c.sent}</td>
                  <td className="px-2 py-3 text-right tabular-nums hidden lg:table-cell">
                    {c.open ? `${c.open}%` : "—"}
                  </td>
                  <td className="px-2 py-3 text-right tabular-nums hidden lg:table-cell">
                    {c.click ? `${c.click}%` : "—"}
                  </td>
                  <td className="px-2 py-3 text-right tabular-nums font-medium hidden xl:table-cell">{c.revenue}</td>
                  <td className="px-2 py-3 text-[12px] text-[var(--color-fg-muted)] hidden md:table-cell">{c.scheduled}</td>
                  <td className="pl-2 pr-5 py-3 text-right">
                    <button className="size-7 rounded-md inline-flex items-center justify-center text-[var(--color-fg-subtle)] hover:bg-[var(--color-bg-elev)] hover:text-[var(--color-fg)] cursor-pointer">
                      <Copy className="size-3.5" />
                    </button>
                    <button className="size-7 rounded-md inline-flex items-center justify-center text-[var(--color-fg-subtle)] hover:bg-[var(--color-bg-elev)] hover:text-[var(--color-fg)] cursor-pointer">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
