import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        // Zamknij menu mobilne po kliknięciu
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative backdrop-blur-sm bg-dark-800/10 rounded-xl px-8 py-3 flex items-center border border-dark-700/10 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/2 via-primary-900/2 to-primary-600/2 rounded-xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/2 to-transparent rounded-xl pointer-events-none" />
          
          <a 
            href="/" 
            className="relative flex items-center space-x-3 group"
          >
            <Logo size="md" className="transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-semibold transition-colors duration-300 bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-primary-600">
              BscaleAI
            </span>
          </a>
          
          <nav className={`${
            isMenuOpen 
              ? 'absolute top-full left-0 right-0 mt-2 backdrop-blur-xl bg-dark-800/80 border border-dark-700/30 rounded-xl p-4' 
              : 'hidden'
            } md:flex-1 md:flex md:justify-center md:items-center md:static md:p-0 md:bg-transparent md:border-0`}>
            <ul className="relative flex flex-col md:flex-row md:items-center md:space-x-12">
              <li>
                <a 
                  href="#services" 
                  onClick={handleSmoothScroll}
                  className="block py-2 md:py-0 text-lg transition-colors bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent hover:from-primary-300 hover:to-primary-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={handleSmoothScroll}
                  className="block py-2 md:py-0 text-lg transition-colors bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent hover:from-primary-300 hover:to-primary-600"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={handleSmoothScroll}
                  className="block py-2 md:py-0 text-lg transition-colors bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent hover:from-primary-300 hover:to-primary-600"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="relative ml-auto">
            <Button 
              href="#contact" 
              onClick={handleSmoothScroll}
              variant="primary" 
              className="hidden md:inline-flex"
            >
              Contact Us
            </Button>
          </div>
          
          <button 
            className="relative md:hidden text-dark-300 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}