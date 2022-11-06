import { useCallback, useEffect, useState } from 'react'
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

  const saveUserData = useCallback(
    async (isNewUser: boolean) => {
      const storedUser = JSON.parse(window.localStorage.getItem('userData')!)
      const newUserdata = {
        ...user,
        ...storedUser,
        isNewUser,
      }

      const body = {
        filter: { sub },
        payload: { $set: newUserdata },
        collection: 'users',
        upsert: false,
      }

      await fetcher(`/api/db/updateOne`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      window.localStorage.removeItem('userData')
      dispatch(setUser(newUserdata))
    },
    [user, sub, dispatch],
  )

  useEffect(() => {
    sub && fetchUserData()
  }, [sub, fetchUserData])

  useEffect(() => {
    // if (isNewUser !== null && !isNewUser) {
    if (isNewUser) {
      saveUserData(isNewUser)
    }

    if (isNewUser !== null) {
      router.replace('/dashboard')
    }
  }, [isNewUser, router, saveUserData])

  if (!isLoading && !user) {
    router.replace('/signedout')
  }

  // if (isNewUser !== null && isNewUser) return <PostSignupFlow />
}

export default Home
