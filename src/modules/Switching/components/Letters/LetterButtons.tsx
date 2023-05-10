import type { NextPage } from 'next'
import { Button } from '@components/Button/Button'
import { ButtonLink } from '@components/Button/Button.style'
import * as S from '@modules/Switching/Switching.style'

type LetterButtonsProps = {
  bankName: string
  onToggleEditable: () => void
  onToggleModal: (arg: boolean) => () => void
  onSave: () => void
  onSend: () => void
  onNext: () => void
  getEmailLink: () => string
  isEmail: boolean
  isDisabled: boolean
  isNextDisabled: boolean
}

export const LetterButtons: NextPage<LetterButtonsProps> = ({
  bankName,
  onToggleEditable,
  onToggleModal,
  onSave,
  onSend,
  onNext,
  getEmailLink,
  isEmail,
  isDisabled,
  isNextDisabled,
}) => {
  const openEmailClient = () => {
    onSend()
    window.open(getEmailLink(), '_blank', 'noreferrer')
  }

  return (
    <S.Buttons>
      <S.ButtonsAlign>
        <Button type='button' onClick={onToggleEditable} mode='secondary' size='small' disabled={isDisabled}>
          Edit
        </Button>
        <Button type='button' size='small' mode='secondary' onClick={onSave} disabled={isDisabled}>
          Save
        </Button>
      </S.ButtonsAlign>
      <S.ButtonsAlign>
        {isEmail ? (
          // <Button type='button' size='small' onClick={onSend} disabled={isDisabled}>
          <Button type='button' onClick={openEmailClient}>
            Send To {bankName}
          </Button>
        ) : (
          <Button type='button' onClick={onToggleModal(true)}>
            How To Send
          </Button>
        )}
        <Button type='button' size='small' onClick={onNext} disabled={!isNextDisabled}>
          Next Impact Action
        </Button>
      </S.ButtonsAlign>
    </S.Buttons>
  )
}
