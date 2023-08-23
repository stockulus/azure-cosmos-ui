import { createContext, ReactNode, useCallback, useContext } from 'react'

import { useLocalStorage } from './useLocalStorage'

type ConnectionsContext = {
  connections: string[]
  addConnection: (connection: string) => void
  removeConnection: (connection: string) => void
}

const connectionsContext = createContext<ConnectionsContext>({
  connections: [],
  addConnection: () => null,
  removeConnection: () => null
})

connectionsContext.displayName = 'ConnectionsContext'

export function useConnections() {
  const { connections, addConnection, removeConnection } =
    useContext(connectionsContext)

  return { connections, addConnection, removeConnection }
}

export function ConnectionsProvider({ children }: { children: ReactNode }) {
  const [connections, setConnections] = useLocalStorage<string[]>(
    'connections',
    []
  )

  const addConnection = useCallback(
    async (connection: string) => {
      const encryptedConnection = await window.api.encryptString(connection)

      console.log('After service', encryptedConnection)

      setConnections((previousConnections) => [
        ...previousConnections,
        encryptedConnection
      ])
    },
    [setConnections]
  )
  const removeConnection = useCallback(
    (encryptedConnection: string) => {
      setConnections((previousConnections) =>
        previousConnections.filter((c) => c !== encryptedConnection)
      )
    },
    [setConnections]
  )

  return (
    <connectionsContext.Provider
      value={{ connections, addConnection, removeConnection }}>
      {children}
    </connectionsContext.Provider>
  )
}
