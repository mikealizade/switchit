import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from '@modules/Signup/Signup.style'
import { Div, Text } from '@styles/common.style'
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
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.SignUpContainer>
        <S.Content>
          <S.Logo>
            <Image src={Logo} alt='SwitchIt logo' width={76} height={40} unoptimized className='logo' />
            <span>Switch It</span>
          </S.Logo>
          <S.SignupContent>
            <S.SignupHeader>One switch, unlimited impact.</S.SignupHeader>
            <S.SignupCopy>
              <Text>
                Elit consectetur duis labore ex sunt reprehenderit in id. In irure adipisicing esse voluptate consectetur tempor ipsum
                aliqua sint. Tempor ea adipisicing commodo anim aliquip esse. Proident et reprehenderit ea ea est commodo anim culpa commodo
                irure sit.
              </Text>
              <Text>
                Elit consectetur duis labore ex sunt reprehenderit in id. In irure adipisicing esse voluptate consectetur tempor ipsum
                aliqua sint. Tempor ea adipisicing commodo anim aliquip esse. Proident et reprehenderit ea ea est commodo anim culpa commodo
                irure sit.
              </Text>
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
