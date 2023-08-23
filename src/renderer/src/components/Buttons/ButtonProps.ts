import { ReactNode } from 'react'

export type ButtonProps =
  | { type: 'submit' | 'reset'; onClick?: () => void; children: ReactNode }
  | { type: 'button'; onClick: () => void; children: ReactNode }
