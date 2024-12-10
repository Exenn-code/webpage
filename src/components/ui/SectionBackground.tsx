import { ReactNode } from 'react';

interface SectionBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function SectionBackground({ children, className = '' }: SectionBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0" 
        style={{
          transform: 'scale(1)',
          transformOrigin: 'center',
          minWidth: '100%',
          minHeight: '100%'
        }}
      >
        <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-dark-800/40 via-dark-800/60 to-dark-800/40 rounded-xl border border-dark-700/30 shadow-lg">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-xl pointer-events-none"
            style={{ backfaceVisibility: 'hidden' }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-primary-600/[0.02] to-transparent rounded-xl pointer-events-none"
            style={{ backfaceVisibility: 'hidden' }}
          />
        </div>
      </div>
      <div className="relative z-1">{children}</div>
    </div>
  );
}