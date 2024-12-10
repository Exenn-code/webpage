import { blockBackgroundStyles } from '../styles/blockStyles';
import { AmbientLight } from './effects/AmbientLight';
import { CornerOutlines } from './effects/CornerOutlines';
import { services } from '../data/services';
import { useEffect } from 'react';

export function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-20');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const elements = document.querySelectorAll('[data-animate="true"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-4 px-6">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
              Elevate
            </span>{' '}
            your business with our comprehensive suite of{' '}
            <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
              AI-powered solutions
            </span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${blockBackgroundStyles.base} ${blockBackgroundStyles.hover} p-6 
                opacity-0 translate-y-20 transition-all duration-700 ease-out`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              data-animate="true"
            >
              <AmbientLight />
              <CornerOutlines />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary-900/30 flex items-center justify-center mb-4 
                  group-hover:bg-primary-900/40 transition-colors duration-500
                  group-hover:scale-110 transform"
                >
                  <service.icon className="h-6 w-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-dark-200 group-hover:text-dark-100 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}