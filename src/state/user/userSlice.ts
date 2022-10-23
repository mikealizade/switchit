import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {}

type User = {
  _id: string
  nickname: string
  name: string
  picture: string
  updated_at: string
  email: string
  email_verified: string
  sub: string
  sid: string
  age: number
  location: string
  programCode: string
  referralCode: string
  points: number
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ [key: string]: string }>) => {
      return action.payload
    },
    updateUser: (state, action: PayloadAction<{ [key: string]: string }>) => {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { setUser, updateUser } = user.actions

export default user.reducer
