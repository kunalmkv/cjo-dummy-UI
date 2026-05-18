import { Bell, Building2, CreditCard, Globe, Key, Shield, Users, Webhook } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Avatar } from "@/components/ui/Avatar";

const navItems = [
  { icon: Building2, label: "Workspace", active: true },
  { icon: Users, label: "Members & roles" },
  { icon: CreditCard, label: "Billing" },
  { icon: Webhook, label: "API & webhooks" },
  { icon: Key, label: "Authentication" },
  { icon: Bell, label: "Notifications" },
  { icon: Globe, label: "Custom domains" },
  { icon: Shield, label: "Security & audit log" },
];

const members = [
  { name: "Tanvir Ahmed", email: "tanvir@journey.app", role: "Owner", tone: "brand" as const },
  { name: "Sara Khan", email: "sara@journey.app", role: "Admin", tone: "accent" as const },
  { name: "Mohit Patel", email: "mohit@journey.app", role: "Editor", tone: "neutral" as const },
  { name: "Lana Diaz", email: "lana@journey.app", role: "Editor", tone: "neutral" as const },
  { name: "Reza Aslan", email: "reza@journey.app", role: "Viewer", tone: "neutral" as const },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Settings" title="Workspace & account" description="Manage your workspace, team and billing." />

      <div className="grid grid-cols-12 gap-5">
        <aside className="col-span-12 lg:col-span-3">
          <Card>
            <nav className="p-2 space-y-px">
              {navItems.map((it) => (
                <button
                  key={it.label}
                  className={
                    "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] transition-colors cursor-pointer " +
                    (it.active
                      ? "bg-[var(--color-bg-muted)] text-[var(--color-fg)] font-medium"
                      : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)]")
                  }
                >
                  <it.icon className="size-3.5" strokeWidth={1.75} />
                  {it.label}
                </button>
              ))}
            </nav>
          </Card>
        </aside>

        <div className="col-span-12 lg:col-span-9 space-y-5">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Workspace</CardTitle>
                <p className="text-[12px] text-[var(--color-fg-muted)] mt-1">
                  This information shows on dashboards and shared links.
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Workspace name">
                  <Input defaultValue="JourneyCraft" />
                </Field>
                <Field label="Slug">
                  <Input defaultValue="journeycraft" />
                </Field>
                <Field label="Default sender">
                  <Input defaultValue="Sara from JourneyCraft <sara@journey.app>" />
                </Field>
                <Field label="Time zone">
                  <Input defaultValue="(GMT-05:00) Eastern" />
                </Field>
              </div>
              <Field label="About">
                <Textarea defaultValue="Customer journeys, beautifully crafted. The growth OS for product teams." />
              </Field>
            </CardContent>
            <CardFooter>
              <span className="text-[11.5px] text-[var(--color-fg-muted)]">Last saved 2 minutes ago</span>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">Cancel</Button>
                <Button size="sm">Save changes</Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div>
                <CardTitle>Members</CardTitle>
                <p className="text-[12px] text-[var(--color-fg-muted)] mt-1">
                  5 of 25 seats used on the Team plan.
                </p>
              </div>
              <Button size="sm">Invite people</Button>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
                    <th className="text-left font-medium pl-5 pr-2 py-2">Member</th>
                    <th className="text-left font-medium px-2 py-2">Role</th>
                    <th className="text-right font-medium pl-2 pr-5 py-2">Last active</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m) => (
                    <tr key={m.email} className="border-t border-[var(--color-border)] hover:bg-[var(--color-bg-muted)]">
                      <td className="pl-5 pr-2 py-3">
                        <div className="flex items-center gap-2.5">
                          <Avatar name={m.name} size="sm" />
                          <div>
                            <div className="text-[13.5px] font-medium">{m.name}</div>
                            <div className="text-[11.5px] text-[var(--color-fg-muted)]">{m.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-3">
                        <Badge tone={m.tone}>{m.role}</Badge>
                      </td>
                      <td className="pl-2 pr-5 py-3 text-right text-[12px] text-[var(--color-fg-muted)]">2h ago</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div>
                <CardTitle>Plan & billing</CardTitle>
                <p className="text-[12px] text-[var(--color-fg-muted)] mt-1">
                  You're on the Team plan. Renews Dec 28, 2026.
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Plan", value: "Team", sub: "$199/mo" },
                  { label: "People", value: "184,210", sub: "of 500,000" },
                  { label: "Add-ons", value: "AI · Pro", sub: "+$49/mo" },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-muted)] p-3">
                    <div className="text-[11px] uppercase tracking-wider text-[var(--color-fg-subtle)]">{s.label}</div>
                    <div className="text-[18px] font-display font-semibold tabular-nums mt-0.5">{s.value}</div>
                    <div className="text-[11px] text-[var(--color-fg-muted)]">{s.sub}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <span className="text-[11.5px] text-[var(--color-fg-muted)]">Next invoice $248.00 · Dec 28</span>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">View invoices</Button>
                <Button size="sm">Manage plan</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11.5px] font-medium text-[var(--color-fg-muted)] mb-1.5">{label}</span>
      {children}
    </label>
  );
}
