import { useEffect, useRef } from 'react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/bscaleai/let-s-talk-automation-in-your-business?background_color=000000&text_color=ffffff&primary_color=6310a1',
          parentElement: document.querySelector('.calendly-inline-widget'),
          minWidth: 1000,
          height: 900
        });

        const calendarFrame = document.querySelector('.calendly-inline-widget iframe');
        if (calendarFrame) {
          (calendarFrame as HTMLElement).style.width = '100%';
          (calendarFrame as HTMLElement).style.minWidth = '1000px';
          (calendarFrame as HTMLElement).style.height = '900px';
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="pt-5 pb-24 px-6 transform translate-y-20 opacity-0 transition-all duration-1000 ease-out overflow-x-auto"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
            Get Started Today
          </span>
        </h2>
        <div 
          className="calendly-inline-widget" 
          style={{
            width: '100%',
            minWidth: '1000px',
            height: '900px'
          }}
        />
      </div>
    </section>
  );
}