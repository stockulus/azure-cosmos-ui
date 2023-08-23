import {
  Dialog,
  Input,
  PrimaryButton,
  SecondaryButton
} from '@renderer/components'
import { useLocalization } from '@renderer/services'
import { useForm } from 'react-hook-form'

export function AddConnectionDialog({
  isOpen,
  onClose,
  onAddConnection
}: {
  isOpen: boolean
  onClose: () => void
  onAddConnection: (connection: string) => void
}) {
  const { t } = useLocalization()
  const { handleSubmit, register } = useForm({
    defaultValues: {
      connection: ''
    }
  })

  const onSubmit = (data: { connection: string }) => {
    onAddConnection(data.connection)
    onClose()
  }

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-200">
        Add Connection
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="connection"
          label={t('Connection string')}
          {...register('connection', { required: true })}
        />
        <div className="mt-5 gap-4 sm:mt-4 sm:flex sm:flex-row-reverse">
          <PrimaryButton type="submit">{t('Add')}</PrimaryButton>
          <SecondaryButton onClick={onClose} type="button">
            {t('Cancel')}
          </SecondaryButton>
        </div>
      </form>
    </Dialog>
  )
}
