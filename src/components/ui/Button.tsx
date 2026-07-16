import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  href, 
  type = 'button', 
  primary = false,
  disabled = false,
  onClick 
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center px-6 py-3 
    rounded-lg font-medium text-sm md:text-base
    transition-all duration-300 
    ${disabled ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'}
  `;
  
  const primaryClasses = `
    bg-primary-600 text-white hover:bg-primary-700 
    dark:bg-primary-500 dark:hover:bg-primary-600
  `;
  
  const secondaryClasses = `
    bg-white dark:bg-gray-700 text-gray-800 dark:text-white 
    border border-gray-300 dark:border-gray-600
    hover:bg-gray-50 dark:hover:bg-gray-600
  `;
  
  const classes = `${baseClasses} ${primary ? primaryClasses : secondaryClasses}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth',
          });
          onClick?.();
        }}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;