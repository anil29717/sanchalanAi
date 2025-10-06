import { Separator } from "./ui/separator";
import { Globe, Linkedin, Twitter, Mail } from "lucide-react";
import { navigateTo } from "./Router";
import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Sanchalan<span className="text-red-400">.AI</span>
                </h3>
                <p className="text-gray-400 text-sm">Steering the Future of Trust</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              An AI-powered Governance, Risk & Compliance (GRC) platform that transforms 
              risk into resilience and compliance into confidence.
            </p>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong className="text-white">Powered by Cache Digitech Pvt. Ltd.</strong></p>
              <p>30+ years of trusted technology integration</p>
              <p>Cybersecurity • AI • Cloud Solutions</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => navigateTo('/about')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  About Sanchalan.AI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/features')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Platform Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/industries')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/imc-2025')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  IMC 2025
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('/contact')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="space-y-4">
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-red-400" />
                  <span>sanchalan@cachedigitech.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-red-400" />
                  <span>www.cachedigitech.com</span>
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-3">Follow Cache Digitech:</p>
                <div className="flex space-x-3">
                  <button className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                    <Globe className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Cache Digitech Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Sanchalan.AI - Steering the Future of Trust
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-xs text-gray-400">
            <button className="hover:text-red-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-red-400 transition-colors">Terms of Service</button>
            <button className="hover:text-red-400 transition-colors">Security</button>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm italic">
            "Govern Intelligently. Mitigate Confidently. Comply Effortlessly."
          </p>
        </div>
      </div>
    </footer>
  );
}