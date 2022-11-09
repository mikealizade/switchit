import type { NextPage } from 'next'

export const Fallback: NextPage<{ error: string }> = ({ error }): JSX.Element => {
  return (
    <div>
      <p>An error has occurred.</p>
      <p>{error}</p>
    </div>
  )
}
