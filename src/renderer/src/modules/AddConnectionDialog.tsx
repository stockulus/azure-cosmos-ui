import { Dialog } from '@renderer/components'

export function AddConnectionDialog({
  isOpen,
  onClose // onAddConnection
}: {
  isOpen: boolean
  onClose: () => void
  // onAddConnection: (connection: string) => void
}) {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <div></div>
    </Dialog>
  )
}
