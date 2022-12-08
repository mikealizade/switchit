import { useDispatch } from 'react-redux'
import { showToast } from '@state/toast/toastSlice'

export const useToast = () => {
  const dispatch = useDispatch()

  const toast = (message = '', type = '') => {
    dispatch(showToast({ isVisible: true, message, type }))
  }

  return toast
}
