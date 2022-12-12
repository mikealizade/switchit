import type { NextPage } from 'next'
import { Button } from '@components/Button/Button'
import { SaveStepButton } from '@components/SaveStepButton/SaveStepButton'
import * as S from '@modules/Switching/Switching.style'

type LetterButtonsProps = {
  onToggleEditable: () => void
  onSave: () => void
  onSend: () => void
  onNext: () => void
  isLetterSent: boolean
  isLetterSaved: boolean
  isStepComplete: boolean
  step: number
}

export const LetterButtons: NextPage<LetterButtonsProps> = ({
  onToggleEditable,
  onSave,
  onSend,
  onNext,
  isLetterSent,
  isLetterSaved,
  step,
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
      {/* <Button type='button' size='small' onClick={onSend}>
        Send To BanK
      </Button> */}
      <SaveStepButton
        type='button'
        size='small'
        step={step}
        disabled={isStepComplete}
        onSend={onSend}
      >
        Send To BanK
      </SaveStepButton>
      <Button type='button' size='small' onClick={onNext}>
        Next
      </Button>
    </S.Buttons>
  )
}
