import { HTMLInputTypeAttribute, forwardRef } from 'react'

import { classNames } from './classNames'

export const Input = forwardRef(
  (
    {
      className = '',
      label,
      id,
      inputType = 'text',
      autoComplete = undefined,
      required = false,
      ...rest
    }: {
      className?: string
      label: string
      id: string
      inputType?: HTMLInputTypeAttribute
      autoComplete?: string
      required?: boolean
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div
        className={classNames(
          'sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5',
          className
        )}>
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 sm:mt-px sm:pt-2"
          htmlFor={id}>
          {label}
        </label>
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <input
            autoComplete={autoComplete}
            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            id={id}
            ref={ref}
            required={required}
            type={inputType}
            {...rest}
          />
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'
