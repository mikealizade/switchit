/* istanbul ignore file */
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducer from 'src/state/user/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
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
