import type { NextPage } from 'next'
import classNames from 'classnames'
import * as S from '@components/Button/Button.style'

type ButtonProps = {
  onClick?: () => void
  children: string | React.ReactNode
  type: 'button' | 'reset' | 'submit'
  mode?: string
  disabled?: boolean
}

export const Button: NextPage<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  mode = 'primary',
  disabled = false,
}): JSX.Element => (
  <S.Button type={type} onClick={onClick} className={mode} disabled={disabled}>
    {children}
  </S.Button>
)

export const TextButton: NextPage<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  mode = 'primary',
  disabled = false,
}): JSX.Element => (
  <S.TextButton type={type} onClick={onClick} className={mode} disabled={disabled}>
    {children}
  </S.TextButton>
)
