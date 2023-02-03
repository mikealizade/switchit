import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { SignedOutLanding } from '@modules/SignedOutLanding/SignedOutLanding'
import { RootState } from '@state/store'

const Index = () => {
  const { isNewUser } = useSelector((state: RootState) => state.user)
  const { push } = useRouter()
  const { user, isLoading } = useUser()

  if (user) {
    push(isNewUser || isNewUser === undefined ? '/switching' : '/dashboard')
  } else {
    if (!isLoading) {
      return <SignedOutLanding />
    }
  }

  // if (!isLoading && !user) {
  //   push('/signedout')
  // }
}

export default Index
