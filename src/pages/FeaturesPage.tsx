import { PageHeader } from "../components/PageHeader";
import { FeaturesSection } from "../components/FeaturesSection";
import { WhySanchalanSection } from "../components/WhySanchalanSection";

export function FeaturesPage() {
  return (
    <div>
      <PageHeader
        title="Platform Features"
        subtitle="From Risk to Resilience"
        description="Explore the comprehensive AI-powered features that transform governance, risk, and compliance into strategic advantages."
      />
      <FeaturesSection />
      <WhySanchalanSection />
    </div>
  );
}