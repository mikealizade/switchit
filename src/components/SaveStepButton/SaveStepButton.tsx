import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { useToast } from '@hooks/useToast'
import { useSaveStep } from '@hooks/useSaveStep'
import { fetcher } from '@utils/functions'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import * as S from '@components/Button/Button.style'

type ButtonProps = {
  children: string | React.ReactNode
  type: 'button' | 'reset' | 'submit'
  mode?: string
  size?: string
  disabled?: boolean
  step: number
  onSend: () => void
}

export const SaveStepButton: NextPage<ButtonProps> = ({
  children,
  type = 'button',
  mode = 'primary',
  disabled = false,
  size = 'normal',
  step = 0,
  onSend,
}): JSX.Element => {
  const { user: { sub = '' } = {} } = useUser()
  const { currentJourneyId, currentJourney } = useGetCurrentJourney()
  const saveStep = useSaveStep()
  const { push } = useRouter()

  const onSaveStep = () => {
    saveStep(step)
    // save letter to db
    onSend()
  }

  // const onSaveStep = (step: number) => async () => {
  //   // save journey to db
  //   try {
  //     const body = {
  //       filter: { sub },
  //       payload: {
  //         $push: {
  //           [`switchJourneys`]: {
  //             ...currentJourney,
  //             completedSteps: [...currentJourney!.completedSteps, step],
  //           },
  //         },
  //       },
  //       collection: 'users',
  //       upsert: false,
  //     }

  //     await fetcher(`/api/db/updateOne`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(body),
  //     })

  //     // save letter to db
  //     onSend()
  //   } catch (error) {
  //     toast('An error occurred', 'error')
  //   }
  // }

  // if (!currentJourneyId || !currentJourney) {
  //   push('/switching')
  // }

  return (
    <S.Button type={type} onClick={onSaveStep} className={mode} disabled={disabled} size={size}>
      {children}
    </S.Button>
  )
}
