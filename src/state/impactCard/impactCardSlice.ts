import { createSlice } from '@reduxjs/toolkit'

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
    toggleImpactCard: state => {
      console.log('state.isImpactCardOpen', state.isImpactCardOpen)
      return {
        isImpactCardOpen: !state.isImpactCardOpen,
      }
    },
  },
})

export const { toggleImpactCard } = impactCard.actions

export default impactCard.reducer
