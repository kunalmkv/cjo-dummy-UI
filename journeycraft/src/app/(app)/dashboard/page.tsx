import { Download, Filter } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Kpis } from "@/components/dashboard/Kpis";
import { ChannelMix, EngagementChart } from "@/components/dashboard/EngagementChart";
import { TopJourneys } from "@/components/dashboard/TopJourneys";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { QuickStart } from "@/components/dashboard/QuickStart";

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <PageHeader
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <Badge tone="brand" dot>
              Production
            </Badge>
            Last refresh · 24s ago
          </span>
        }
        title="Overview"
        description="A bird's-eye view of how your customers move, message and convert across every channel."
        actions={
          <>
            <Button variant="secondary" size="sm" leftIcon={<Filter className="size-4" />}>
              Filter
            </Button>
            <Button variant="secondary" size="sm" leftIcon={<Download className="size-4" />}>
              Export
            </Button>
            <Button size="sm">Last 7 days</Button>
          </>
        }
      />

      <QuickStart />

      <Kpis />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2">
          <EngagementChart />
        </div>
        <ChannelMix />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2">
          <TopJourneys />
        </div>
        <ActivityFeed />
      </div>
    </div>
  );
}
