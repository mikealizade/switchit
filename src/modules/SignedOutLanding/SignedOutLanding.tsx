import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import * as S from './SignedOutLanding.style'

export const SignedOutLanding: NextPage = (): JSX.Element => {
  const { replace } = useRouter()

  const onSignUp = () => {
    const params = new URLSearchParams(window.location.search)

    console.log('params', params)

    const code = params.get('referralCode')

    console.log('code', code)

    const route = code ? `/signup?referralCode=${code}` : '/signup'
    replace(route)
  }

  return (
    <div>
      You are signed out
      <br />
      <Link href='/api/auth/login'>Sign in</Link>
      <br />
      <p onClick={onSignUp}>Sign up</p>
    </div>
  )
}
