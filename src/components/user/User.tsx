import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { Button } from '@components/Button/Button'
import * as S from '@components/User/User.style'

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
  const { replace } = useRouter()

  console.log('user', user)
  const logIn = () => {
    replace('/api/auth/login')
  }

  const logOut = () => {
    replace('/api/auth/logout')
  }

  const callHandler = async () => {
    const data = await fetch('/api/hello')
    const response = await data.json()

    console.log('>> reponse', response)
  }

  useEffect(() => {
    dispatch(setUser(user))
    callHandler()
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
