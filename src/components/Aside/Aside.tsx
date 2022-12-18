import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Card } from '@components/Card/Card'
import { SelectActionCards } from '@components/SelectActionCard/SelectActionCard'
import * as S from '@components/Layout/Layout.style'
import { ImpactCalculator } from '@components/ImpactCalculator/ImpactCalculator'

const asideConfig = {
  '/switching/selectBank': (
    <>
      <ImpactCalculator />
    </>
  ),
  '/switching/selectaction': <SelectActionCards />,
}

export const Aside = (): JSX.Element => {
  const { pathname } = useRouter()

  console.log('pathname', pathname)

  return <S.AsideContent>{asideConfig[pathname as keyof typeof asideConfig]}</S.AsideContent>
}
