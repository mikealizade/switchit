import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { journeyTypes } from '@utils/constants'

type BaseNewJourney = {
  id: string
  isVerified: boolean
  name: string
}

export type Journey = BaseNewJourney & {
  journeyType: string
  completedSteps: number[]
  badBank: string
  goodBank: string
}

type InitialState = {
  currentJourneyId: string
  currentSelectedBank: string
  journeys: Journey[]
}

const initialState: InitialState = {
  currentJourneyId: '',
  currentSelectedBank: '',
  journeys: [],
}

export const switchJourneys = createSlice({
  name: 'switchJourneys',
  initialState,
  reducers: {
    setAddNewJourney: (state, action: PayloadAction<BaseNewJourney>) => {
      return {
        currentJourneyId: action.payload.id,
        currentSelectedBank: '',
        journeys: [
          ...state.journeys,
          ...[
            {
              ...action.payload,
              journeyType: journeyTypes.readyToSwitch,
              completedSteps: [],
              badBank: '',
              goodBank: '',
            },
          ],
        ],
      }
    },
    setJourneyData: (state, action: PayloadAction<{ [key: string]: string | number[] }>) => {
      const updatedJourneys = state.journeys.reduce((acc: Journey[], item: Journey) => {
        if (item.id === state.currentJourneyId) {
          return [
            ...acc,
            ...[
              {
                ...item,
                ...action.payload,
              },
            ],
          ]
        }
        return [...acc, ...[item]]
      }, [])

      return {
        currentJourneyId: state.currentJourneyId,
        currentSelectedBank: state.currentSelectedBank,
        journeys: updatedJourneys,
      }
    },
    setCurrentJourney: (
      _,
      action: PayloadAction<{
        currentSelectedBank: string
        currentJourneyId: string
        journeys: Journey[]
      }>,
    ) => {
      return action.payload
    },
    setCurrentJourneyId: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        currentJourneyId: action.payload,
      }
    },
    setSelectedBank: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        currentSelectedBank: action.payload,
      }
    },
  },
})

export const {
  setJourneyData,
  setAddNewJourney,
  setCurrentJourney,
  setCurrentJourneyId,
  setSelectedBank,
} = switchJourneys.actions

export default switchJourneys.reducer
