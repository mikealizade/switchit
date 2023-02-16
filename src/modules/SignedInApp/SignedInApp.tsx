import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { Aside as AsideContent } from '@components/Aside/Aside'
import { Drawer } from '@components/Drawer/Drawer'
import * as S from '@components/Layout/Layout.style'
import { User } from '@components/User/User'
import { useMediaQuery } from '@hooks/useMediaQuery'

const SignedInApp: NextPage<{ isValidating: boolean; children: any }> = ({
  isValidating,
  children,
}): JSX.Element => {
  const { pathname } = useRouter()
  const { isMobile } = useMediaQuery()
  const hasSwitchDrawer = pathname.includes('/switching')
  const hasDrawer = pathname === '/profile' || pathname === '/dashboard'
  const hasAside = pathname.includes('/switching/')
  const showUser = pathname !== '/settings' || (pathname === '/settings' && isMobile)

  return (
    <>
      <S.AppContent hasAside={hasAside}>
        {showUser && <User isValidating={isValidating} />}
        {children}
        {hasDrawer && <Drawer />}
      </S.AppContent>
      {hasAside && (
        <S.Aside>
          <AsideContent />
          {hasSwitchDrawer && <Drawer narrow />}
        </S.Aside>
      )}
    </>
  )
}

export default withPageAuthRequired(SignedInApp)
