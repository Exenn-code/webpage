import { ReactNode } from 'react';
import { BackgroundGrid } from './BackgroundGrid';
import { ParallaxBackground } from '../effects/ParallaxBackground';

interface BackgroundContainerProps {
  children?: ReactNode;
}

export function BackgroundContainer({ children }: BackgroundContainerProps) {
  return (
    <div 
      className="fixed inset-0 w-screen h-screen overflow-hidden"
      style={{ 
        zIndex: -1,
        transform: 'scale(1)',
        transformOrigin: 'center',
        minWidth: '100vw',
        minHeight: '100vh'
      }}
    >
      <BackgroundGrid />
      <ParallaxBackground />
      {children}
    </div>
  );
} 