import { ArrowDown, Rocket } from 'lucide-react';
import { Button } from './ui/Button';
import { PlasmaEffect } from './effects/PlasmaEffect';

export function Hero() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-visible pb-12">
        {/* Extended Background Container */}
        <div className="absolute inset-0 h-[150%] overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,16,161,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,16,161,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-90" />
          
          {/* Plasma Effect Background */}
          <div className="absolute inset-0 opacity-90">
            <PlasmaEffect />
          </div>
          
          {/* Enhanced Gradient Blur Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/95 to-transparent backdrop-blur-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-10 text-center mt-32">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.3]">
            <span className="text-dark-50">Streamline Your Business with</span>{' '}
            <span className="inline-block bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] pb-2">
              AI Integration
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">Boost</span>{' '}
            <span className="text-dark-100">Productivity</span>, Save{' '}
            <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">Time</span>, and Work{' '}
            <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">Smarter</span>{' '}
            with{' '}
            <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">Automation</span>
          </p>
          
          {/* Przyciski */}
          <div className="pt-10 flex items-center justify-center">
            <div className="relative inline-flex">
              <Button 
                href="#contact" 
                variant="primary" 
                icon={Rocket}
                className="scale-125 px-8 py-4 text-lg font-semibold hover:scale-[1.27] transition-transform duration-300
                  -translate-x-20 relative overflow-hidden
                  after:absolute after:inset-0 
                  after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
                  after:-translate-x-12 hover:after:translate-x-full
                  after:transition-transform after:duration-500
                  shadow-[0_0_15px_rgba(99,16,161,0.3)]
                  hover:shadow-[0_0_25px_rgba(99,16,161,0.5)]"
              >
                Boost Productivity
              </Button>
              <Button 
                href="#services" 
                variant="secondary"
                icon={ArrowDown}
                className="scale-125 px-8 py-4 text-lg font-semibold hover:scale-[1.27] transition-transform duration-300
                  ml-5 translate-x-15 bg-black/20"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}