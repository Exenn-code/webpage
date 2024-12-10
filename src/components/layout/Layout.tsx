import { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from './Footer';
import { BackgroundGrid } from '../background/BackgroundGrid';
import { ScrollToTop } from '../ui/ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen text-dark-100">
      {/* Base background color */}
      <div className="fixed inset-0 bg-black" style={{ zIndex: -3 }} />
      
      {/* Background effects container */}
      <div 
        className="fixed inset-0 w-screen h-screen overflow-hidden"
        style={{ 
          zIndex: -2,
          minWidth: '100vw',
          minHeight: '100vh',
          transform: 'scale(1)',
          transformOrigin: 'center',
          willChange: 'transform'
        }}
      >
        <BackgroundGrid />
      </div>
      
      {/* Content */}
      <div className="relative z-0">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}