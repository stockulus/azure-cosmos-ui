import { ButtonProps } from './ButtonProps'

export function SecondaryButton({
  children,
  type = 'button',
  onClick
}: ButtonProps) {
  return (
    <button
      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-white dark:focus:ring-offset-0 dark:focus:ring-offset-white sm:col-start-2 sm:text-sm"
      onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}
