import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { Aside as AsideContent } from '@components/Aside/Aside'
import { Drawer } from '@components/Drawer/Drawer'
import { User } from '@components/User/User'
import * as S from '@components/Layout/Layout.style'

const SignedInApp: NextPage<{ showUser: boolean; isValidating: boolean; children: any }> = ({
  showUser,
  isValidating,
  children,
}): JSX.Element => {
  const { pathname } = useRouter()
  const hasSwitchDrawer = pathname.includes('/switching')
  const hasDrawer = pathname === '/profile'

  return (
    <>
      <S.AppContent>
        {showUser && <User isValidating={isValidating} />}
        {children}
        {hasDrawer && <Drawer />}
      </S.AppContent>
      {pathname.includes('/switching/') && (
        <S.Aside>
          <AsideContent />
          {hasSwitchDrawer && <Drawer narrow />}
        </S.Aside>
      )}
    </>
  )
}

export default withPageAuthRequired(SignedInApp)
