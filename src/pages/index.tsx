import { useCallback, useEffect, useState } from 'react'
import PostSignupFlow from '@modules/PostSignupFlow/PostSignupFlow'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useUser } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { fetcher } from '@utils/functions'
import useSWR from 'swr'

const Home = () => {
  const router = useRouter()
  const { user, user: { sub = '' } = {}, isLoading } = useUser()
  const dispatch = useDispatch()
  const [isNewUser, setNewUser] = useState(null)

  const fetchUserData = useCallback(async () => {
    try {
      // useSWR doesnt work here?
      // user data is only retrieved here from db when user signs in as user redirected to '/' only one time
      const response = await fetch(`/api/db/user/${sub}`)
      const { user: userData, user: { user_metadata: { isNewUser = false } = {} } = {} } =
        await response.json()

      setNewUser(isNewUser)
      dispatch(setUser(userData))
    } catch {
      // show error
    }
  }, [sub, dispatch])

  useEffect(() => {
    sub && fetchUserData()
  }, [sub, fetchUserData])

  useEffect(() => {
    if (isNewUser !== null && !isNewUser) {
      router.replace('/dashboard')
    }
  }, [isNewUser, router])

  if (!isLoading && !user) {
    router.replace('/signedout')
  }

  if (isNewUser !== null && isNewUser) return <PostSignupFlow />
}

export default Home
