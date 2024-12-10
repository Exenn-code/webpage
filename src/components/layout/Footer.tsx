import { Bot, Mail, MapPin, Rocket } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionBackground } from '../ui/SectionBackground';

export function Footer() {
  return (
    <footer className="bg-dark-900 pt-[100px] pb-[56px] px-6 border-t border-dark-700/30">
      <div className="max-w-7xl mx-auto">
        <SectionBackground>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-8">
            <div>
              <h3 className="font-semibold text-dark-50 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-dark-200 hover:text-primary-400">Services</a></li>
                <li><a href="#how-it-works" className="text-dark-200 hover:text-primary-400">How It Works</a></li>
                <li><a href="#about" className="text-dark-200 hover:text-primary-400">About</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-dark-50 mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-dark-200">
                  <Mail className="h-4 w-4" />
                  <span>contact@bscaleai.com</span>
                </li>
                <li className="flex items-center space-x-2 text-dark-200">
                  <Bot className="h-4 w-4" />
                  <span>AI Support 24/7</span>
                </li>
                <li className="flex items-center space-x-2 text-dark-200">
                  <MapPin className="h-4 w-4" />
                  <span>Global Remote Services</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-dark-50 mb-4">Boost Your Business Now</h3>
              <p className="text-dark-200 mb-4">Transform your operations with AI-powered automation.</p>
              <Button 
                href="#contact" 
                variant="primary" 
                className="w-full flex items-center justify-center space-x-2 group"
              >
                <Rocket className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span>Get Started</span>
              </Button>
            </div>
          </div>
        </SectionBackground>

        <div className="mt-12 pt-8 border-t border-dark-700/30 text-center text-dark-300">
          <p>&copy; {new Date().getFullYear()} BscaleAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}