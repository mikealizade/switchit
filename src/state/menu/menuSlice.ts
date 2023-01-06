import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Nav = {
  isNavOpen: boolean
}

export const initialNavState: Nav = {
  isNavOpen: true,
}

export const nav = createSlice({
  name: 'nav',
  initialState: initialNavState,
  reducers: {
    toggleNav: (state, action: PayloadAction<any>) => {
      return {
        isNavOpen: !state.isNavOpen,
        section: action.payload,
      }
    },
  },
})

export const { toggleNav } = nav.actions

export default nav.reducer
