import { Button } from '../ui/Button';
import { SectionBackground } from '../ui/SectionBackground';
import { useEffect } from 'react';

export function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '-100px 0px'
      }
    );

    const blocks = document.querySelectorAll('[data-block]');
    blocks.forEach((block, index) => {
      const element = block as HTMLElement;
      
      element.style.opacity = '0';
      element.style.transform = index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)';
      element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionBackground className="p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                Why Your Business Needs AI Automation
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              AI is no longer the future—{' '}
              <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                it's the present
              </span>
              . It's transforming how businesses work, helping them run{' '}
              <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                smoother
              </span>
              ,{' '}
              <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                faster
              </span>
              , and{' '}
              <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                smarter
              </span>
              . In today's world, where every second counts, AI automation is a game-changer that takes your business to the{' '}
              <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent uppercase">
                next level
              </span>
              .
            </p>
          </div>

          <div className="space-y-12">
            {/* Here's why you need it - z lewej */}
            <div className="flex items-center gap-12" data-block>
              <div className="flex-1">
                <img 
                  src="/src/assets/1.webp" 
                  alt="AI Automation Process"
                  className="w-full h-full object-cover rounded-2xl aspect-video"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                    Here's why you need it
                  </span>
                </h3>
                <p className="text-lg">
                  Right now, your team is likely bogged down with repetitive tasks. This slows growth and takes time away from what matters most.
                </p>
              </div>
            </div>

            {/* Expert Team - z prawej */}
            <div className="flex items-center gap-12" data-block>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                  Don’t get left behind.
                  </span>
                </h3>
                <p className="text-lg">
                Businesses everywhere are adopting AI to stay competitive. Starting now means staying ahead while others struggle to keep up.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="/src/assets/2.webp" 
                  alt="Expert Team"
                  className="w-full h-full object-cover rounded-2xl aspect-video"
                />
              </div>
            </div>

            {/* Client Success - z lewej */}
            <div className="flex items-center gap-12" data-block>
              <div className="flex-1">
                <img 
                  src="/src/assets/3.webp" 
                  alt="Client Success"
                  className="w-full h-full object-cover rounded-2xl aspect-video object-[center_15%]"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
                    Client Success
                  </span>
                </h3>
                <p className="text-lg">
                With our smart automation solutions, you can save time, work faster, and keep your customers happy. We create solutions that fit your business and help you grow.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button href="#contact" variant="primary">
              Work With Us
            </Button>
          </div>
        </SectionBackground>
      </div>
    </section>
  );
}