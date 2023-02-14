import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
// import { useSelector } from 'react-redux'
import { SignedOutLanding } from '@modules/SignedOutLanding/SignedOutLanding'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
// import { RootState } from '@state/store'

const Index = () => {
  // const { isNewUser } = useSelector((state: RootState) => state.user)
  const { push } = useRouter()
  const { user, isLoading } = useUser()

  if (user) {
    // push(isNewUser || isNewUser === undefined ? '/switching' : '/dashboard')
    push('/dashboard')
  } else {
    if (!isLoading) {
      return (
        <SignedOutLayout>
          <SignedOutLanding />
        </SignedOutLayout>
      )
    }
  }
}

export default Index
