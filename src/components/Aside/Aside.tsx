import { useRouter } from 'next/router'
// import { useSelector } from 'react-redux'
import { ImpactCard } from '@components/ImpactCard/ImpactCard'
import * as S from '@components/Layout/Layout.style'
// import { RootState } from '@state/store'

export const Aside = (): JSX.Element => {
  const { pathname } = useRouter()
  // const { isImpactCardOpen } = useSelector((state: RootState) => state.impactCard)
  const asideContent = pathname.includes('/switching') ? <ImpactCard /> : null

  return <S.AsideContent>{asideContent}</S.AsideContent>
}
