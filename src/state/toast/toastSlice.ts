import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Toast = {
  isVisible: boolean
  message: string
  type: string
}

export const initialToastState: Toast = {
  isVisible: false,
  message: '',
  type: '',
}

export const toast = createSlice({
  name: 'toast',
  initialState: initialToastState,
  reducers: {
    showToast: (_, action: PayloadAction<any>) => {
      return {
        isVisible: action.payload.isVisible || false,
        message: action.payload.message || '',
        type: action.payload.type || 'transparent',
      }
    },
  },
})

export const { showToast } = toast.actions

export default toast.reducer
