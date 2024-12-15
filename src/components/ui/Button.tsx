import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon: Icon,
  children,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:-translate-y-0.5";
  
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#DC143C] to-[#4B0082] 
      text-white 
      hover:from-[#4B0082] hover:to-[#DC143C]
      focus:ring-[#DC143C]
      before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-10
    `,
    secondary: `
      bg-gradient-to-r from-[#50C878] to-[#4B0082]
      text-white
      hover:from-[#4B0082] hover:to-[#50C878]
      focus:ring-[#50C878]
      before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-10
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && (
        <span className="relative z-10 mr-2">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </span>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;