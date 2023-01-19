import { createSlice } from '@reduxjs/toolkit'

type ImpactCard = {
  isImpactCardOpen: boolean
}

export const initialNavState: ImpactCard = {
  isImpactCardOpen: true,
}

export const impactCard = createSlice({
  name: 'impactCard',
  initialState: initialNavState,
  reducers: {
    toggleImpactCard: state => {
      return {
        isImpactCardOpen: !state.isImpactCardOpen,
      }
    },
  },
})

export const { toggleImpactCard } = impactCard.actions

export default impactCard.reducer
