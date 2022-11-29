import type { NextPage } from 'next'
import * as S from '@components/Card/Card.style'

type CardProps = {
  column?: boolean
  shadow?: boolean
  padded?: boolean
  stretch?: boolean
  rowGap?: number
  children: React.ReactNode
}

export const Card: NextPage<CardProps> = ({
  column = false,
  shadow = false,
  padded = false,
  rowGap = 80,
  stretch = false,
  children,
}): JSX.Element => {
  return (
    <S.Card column={column} shadow={shadow} padded={padded} stretch={stretch} rowGap={rowGap}>
      {children}
    </S.Card>
  )
}
