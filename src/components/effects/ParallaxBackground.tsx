import { useEffect, useRef } from 'react';

export function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      container.style.transform = `translateY(${scrolled * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,16,161,0.15)_0%,transparent_65%)]" />
    </div>
  );
}