import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = '' 
}) => {
  const baseClasses = "flex justify-center items-center gap-2.5 px-4 py-3 rounded-[10px] font-bold text-[15px] leading-[13.5px] transition-colors";
  
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-[#8DF868] text-black hover:bg-[#7DE858]",
    outline: "border border-solid border-[#A8A8A8] text-black hover:bg-gray-50"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
