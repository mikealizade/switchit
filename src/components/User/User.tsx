import { useEffect, useState, useCallback } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { useRouter } from 'next/router'
import useSWR, { SWRResponse } from 'swr'
import { useUser } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { fetcher, getTotalPoints } from '@utils/functions'
import { useUpdateUser } from '@hooks/useUpdateUser'
import { Loader } from '@components/Loader/Loader'

import * as S from '@components/User/User.style'

type User = {
  _id: string
  nickname: string
  name: string
  picture: string
  updated_at: string
  email: string
  email_verified: string
  sub: string
  sid: string
  age: number
  location: string
  programCode: string
  referralCode: string
  points: number
}

export const User: NextPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const { pathname } = useRouter()
  const updateUser = useUpdateUser()
  const {
    nickname = '',
    picture = '',
    sub: userId = '',
    isNewUser,
    totalPoints = 0,
  } = useSelector((state: RootState) => state.user)
  const { user: { sub = '' } = {} } = useUser()
  const {
    data: { user = {} } = {},
    error,
    isValidating,
  } = useSWR(!userId ? `/api/db/user/${sub}` : null, fetcher) as SWRResponse
  const [userData, setUserData] = useState<User>()

  const updateIsNewUser = useCallback(async () => {
    updateUser({ isNewUser: false, user_metadata: { isNewUser: false } })
  }, [updateUser])

  useEffect(() => {
    if (user?._id) {
      try {
        setUserData(user)
        updateIsNewUser()
        dispatch(
          setUser({
            ...user,
            ...(isNewUser && { isNewUser: false }),
            totalPoints: getTotalPoints(user.profile.switchItPoints),
          }),
        )
      } catch {
        throw new Error('user not updated!')
      }
    }
  }, [isNewUser, user, updateIsNewUser, dispatch])

  return (
    <S.UserContainer>
      {isValidating ? (
        <Loader />
      ) : isNewUser ? (
        <S.User>
          <span>
            Hi <S.UserName>{nickname}</S.UserName>, first time welcome message!
          </span>
        </S.User>
      ) : (
        <>
          <S.User>
            {picture && <Image src={picture} alt={nickname} width={50} height={50} unoptimized />}
            <S.WelcomeMsg>
              Welcome back, <S.UserName>{nickname}</S.UserName>
            </S.WelcomeMsg>
          </S.User>
          {pathname !== '/profile' && (
            <S.Score>
              {totalPoints}
              <Image src={'/icons/icon_star.svg'} alt='' width={45} height={45} />
            </S.Score>
          )}
        </>
      )}
    </S.UserContainer>
  )
}
