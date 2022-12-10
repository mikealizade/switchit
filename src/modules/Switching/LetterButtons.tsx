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
}

export const LetterButtons: NextPage<LetterButtonsProps> = ({
  onToggleEditable,
  onSave,
  onSend,
  onNext,
  isLetterSent,
  isLetterSaved,
}) => {
  return (
    <S.Buttons>
      <Button type='button' onClick={onToggleEditable} size='small'>
        Edit
      </Button>
      <Button type='button' size='small' onClick={onSave}>
        Save
      </Button>
      {/* <Button type='button' size='small' onClick={onSend}>
        Send To BanK
      </Button> */}
      <SaveStepButton type='button' size='small' step={2}>
        Send To BanK
      </SaveStepButton>
      <Button
        type='button'
        size='small'
        onClick={onNext}
        disabled={!(isLetterSent || isLetterSaved)}
      >
        Next
      </Button>
    </S.Buttons>
  )
}
