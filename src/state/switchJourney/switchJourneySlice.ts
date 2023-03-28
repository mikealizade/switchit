import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { journeyTypes } from '@utils/constants'

type BaseNewJourney = {
  id: string
  isVerified: string | Date | boolean
  name: string
}

export type Journey = BaseNewJourney & {
  journeyType: string
  completedSteps: number[]
  badBank: string
  goodBank: string
  breakupLetter: string
  helloLetter: string
  testimonial: string
  videoUri: string
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
              completedSteps: [],
              badBank: '',
              goodBank: '',
              breakupLetter: '',
              helloLetter: '',
              testimonial: '',
              videoUri: '',
              isVerified: false,
            },
          ],
        ],
      }
    },
    setJourneyData: (state, action: PayloadAction<{ [key: string]: string | number[] | boolean }>) => {
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
    setCurrentJourney: (
      _,
      action: PayloadAction<{
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
  },
})

export const { setJourneyData, setAddNewJourney, setCurrentJourney, setCurrentJourneyId } = switchJourneys.actions

export default switchJourneys.reducer
