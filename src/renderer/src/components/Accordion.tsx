import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ReactElement } from 'react'

import { useSessionStorage } from '../services'

import { classNames } from './classNames'

export function Accordion({
  title,
  defaultOpen = false,
  sessionKey,
  className = '',
  children,
  dark = false
}: {
  title: string | ReactElement
  defaultOpen?: boolean
  sessionKey: string
  className?: string
  children: ReactElement | ReactElement[]
  dark?: boolean
}) {
  const [open, setOpen] = useSessionStorage(sessionKey, defaultOpen)

  return (
    <Disclosure as="section" className={className} defaultOpen={open}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              dark
                ? 'dark:bg-gray-700 dark:hover:bg-gray-600'
                : 'dark:bg-gray-900 dark:hover:bg-gray-700',
              'flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75 dark:text-gray-200'
            )}
            onClick={() => setOpen(!open)}>
            {typeof title === 'string' ? (
              <span className="truncate">{title}</span>
            ) : (
              title
            )}
            <ChevronDownIcon
              className={classNames(
                open ? 'rotate-180 transform' : '',
                'h-5 w-5 text-gray-500 dark:text-gray-200'
              )}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0">
            <Disclosure.Panel as="div" className="px-4 pb-2 pt-4">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
