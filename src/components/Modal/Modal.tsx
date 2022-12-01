import { FC } from 'react'
import { Button } from '@components/Button/Button'
import * as S from './Modal.style'

type ModalProps = {
  mode?: string
  children: React.ReactNode
  title?: string
  confirmText?: string
  loadingText?: string
  cancelText?: string
  isLoading?: boolean
  isDisabled?: boolean
  showCancel?: boolean
  onConfirm: (data: any) => void
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({
  mode = '',
  children,
  title = '',
  confirmText = 'Confirm',
  loadingText = 'Confirming',
  cancelText,
  onConfirm,
  onClose,
  showCancel = true,
  isLoading = false,
  isDisabled = false,
}): JSX.Element => {
  return (
    <>
      <S.ModalContainer data-testid='modal-bg' {...(onClose && { onClick: onClose })} />
      <S.ModalContent role='dialog'>
        {title && <h2>{title}</h2>}
        <S.ModalBody>{children}</S.ModalBody>

        <S.ButtonsContainer>
          {showCancel && (
            <Button type='button' mode='secondary' onClick={onClose}>
              {cancelText}
            </Button>
          )}
          <Button type='button' disabled={isDisabled} onClick={onConfirm}>
            {confirmText}
          </Button>
        </S.ButtonsContainer>
      </S.ModalContent>
    </>
  )
}
