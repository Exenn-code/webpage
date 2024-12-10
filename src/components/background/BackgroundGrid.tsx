import { useEffect, useRef, useCallback } from 'react';

export function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const gridConfigRef = useRef({
    cellSize: 40,
    color: 'rgba(99, 16, 161, 0.03)',
    lineWidth: 1
  });

  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Użyj podobnego podejścia jak w PlasmaEffect
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const { cellSize, color, lineWidth } = gridConfigRef.current;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    const numCols = Math.ceil(width / cellSize) + 1;
    const numRows = Math.ceil(height / cellSize) + 1;

    ctx.beginPath();

    for (let i = 0; i < numCols; i++) {
      const x = i * cellSize;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    for (let i = 0; i < numRows; i++) {
      const y = i * cellSize;
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }

    ctx.stroke();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(drawGrid);
    };

    drawGrid();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawGrid]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none opacity-30"
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        imageRendering: 'pixelated'
      }}
    />
  );
}