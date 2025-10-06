import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Brain, FileCheck, Gavel, Users, BarChart3, ShieldCheck } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Based Risk Detection",
      description: "Continuous threat monitoring and predictive analysis to stay ahead of vulnerabilities.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: FileCheck,
      title: "Smart Audit Automation",
      description: "Automate audit workflows and evidence collection with full transparency.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Gavel,
      title: "Regulatory Intelligence Engine",
      description: "Real-time policy mapping for RBI, SEBI, DOT, ISO, GDPR, and more.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Third-Party Risk Management",
      description: "Real-time vendor scoring and automated due diligence.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Unified Governance Dashboard",
      description: "One intelligent command center for CXOs, auditors, and compliance officers.",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      icon: ShieldCheck,
      title: "Zero-Trust Security Fabric",
      description: "Built on Cache's cybersecurity foundation, ensuring integrity and resilience across every layer.",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            From Risk to <span className="text-red-600">Resilience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sanchalan.AI transforms GRC from a compliance burden into a strategic advantage.
            Here's how it helps enterprises move from risk to resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
            <span>✨</span>
            <span>Powered by advanced AI and machine learning algorithms</span>
          </div>
        </div>
      </div>
    </section>
  );
}