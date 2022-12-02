import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

const Index = () => {
  const { push } = useRouter()
  const { user, isLoading } = useUser()

  if (user) {
    push('/dashboard')
  }

  if (!isLoading && !user) {
    push('/signedout')
  }
}

export default Index
