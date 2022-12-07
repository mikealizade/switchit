import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Card } from '@components/Card/Card'
import { SelectActionCards } from '@components/SelectActionCard/SelectActionCard'
import * as S from '@components/Layout/Layout.style'

const asideConfig = {
  '/switching/selectBank': (
    <Card column>
      <h2>Impact Card</h2>
    </Card>
  ),
  '/switching/selectaction': <SelectActionCards />,
}

export const Aside = (): JSX.Element => {
  const { pathname } = useRouter()

  console.log('pathname', pathname)

  return <S.AsideContent>{asideConfig[pathname as keyof typeof asideConfig]}</S.AsideContent>
}
