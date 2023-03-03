import type { NextPage } from 'next'
import { Button } from '@components/Button/Button'
import * as S from '@modules/Switching/Switching.style'

type LetterButtonsProps = {
  bankName: string
  onToggleEditable: () => void
  onSave: () => void
  onSend: () => void
  onNext: () => void
  isDisabled: boolean
  isNextDisabled: boolean
}

export const LetterButtons: NextPage<LetterButtonsProps> = ({
  bankName,
  onToggleEditable,
  onSave,
  onSend,
  onNext,
  isDisabled,
  isNextDisabled,
}) => {
  return (
    <S.Buttons>
      <S.ButtonsAlign>
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
      </S.ButtonsAlign>
      <S.ButtonsAlign>
        <Button type='button' size='small' onClick={onSend} disabled={isDisabled}>
          Send To {bankName}
        </Button>
        <Button type='button' size='small' onClick={onNext} disabled={!isNextDisabled}>
          Next
        </Button>
      </S.ButtonsAlign>
    </S.Buttons>
  )
}
