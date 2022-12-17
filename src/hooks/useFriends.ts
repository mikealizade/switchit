import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useSWR, { SWRResponse } from 'swr'
import { setFriends } from '@state/friends/friendsSlice'

interface Friend {
  sub: string
  nickname: string
  username: string
  picture: string
}

export const useFriends = () => {
  const { user: { sub = '' } = {} } = useUser()
  const dispatch = useDispatch()
  const { data: friends = [] } = useSWR(`/api/db/findFriends?id=${sub}`, fetcher) as SWRResponse

  console.log('friends', friends)

  const friendsData = friends.map(({ sub, nickname, username, picture }: Friend) => ({
    userId: sub,
    nickname,
    username,
    picture,
  }))

  useEffect(() => {
    friendsData.length && dispatch(setFriends(friendsData))
  }, [friendsData, dispatch])

  return friendsData
}
