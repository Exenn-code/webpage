import logoImage from '../../assets/logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const dimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 }
  }[size];

  return (
    <img
      src={logoImage}
      alt="BscaleAI Logo"
      width={dimensions.width}
      height={dimensions.height}
      className={`relative ${className}`}
    />
  );
}