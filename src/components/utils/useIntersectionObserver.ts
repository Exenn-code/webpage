import { useEffect, useRef } from 'react';

export function useIntersectionObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-animate', 'true');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      el.setAttribute('data-animate', 'false');
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
}