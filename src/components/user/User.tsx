import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toggleNav } from '@state/menu/menuSlice'
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
  const dispatch = useDispatch()

  console.log('pathname', pathname)

  const {
    email = '',
    nickname = '',
    picture = '',
    isNewUser,
    totalPoints = 0,
  } = useSelector((state: RootState) => state.user)

  return (
    <S.UserContainer>
      <S.Burger onClick={() => dispatch(toggleNav(true))}>|||</S.Burger>
      {isValidating ? (
        <Loader />
      ) : (
        <>
          <S.User>
            {pathname.includes('/switching/') ? (
              <Link href='/switching'>
                <S.ToSwitchLanding>
                  <Image src={'/icons/icon_chevron_left.svg'} alt='' width={20} height={20} />
                  Back To My Journeys
                </S.ToSwitchLanding>
              </Link>
            ) : (
              <S.WelcomeMsg>
                <>{isNewUser ? 'Welcome' : 'Welcome back'}</>, <S.UserName>{nickname}</S.UserName>
              </S.WelcomeMsg>
            )}
          </S.User>
          <S.UserDetails>
            {pathname !== '/profile' && (
              <S.Score>
                {totalPoints}
                <Image src={'/icons/icon_star.svg'} alt='' width={45} height={45} />
              </S.Score>
            )}
            {picture && (
              <>
                <S.SignedInUser>
                  <Image src={picture} alt={nickname} width={30} height={30} unoptimized />
                  <p>{email}</p>
                </S.SignedInUser>
                <S.Notifications>
                  <Image src={'/icons/icon_bell.svg'} alt='' width={26} height={26} />
                </S.Notifications>
              </>
            )}
          </S.UserDetails>
        </>
      )}
    </S.UserContainer>
  )
}
