import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useLayoutEffect
} from 'react'

import { texts } from './texts'
import { useLocalStorage } from './useLocalStorage'

type LocalizationContext = {
  locale: string
  setLocale: (locale: string) => void
}

const localizationContext = createContext<LocalizationContext>({
  locale: 'en',
  setLocale: () => null
})

localizationContext.displayName = 'LocalizationContext'

const localizedText = (
  locale: string,
  id: keyof typeof texts,
  args?: Record<string, any>
) => {
  const textObject = texts[id]

  if (!textObject) {
    console.warn(`Missing Text ID: "${id}"`)

    return id
  }

  let localizedText = textObject[locale]

  if (!localizedText && locale !== 'en') {
    localizedText = textObject['en']
  }

  let text = localizedText || id

  if (args) {
    for (const key of Object.keys(args)) {
      text = text.split(`%{${key}}`).join(args[key])
    }
  }

  return text
}

export function useLocalization() {
  const { locale, setLocale } = useContext(localizationContext)

  return {
    locale,
    setLocale,
    t: useCallback(
      (id: keyof typeof texts, args?: Record<string, any>) =>
        localizedText(locale, id, args),
      [locale]
    )
  }
}

const getBrowserLanguage = () => {
  if (navigator.languages != undefined) {
    for (const lang of navigator.languages) {
      if (lang.startsWith('en')) return 'en'
      if (lang.startsWith('de')) return 'de'
    }
  }

  if (navigator.language.startsWith('en')) return 'en'
  if (navigator.language.startsWith('de')) return 'de'

  return null
}

export function LocalizationProvider({
  children,
  defaultLocale
}: {
  children: ReactNode
  defaultLocale: string
}) {
  const [locale, setLocale] = useLocalStorage(
    'locale',
    getBrowserLanguage() || defaultLocale
  )

  useLayoutEffect(() => {
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  return (
    <localizationContext.Provider value={{ locale, setLocale }}>
      {children}
    </localizationContext.Provider>
  )
}
