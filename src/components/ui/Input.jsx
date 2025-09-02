import React from 'react';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Input = React.forwardRef(({ 
  className = "", 
  label,
  error,
  success,
  helperText,
  leftIcon,
  rightIcon,
  type = "text",
  ...props 
}, ref) => {
  const baseClasses = "w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const getVariantClasses = () => {
    if (error) {
      return "border-red-300 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:border-red-400 dark:focus:ring-red-400";
    }
    if (success) {
      return "border-green-300 focus:border-green-500 focus:ring-green-500 dark:border-green-600 dark:focus:border-green-400 dark:focus:ring-green-400";
    }
    return "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400";
  };

  const colorClasses = "bg-white text-gray-900 placeholder-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400";

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 dark:text-gray-400">
              {leftIcon}
            </span>
          </div>
        )}
        <input
          type={type}
          className={`${baseClasses} ${getVariantClasses()} ${colorClasses} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${className}`}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 dark:text-gray-400">
              {rightIcon}
            </span>
          </div>
        )}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
          </div>
        )}
        {success && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
          </div>
        )}
      </div>
      {(error || success || helperText) && (
        <p className={`text-sm ${error ? 'text-red-600 dark:text-red-400' : success ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
          {error || success || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input; 