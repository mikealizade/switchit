import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { RootState } from '@state/store'
import { setUser } from '@state/user/userSlice'
import { whatsAppUrl } from '@utils/constants'
import { sendRequest } from '@utils/functions'

export const useShareCode = () => {
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const id = nanoid()
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const { sub, profile, profile: { sharingCodes = [], switchItPoints = [] } = {} } = user
  const [codes, ...rest] = switchItPoints

  const url = `${whatsAppUrl}${process.env.NEXT_PUBLIC_BASE_URL}/signup?referralCode=${id}`

  const onShareCode = async () => {
    const body = {
      filter: { sub },
      payload: { $push: { [`profile.sharingCodes`]: id } },
      collection: 'users',
      upsert: false,
    }

    request(body)

    dispatch(
      setUser({
        ...user,
        profile: {
          ...profile,
          sharingCodes: [...sharingCodes, id],
          switchItPoints: [
            ...[
              {
                ...codes,
                points: codes.points + 5,
              },
            ],
            ...rest,
          ],
        },
      }),
    )

    window.open(url, '_blank', 'noreferrer')
  }

  return onShareCode
}
