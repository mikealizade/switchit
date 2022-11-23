import type { NextPage } from 'next'
import * as S from '@components/Fallback/Fallback.style'

export const Fallback: NextPage<{ error: string }> = ({ error }): JSX.Element => {
  console.log('error', error)
  return (
    <S.Fallback>
      <p>An error has occurred.</p>
      <p>{error}</p>
    </S.Fallback>
  )
}
