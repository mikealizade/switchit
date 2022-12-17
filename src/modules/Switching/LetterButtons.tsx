import type { NextPage } from 'next'
import { Button } from '@components/Button/Button'
import * as S from '@modules/Switching/Switching.style'

type LetterButtonsProps = {
  onToggleEditable: () => void
  onSave: () => void
  onSend: () => void
  onNext: () => void
  isStepComplete: boolean
}

export const LetterButtons: NextPage<LetterButtonsProps> = ({
  onToggleEditable,
  onSave,
  onSend,
  onNext,
  isStepComplete,
}) => {
  return (
    <S.Buttons>
      <Button
        type='button'
        onClick={onToggleEditable}
        mode='secondary'
        size='small'
        disabled={isStepComplete}
      >
        Edit
      </Button>
      <Button
        type='button'
        size='small'
        mode='secondary'
        onClick={onSave}
        disabled={isStepComplete}
      >
        Save
      </Button>
      <Button type='button' size='small' onClick={onSend} disabled={isStepComplete}>
        Send To BanK
      </Button>
      <Button type='button' size='small' onClick={onNext}>
        Next
      </Button>
    </S.Buttons>
  )
}
