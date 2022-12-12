import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { journeyTypes } from '@utils/constants'

type BaseNewJourney = {
  id: string
  isActive: boolean
  name: string
}

type Journey = BaseNewJourney & {
  journeyType: string
  accountType: string
  completedSteps: number[]
}

type InitialState = {
  currentJourneyId: string
  journeys: Journey[]
}

const initialState: InitialState = {
  currentJourneyId: '',
  journeys: [],
}

export const switchJourneys = createSlice({
  name: 'switchJourneys',
  initialState,
  reducers: {
    setAddNewJourney: (state, action: PayloadAction<BaseNewJourney>) => {
      return {
        currentJourneyId: action.payload.id,
        journeys: [
          ...state.journeys,
          ...[
            {
              ...action.payload,
              journeyType: journeyTypes.readyToSwitch,
              accountType: 'personal',
              completedSteps: [],
            },
          ],
        ],
      }
    },
    setJourneyData: (state, action: PayloadAction<{ [key: string]: string }>) => {
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
        journeys: updatedJourneys,
      }
    },
  },
})

export const { setJourneyData, setAddNewJourney } = switchJourneys.actions

export default switchJourneys.reducer
