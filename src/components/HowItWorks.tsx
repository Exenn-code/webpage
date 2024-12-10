import { useEffect, useRef } from 'react';
import { blockBackgroundStyles } from '../styles/blockStyles';
import { SectionBackground } from './ui/SectionBackground';
import { steps } from '../data/howItWorks';

export function HowItWorks() {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimationSequence();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const startAnimationSequence = () => {
    const blocks = document.querySelectorAll('[data-step]');
    const lines = linesRef.current.filter(Boolean);

    blocks.forEach((block, index) => {
      if (index === 0) {
        block.classList.add('animate-slide-left');
      } else if (index === steps.length - 1) {
        block.classList.add('animate-slide-right');
      } else {
        block.classList.add('animate-fade');
      }
      block.classList.add('opacity-0');
    });

    lines.forEach(line => {
      line?.classList.add('scale-x-0');
    });

    setTimeout(() => blocks[0].classList.remove('opacity-0'), 200);
    setTimeout(() => lines[0]?.classList.remove('scale-x-0'), 500);
    setTimeout(() => blocks[1].classList.remove('opacity-0'), 900);
    setTimeout(() => lines[1]?.classList.remove('scale-x-0'), 1200);
    setTimeout(() => blocks[2].classList.remove('opacity-0'), 1600);
  };

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionBackground className="p-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
              How It Works?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center"
                data-step={index}
              >
                <div className={`relative w-16 h-16 ${blockBackgroundStyles.base} flex items-center justify-center mb-6 rounded-full z-10`}>
                  <step.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-dark-200">{step.description}</p>

                {index < steps.length - 1 && (
                  <div
                    ref={el => linesRef.current[index] = el}
                    className="hidden md:block absolute top-8 left-[calc(50%_+_2rem)] w-[calc(100%_-_2rem)] border-t-2 border-dashed border-primary-400/30 origin-left transition-transform duration-500"
                    style={{ transform: 'scaleX(0)' }}
                  />
                )}
              </div>
            ))}
          </div>
        </SectionBackground>
      </div>
    </section>
  );
}