import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';

const Select = ({ 
  value,
  onChange,
  options = [],
  placeholder = "选择一个选项",
  disabled = false,
  error = false,
  className = "",
  buttonClassName = "",
  optionsClassName = "",
  ...props 
}) => {
  const selectedOption = options.find(option => option.value === value);

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className={`relative inline-block ${className}`}>
        <Listbox.Button
          className={`${buttonClassName} w-full cursor-pointer rounded-lg border py-3 pl-3 pr-10 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            error 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:border-red-400 dark:focus:ring-red-400'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400'
          } ${
            disabled 
              ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800'
              : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <span className="block text-gray-900 dark:text-gray-100">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className={`${optionsClassName} absolute z-[9999] mt-1 max-h-60 min-w-max overflow-auto rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-3 pl-10 pr-4 transition-colors duration-150 ${
                    active 
                      ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100' 
                      : 'text-gray-900 dark:text-gray-100'
                  }`
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 dark:text-blue-400">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select; 