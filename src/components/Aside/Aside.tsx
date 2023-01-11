import { useRouter } from 'next/router'
import { ImpactCard } from '@components/ImpactCard/ImpactCard'
import * as S from '@components/Layout/Layout.style'

export const Aside = (): JSX.Element => {
  const { pathname } = useRouter()
  const asideContent = pathname.includes('/switching') ? <ImpactCard /> : null

  return <S.AsideContent>{asideContent}</S.AsideContent>
}
