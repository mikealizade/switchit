import type { NextPage } from 'next'
import { Button } from '@components/Button/Button'
import * as S from '@modules/Switching/Switching.style'

type LetterButtonsProps = {
  onToggleEditable: () => void
  onSave: () => void
  onSend: () => void
  onNext: () => void
  isDisabled: boolean
}

export const LetterButtons: NextPage<LetterButtonsProps> = ({
  onToggleEditable,
  onSave,
  onSend,
  onNext,
  isDisabled,
}) => {
  return (
    <S.Buttons>
      <Button
        type='button'
        onClick={onToggleEditable}
        mode='secondary'
        size='small'
        disabled={isDisabled}
      >
        Edit
      </Button>
      <Button type='button' size='small' mode='secondary' onClick={onSave} disabled={isDisabled}>
        Save
      </Button>
      <Button type='button' size='small' onClick={onSend} disabled={isDisabled}>
        Send To Bank
      </Button>
      <Button type='button' size='small' onClick={onNext}>
        Next
      </Button>
    </S.Buttons>
  )
}
