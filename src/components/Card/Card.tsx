import type { NextPage } from 'next'
import * as S from '@components/Card/Card.style'

type CardProps = {
  column?: boolean
  shadow?: boolean
  compact?: boolean
  children: React.ReactNode
}

export const Card: NextPage<CardProps> = ({
  column = false,
  shadow = false,
  compact = false,
  children,
}) => {
  return (
    <S.Card column={column} shadow={shadow} compact={compact}>
      {children}
    </S.Card>
  )
}
