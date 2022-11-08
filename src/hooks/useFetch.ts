import { useEffect, useRef } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'

export const useFetch = () => {
  const {
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()

  const fetchData = async (query: any) => {
    console.log('query useFetch', query)

    try {
      const response = await fetcher(`/api/db/findOne${query}`)

      console.log('response', response)

      return { success: true }
    } catch {
      return { success: false }
    }
  }

  return fetchData
}
