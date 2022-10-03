import type { NextPage } from 'next'
import classNames from 'classnames'
import * as S from '@components/Button/Button.style'

type ButtonProps = {
  onClick?: () => void
  children: string | React.ReactNode
  type: string
  mode?: string
  disabled?: boolean
}

export const Button = ({
  onClick,
  children,
  type = 'button',
  mode = 'primary',
  disabled = false,
}: ButtonProps): JSX.Element => (
  <S.Button type='button' onClick={onClick} className={mode} disabled={disabled}>
    {children}
  </S.Button>
)
