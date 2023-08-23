import { useQuery } from 'react-query'

export function useDbInfo(connection: string) {
  return useQuery(['dbInfo', connection], async () => {
    return window.api.getDbInfo(connection)
  })
}
