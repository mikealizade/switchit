import { useEffect, useState } from 'react'

export const useCopyText = (): [boolean, (arg: boolean) => void] => {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    if (hasCopied) {
      const delay = setTimeout(() => {
        setHasCopied(false)
        clearTimeout(delay)
      }, 2000)
    }
  }, [hasCopied])

  return [hasCopied, setHasCopied]
}
