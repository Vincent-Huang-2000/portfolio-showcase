import React from 'react';
import { Switch as HeadlessSwitch } from '@headlessui/react';

const Switch = React.forwardRef(({ 
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  color = 'blue',
  label,
  description,
  className = "",
  ...props 
}, ref) => {
  const sizeClasses = {
    sm: {
      switch: 'h-5 w-9',
      thumb: 'h-4 w-4',
      translate: 'translate-x-4'
    },
    md: {
      switch: 'h-6 w-11',
      thumb: 'h-5 w-5',
      translate: 'translate-x-5'
    },
    lg: {
      switch: 'h-7 w-12',
      thumb: 'h-6 w-6',
      translate: 'translate-x-5'
    }
  };

  const colorClasses = {
    blue: 'bg-blue-600 focus:ring-blue-500',
    green: 'bg-green-600 focus:ring-green-500',
    purple: 'bg-purple-600 focus:ring-purple-500',
    red: 'bg-red-600 focus:ring-red-500',
    yellow: 'bg-yellow-600 focus:ring-yellow-500',
    indigo: 'bg-indigo-600 focus:ring-indigo-500'
  };

  const currentSize = sizeClasses[size];
  const currentColor = colorClasses[color];

  return (
    <HeadlessSwitch.Group>
      <div className={`flex items-center ${className}`}>
        <HeadlessSwitch
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`${currentSize.switch} relative inline-flex items-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            checked 
              ? `${currentColor} shadow-lg`
              : 'bg-gray-200 dark:bg-gray-700'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          ref={ref}
          {...props}
        >
          <span
            className={`${currentSize.thumb} transform transition-all duration-200 ease-in-out bg-white rounded-full shadow-lg ring-0 ${
              checked ? currentSize.translate : 'translate-x-0.5'
            }`}
          />
        </HeadlessSwitch>
        {(label || description) && (
          <HeadlessSwitch.Label className="ml-3 flex-1 cursor-pointer">
            {label && (
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {label}
              </span>
            )}
            {description && (
              <span className="text-sm text-gray-500 dark:text-gray-400 block">
                {description}
              </span>
            )}
          </HeadlessSwitch.Label>
        )}
      </div>
    </HeadlessSwitch.Group>
  );
});

Switch.displayName = "Switch";

export default Switch; 