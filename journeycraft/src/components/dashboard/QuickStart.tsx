import { ArrowRight, GitBranch, Globe2, Send, type LucideIcon, Users } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  desc: string;
  cta: string;
  hue: string;
};

const items: Item[] = [
  {
    icon: GitBranch,
    title: "Build a journey",
    desc: "Trigger, branch, wait — orchestrate the whole lifecycle.",
    cta: "Start from a template",
    hue: "258",
  },
  {
    icon: Send,
    title: "Send a campaign",
    desc: "Email, SMS, push or in-app. Schedule or send now.",
    cta: "Compose",
    hue: "60",
  },
  {
    icon: Users,
    title: "Define a segment",
    desc: "Slice your audience by behavior, traits and lifecycle stage.",
    cta: "New segment",
    hue: "150",
  },
  {
    icon: Globe2,
    title: "Clone a landing page",
    desc: "Paste any URL and rebuild it block-by-block in minutes.",
    cta: "Clone a page",
    hue: "230",
  },
];

export function QuickStart() {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-1 shadow-[var(--shadow-card)] overflow-hidden">
      <div className="rounded-xl mesh-bg p-5 lg:p-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-brand-700)] dark:text-[var(--color-brand-300)]">
              Welcome back, Tanvir
            </div>
            <h2 className="text-2xl sm:text-[26px] font-display font-semibold tracking-tight mt-1 text-balance">
              You're 3 steps away from your first journey going live
            </h2>
            <p className="text-[14px] text-[var(--color-fg-muted)] mt-1 max-w-xl">
              Pick something below to get rolling, or open the playbook to see what teams like yours
              ship in their first week.
            </p>
          </div>
          <button className="self-start inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-fg)] text-[var(--color-bg)] h-9 px-3.5 text-[13px] font-semibold hover:opacity-90 transition-opacity cursor-pointer">
            Open playbook <ArrowRight className="size-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {items.map((it) => (
            <button
              key={it.title}
              className="group relative text-left rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-pop)] transition-all cursor-pointer overflow-hidden"
            >
              <span
                className="absolute -top-12 -right-10 size-32 rounded-full opacity-40 group-hover:opacity-70 transition-opacity blur-2xl"
                style={{ background: `oklch(0.7 0.18 ${it.hue})` }}
              />
              <span
                className="relative inline-flex size-9 rounded-lg items-center justify-center text-white shadow-[var(--shadow-pop)]"
                style={{ background: `linear-gradient(135deg, oklch(0.6 0.18 ${it.hue}), oklch(0.5 0.2 ${it.hue}))` }}
              >
                <it.icon className="size-4" strokeWidth={2} />
              </span>
              <div className="relative mt-3 font-display font-semibold text-[14.5px]">{it.title}</div>
              <p className="relative text-[12.5px] text-[var(--color-fg-muted)] mt-0.5 leading-snug">
                {it.desc}
              </p>
              <span className="relative mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                {it.cta} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
