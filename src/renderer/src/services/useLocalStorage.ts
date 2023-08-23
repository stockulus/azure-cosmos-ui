import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const localStorageValue = localStorage.getItem(key)

      if (typeof localStorageValue !== 'string') {
        localStorage.setItem(key, JSON.stringify(initialValue))

        return initialValue
      } else {
        return JSON.parse(localStorageValue || 'null')
      }
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state)

      localStorage.setItem(key, serializedState)
    } catch (error) {
      console.error('Failed to save session value', error)
    }
  }, [state, key])

  return [state, setState]
}
