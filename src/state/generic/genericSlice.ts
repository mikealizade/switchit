import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Generic = {
  actionCardIndex: number
  signature: string
  userAge: string
}

export const initialGenericState: Generic = {
  actionCardIndex: 0,
  signature: '',
  userAge: '',
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
    setUserAge: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        userAge: action.payload,
      }
    },
  },
})

export const { setActionCard, setSignature, setUserAge } = generic.actions

export default generic.reducer
