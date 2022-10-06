import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setUser } from '@store/user/userSlice'
import { Button } from '@components/Button/Button'
import * as S from '@components/User/User.style'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

// type PageProps = {
//   data: any
// }

export const User: NextPage = () => {
  const dispatch = useDispatch()
  const {
    user = {},
    user: { sid = '', nickname = '', picture = '' } = {},
    error = {},
    isLoading = false,
  } = useUser()
  const router = useRouter()

  const logIn = () => {
    router.replace('/api/auth/login')
  }

  const logOut = () => {
    router.replace('/api/auth/logout')
  }

  useEffect(() => {
    dispatch(setUser(user))
  }, [user, dispatch])

  return (
    <S.UserContainer>
      {sid ? (
        <>
          <S.User>
            <Image src={picture || ''} alt={nickname || ''} width={50} height={50} unoptimized />
            <span>
              Hi <S.UserName>{nickname}</S.UserName>, welcome back!
            </span>
          </S.User>
          <S.Score>120</S.Score>
          <Button type='button' onClick={logOut}>
            Log out
          </Button>
        </>
      ) : (
        <>
          <S.User>
            <span>Hi, welcome back!</span>
          </S.User>
          <Button type='button' onClick={logIn}>
            Log in
          </Button>
        </>
      )}
    </S.UserContainer>
  )
}
