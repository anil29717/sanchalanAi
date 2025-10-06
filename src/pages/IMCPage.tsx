import { PageHeader } from "../components/PageHeader";
import { IMCSection } from "../components/IMCSection";

export function IMCPage() {
  return (
    <div>
      <PageHeader
        title="India Mobile Congress 2025"
        subtitle="Experience It Live"
        description="Join us at the Cache Digitech Pavilion for live demonstrations of Sanchalan.AI and discover the future of governance."
      />
      <IMCSection />
    </div>
  );
}