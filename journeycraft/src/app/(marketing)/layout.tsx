import { MarketingNav } from "@/components/marketing/MarketingNav";
import { MarketingFooter } from "@/components/marketing/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-fg)] min-h-screen flex flex-col">
      <MarketingNav />
      <div className="flex-1">{children}</div>
      <MarketingFooter />
    </div>
  );
}
