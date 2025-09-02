import React from 'react';

// 获取变体样式的函数
const getVariantStyles = (variant) => {
  switch (variant) {
    case 'gradient':
      return 'bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 border-blue-200 dark:border-gray-600 shadow-lg';
    case 'glass':
      return 'bg-white/60 backdrop-blur-md dark:bg-gray-800/60 border border-white/30 dark:border-white/20 shadow-xl ring-1 ring-white/10';
    case 'outline':
      return 'bg-transparent border-2 border-gray-400 dark:border-gray-500 hover:border-gray-500 dark:hover:border-gray-400';
    case 'fresh':
      return 'bg-gradient-to-br from-pink-50 via-sky-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700/30 dark:to-indigo-900/20 border-sky-200 dark:border-slate-600 shadow-xl';
    default:
      return 'bg-gray-20 dark:bg-gray-700 border-gray-300 dark:border-gray-600 shadow-sm';
  }
};

// 获取阴影样式的函数
const getShadowStyles = (shadow) => {
  switch (shadow) {
    case 'none':
      return 'shadow-none';
    case 'sm':
      return 'shadow-sm hover:shadow-md';
    case 'md':
      return 'shadow-md hover:shadow-lg';
    case 'lg':
      return 'shadow-lg hover:shadow-xl';
    case 'xl':
      return 'shadow-xl hover:shadow-2xl';
    default:
      return 'shadow-md hover:shadow-lg';
  }
};

// 获取悬停效果样式的函数
const getHoverStyles = (hover) => {
  switch (hover) {
    case 'none':
      return '';
    case 'lift':
      return 'hover:-translate-y-2 hover:shadow-2xl transition-all duration-300';
    case 'scale':
      return 'hover:scale-[1.02] hover:shadow-lg transition-all duration-300';
    case 'glow':
      return 'hover:shadow-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300';
    default:
      return 'hover:-translate-y-2 hover:shadow-2xl transition-all duration-300';
  }
};

// 获取内边距样式的函数
const getPaddingStyles = (padding) => {
  switch (padding) {
    case 'none':
      return '';
    case 'sm':
      return 'p-4';
    case 'md':
      return 'p-6';
    case 'lg':
      return 'p-8';
    case 'xl':
      return 'p-10';
    default:
      return 'p-6';
  }
};

const Card = React.forwardRef(({ 
  className = "", 
  variant = "default",
  shadow = "md",
  hover = "lift",
  padding = "md",
  children,
  ...props 
}, ref) => {
  const variantStyles = getVariantStyles(variant);
  const shadowStyles = getShadowStyles(shadow);
  const hoverStyles = getHoverStyles(hover);
  const paddingStyles = getPaddingStyles(padding);
  
  return (
    <div
      className={`rounded-xl border transition-all duration-200 ${variantStyles} ${shadowStyles} ${hoverStyles} ${paddingStyles} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

// Card sub-components
const CardHeader = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div 
    ref={ref} 
    className={`flex flex-col space-y-1.5 ${className}`} 
    {...props}
  >
    {children}
  </div>
));

const CardTitle = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <h3 
    ref={ref} 
    className={`text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 ${className}`} 
    {...props}
  >
    {children}
  </h3>
));

const CardDescription = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <p 
    ref={ref} 
    className={`text-sm text-gray-700 dark:text-gray-300 leading-relaxed ${className}`} 
    {...props}
  >
    {children}
  </p>
));

const CardContent = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div 
    ref={ref} 
    className={`${className}`} 
    {...props}
  >
    {children}
  </div>
));

const CardFooter = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div 
    ref={ref} 
    className={`flex items-center pt-6 border-t border-gray-200 dark:border-gray-700 ${className}`} 
    {...props}
  >
    {children}
  </div>
));

CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }; 