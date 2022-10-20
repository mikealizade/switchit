import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { Button } from '@components/Button/Button'
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

export const User: NextPage = () => {
  const dispatch = useDispatch()
  const {
    user = {},
    user: { sub = '', nickname = '', picture = '' } = {},
    error = {},
    isLoading = false,
  } = useUser()
  const { replace } = useRouter()
  const [userData, setUserData] = useState<User>()

  console.log('>> user >>>', user)
  const fetchUserData = async (): Promise<void> => {
    const response = await fetch(`/api/db/user/${sub}`)
    const { user = {} } = await response.json()

    setUserData(user)
  }

  useEffect(() => {
    sub && fetchUserData()
  }, [sub])

  useEffect(() => {
    dispatch(setUser(user))
  }, [user, dispatch])

  return (
    <S.UserContainer>
      {sub ? (
        <>
          <S.User>
            <Image src={picture || ''} alt={nickname || ''} width={50} height={50} unoptimized />
            <span>
              Hi <S.UserName>{nickname}</S.UserName>, welcome back!
            </span>
          </S.User>
          <S.Score>{userData?.points}</S.Score>
          <Button type='button' onClick={() => replace('/api/auth/logout')}>
            Log out
          </Button>
        </>
      ) : (
        <>
          <S.User>
            <span>Hi, welcome back!</span>
          </S.User>
          <Button type='button' onClick={() => replace('/api/auth/login')}>
            Log in
          </Button>
        </>
      )}
    </S.UserContainer>
  )
}
