import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit';
  icon?: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  children, 
  href, 
  onClick,
  type = 'button',
  icon: Icon,
  className = '',
  size = 'md'
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#6310a1] via-[#7a1bb7] to-[#6310a1]
      text-white 
      hover:from-[#7a1bb7] hover:via-[#8c28d0] hover:to-[#7a1bb7]
      shadow-lg shadow-[#6310a1]/20
      rounded-lg
    `,
    secondary: `
      bg-dark-800/50
      text-dark-100 
      hover:text-[#6310a1]
      border border-dark-700/50
      hover:border-[#6310a1]/50
      shadow-lg shadow-dark-900/10
      rounded-lg
      backdrop-blur-sm
    `
  };

  const innerContent = (
    <>
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Bottom inner glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Inner shadow for depth */}
      <div className="absolute inset-0 rounded-lg shadow-inner-glow opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}
        {Icon && <Icon className={size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'} />}
      </span>
    </>
  );

  const combinedClassName = `group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {innerContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {innerContent}
    </button>
  );
}