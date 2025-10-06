import { PageHeader } from "../components/PageHeader";
import { ContactSection } from "../components/ContactSection";

export function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Let's Redefine Governance Together"
        description="Ready to make your enterprise future-ready? Get in touch with our experts to transform your GRC strategy."
      />
      <ContactSection />
    </div>
  );
}