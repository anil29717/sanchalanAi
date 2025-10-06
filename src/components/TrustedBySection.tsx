import { Button } from "./ui/button";
import { ArrowRight, Shield, Globe, Users } from "lucide-react";
import { navigateTo } from "./Router";
import { AnimatedSection } from "./AnimatedSection";
import { AnimatedCard } from "./AnimatedCard";

export function TrustedBySection() {
  return (
    <section className="py-16 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Trusted by Innovation
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Built by <span className="font-semibold text-red-600">Cache Digitech Pvt. Ltd.</span>, 
              India's trusted technology integrator with <span className="font-semibold">30+ years of expertise</span> in 
              Cybersecurity, AI, and Cloud.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Trusted by enterprises across <span className="font-semibold">Telecom, BFSI, Manufacturing, and Government</span> sectors — 
              now redefining the future of digital governance.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <AnimatedCard delay={0.2} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">30+</h3>
              <p className="text-gray-600">Years of Expertise</p>
            </AnimatedCard>
            <AnimatedCard delay={0.4} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Globe className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">4</h3>
              <p className="text-gray-600">Key Industries</p>
            </AnimatedCard>
            <AnimatedCard delay={0.6} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Enterprise Clients</p>
            </AnimatedCard>
          </div>

          <AnimatedCard delay={0.8} hover={false}>
            <Button 
              onClick={() => navigateTo('/about')}
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 group"
            >
              About Cache
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </AnimatedCard>
        </AnimatedSection>
      </div>
    </section>
  );
}