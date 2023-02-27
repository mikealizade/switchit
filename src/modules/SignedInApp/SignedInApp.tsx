import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Aside as AsideContent } from '@components/Aside/Aside'
import { Drawer } from '@components/Drawer/Drawer'
import * as S from '@components/Layout/Layout.style'
import { User } from '@components/User/User'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { RootState } from '@state/store'

const SignedInApp: NextPage<{ isValidating: boolean; children: any }> = ({
  isValidating,
  children,
}): JSX.Element => {
  const { pathname } = useRouter()
  const { isMobile } = useMediaQuery()
  const { isImpactCardOpen } = useSelector((state: RootState) => state.impactCard)
  const hasDrawer = pathname === '/profile'
  const hasAside = pathname.includes('/switching/')
  const showUser = pathname !== '/settings' || (pathname === '/settings' && isMobile)

  return (
    <>
      <S.AppContent hasAside={hasAside}>
        <S.AppContentContainer>
          {showUser && <User isValidating={isValidating} />}
          {children}
          {hasDrawer && <Drawer narrow={false} />}
        </S.AppContentContainer>
        {hasAside && (
          <S.Aside isImpactCardOpen={isMobile ? isImpactCardOpen : true}>
            <AsideContent />
          </S.Aside>
        )}
        {!hasDrawer && <Drawer narrow />}
      </S.AppContent>
    </>
  )
}

export default withPageAuthRequired(SignedInApp)
