import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@state/store'
import { fetcher } from '@utils/functions'
import { setUser } from '@state/user/userSlice'
import { whatsAppUrl } from '@utils/constants'

export const useShareCode = () => {
  const id = nanoid()
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const { sub, profile, profile: { sharingCodes = [] } = {} } = user
  const url = `${whatsAppUrl}${process.env.NEXT_PUBLIC_BASE_URL}?referralCode=${id}`

  const onShareCode = async () => {
    const body = {
      filter: { sub },
      payload: { $push: { [`profile.sharingCodes`]: id } },
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

    dispatch(
      setUser({
        ...user,
        profile: {
          ...profile,
          sharingCodes: [...sharingCodes, id],
        },
      }),
    )

    window.open(url, '_blank')
  }

  return onShareCode
}
