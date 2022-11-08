import { useEffect, useState, useCallback } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { fetcher } from '@utils/functions'
import { useUpdateUser } from '@hooks/useUpdateUser'
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
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()
  const {
    nickname = '',
    picture = '',
    sub: userId = '',
    isNewUser,
  } = useSelector((state: RootState) => state.user)
  const [userData, setUserData] = useState<User>()
  const { data: { user = {} } = {}, error } = useSWR(
    !userId ? `/api/db/user/${sub}` : null,
    fetcher,
  )

  const updateIsNewUser = useCallback(async () => {
    updateUser({ isNewUser: false, user_metadata: { isNewUser: false } })
  }, [updateUser])

  useEffect(() => {
    if (user?._id) {
      try {
        setUserData(user)
        updateIsNewUser()
        dispatch(setUser({ ...user, ...(isNewUser && { isNewUser: false }) }))
      } catch {
        throw new Error('user not updated!')
      }
    }
  }, [isNewUser, user, updateIsNewUser, dispatch])

  return (
    <S.UserContainer>
      {isNewUser ? (
        <S.User>
          <span>
            Hi <S.UserName>{nickname}</S.UserName>, first time welcome message!
          </span>
        </S.User>
      ) : (
        <>
          <S.User>
            <Image src={picture} alt={nickname} width={50} height={50} unoptimized />
            <span>
              Hi <S.UserName>{nickname}</S.UserName>, welcome back!
            </span>
          </S.User>
          {pathname !== '/profile' && <S.Score>{userData?.points}</S.Score>}
        </>
      )}
    </S.UserContainer>
  )
}
