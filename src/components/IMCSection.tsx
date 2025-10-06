import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, MapPin, Users, Presentation, ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function IMCSection() {
  return (
    <section id="imc-2025" className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTcxMDE1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business Meeting Technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/90 to-gray-900/90"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
        <div className="particle absolute w-2 h-2 bg-white/20 rounded-full animate-ping" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="particle absolute w-1 h-1 bg-white/30 rounded-full animate-ping" style={{top: '60%', left: '80%', animationDelay: '2s'}}></div>
        <div className="particle absolute w-3 h-3 bg-white/15 rounded-full animate-ping" style={{top: '40%', right: '20%', animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Sanchalan.AI at
            <br />
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              India Mobile Congress 2025
            </span>
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Join us at the Cache Digitech Pavilion, where innovation meets intelligence.
            Witness live demonstrations of Sanchalan.AI — the AI-powered GRC platform 
            transforming how enterprises govern, comply, and build trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Event Details */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                  <span>Event Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Venue</p>
                    <p className="text-red-100">Cache Digitech Pavilion, IMC 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Dates</p>
                    <p className="text-red-100">Coming Soon - Register for Updates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Who Should Attend</p>
                    <p className="text-red-100">CXOs, IT Leaders, Compliance Officers, Risk Managers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <Presentation className="h-6 w-6 text-yellow-400" />
                  <span>What to Expect</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-100">Live product demonstrations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-100">AI-powered risk assessment showcase</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-100">Interactive compliance dashboard</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-100">Expert consultations with our team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-100">Industry-specific use case presentations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Ready to Transform Your GRC Strategy?
              </h3>
              
              <p className="text-red-100 mb-8 leading-relaxed">
                Don't miss this opportunity to see the future of governance, risk, and compliance in action. 
                Book your personalized demonstration and discover how Sanchalan.AI can revolutionize your enterprise.
              </p>

              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10 group"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Meet Our Experts
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="mt-8 p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-red-100 flex items-center justify-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Limited slots available - Register early!</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white">Join 1000+ industry leaders at IMC 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}