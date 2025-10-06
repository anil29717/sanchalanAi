import { PageHeader } from "../components/PageHeader";
import { IndustriesSection } from "../components/IndustriesSection";

export function IndustriesPage() {
  return (
    <div>
      <PageHeader
        title="Industry Solutions"
        subtitle="One Platform. Every Industry."
        description="AI-powered governance designed for the unique challenges and regulatory requirements of diverse industry sectors."
      />
      <IndustriesSection />
    </div>
  );
}