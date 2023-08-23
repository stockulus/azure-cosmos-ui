import { ButtonProps } from './ButtonProps'

export function SecondaryButton({
  children,
  type = 'button',
  onClick
}: ButtonProps) {
  return (
    <button
      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 dark:focus:ring-offset-0 dark:focus:ring-offset-indigo-400 sm:mt-0 sm:w-auto sm:text-sm"
      onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}
