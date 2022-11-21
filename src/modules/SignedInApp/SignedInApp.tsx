import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { ProfileDrawer } from '@components/ProfileDrawer/ProfileDrawer'
import { User } from '@components/User/User'
import * as S from '@components/Layout/Layout.style'

const SignedInApp: NextPage<{ showUser: boolean; isValidating: boolean; children: any }> = ({
  showUser,
  isValidating,
  children,
}): JSX.Element => {
  return (
    <S.AppContent>
      {showUser && <User isValidating={isValidating} />}
      {children}
      <ProfileDrawer />
    </S.AppContent>
  )
}

export default withPageAuthRequired(SignedInApp)
