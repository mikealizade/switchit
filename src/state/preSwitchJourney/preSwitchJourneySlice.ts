import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreSwitchJourney = {
  selectedBank: string
  actionCardIndex: number
}

export const initialPreSwitchJourneyState: PreSwitchJourney = {
  selectedBank: '',
  actionCardIndex: 0,
}

export const preSwitchJourney = createSlice({
  name: 'preSwitchJourney',
  initialState: initialPreSwitchJourneyState,
  reducers: {
    setSelectedBank: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        selectedBank: action.payload,
      }
    },
    setActionCard: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        actionCardIndex: action.payload,
      }
    },
  },
})

export const { setSelectedBank, setActionCard } = preSwitchJourney.actions

export default preSwitchJourney.reducer
