import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { navigateTo } from "./Router";

export function HeroSection() {
  const navigateToPage = (path: string) => {
    navigateTo(path);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1OTc2MTU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="AI Neural Network Visualization"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/90"></div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 z-10">
        <div className="particle-1 absolute w-2 h-2 bg-red-500/30 rounded-full animate-pulse" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="particle-2 absolute w-1 h-1 bg-gray-500/40 rounded-full animate-pulse" style={{top: '40%', left: '80%', animationDelay: '1s'}}></div>
        <div className="particle-3 absolute w-3 h-3 bg-red-600/20 rounded-full animate-pulse" style={{top: '70%', left: '20%', animationDelay: '2s'}}></div>
        <div className="particle-4 absolute w-1.5 h-1.5 bg-gray-400/50 rounded-full animate-pulse" style={{top: '15%', right: '15%', animationDelay: '0.5s'}}></div>
        <div className="particle-5 absolute w-2 h-2 bg-red-500/25 rounded-full animate-pulse" style={{top: '60%', right: '25%', animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headlines */}
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight"
          >
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-gray-900 via-red-600 to-gray-800 bg-clip-text text-transparent"
            >
              Sanchalan.AI
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl"
            >
              Steering the Future of Trust
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            An AI-powered Governance, Risk & Compliance (GRC) platform that transforms 
            risk into resilience and compliance into confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => navigateToPage('/features')}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg group"
              >
                Discover the Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => navigateToPage('/imc-2025')}
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg text-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                Experience at IMC 2025
              </Button>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 font-medium">
              Govern Intelligently. Mitigate Confidently. Comply Effortlessly.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}