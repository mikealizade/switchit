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
  },
})

export const { setUser } = user.actions

export default user.reducer
