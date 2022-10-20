import PostSignupFlow from '@modules/PostSignupFlow/PostSignupFlow'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

const Home = () => {
  const router = useRouter()
  const { user = {}, user: { isNewUser = false } = {} } = useUser()

  console.log('>> user', user)

  useEffect(() => {
    if (!isNewUser) {
      router.replace('/dashboard')
    }
  }, [isNewUser, router])

  if (isNewUser) return <PostSignupFlow />
}

export default Home
