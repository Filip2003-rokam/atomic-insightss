import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { StatsBanner } from "@/components/site/StatsBanner";
import { ProductIntro } from "@/components/site/ProductIntro";
import { FeatureSuite } from "@/components/site/FeatureSuite";
import { TrustSocial } from "@/components/site/TrustSocial";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <StatsBanner />
        <ProductIntro />
        <FeatureSuite />
        <TrustSocial />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
