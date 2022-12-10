import type { NextPage } from 'next'
import classNames from 'classnames'
import { useUser } from '@auth0/nextjs-auth0'
import { useToast } from '@hooks/useToast'
import { fetcher } from '@utils/functions'
import * as S from '@components/Button/Button.style'

type ButtonProps = {
  children: string | React.ReactNode
  type: 'button' | 'reset' | 'submit'
  mode?: string
  size?: string
  disabled?: boolean
  step: number
}

export const SaveStepButton: NextPage<ButtonProps> = ({
  children,
  type = 'button',
  mode = 'primary',
  disabled = false,
  size = 'normal',
  step = 0,
}): JSX.Element => {
  const { user: { sub = '' } = {} } = useUser()
  const toast = useToast()

  const onSaveStep = (step: { [key: string]: boolean }) => async () => {
    try {
      const body = {
        filter: { sub },
        payload: {
          $set: {
            [`switchingJourneys.personal`]: step,
          },
        },
        collection: 'users',
        upsert: false,
      }

      await fetcher(`/api/db/updateOne`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    } catch (error) {
      toast('An error occurred', 'error')
    }
  }

  return (
    <S.Button
      type={type}
      onClick={onSaveStep({ [`isStep${step}Complete`]: true })}
      className={mode}
      disabled={disabled}
      size={size}
    >
      {children}
    </S.Button>
  )
}
