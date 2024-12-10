import { useEffect, useRef } from 'react';

interface AmbientLightProps {
  color?: string;
  intensity?: number;
  size?: number;
}

export function AmbientLight({ 
  color = 'rgba(99, 16, 161, 0.1)', 
  intensity = 0.4,
  size = 400
}: AmbientLightProps) {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = light.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      light.style.background = `
        radial-gradient(
          circle ${size}px at ${x}px ${y}px,
          ${color},
          transparent ${intensity * 100}%
        ),
        radial-gradient(
          circle ${size * 1.5}px at ${x}px ${y}px,
          rgba(255, 255, 255, 0.03),
          transparent ${intensity * 150}%
        )
      `;
    };

    const handleMouseLeave = () => {
      light.style.background = 'none';
    };

    light.addEventListener('mousemove', handleMouseMove);
    light.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      light.removeEventListener('mousemove', handleMouseMove);
      light.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [color, intensity, size]);

  return (
    <div 
      ref={lightRef}
      className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}