import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { journeyTypes } from '@utils/constants'

type BaseNewJourney = {
  id: string
  isActive: boolean
  name: string
}

export type Journey = BaseNewJourney & {
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
              accountType: 'personal', //TODO reeplace hardcoded value
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
    setCurrentJourney: (
      _,
      action: PayloadAction<{ currentJourneyId: string; journeys: Journey[] }>,
    ) => {
      return action.payload
    },
  },
})

export const { setJourneyData, setAddNewJourney, setCurrentJourney } = switchJourneys.actions

export default switchJourneys.reducer
