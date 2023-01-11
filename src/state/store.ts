import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import genericReducer from '@state/generic/genericSlice'
import navReducer from '@state/nav/navSlice'
import drawerReducer from 'src/state/drawer/drawerSlice'
import friendsReducer from 'src/state/friends/friendsSlice'
import switchJourneysReducer from 'src/state/switchJourney/switchJourneySlice'
import toastReducer from 'src/state/toast/toastSlice'
// import storage from 'redux-persist/lib/storage'
import userReducer from 'src/state/user/userSlice'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['drawer', 'nav', 'toast'],
}

const rootReducer = combineReducers({
  user: userReducer,
  drawer: drawerReducer,
  nav: navReducer,
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
        ignoredActions: ['persist/PERSIST'],
        // ignoredPaths: [],
      },
    }),
  // .concat(...middleware),
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
