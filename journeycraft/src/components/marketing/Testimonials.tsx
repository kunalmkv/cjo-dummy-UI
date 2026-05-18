import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const quotes = [
  {
    body: "Lifecycle email used to live with the engineers. With one visual canvas, the PM owns it end to end — and we ship faster.",
    role: "Growth Lead · SaaS startup",
    metric: "Faster",
    metricLabel: "iteration",
  },
  {
    body: "Cloning landing pages used to take days of design and copy work. Now we can spin up campaign variants in an afternoon.",
    role: "Demand Gen · E-commerce",
    metric: "Hours",
    metricLabel: "not days",
  },
  {
    body: "Branching by behavior, plan and lifecycle stage is exactly how I'd sketch it on a whiteboard. The canvas matches my mental model.",
    role: "Lifecycle PM · Mobile app",
    metric: "Clear",
    metricLabel: "mental model",
  },
  {
    body: "It's the first growth tool that doesn't make me hate growth tools. The canvas is calm. The data is honest.",
    role: "Founder · Early-stage SaaS",
    metric: "Calm",
    metricLabel: "interface",
  },
  {
    body: "Importing existing journeys was painless — the schema mapper just understood ours.",
    role: "Eng Manager · Fintech",
    metric: "One",
    metricLabel: "afternoon",
  },
  {
    body: "Setup made sense. Pricing made sense. The support replies in minutes when we have questions.",
    role: "VP Marketing · B2B SaaS",
    metric: "Fast",
    metricLabel: "support",
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <Badge tone="brand">Who it's for</Badge>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[40px] leading-[1.05] font-semibold tracking-tight text-balance">
            Built for the teams that ship growth every week
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--color-fg-muted)] text-pretty">
            From scrappy startups to mature product teams — JourneyCraft is shaped around the way lifecycle, growth and product marketing actually work.
          </p>
          <p className="mt-3 text-[11.5px] uppercase tracking-wider font-semibold text-[var(--color-fg-subtle)]">
            Sample quotes · illustrative
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-pop)] hover:border-[var(--color-border-strong)] transition-all flex flex-col"
            >
              <Quote className="size-5 text-[var(--color-brand-400)] dark:text-[var(--color-brand-500)] opacity-60 -ml-1" strokeWidth={2} />
              <blockquote className="mt-2 text-[14.5px] leading-[1.55] text-[var(--color-fg)] text-pretty flex-1">
                "{q.body}"
              </blockquote>
              <div className="mt-5 pt-5 border-t border-[var(--color-border)] flex items-center justify-between">
                <figcaption className="text-[11.5px] text-[var(--color-fg-muted)]">{q.role}</figcaption>
                <div className="text-right shrink-0">
                  <div className="text-[14px] font-display font-bold text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">
                    {q.metric}
                  </div>
                  <div className="text-[9.5px] uppercase tracking-wider text-[var(--color-fg-subtle)] font-semibold">
                    {q.metricLabel}
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
