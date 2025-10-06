import { Card, CardContent } from "./ui/card";
import { Check, Brain, Shield, FileCheck, Lock, Award } from "lucide-react";

export function WhySanchalanSection() {
  const advantages = [
    {
      icon: Brain,
      title: "Unified GRC Platform",
      description: "Governance, risk, ESG, and compliance in one place.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Predictive AI Insights",
      description: "Move from reactive to proactive governance.",
      color: "text-green-600"
    },
    {
      icon: FileCheck,
      title: "Always Audit-Ready",
      description: "Automated evidence and control tracking.",
      color: "text-purple-600"
    },
    {
      icon: Lock,
      title: "Secure by Design",
      description: "Built on Zero-Trust and industry best practices.",
      color: "text-red-600"
    },
    {
      icon: Award,
      title: "Backed by Cache Digitech",
      description: "30+ years of trust, global partnerships, and proven expertise.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            The Advantage of <span className="text-red-600">Intelligence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Why leading enterprises choose Sanchalan.AI for their governance, risk, and compliance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${advantage.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                          {advantage.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Metrics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            By the Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">360°</div>
              <div className="text-sm text-gray-600">Complete View</div>
              <div className="text-xs text-gray-500 mt-1">Comprehensive governance coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
              <div className="text-xs text-gray-500 mt-1">Enterprise-grade reliability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">30+</div>
              <div className="text-sm text-gray-600">Regulations</div>
              <div className="text-xs text-gray-500 mt-1">Supported compliance frameworks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">80%</div>
              <div className="text-sm text-gray-600">Faster</div>
              <div className="text-xs text-gray-500 mt-1">Audit preparation time</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-green-500" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Lock className="h-4 w-4 text-green-500" />
              <span>Zero Trust Architecture</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Award className="h-4 w-4 text-green-500" />
              <span>Industry Recognition</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Check className="h-4 w-4 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}