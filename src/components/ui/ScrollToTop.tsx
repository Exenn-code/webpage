import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full
        backdrop-blur-xl bg-dark-800/40 border border-dark-700/30
        transition-all duration-500 ease-out transform
        hover:scale-110 hover:bg-dark-800/60 hover:border-primary-600/30
        hover:shadow-[0_0_20px_rgba(99,16,161,0.3)]
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-primary-400" />
    </button>
  );
}