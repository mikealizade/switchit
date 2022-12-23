import React, { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import useSWR, { SWRResponse } from 'swr'
import sanitizeHtml from 'sanitize-html'
import { Card } from '@components/Card/Card'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import ContentEditable from 'react-contenteditable'
import { RootState } from '@state/store'
import { useToast } from '@hooks/useToast'
import { useNextStep } from '@hooks/useNextStep'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { LetterButtons } from './LetterButtons'
import * as S from '@modules/Switching/Switching.style'
import { sendRequest, fetcher } from '@utils/functions'
import { sanitiseConfig } from '@utils/constants'

type JourneyId = { id: string }

type LetterProps = {
  header: string
  subHeader: string
  headerText: string
  getDefaultLetterText: (baddBank: string, nickname: string) => string
  onNext: () => void
  letterType: string
  step: number
}

// TODO  when savinvg journey steps to db, currently not refetching on any of the action pages

export const Letter: NextPage<LetterProps> = ({
  header,
  subHeader,
  headerText,
  getDefaultLetterText,
  onNext,
  letterType,
  step,
}) => {
  const { user: { sub = '' } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const nextStep = useNextStep()
  const text = useRef('')
  const toast = useToast()
  const { currentJourneyId, currentJourney: { badBank = '', completedSteps = [] } = {} } =
    useGetCurrentJourney()
  const { nickname } = useSelector((state: RootState) => state.user)
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(
    sub ? `/api/db/findSwitchJourneys?id=${sub}` : null,
    fetcher,
    { revalidateOnFocus: false },
  ) as SWRResponse
  const [{ breakupLetter = '', helloLetter = '' } = {}] = switchJourneys?.filter(
    ({ id }: JourneyId) => id === currentJourneyId,
  )
  const [, setLetter] = useState('')
  const [isEditable, setEdit] = useState(false)
  const isStepCompleted = completedSteps.includes(step)
  const letter = letterType === 'breakup' ? breakupLetter : helloLetter

  const onSave = async () => {
    try {
      const saveBody = {
        filter: { sub, 'switchJourneys.id': currentJourneyId },
        payload: {
          $set: {
            [`switchJourneys.$.${letterType}Letter`]: sanitizeHtml(text.current, sanitiseConfig),
          },
        },
        collection: 'users',
        upsert: false,
      }

      request(saveBody)

      // TODO success msg even when errors!
      toast('Your letter was saved successfully', 'success')
    } catch (error) {
      toast('An error occurred saving your letter', 'error')
    }
  }

  const onSend = async () => {
    nextStep(step)

    try {
      const sendBody = {
        filter: {},
        payload: {
          $push: {
            [letterType]: {
              dateSent: new Date(),
              letterText: sanitizeHtml(text.current, sanitiseConfig),
              userId: sub,
            },
          },
        },
        collection: 'userLetters',
        upsert: false,
      }

      request(sendBody)

      toast('Your letter was sent successfully', 'success')
    } catch (error) {
      toast('An error occurred sending your letter', 'error')
    }
  }

  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    text.current = value
  }

  const onToggleEditable = () => {
    setEdit(!isEditable)
  }

  useEffect(() => {
    if (letter) {
      text.current = letter
      setLetter(text.current)
    } else {
      text.current = getDefaultLetterText(badBank, nickname || '[your name]')
      setLetter(text.current)
    }
  }, [letter, text, badBank, nickname, getDefaultLetterText])

  return (
    <Card column padded>
      <ActionHeader
        header={header}
        subHeader={subHeader}
        text={headerText}
        isStepCompleted={isStepCompleted}
      />

      <S.Container>
        <ContentEditable
          className='editable'
          tagName='div'
          html={isValidating ? 'Loading letter...' : text.current}
          disabled={!isEditable}
          onChange={onChange}
          onBlur={onToggleEditable}
        />

        <LetterButtons
          onToggleEditable={onToggleEditable}
          onSave={onSave}
          onSend={onSend}
          onNext={onNext}
          isDisabled={!text.current || isStepCompleted}
        />
      </S.Container>
    </Card>
  )
}
