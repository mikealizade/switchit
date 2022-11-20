import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Navigation } from '@components/Navigation/Navigation'
import { User } from '@components/User/User'
import { Aside as AsideContent } from '@components/Aside/Aside'
import { ProfileDrawer } from '@components/ProfileDrawer/ProfileDrawer'
import * as S from '@components/Layout/Layout.style'
import useSWR, { SWRResponse } from 'swr'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { fetcher, getTotalPoints } from '@utils/functions'
import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { useCheckReferralCodeAndUpdate } from '@hooks/useCheckReferralCodeAndUpdate'
import { useUpdateUser } from '@hooks/useUpdateUser'

const Layout: NextPage<{ children: any }> = ({ children }): JSX.Element => {
  const { pathname, replace } = useRouter()
  const isHome = pathname === '/'
  const isSignedOut = pathname === '/signedout'
  const isSigningUp = pathname === '/signup'
  const isProfile = pathname === '/profile'
  const isDashboard = pathname === '/dashboard'
  const showUser = pathname !== '/settings'
  const { user: auth0user = {} } = useUser()
  const { sub } = auth0user
  const { sub: userId = '' } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const checkReferralCodeAndUpdate = useCheckReferralCodeAndUpdate()
  const updateUser = useUpdateUser()

  const {
    data: { user = {} } = {},
    error,
    isValidating,
  } = useSWR(!userId ? `/api/db/user/${sub}` : null, fetcher) as SWRResponse
  const { user_metadata: { isNewUser = false } = {} } = user || {}

  const onSignUp = () => {
    const params = new URLSearchParams(window.location.search)

    console.log('params', params)

    const code = params.get('referralCode')

    console.log('code', code)

    const route = code ? `/signup?referralCode=${code}` : '/signup'
    replace(route)
  }

  const saveUserData = useCallback(
    async (isNewUser: boolean) => {
      try {
        const storedUser = JSON.parse(window.localStorage.getItem('userData')!)
        const userData = {
          ...auth0user,
          ...user,
          ...storedUser,
          isNewUser,
        }
        //mongo errors if trying to overwrite _id
        const { _id, ...newUserData } = userData
        const body = {
          filter: { sub },
          payload: { $set: newUserData },
          collection: 'users',
          upsert: true,
        }

        await fetcher(`/api/db/updateOne`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })

        checkReferralCodeAndUpdate(`?referralCode=${storedUser.referralCode}`)

        window.localStorage.removeItem('userData')
        dispatch(setUser(newUserData))
      } catch (error) {
        //error
      }
    },
    [auth0user, user, sub, dispatch, checkReferralCodeAndUpdate],
  )

  const updateIsNewUser = useCallback(async () => {
    updateUser({ isNewUser: false, user_metadata: { isNewUser: false } })
  }, [updateUser])

  useEffect(() => {
    if (user?._id) {
      try {
        if (isNewUser) {
          saveUserData(isNewUser)
          updateIsNewUser()
        } else {
          dispatch(
            setUser({
              ...user,
              ...(isNewUser && { isNewUser: false }),
              totalPoints: getTotalPoints(user?.profile?.switchItPoints),
            }),
          )
        }
      } catch {
        throw new Error('user not updated!')
      }
    }
  }, [isNewUser, user, updateIsNewUser, saveUserData, dispatch])

  if (isHome || isSigningUp) {
    return <>{children}</>
  }

  return (
    <S.AppContainer isHome={isHome}>
      {isSignedOut ? (
        <div>
          You are signed out
          <br />
          <Link href='/api/auth/login'>Sign in</Link>
          <br />
          <p onClick={onSignUp}>Sign up</p>
        </div>
      ) : (
        <>
          <Navigation />
          {/* {isProfile || isDashboard ? ( */}
          <>
            <S.AppContent>
              {showUser && <User isValidating={isValidating} />}
              {children}
              <ProfileDrawer />
            </S.AppContent>
          </>
          {/* ) 
          : (
            <>
              <S.AppContent>
                <User />
                {children}
              </S.AppContent>
              <S.Aside>
                <AsideContent />
              </S.Aside>
            </>
          )
          } */}
        </>
      )}
    </S.AppContainer>
  )
}

export default withPageAuthRequired(Layout)
