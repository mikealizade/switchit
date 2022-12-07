import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const actionCard = createSlice({
  name: 'actionCard',
  initialState: 0,
  reducers: {
    setActionCard: (_, action: PayloadAction<any>) => {
      return action.payload
    },
  },
})

export const { setActionCard } = actionCard.actions

export default actionCard.reducer
