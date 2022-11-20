import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

const Home = () => {
  const router = useRouter()
  const { user, isLoading } = useUser()

  if (user) {
    router.replace('/dashboard')
  }

  if (!isLoading && !user) {
    router.replace('/signedout')
  }
}

export default Home
