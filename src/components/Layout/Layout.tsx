import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSWR, { SWRResponse } from 'swr'
import useSWRMutation from 'swr/mutation'
import * as S from '@components/Layout/Layout.style'
import { MobileNavigation } from '@components/Navigation/MobileNavigation'
import { Navigation } from '@components/Navigation/Navigation'
import { Toast } from '@components/Toast/Toast'
import { useCheckReferralCodeAndUpdate } from '@hooks/useCheckReferralCodeAndUpdate'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { useUpdateUser } from '@hooks/useUpdateUser'
import PageNotFound from '@modules/PageNotFound/PageNotFound'
import SignedInApp from '@modules/SignedInApp/SignedInApp'
import { RootState } from '@state/store'
import { setUser } from '@state/user/userSlice'
import { sendRequest, setTotalPoints, fetcher } from '@utils/functions'

const signedOutPages = [
  '/',
  '/why-switch-it',
  '/about',
  '/students',
  '/donate',
  '/disclaimer',
  '/privacy-policy',
  '/terms',
  '/signup',
]

export const Layout: NextPage<{ children: any }> = ({ children }): JSX.Element => {
  const { user: auth0user = {} } = useUser()
  const { sub } = auth0user
  const { sub: userId = '' } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const { pathname } = useRouter()
  const {
    data: { user = {} } = {},

    error,
    isValidating,
  } = useSWR(!userId ? `/api/db/user/${sub}` : null, fetcher) as SWRResponse
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const checkReferralCodeAndUpdate = useCheckReferralCodeAndUpdate()
  const updateUser = useUpdateUser()
  const { isMobile } = useMediaQuery()
  const { user_metadata: { isNewUser = false } = {} } = user || {}
  const isHome = pathname === '/'
  const isSignedOutPage = signedOutPages.includes(pathname)
  const is404 = pathname === '/404'

  console.log('pathname', pathname)

  const showUser = pathname !== '/settings'
  console.log('user', user)

  const saveNewUserData = useCallback(
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _id, ...newUserData } = userData
        const body = {
          filter: { sub },
          payload: { $set: newUserData },
          collection: 'users',
          upsert: true,
        }

        request(body)

        checkReferralCodeAndUpdate(`?referralCode=${storedUser.referralCode}`)

        window.localStorage.removeItem('userData')

        dispatch(setUser(newUserData))
      } catch (error) {
        //error
      }
    },
    [auth0user, user, sub, dispatch, checkReferralCodeAndUpdate, request],
  )

  const updateIsNewUser = useCallback(async () => {
    updateUser({ isNewUser: false, user_metadata: { isNewUser: false } })
  }, [updateUser])

  useEffect(() => {
    if (user?._id) {
      try {
        if (isNewUser) {
          saveNewUserData(isNewUser)
          updateIsNewUser()
        } else {
          dispatch(
            setUser({
              ...user,
              ...(isNewUser && { isNewUser: false }),
              totalPoints: setTotalPoints(user?.profile?.switchItPoints),
            }),
          )
        }
      } catch {
        throw new Error('user not updated!')
      }
    }
  }, [isNewUser, user, updateIsNewUser, saveNewUserData, dispatch])

  return (
    <>
      {is404 ? (
        <PageNotFound />
      ) : isSignedOutPage ? (
        <>{children}</>
      ) : (
        <S.AppContainer isHome={isHome}>
          <Toast />
          <>
            {isMobile ? <MobileNavigation /> : <Navigation />}
            <SignedInApp showUser={showUser} isValidating={isValidating}>
              {children}
            </SignedInApp>
          </>
        </S.AppContainer>
      )}
    </>
  )
}
