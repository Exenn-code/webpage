import { useEffect, useCallback } from 'react';

export function useParallax() {
  const handleScroll = useCallback(() => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach((element) => {
      const speed = Number(element.getAttribute('data-parallax-speed')) || 0.2;
      const rect = element.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (visible) {
        const scrolled = window.scrollY;
        const yPos = -(scrolled * speed);
        element.setAttribute('style', `transform: translate3d(0, ${yPos}px, 0)`);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
}