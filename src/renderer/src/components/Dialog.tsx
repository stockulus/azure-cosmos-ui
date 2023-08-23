import { Dialog as HeadlessDialog, Transition } from '@headlessui/react'
import { Fragment, MutableRefObject, ReactNode } from 'react'

type DialogProps = {
  open: boolean
  onClose: () => void
  initialFocus?: MutableRefObject<HTMLElement | null>
  children: ReactNode
}

export function Dialog({ open, onClose, initialFocus, children }: DialogProps) {
  return (
    <Transition.Root as={Fragment} show={open}>
      <HeadlessDialog
        as="div"
        className="relative z-50"
        initialFocus={initialFocus}
        onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <HeadlessDialog.Panel className="relative w-full overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:max-w-lg sm:p-6">
                {children}
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition.Root>
  )
}
