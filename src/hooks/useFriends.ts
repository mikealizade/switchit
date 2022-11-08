import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'

export const useFriends = () => {
  const { user: { sub = '' } = {} } = useUser()
  const [friends, setFriends] = useState([])

  const fetchFriends = async (): Promise<void> => {
    if (sub) {
      try {
        const { result }: any = await fetcher(`/api/db/findFriends?id=${sub}`)
        const friends = result.map(
          ({ nickname, picture }: { nickname: string; picture: string }) => ({ nickname, picture }),
        )

        setFriends(friends)
      } catch {
        //error
      }
    }
  }

  return [friends, fetchFriends] as any[]
}
