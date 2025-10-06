import { PageHeader } from "../components/PageHeader";
import { AboutSection } from "../components/AboutSection";
import { HowItWorksSection } from "../components/HowItWorksSection";

export function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Sanchalan.AI"
        subtitle="The Intelligence Behind Governance"
        description="Discover how AI-powered governance transforms enterprise risk management and compliance into strategic advantages."
      />
      <AboutSection />
      <HowItWorksSection />
    </div>
  );
}