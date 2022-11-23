import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Drawer = {
  isDrawerOpen: boolean
  section: string
}

export const initialDrawerState: Drawer = {
  isDrawerOpen: false,
  section: '',
}

export const drawer = createSlice({
  name: 'drawer',
  initialState: initialDrawerState,
  reducers: {
    toggleDrawer: (state, action: PayloadAction<any>) => {
      return {
        isDrawerOpen: !state.isDrawerOpen,
        section: action.payload,
      }
    },
  },
})

export const { toggleDrawer } = drawer.actions

export default drawer.reducer
