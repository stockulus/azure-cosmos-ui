import { PlusIcon } from '@heroicons/react/20/solid'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { Spinner } from '@renderer/components'
import { useConnections, useDbInfo, useLocalization } from '@renderer/services'

function NavBarDbItem({ connection }: { connection: string }) {
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

export function NavBar() {
  const { t } = useLocalization()
  const { connections } = useConnections()

  return (
    <div className="fixed inset-y-0 z-50 flex w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-8">
        <div className="mt-4">
          <button
            className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button">
            <PlusIcon aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Add</span>
          </button>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {connections.map((connection) => (
                  <NavBarDbItem connection={connection} key={connection} />
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <a
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                href="/">
                <Cog6ToothIcon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0"
                />
                {t('Settings')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
