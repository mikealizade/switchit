import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducer from 'src/state/user/userSlice'
import drawerReducer from 'src/state/drawer/drawerSlice'
import friendsReducer from 'src/state/friends/friendsSlice'
import toastReducer from 'src/state/toast/toastSlice'
import genericReducer from '@state/generic/genericSlice'
import switchJourneysReducer from 'src/state/switchJourney/switchJourneySlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  drawer: drawerReducer,
  friends: friendsReducer,
  toast: toastReducer,
  generic: genericReducer,
  switchJourneys: switchJourneysReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          '@ReduxToastr/toastr/ADD',
          '@ReduxToastr/toastr/REMOVE',
        ],
        // ignoredPaths: [],
      },
    }),
  // .concat(...middleware),
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
