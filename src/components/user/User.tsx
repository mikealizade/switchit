import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { fetcher } from '@utils/functions'
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
  const {
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()
  const {
    nickname = '',
    picture = '',
    sub: userId = '',
  } = useSelector((state: RootState) => state.user)
  const [userData, setUserData] = useState<User>()
  const { data: { user = {} } = {}, error } = useSWR(
    !userId ? `/api/db/user/${sub}` : null,
    fetcher,
  )

  useEffect(() => {
    if (user?._id) {
      setUserData(user)
      dispatch(setUser(user))
    }
  }, [user, dispatch])

  return (
    <S.UserContainer>
      {userId ? (
        <>
          <S.User>
            <Image src={picture} alt={nickname} width={50} height={50} unoptimized />
            <span>
              Hi <S.UserName>{nickname}</S.UserName>, welcome back!
            </span>
          </S.User>
          {pathname !== '/profile' && <S.Score>{userData?.points}</S.Score>}
        </>
      ) : (
        <>
          <S.User>
            <span>Hi, welcome back!</span>
          </S.User>
        </>
      )}
    </S.UserContainer>
  )
}
