import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Brain, Shield, Target, Zap, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
              Why Sanchalan.AI?<br />
              <span className="text-red-600">Because Governance Deserves Intelligence.</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                In a world of ever-evolving risks and regulations, governance can no longer be reactive.
              </p>
              
              <p>
                <span className="font-semibold text-gray-900">Sanchalan.AI reimagines Governance, Risk, and Compliance (GRC)</span> through 
                the lens of Artificial Intelligence and Predictive Analytics — turning complex regulatory 
                frameworks into actionable intelligence.
              </p>
              
              <p>
                Developed by Cache Digitech, Sanchalan.AI integrates <span className="font-semibold text-red-600">Governance, Risk, Audit, ESG, and Operational Resilience</span> into 
                a single, intelligent ecosystem — helping organizations stay compliant, secure, and future-ready.
              </p>
            </div>

            {/* AI Core Visualization */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Integrated Intelligent Ecosystem
              </h3>
              <div className="relative">
                {/* Central AI Core */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-gray-800 rounded-full flex items-center justify-center shadow-lg">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-red-600/20 to-gray-800/20 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Connected Rings */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <Shield className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700 text-center">Governance</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <Target className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700 text-center">Risk</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <Zap className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700 text-center">Compliance</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <Globe className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700 text-center">ESG</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <Shield className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm font-medium text-gray-700 text-center">Resilience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTc2MTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Dashboard Interface"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gray-400 rounded-full animate-pulse opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}