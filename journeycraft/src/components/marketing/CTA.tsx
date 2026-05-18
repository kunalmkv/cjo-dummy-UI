import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="relative border-t border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-1 shadow-[var(--shadow-card)] overflow-hidden">
          <div className="relative rounded-[22px] p-10 sm:p-14 mesh-bg">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-[color-mix(in_oklch,var(--color-brand-500)_24%,transparent)] blur-3xl" />
            <div className="absolute -bottom-24 -left-20 size-72 rounded-full bg-[color-mix(in_oklch,var(--color-accent-500)_18%,transparent)] blur-3xl" />

            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] font-semibold tracking-tight text-balance">
                Start crafting calmer customer journeys today.
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--color-fg-muted)] max-w-xl text-pretty">
                14 days, no credit card. Import from your current tool in one click and try the whole platform — journeys, campaigns, landers and analytics.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                <Link href="/dashboard">
                  <Button size="lg" rightIcon={<ArrowRight className="size-4" />}>
                    Start free trial
                  </Button>
                </Link>
                <Link href="#">
                  <Button size="lg" variant="secondary">
                    Talk to sales
                  </Button>
                </Link>
              </div>
              <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[var(--color-fg-muted)]">
                {["Free 14-day trial", "Import from your current tool", "Cancel anytime"].map((s) => (
                  <li key={s} className="inline-flex items-center gap-1.5">
                    <Check className="size-3.5 text-[var(--color-success-500)]" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
