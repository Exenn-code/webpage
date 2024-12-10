import { useEffect, useCallback } from 'react';

export function useParallax() {
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const speed = Number(element.getAttribute('data-speed')) || 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    });
  }, []);

  useEffect(() => {
    let timeoutId: number;
    
    const debouncedScroll = () => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
      timeoutId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [handleScroll]);
}