import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Generic = {
  actionCardIndex: number
}

export const initialGenericState: Generic = {
  actionCardIndex: 0,
}

export const generic = createSlice({
  name: 'generic',
  initialState: initialGenericState,
  reducers: {
    setActionCard: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        actionCardIndex: action.payload,
      }
    },
  },
})

export const { setActionCard } = generic.actions

export default generic.reducer
