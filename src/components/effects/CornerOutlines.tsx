import { useEffect, useRef } from 'react';

interface CornerOutlinesProps {
  color?: string;
  size?: number;
  thickness?: number;
  glow?: boolean;
}

export function CornerOutlines({ 
  color = 'rgba(99, 16, 161, 0.5)',
  size = 20,
  thickness = 2,
  glow = true
}: CornerOutlinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const corners = Array.from({ length: 4 }).map(() => {
      const corner = document.createElement('div');
      corner.className = 'absolute w-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500';
      corner.style.background = color;
      if (glow) {
        corner.style.filter = `drop-shadow(0 0 4px ${color})`;
      }
      return corner;
    });

    // Top left
    corners[0].style.top = '0';
    corners[0].style.left = '0';
    corners[0].style.height = `${size}px`;

    corners[1].style.top = '0';
    corners[1].style.left = '0';
    corners[1].style.width = `${size}px`;
    corners[1].style.height = `${thickness}px`;

    // Top right
    corners[2].style.top = '0';
    corners[2].style.right = '0';
    corners[2].style.height = `${size}px`;

    corners[3].style.top = '0';
    corners[3].style.right = '0';
    corners[3].style.width = `${size}px`;
    corners[3].style.height = `${thickness}px`;

    corners.forEach(corner => container.appendChild(corner));

    const bottomCorners = corners.map(corner => {
      const bottomCorner = corner.cloneNode(true) as HTMLDivElement;
      bottomCorner.style.top = 'auto';
      bottomCorner.style.bottom = '0';
      return bottomCorner;
    });

    bottomCorners.forEach(corner => container.appendChild(corner));

    return () => {
      [...corners, ...bottomCorners].forEach(corner => corner.remove());
    };
  }, [color, size, thickness, glow]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
  );
}