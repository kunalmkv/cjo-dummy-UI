import Link from "next/link";
import { AtSign, Globe2, MessageCircle } from "lucide-react";
import { Logo } from "@/components/shell/Sidebar";

const columns = [
  {
    title: "Product",
    links: ["Journeys", "Campaigns", "Audience", "Templates", "Landers", "Analytics", "Integrations"],
  },
  { title: "Solutions", links: ["For SaaS", "For E-commerce", "For Fintech", "For Mobile", "For Media", "For Agencies"] },
  { title: "Resources", links: ["Docs", "API reference", "Changelog", "Playbooks", "Customer stories", "Webinars"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Press", "Security", "Contact"] },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="size-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)] text-white">
                <Logo className="size-4" />
              </span>
              <span className="font-display font-semibold text-[15px] tracking-tight">SilvaPixel</span>
            </Link>
            <p className="mt-4 text-[13px] text-[var(--color-fg-muted)] max-w-xs text-pretty">
              The growth OS for product teams. Journeys, campaigns, landers and analytics — in one calm workspace.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[AtSign, MessageCircle, Globe2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-8 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] flex items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-border-strong)] transition-colors"
                >
                  <Icon className="size-3.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-fg-subtle)]">
                {c.title}
              </div>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-3 text-[11.5px] text-[var(--color-fg-muted)]">
          <div>© 2026 SilvaPixel, Inc. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[var(--color-fg)]">Privacy</a>
            <a href="#" className="hover:text-[var(--color-fg)]">Terms</a>
            <a href="#" className="hover:text-[var(--color-fg)]">Cookies</a>
            <a href="#" className="hover:text-[var(--color-fg)]">DPA</a>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[var(--color-success-500)] pulse-dot" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
