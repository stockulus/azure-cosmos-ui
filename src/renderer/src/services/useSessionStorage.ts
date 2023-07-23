import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useSessionStorage<T>(
  key: string,
  initialValue?: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const sessionStorageValue = sessionStorage.getItem(key)

      if (typeof sessionStorageValue !== 'string') {
        sessionStorage.setItem(key, JSON.stringify(initialValue))

        return initialValue
      } else {
        return JSON.parse(sessionStorageValue || 'null')
      }
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      const serializedState = JSON.stringify(state)

      sessionStorage.setItem(key, serializedState)
    } catch (error) {
      console.error('Failed to save session value', error)
    }
  }, [state, key])

  return [state, setState]
}
