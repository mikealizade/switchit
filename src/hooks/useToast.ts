import { useDispatch } from 'react-redux'
import { showToast } from '@state/toast/toastSlice'

export const useToast = () => {
  const dispatch = useDispatch()

  const toast = (isVisible = false, message = '', type = '') => {
    dispatch(showToast({ isVisible, message, type }))
  }

  return toast
}
