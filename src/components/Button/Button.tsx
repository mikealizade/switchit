import type { NextPage } from 'next'
import cs from 'classnames'
import * as S from '@components/Button/Button.style'

type ButtonProps = {
  onClick?: (data?: any) => void
  children: string | React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  mode?: string
  colour?: string
  size?: string
  bold?: boolean
  disabled?: boolean
}

type LinkProps = {
  children: string | React.ReactNode
  mode?: string
  size?: string
  disabled?: boolean
}

export const Button: NextPage<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  mode = 'primary',
  colour = '',
  disabled = false,
  size = 'normal',
  bold = false,
}): JSX.Element => (
  <S.Button
    type={type}
    onClick={onClick}
    className={cs(mode, { [colour]: !!colour })}
    disabled={disabled}
    size={size}
    bold={bold}
  >
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

export const TextLink: NextPage<LinkProps> = ({ children, mode = 'primary' }): JSX.Element => (
  <S.TextLink className={mode}>{children}</S.TextLink>
)
