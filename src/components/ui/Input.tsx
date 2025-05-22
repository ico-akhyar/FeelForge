import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, fullWidth = true, className = '', ...props }, ref) => {
    const inputClasses = `
      block rounded-lg px-3 py-2 
      border ${error ? 'border-error-500 dark:border-error-400' : 'border-gray-300 dark:border-gray-700'} 
      bg-white dark:bg-gray-800 
      text-gray-900 dark:text-gray-100 
      placeholder-gray-400 dark:placeholder-gray-600 
      focus:outline-none focus:ring-2 
      focus:border-indigo-500 dark:focus:border-indigo-400 
      focus:ring-indigo-500 dark:focus:ring-indigo-400 
      transition-colors 
      ${props.disabled ? 'opacity-60 cursor-not-allowed bg-gray-100 dark:bg-gray-700' : ''}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `;

    return (
      <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
          </label>
        )}
        
        <input ref={ref} className={inputClasses} {...props} />
        
        {(helperText || error) && (
          <div className="mt-1">
            {helperText && !error && (
              <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
            )}
            {error && (
              <p className="text-xs text-error-600 dark:text-error-400">{error}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;