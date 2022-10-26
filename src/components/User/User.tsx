// import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
// import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0'
// import { setUser } from '@state/user/userSlice'
// import { Button } from '@components/Button/Button'
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
  const {
    // user: authUser,
    user: { sub = '', nickname = '', picture = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()
  // const { replace } = useRouter()
  // const {
  //   data: {
  //     user: {
  //       user_metadata: { isNewUser },
  //     },
  //   } = {},
  //   error,
  // } = useSWR(sub ? `/api/db/user/${sub}` : null, fetcher)
  // const [userData, setUserData] = useState<User>()

  // console.log(22, { isNewUser })

  // useEffect(() => {
  //   user?._id && setUserData(user)
  // }, [user])

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
          {/* <S.Score>{userData?.points}</S.Score> */}
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
