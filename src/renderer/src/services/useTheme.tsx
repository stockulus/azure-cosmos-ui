import { createContext, ReactNode, useContext, useLayoutEffect } from 'react'

import { useLocalStorage } from './useLocalStorage'

type ThemeContext = {
  theme: string
  setTheme: (theme: string) => void
}

const themeContext = createContext<ThemeContext>({
  theme: 'light',
  setTheme: () => null
})

themeContext.displayName = 'ThemeContext'

export function useTheme() {
  const { theme, setTheme } = useContext(themeContext)

  return { theme, setTheme }
}

const getBrowserPreferences = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'

  return 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage('theme', getBrowserPreferences())

  useLayoutEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  useLayoutEffect(() => {
    if (window.navigator.userAgent.indexOf('Windows') != -1) {
      document.documentElement.classList.add('windows')
    } else if (window.navigator.userAgent.indexOf('Mac') !== -1) {
      document.documentElement.classList.add('macos')
    }
  }, [])

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  )
}
