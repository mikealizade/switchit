import { FC } from 'react'
import { Button } from '@components/Button/Button'
import * as S from '@components/Button/Button.style'

type FormButtonProps = {
  disabled?: boolean
  isSubmitting: boolean
  onClick?: () => void
  onCancel: () => void
  text?: string
}

export const FormButtons: FC<FormButtonProps> = ({
  disabled = false,
  isSubmitting = false,
  onCancel,
  text = 'Save',
}): JSX.Element => (
  <S.Buttons>
    <Button type='submit' disabled={isSubmitting || disabled}>
      {isSubmitting ? 'Saving' : text}
    </Button>
    <Button type='reset' mode='secondary' onClick={onCancel}>
      Cancel
    </Button>
  </S.Buttons>
)
