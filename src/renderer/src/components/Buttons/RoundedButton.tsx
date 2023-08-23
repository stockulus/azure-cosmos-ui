import { ButtonProps } from './ButtonProps'

export function RoundedButton({
  children,
  type = 'button',
  onClick
}: ButtonProps) {
  return (
    <button
      className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}
