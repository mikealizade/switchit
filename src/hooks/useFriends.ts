import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'
import useSWR, { SWRResponse } from 'swr'

interface Friend {
  nickname: string
  picture: string
}

export const useFriends = () => {
  const { user: { sub = '' } = {} } = useUser()
  const { data: friends = [] }: any = useSWR(
    `/api/db/findFriends?id=${sub}`,
    fetcher,
  ) as SWRResponse

  return friends.map(({ nickname, picture }: Friend) => ({ nickname, picture }))
}
