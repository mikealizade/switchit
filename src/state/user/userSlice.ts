import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {}

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
