import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import genericReducer from '@state/generic/genericSlice'
import impactCardReducer from '@state/impactCard/impactCardSlice'
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
  blacklist: ['drawer', 'nav', 'toast', 'impactCard', 'generic.actionCardIndex'],
  whiteList: [],
}

// saving all the redux data to store as i go through the journey?
// on some steps I grab the data from db when i reload page
// forget persist and use redux for normal journey (not reloaded), and retrieve data on page reload from db for eaxch page?

const rootReducer = combineReducers({
  user: userReducer,
  drawer: drawerReducer,
  nav: navReducer,
  impactCard: impactCardReducer,
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
