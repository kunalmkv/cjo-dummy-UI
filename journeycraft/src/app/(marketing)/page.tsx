import { Hero } from "@/components/marketing/Hero";
import { JourneySection, LanderSection, ChannelsSection, AnalyticsSection } from "@/components/marketing/FeatureSections";
import { Pricing } from "@/components/marketing/Pricing";
import { Testimonials } from "@/components/marketing/Testimonials";
import { CTA } from "@/components/marketing/CTA";

export default function MarketingHome() {
  return (
    <>
      <Hero />
      <JourneySection />
      <LanderSection />
      <ChannelsSection />
      <AnalyticsSection />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
