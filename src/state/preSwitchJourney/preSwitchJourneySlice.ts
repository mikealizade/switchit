import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreSwitchJourney = {
  actionCardIndex: number
}

export const initialPreSwitchJourneyState: PreSwitchJourney = {
  actionCardIndex: 0,
}

export const preSwitchJourney = createSlice({
  name: 'preSwitchJourney',
  initialState: initialPreSwitchJourneyState,
  reducers: {
    setActionCard: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        actionCardIndex: action.payload,
      }
    },
  },
})

export const { setActionCard } = preSwitchJourney.actions

export default preSwitchJourney.reducer
