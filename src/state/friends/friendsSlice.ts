import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Friend = {
  userId: string
  nickname: string
  username: string
  picture: string
}

export const initialFriendsState: Friend[] = []

export const friends = createSlice({
  name: 'friends',
  initialState: initialFriendsState,
  reducers: {
    setFriends: (_, action: PayloadAction<any>) => {
      return action.payload
    },
  },
})

export const { setFriends } = friends.actions

export default friends.reducer
