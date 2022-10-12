import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
  user: {},
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.user = action.payload
    },
    updateUser: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      }
    },
  },
})

export const { setUser, updateUser } = user.actions

export default user.reducer
