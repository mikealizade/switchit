import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const SignedOutLanding: NextPage = (): JSX.Element => {
  const { replace } = useRouter()

  const onSignUp = () => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('referralCode')
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
