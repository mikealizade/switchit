/* istanbul ignore file */
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducer from 'src/state/user/userSlice'
import drawerReducer from 'src/state/drawer/drawerSlice'
import friendsReducer from 'src/state/friends/friendsSlice'
import toastReducer from 'src/state/toast/toastSlice'
import preSwitchJourneyReducer from 'src/state/preSwitchJourney/preSwitchJourneySlice'
import switchJourneysReducer from 'src/state/switchJourney/switchJourneySlice'

const rootReducer = combineReducers({
  user: userReducer,
  drawer: drawerReducer,
  friends: friendsReducer,
  toast: toastReducer,
  preSwitchJourney: preSwitchJourneyReducer,
  switchJourneys: switchJourneysReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          '@ReduxToastr/toastr/ADD',
          '@ReduxToastr/toastr/REMOVE',
        ],
        // ignoredPaths: ['oidc.user'],
      },
    }),
  // .concat(...middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
