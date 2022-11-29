import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const bank = createSlice({
  name: 'bank',
  initialState: '',
  reducers: {
    setSelectedBank: (_, action: PayloadAction<any>) => {
      return action.payload
    },
  },
})

export const { setSelectedBank } = bank.actions

export default bank.reducer
