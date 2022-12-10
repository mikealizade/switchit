import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BankAccountType = {
  [key: string]: {
    name: string
    completedSteps: number[]
  }
}

type SwitchingJourney = {
  selectedBank: string
  actionCardIndex: number
  journeyType: string
  // bankAccountType: BankAccountType
}

export const initialSwitchingJourneyState: SwitchingJourney = {
  selectedBank: '',
  actionCardIndex: 0,
  journeyType: '', //ready | not ready | noBankAccount
  // bankAccountType: {
  //   personal: {
  //     //business | student, how many?
  //     name: '',
  //     completedSteps: [],
  //   },
  //   student: {
  //     name: '',
  //     completedSteps: [],
  //   },
  //   business: {
  //     name: '',
  //     completedSteps: [],
  //   },
  // },
}

export const switchingJourney = createSlice({
  name: 'switchingJourney',
  initialState: initialSwitchingJourneyState,
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
    setJourneyType: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        journeyType: action.payload,
      }
    },
  },
})

export const { setSelectedBank, setActionCard, setJourneyType } = switchingJourney.actions

export default switchingJourney.reducer
