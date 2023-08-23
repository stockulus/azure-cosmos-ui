import { Spinner } from '@renderer/components'
import { useDbInfo } from '@renderer/services'

export function NavBarDbItem({ connection }: { connection: string }) {
  const dbInfoQuery = useDbInfo(connection)

  if (dbInfoQuery.isLoading) return <Spinner />

  if (dbInfoQuery.isError)
    return (
      <span className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
        {(dbInfoQuery.error as any).message}
      </span>
    )

  return (
    <li>
      <span className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
        {dbInfoQuery.data?.id}
      </span>
    </li>
  )
}
