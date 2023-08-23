import { PlusIcon } from '@heroicons/react/20/solid'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { RoundedButton } from '@renderer/components'
import { useConnections, useLocalization } from '@renderer/services'
import { useState } from 'react'

import { AddConnectionDialog } from './AddConnectionDialog'
import { NavBarDbItem } from './NavBarDbItem'

export function NavBar() {
  const [showAddConnectionDialog, setShowAddConnectionDialog] = useState(false)
  const { t } = useLocalization()
  const { connections, addConnection } = useConnections()

  return (
    <div className="fixed inset-y-0 z-50 flex w-72 lg:flex-col">
      <AddConnectionDialog
        isOpen={showAddConnectionDialog}
        onAddConnection={addConnection}
        onClose={() => setShowAddConnectionDialog(false)}
      />
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-8">
        <nav className="flex flex-1 flex-col">
          <div className="mt-4">
            <RoundedButton
              onClick={() => setShowAddConnectionDialog(true)}
              type="button">
              <PlusIcon
                aria-hidden="true"
                className="h-5 w-5"
                title={t('Add')}
              />
              <span className="sr-only">{t('Add')}</span>
            </RoundedButton>
          </div>
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
