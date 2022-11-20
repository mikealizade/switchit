import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { useRouter } from 'next/router'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
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

export const User: NextPage<{ isValidating: boolean }> = ({ isValidating }): JSX.Element => {
  const { pathname } = useRouter()
  const {
    nickname = '',
    picture = '',
    isNewUser,
    totalPoints = 0,
  } = useSelector((state: RootState) => state.user)

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
