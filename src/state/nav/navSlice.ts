import { createSlice } from '@reduxjs/toolkit'

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
    toggleNav: state => {
      return {
        isNavOpen: !state.isNavOpen,
      }
    },
  },
})

export const { toggleNav } = nav.actions

export default nav.reducer
