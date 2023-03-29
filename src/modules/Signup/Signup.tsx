import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from '@modules/Signup/Signup.style'
import { BulletListBold, Div, Text, TextBold } from '@styles/common.style'
import Logo from '../../../public/switchit_logo.png'
import { defaultProfile } from '../../utils/defaultProfile'

const Signup: NextPage = () => {
  const { push } = useRouter()
  const [referralCode, setReferralCode] = useState('')

  const onSignup = () => {
    const userData = { ...defaultProfile, referralCode }

    window.localStorage.setItem('userData', JSON.stringify(userData))
    push('/api/auth/signup')
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('referralCode')

    code && setReferralCode(code)
  }, [setReferralCode])

  return (
    <>
      <Head>
        <title>Switch It Green | Sign Up</title>
        <meta name='description' content='Switch to a green bank on our Green Banking Platform' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.SignUpContainer>
        <S.Content>
          <S.Logo>
            <Image src={Logo} alt='SwitchIt logo' width={76} height={40} unoptimized className='logo' />
            <span>Switch It</span>
          </S.Logo>
          <S.SignupContent>
            <S.SignupHeader>
              Move £1.5 million out of fossil fuel support in 4 simple steps <em>...even with £0 in your account.</em>
            </S.SignupHeader>
            <S.SignupCopy>
              <Text>Since the Paris Agreement, banks have invested over £3.8 trillion in fossil fuels.</Text>
              <Text>
                Take easy, effective climate action by switching your money out of fossil fuel support on our Green Banking Platform. Your
                switch is worth more than you think!
              </Text>
              <Text>Together, we can help end fossil fuel financing.</Text>
              <TextBold>On our Green Banking Platform:</TextBold>
              <BulletListBold>
                <li>Find out what your bank is funding</li>
                <li>Choose a new Switch-It-Green-approved provider</li>
                <li>Make the switch alongside thousands of others in our collective push for change</li>
                <li>Maximise your switch with our ready-to-go lobbying features</li>
              </BulletListBold>
              <TextBold>Ready to Switch It Green?</TextBold>
            </S.SignupCopy>

            <Div rowGap={35}>
              <S.SignInButton type='button' disabled={false} onClick={onSignup}>
                Take Me to Register
              </S.SignInButton>

              <S.SignIn>
                Already have an account?{' '}
                <S.SignInLink>
                  <Link href='/api/auth/login'>Sign in</Link>
                </S.SignInLink>
              </S.SignIn>
            </Div>
          </S.SignupContent>
        </S.Content>
      </S.SignUpContainer>
    </>
  )
}

export default Signup
