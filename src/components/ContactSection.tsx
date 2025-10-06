import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      company: '',
      designation: '',
      email: '',
      message: ''
    });
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Let's Redefine <span className="text-red-600">Governance Together</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make your enterprise future-ready? Get in touch with our experts 
            to discuss how Sanchalan.AI can transform your GRC strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-red-600" />
                  <span>Get in Touch</span>
                </CardTitle>
                <CardDescription>
                  Connect with our team for personalized consultation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">sanchalan@cachedigitech.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">+91-XXX-XXX-XXXX</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div className="text-gray-600">
                    <p>Cache Digitech Pvt. Ltd.</p>
                    <p>India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Why Choose Sanchalan.AI?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive GRC solution in one platform</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AI-powered predictive insights</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Industry-specific compliance frameworks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Backed by 30+ years of expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        required
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation *</Label>
                      <Select onValueChange={(value) => handleInputChange('designation', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ceo">CEO/MD</SelectItem>
                          <SelectItem value="cto">CTO/CIO</SelectItem>
                          <SelectItem value="cro">CRO/Chief Risk Officer</SelectItem>
                          <SelectItem value="compliance">Compliance Officer</SelectItem>
                          <SelectItem value="it-head">IT Head</SelectItem>
                          <SelectItem value="security">Security Head</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your GRC challenges and requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Experience the Future of GRC?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Join the growing number of enterprises that trust Sanchalan.AI 
              for their governance, risk, and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                Schedule a Demo
              </Button>
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                Request a Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}