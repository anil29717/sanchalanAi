import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Smartphone, Building2, Factory, Landmark } from "lucide-react";

export function IndustriesSection() {
  const industries = [
    {
      icon: Smartphone,
      title: "Telecom",
      description: "DOT & TRAI-compliant frameworks for secure networks.",
      features: ["Network Security Compliance", "Regulatory Reporting", "Infrastructure Monitoring"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Building2,
      title: "BFSI",
      description: "RBI, SEBI, and global regulatory compliance with zero data compromise.",
      features: ["Financial Risk Management", "Regulatory Compliance", "Data Protection"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Risk reduction across supply chains and quality controls.",
      features: ["Supply Chain Risk", "Quality Assurance", "Operational Safety"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Landmark,
      title: "Government & PSU",
      description: "Policy transparency and secure data governance for digital-first operations.",
      features: ["Policy Management", "Data Governance", "Digital Transformation"],
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            One Platform. <span className="text-red-600">Every Industry.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI-powered governance designed for the unique challenges of diverse industry sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${industry.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                        {industry.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-2">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 mb-3">Key Focus Areas:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industry Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Proven Across Industries
            </h3>
            <p className="text-gray-600">
              Sanchalan.AI adapts to your industry's specific regulatory requirements and operational challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">75%</div>
              <div className="text-sm text-gray-600">Risk Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">50%</div>
              <div className="text-sm text-gray-600">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}