import PostSignupFlow from '@modules/PostSignupFlow/PostSignupFlow'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'
import useSWR from 'swr'

const Home = () => {
  const router = useRouter()
  const { user, user: { sub = '' } = {} } = useUser()

  console.log('user', user)

  const [isNewUser, setNewUser] = useState(null)

  const fetchUserData = useCallback(async () => {
    // useSWR doesnt work here?
    const response = await fetch(`/api/db/user/${sub}`)
    const { user: { user_metadata: { isNewUser = false } = {} } = {} } = await response.json()

    setNewUser(isNewUser)
  }, [sub])

  useEffect(() => {
    sub && fetchUserData()
  }, [sub, fetchUserData])

  console.log('user', user)
  console.log('isNewUser', isNewUser)

  useEffect(() => {
    if (isNewUser !== null && !isNewUser) {
      router.replace('/dashboard')
    }
  }, [isNewUser, router])

  if (isNewUser !== null && isNewUser) return <PostSignupFlow />
}

export default Home
