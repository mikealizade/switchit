import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TextButton } from '@components/Button/Button'
import * as S from '@components/ProfileAwardsBadges/ProfileAwardsBadges.style'
import { useShareCode } from '@hooks/useShareCode'
import { useUpdatePoints } from '@hooks/useUpdatePoints'

export const HowItWorks = () => {
  const shareCode = useShareCode()
  const { addPoints } = useUpdatePoints('sharingCodes')

  const onShareCode = () => {
    shareCode(5, 'add')
    addPoints(5)
  }

  return (
    <>
      <S.Header>Providers Switched</S.Header>
      <p>
        {`It's`} why {`you're`} here! Earn your first badge by switching your current account to a
        green bank. {`We've`} got more switching journeys for your other providers coming soon.
      </p>
      <S.StartLink>
        <Link href='/switching'>Start a Switching Journey</Link>
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={10} height={10} />
      </S.StartLink>

      <S.Header>Programs Completed</S.Header>
      <p>
        We are harnessing the power of switching en masse. Get your whole school, business, or
        university to Switch It Green with one of our programs. Collect badges for each completed
        program. Find out more on our programs page.
      </p>
      <S.StartLink>
        <Link href='/programs'>Start a Program</Link>
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={10} height={10} />
      </S.StartLink>

      <S.Header>Articles Read</S.Header>
      <p>
        The first step to taking impactful climate action is being informed. Get clued up on all
        things green finance and understand the power you have to contribute to positive change.
        Check out our resources and earn badges for each one you read.
      </p>
      <S.StartLink>
        <Link href='/resources'>Visit our Resources page</Link>
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={10} height={10} />
      </S.StartLink>

      <S.Header>Friends Switched</S.Header>
      <p>
        Want to double, quadruple, or decuple your impact? Of course you do. Every 10 friends
        switched means over £10 million moved out of fossil fuel support.
      </p>
      <S.StartLink>
        <TextButton onClick={onShareCode}>Invite Friends</TextButton>
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={10} height={10} />
      </S.StartLink>
    </>
  )
}
