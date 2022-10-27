import { useCallback, useEffect, useState } from 'react'
import PostSignupFlow from '@modules/PostSignupFlow/PostSignupFlow'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useUser, UserProfile } from '@auth0/nextjs-auth0'
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
      const response = await fetch(`/api/db/user/${sub}`)
      const { user: { user_metadata: { isNewUser = false } = {} } = {} } = await response.json()

      setNewUser(isNewUser)
      user && dispatch(setUser(user))
    } catch {
      // show error
    }
  }, [sub, user, dispatch])

  useEffect(() => {
    sub && fetchUserData()
  }, [sub, fetchUserData])

  useEffect(() => {
    if (isNewUser !== null && !isNewUser) {
      router.replace('/dashboard')
    }
  }, [isNewUser, router])

  if (!isLoading && !user) {
    router.replace('/logout')
  }

  if (isNewUser !== null && isNewUser) return <PostSignupFlow />
}

export default Home
