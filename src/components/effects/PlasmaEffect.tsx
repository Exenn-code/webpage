import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  pulse: number;
  speed: number;
}

export function PlasmaEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const numParticles = 30;

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 20,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -Math.random() * 0.8 - 0.4,
          size: Math.random() * 3 + 2,
          alpha: Math.random() * 0.6 + 0.4, // Increased brightness
          pulse: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.015 + 0.008 // Slower pulse
        });
      }

      particlesRef.current = particles;
    };

    const drawPlasma = (time: number) => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.6
      );

      const intensity = (Math.sin(time / 2500) + 1) * 0.5; // Slower plasma pulse
      gradient.addColorStop(0, `rgba(99, 16, 161, ${0.12 + intensity * 0.12})`); // Increased brightness
      gradient.addColorStop(0.5, `rgba(99, 16, 161, ${0.06 + intensity * 0.06})`);
      gradient.addColorStop(1, 'rgba(99, 16, 161, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateParticles = (time: number) => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx + Math.sin(particle.pulse + time / 1200) * 0.15;
        particle.y += particle.vy;
        particle.pulse += particle.speed;
        particle.alpha *= 0.997; // Slower fade out

        if (particle.y < -10 || particle.alpha < 0.01) {
          particlesRef.current[index] = {
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 20,
            vx: (Math.random() - 0.5) * 0.2,
            vy: -Math.random() * 0.8 - 0.4,
            size: Math.random() * 3 + 2,
            alpha: Math.random() * 0.6 + 0.4, // Increased brightness
            pulse: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.015 + 0.008
          };
        }
      });
    };

    const drawParticles = () => {
      particlesRef.current.forEach(particle => {
        // Particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 180, 255, ${particle.alpha * 0.9})`; // Brighter color
        ctx.fill();

        // Enhanced glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, `rgba(220, 180, 255, ${particle.alpha * 0.5})`);
        gradient.addColorStop(0.5, `rgba(220, 180, 255, ${particle.alpha * 0.3})`);
        gradient.addColorStop(1, 'rgba(220, 180, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawPlasma(time);
      updateParticles(time);
      drawParticles();
      
      frameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate(0);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}