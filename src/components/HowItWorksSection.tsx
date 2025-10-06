import { Search, Shield, BarChart3, RefreshCw } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Identify & Assess Risks",
      description: "AI-powered scanning identifies potential risks and vulnerabilities across your enterprise ecosystem.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      number: "02", 
      icon: Shield,
      title: "Implement & Mitigate Controls",
      description: "Automated control implementation with intelligent recommendations for risk mitigation strategies.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Monitor & Report Outcomes",
      description: "Continuous monitoring with real-time dashboards and automated compliance reporting.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      number: "04",
      icon: RefreshCw,
      title: "Review & Optimize",
      description: "Machine learning algorithms continuously optimize processes for improved efficiency and effectiveness.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            A Continuous Loop of <span className="text-red-600">Intelligence and Assurance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sanchalan.AI ensures comprehensive governance by following an AI-driven closed-loop process 
            that evolves with your enterprise.
          </p>
        </div>

        {/* Circular Flow Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-gray-800 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white text-center">
                <RefreshCw className="h-8 w-8 mx-auto mb-1 animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-xs font-medium">GRC Loop</span>
              </div>
            </div>
          </div>

          {/* Steps arranged in circle */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const positions = [
                "lg:translate-x-0 lg:-translate-y-8", // Top left
                "lg:translate-x-0 lg:-translate-y-8", // Top right  
                "lg:translate-x-0 lg:translate-y-8",  // Bottom left
                "lg:translate-x-0 lg:translate-y-8"   // Bottom right
              ];
              
              return (
                <div key={index} className={`relative ${positions[index]}`}>
                  <div className={`p-6 rounded-xl border-2 ${step.borderColor} ${step.bgColor} hover:shadow-lg transition-all duration-300 group`}>
                    {/* Step number */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-full ${step.color.replace('text-', 'bg-').replace('-600', '-100')} flex items-center justify-center`}>
                        <span className={`text-lg font-bold ${step.color}`}>
                          {step.number}
                        </span>
                      </div>
                      <div className={`p-2 rounded-lg ${step.color.replace('text-', 'bg-').replace('-600', '-100')} group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-6 w-6 ${step.color}`} />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection lines (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-8 -translate-y-1/2">
                      {index % 2 === 0 && index < 2 && (
                        <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-red-300"></div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Connecting arrows for larger screens */}
          <div className="hidden lg:block">
            {/* Top horizontal arrow */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
            
            {/* Right vertical arrow */}
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2 h-32 w-0.5 bg-gradient-to-b from-green-300 to-purple-300"></div>
            
            {/* Bottom horizontal arrow */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-l from-purple-300 to-red-300"></div>
            
            {/* Left vertical arrow */}
            <div className="absolute left-20 top-1/2 transform -translate-y-1/2 h-32 w-0.5 bg-gradient-to-t from-red-300 to-blue-300"></div>
          </div>
        </div>

        {/* Bottom description */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <RefreshCw className="h-4 w-4" />
            <span>Continuous, adaptive, and intelligent governance cycle</span>
          </div>
        </div>
      </div>
    </section>
  );
}