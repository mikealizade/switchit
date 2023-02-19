import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '@components/Loader/Loader'
import { mobileNav, subNav } from '@components/Navigation/data'
import * as S from '@components/User/User.style'
import { useGetTotalPoints } from '@hooks/useGetTotalPoints'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { toggleImpactCard } from '@state/impactCard/impactCardSlice'
import { toggleNav } from '@state/nav/navSlice'
import { RootState } from '@state/store'

export const User: NextPage<{ isValidating: boolean }> = ({ isValidating }): JSX.Element => {
  const { pathname } = useRouter()

  console.log('pathname', pathname)

  console.log(
    '[...mobileNav, ...subNav]',
    [...mobileNav, ...subNav].map(({ text }) => text),
  )

  const dispatch = useDispatch()
  const { isMobile } = useMediaQuery()
  const totalPoints = useGetTotalPoints()
  const {
    email = '',
    nickname = '',
    picture = '',
    isNewUser,
  } = useSelector((state: RootState) => state.user)

  let [pageTitle] = [...mobileNav, ...subNav]

    .map(({ text }) => text.toLowerCase())
    .filter((item: string) => pathname.includes(item))
  console.log('pageTitle', pageTitle)
  pageTitle = pageTitle === 'switching' ? 'Switching Journeys' : pageTitle
  const isSwitchingJourney = pathname.includes('/switching')

  console.log('pageTitle', pageTitle)

  return (
    <S.UserContainer>
      <S.Burger onClick={() => dispatch(toggleNav())}>
        <Image src={`/icons/icon_hamburger_white.svg`} alt='' width={23} height={19} />
      </S.Burger>
      {isMobile ? (
        <>
          <S.SectionHeader>
            <S.SectionName>{pageTitle}</S.SectionName>
          </S.SectionHeader>
          {isSwitchingJourney && isMobile && (
            <S.ImpactCardToggle onClick={() => dispatch(toggleImpactCard())}>
              <Image src={'/icons/icon_leaf.svg'} alt='' width={34} height={34} />
            </S.ImpactCardToggle>
          )}
        </>
      ) : isValidating ? (
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
                <Image src={'/icons/icon_star_green.svg'} alt='' width={45} height={45} />
              </S.Score>
            )}
            {picture && (
              <>
                <S.SignedInUser>
                  <Image src={picture} alt={nickname} width={30} height={30} unoptimized />
                  <p>{email}</p>
                </S.SignedInUser>
                {/* <S.Notifications>
                  <Image src={'/icons/icon_bell.svg'} alt='' width={26} height={26} />
                </S.Notifications> */}
              </>
            )}
          </S.UserDetails>
        </>
      )}
    </S.UserContainer>
  )
}
