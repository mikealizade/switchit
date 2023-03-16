import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ImpactCard = {
  isImpactCardOpen: boolean
}

export const initialNavState: ImpactCard = {
  isImpactCardOpen: false,
}

export const impactCard = createSlice({
  name: 'impactCard',
  initialState: initialNavState,
  reducers: {
    toggleImpactCard: (state, action: PayloadAction<any>) => {
      console.log('state.isImpactCardOpen', state.isImpactCardOpen)
      return {
        isImpactCardOpen: action.payload,
      }
    },
  },
})

export const { toggleImpactCard } = impactCard.actions

export default impactCard.reducer
