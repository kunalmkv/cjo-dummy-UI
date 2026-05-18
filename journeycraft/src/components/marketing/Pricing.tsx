import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Everything to ship your first journey.",
    cta: "Get started",
    variant: "secondary" as const,
    features: [
      "Up to 1,000 people",
      "Unlimited email & in-app",
      "1 active journey",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    desc: "For growing teams. Most popular.",
    cta: "Start free trial",
    variant: "primary" as const,
    featured: true,
    features: [
      "Up to 50,000 people",
      "Email, push, SMS, in-app",
      "Unlimited journeys & campaigns",
      "AI subject + content testing",
      "Lander cloner (100 pages)",
      "Email & chat support",
    ],
  },
  {
    name: "Team",
    price: "$199",
    period: "/mo",
    desc: "Advanced workflows + SSO.",
    cta: "Start free trial",
    variant: "secondary" as const,
    features: [
      "Up to 500,000 people",
      "Roles, audit log, SSO/SAML",
      "Reverse ETL to warehouse",
      "Custom domains + edge hosting",
      "Priority support + uptime SLA",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For high-volume teams.",
    cta: "Talk to sales",
    variant: "secondary" as const,
    features: [
      "Unlimited people",
      "Dedicated infrastructure",
      "Private model deployment",
      "HIPAA, BAA, custom contracts",
      "TAM + onboarding",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-[var(--color-border)] mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <Badge tone="brand">Pricing</Badge>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[40px] leading-[1.05] font-semibold tracking-tight text-balance">
            Simple, usage-based pricing
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--color-fg-muted)] text-pretty">
            Start free. Scale when you do. No charge for the same person reached on multiple channels.
          </p>
          <div className="mt-6 inline-flex items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-0.5 text-[12.5px] font-medium shadow-[var(--shadow-card)]">
            <button className="px-3 h-8 rounded-md bg-[var(--color-fg)] text-[var(--color-bg)] cursor-pointer">Monthly</button>
            <button className="px-3 h-8 rounded-md inline-flex items-center gap-1.5 text-[var(--color-fg-muted)] cursor-pointer">
              Yearly <Badge tone="accent">−20%</Badge>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "relative rounded-2xl bg-[var(--color-bg-elev)] p-6 flex flex-col border " +
                (t.featured
                  ? "border-[var(--color-brand-500)] ring-2 ring-[color-mix(in_oklch,var(--color-brand-500)_25%,transparent)] shadow-[var(--shadow-pop)] lg:scale-[1.02]"
                  : "border-[var(--color-border)] shadow-[var(--shadow-card)]")
              }
            >
              {t.featured && (
                <Badge tone="brand" className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                  <Sparkles className="size-3 -ml-0.5" /> Most popular
                </Badge>
              )}
              <div className="text-[12px] font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                {t.name}
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[34px] font-display font-bold tracking-tight tabular-nums">{t.price}</span>
                <span className="text-[13px] text-[var(--color-fg-muted)]">{t.period}</span>
              </div>
              <p className="text-[13px] text-[var(--color-fg-muted)] mt-1 text-pretty">{t.desc}</p>
              <Link href="/dashboard" className="mt-5">
                <Button variant={t.variant} size="md" className="w-full">
                  {t.cta}
                </Button>
              </Link>
              <ul className="mt-5 space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px]">
                    <span className="mt-0.5 size-4 rounded-full bg-[color-mix(in_oklch,var(--color-success-500)_18%,transparent)] flex items-center justify-center text-[var(--color-success-500)] shrink-0">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    <span className="text-[var(--color-fg)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-[var(--color-fg-muted)]">
          All plans include unlimited campaigns, audience segments and 24/7 status monitoring.
        </p>
      </div>
    </section>
  );
}
