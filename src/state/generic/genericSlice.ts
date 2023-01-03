import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Generic = {
  actionCardIndex: number
  signature: string
}

export const initialGenericState: Generic = {
  actionCardIndex: 0,
  signature: '',
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
    setSignature: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        signature: action.payload,
      }
    },
  },
})

export const { setActionCard, setSignature } = generic.actions

export default generic.reducer
