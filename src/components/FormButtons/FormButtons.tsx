import { FC } from 'react'
import { Button } from '@components/Button/Button'
import * as S from '@components/Button/Button.style'
import { Buttons } from '@styles/common.style'

type FormButtonProps = {
  disabled?: boolean
  isSubmitting: boolean
  onClick?: () => void
  onCancel?: () => void
  text?: string
  size?: string
}

export const FormButtons: FC<FormButtonProps> = ({
  disabled = false,
  isSubmitting = false,
  onCancel,
  text = 'Save',
  size = '',
}): JSX.Element => (
  <Buttons align='right'>
    {onCancel && (
      <Button type='reset' mode='secondary' onClick={onCancel}>
        Cancel
      </Button>
    )}
    <Button type='submit' disabled={isSubmitting || disabled} size={size}>
      {isSubmitting ? 'Saving' : text}
    </Button>
  </Buttons>
)
