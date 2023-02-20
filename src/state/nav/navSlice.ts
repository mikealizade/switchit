import { createSlice } from '@reduxjs/toolkit'

type Nav = {
  isNavOpen: boolean
  isWebsiteNavOpen: boolean
}

export const initialNavState: Nav = {
  isNavOpen: false,
  isWebsiteNavOpen: false,
}

export const nav = createSlice({
  name: 'nav',
  initialState: initialNavState,
  reducers: {
    toggleNav: state => {
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      }
    },
    toggleWebsiteNav: state => {
      return {
        ...state,
        isWebsiteNavOpen: !state.isWebsiteNavOpen,
      }
    },
  },
})

export const { toggleNav, toggleWebsiteNav } = nav.actions

export default nav.reducer
