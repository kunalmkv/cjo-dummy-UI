import Link from "next/link";
import { ArrowRight, Check, Globe2, Image as ImageIcon, Link as LinkIcon, MousePointer, Palette, Sparkles, Type, Wand2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

const blocks = [
  { name: "Navigation", count: 1, kept: true, tag: "header" },
  { name: "Hero", count: 1, kept: true, tag: "headline" },
  { name: "Logo strip", count: 1, kept: true, tag: "social proof" },
  { name: "Pricing tiers", count: 3, kept: true, tag: "pricing" },
  { name: "Feature grid", count: 6, kept: true, tag: "features" },
  { name: "Testimonials", count: 4, kept: true, tag: "quote" },
  { name: "FAQ", count: 8, kept: false, tag: "accordion" },
  { name: "Footer", count: 1, kept: true, tag: "footer" },
];

export default function CloneWizardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Clone wizard"
        title="Review what we found"
        description="We extracted 22 sections, 62 images and a brand palette. Pick what to keep — the rest is one click away."
        actions={
          <Link href="/landers/q4-pricing/edit">
            <Button size="md" rightIcon={<ArrowRight className="size-4" />}>
              Open in editor
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8 space-y-5">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="size-10 rounded-xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)] text-white flex items-center justify-center shadow-[var(--shadow-pop)]">
                    <Globe2 className="size-4.5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase font-semibold tracking-wider text-[var(--color-fg-subtle)]">
                      Source
                    </div>
                    <div className="font-mono text-[14px] font-medium truncate">https://example.com/pricing</div>
                  </div>
                </div>
                <Badge tone="success" dot>Clone complete · 24s</Badge>
              </div>

              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                <Stat label="Sections" value="22" />
                <Stat label="Images" value="62" />
                <Stat label="Fonts" value="3" />
                <Stat label="Color tokens" value="9" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-display font-semibold text-[15px] tracking-tight">Detected blocks</h2>
                  <p className="text-[12px] text-[var(--color-fg-muted)] mt-0.5">
                    Toggle off anything you don't need. You can always add it back from the library.
                  </p>
                </div>
                <Button variant="secondary" size="sm">Keep all</Button>
              </div>
              <ul className="divide-y divide-[var(--color-border)] -mx-2">
                {blocks.map((b) => (
                  <li key={b.name} className="flex items-center gap-3 px-2 py-2.5">
                    <span className="size-8 rounded-md bg-[var(--color-bg-muted)] flex items-center justify-center">
                      <BlockGlyph name={b.name} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-medium">{b.name}</div>
                      <div className="text-[11px] text-[var(--color-fg-muted)]">{b.count} block · {b.tag}</div>
                    </div>
                    <Toggle on={b.kept} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-5">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-semibold text-[14px] tracking-tight inline-flex items-center gap-1.5">
                <Palette className="size-3.5 text-[var(--color-fg-muted)]" /> Brand palette
              </h3>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {["#635BFF", "#0A2540", "#00D924", "#FFE000", "#FF5996", "#A5B4FF", "#1F2D45", "#FFC4D8", "#11142C", "#F6F9FC"].map((c) => (
                  <div key={c} className="flex flex-col items-center gap-1">
                    <span className="size-9 rounded-md border border-[var(--color-border)]" style={{ background: c }} />
                    <span className="text-[10px] font-mono text-[var(--color-fg-muted)]">{c}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-semibold text-[14px] tracking-tight inline-flex items-center gap-1.5">
                <Type className="size-3.5 text-[var(--color-fg-muted)]" /> Fonts found
              </h3>
              <ul className="mt-3 space-y-2.5">
                {[
                  { name: "Display Sans", w: "400 · 500 · 700", scale: "Display" },
                  { name: "Code Mono", w: "400", scale: "Code" },
                  { name: "Body Sans", w: "400 · 500", scale: "Body fallback" },
                ].map((f) => (
                  <li key={f.name} className="flex items-center justify-between rounded-lg border border-[var(--color-border)] p-2.5">
                    <div>
                      <div className="text-[13px] font-semibold">{f.name}</div>
                      <div className="text-[11px] text-[var(--color-fg-muted)]">{f.w}</div>
                    </div>
                    <Badge tone="neutral">{f.scale}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-display font-semibold text-[14px] tracking-tight inline-flex items-center gap-1.5">
                <Wand2 className="size-3.5 text-[var(--color-accent-500)]" /> Smart rewrites
              </h3>
              <p className="text-[12px] text-[var(--color-fg-muted)] mt-1.5">
                Auto-rewrite copy to match your brand voice while keeping the same structure.
              </p>
              <ul className="mt-3 space-y-2 text-[12.5px]">
                {[
                  "Replace company name → SilvaPixel",
                  "Adjust pricing currency to USD",
                  "Soften tone (friendly + concise)",
                  "Translate to French + Spanish",
                ].map((r) => (
                  <li key={r} className="flex items-center gap-2 text-[var(--color-fg-muted)]">
                    <Check className="size-3.5 text-[var(--color-success-500)]" /> {r}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="sm" className="mt-3 w-full" leftIcon={<Sparkles className="size-4" />}>
                Apply rewrites
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-muted)] p-3">
      <div className="text-[10.5px] uppercase tracking-wider text-[var(--color-fg-subtle)]">{label}</div>
      <div className="text-[20px] font-display font-semibold tabular-nums mt-0.5">{value}</div>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={
        "relative inline-flex h-5 w-9 rounded-full transition-colors " +
        (on ? "bg-[var(--color-brand-500)]" : "bg-[var(--color-bg-muted)] border border-[var(--color-border)]")
      }
      role="switch"
      aria-checked={on}
    >
      <span
        className={
          "absolute top-0.5 size-4 rounded-full bg-white shadow transition-transform " +
          (on ? "translate-x-4" : "translate-x-0.5")
        }
      />
    </span>
  );
}

function BlockGlyph({ name }: { name: string }) {
  const map: Record<string, React.ReactNode> = {
    Navigation: <LinkIcon className="size-3.5 text-[var(--color-fg-muted)]" />,
    Hero: <Type className="size-3.5 text-[var(--color-fg-muted)]" />,
    "Logo strip": <ImageIcon className="size-3.5 text-[var(--color-fg-muted)]" />,
    "Pricing tiers": <MousePointer className="size-3.5 text-[var(--color-fg-muted)]" />,
    "Feature grid": <Palette className="size-3.5 text-[var(--color-fg-muted)]" />,
    Testimonials: <Sparkles className="size-3.5 text-[var(--color-fg-muted)]" />,
    FAQ: <Type className="size-3.5 text-[var(--color-fg-muted)]" />,
    Footer: <LinkIcon className="size-3.5 text-[var(--color-fg-muted)]" />,
  };
  return <>{map[name] ?? <Type className="size-3.5 text-[var(--color-fg-muted)]" />}</>;
}
