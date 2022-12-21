import React, { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@state/store'
import { Card } from '@components/Card/Card'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from 'sanitize-html'
import { useToast } from '@hooks/useToast'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'
import { useNextStep } from '@hooks/useNextStep'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { LetterButtons } from './LetterButtons'
import * as S from '@modules/Switching/Switching.style'
import useSWRMutation from 'swr/mutation'
import { sendRequest, fetcher } from '@utils/functions'

import useSWR, { SWRResponse } from 'swr'

type Letter = { id: string }

type LetterProps = {
  header: string
  subHeader: string
  headerText: string
  getDefaultLetterText: (baddBank: string, nickname: string) => string
  onNext: () => void
  letterType: string
  step: number
}

const sanitizeConf = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div', 'br'],
  allowedAttributes: { a: ['href'] },
}

// TODO
// when savinvg journey steps to db, currently not refetching on any of the action pages

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
  const nextStep = useNextStep()
  const dispatch = useDispatch()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const {
    currentJourneyId,
    currentJourney: {
      badBank = '',
      completedSteps = [],
      // breakupLetter: breakup = '',
      // helloLetter: hello = '',
    } = {},
  } = useGetCurrentJourney()
  const { nickname } = useSelector((state: RootState) => state.user)
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(
    sub ? `/api/db/findSwitchJourneys?id=${sub}` : null,
    fetcher,
    { revalidateOnFocus: false },
  ) as SWRResponse
  // const { nickname } = user
  const [{ breakupLetter = '', helloLetter = '' } = {}] = switchJourneys?.filter(
    ({ id }: Letter) => id === currentJourneyId,
  )
  const [currentLetter, setLetter] = useState('')
  const [isEditable, setEdit] = useState(false)
  const text = useRef('')
  const toast = useToast()
  const isStepCompleted = completedSteps.includes(step)
  // const letter = letterType === 'breakup' ? breakupLetter || breakup : helloLetter || hello
  const letter = letterType === 'breakup' ? breakupLetter : helloLetter

  const processLetter = () => {
    const letterText = sanitizeHtml(text.current, sanitizeConf)
    // dispatch(setJourneyData({ [`${letterType}Letter`]: letterText }))

    return letterText
  }

  console.log('letter', letter)

  const onSave = async () => {
    // const letterText = sanitizeHtml(text.current, sanitizeConf)
    // dispatch(setJourneyData({ [`${letterType}Letter`]: letterText }))

    console.log('processLetter()', processLetter())

    try {
      const saveBody = {
        filter: { sub, 'switchJourneys.id': currentJourneyId },
        payload: {
          $set: {
            [`switchJourneys.$.${letterType}Letter`]: processLetter(),
          },
          // $push: {
          //   [`letters`]: {
          //     type: letterType,
          //     dateSent: new Date(),
          //     letterText,
          //   },
          // },
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
    // const letterText = sanitizeHtml(text.current, sanitizeConf)
    nextStep(step)

    try {
      const sendBody = {
        filter: {},
        payload: {
          $push: {
            [letterType]: {
              dateSent: new Date(),
              letterText: processLetter(),
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
      if (nickname) {
        text.current = getDefaultLetterText(badBank, nickname)
        setLetter(text.current)
      }
    }
  }, [letter, text, badBank, nickname, getDefaultLetterText])

  // useEffect(() => {
  //   if (currentLetter) {
  //     text.current = currentLetter
  //     setLetter(text.current)
  //   }
  // }, [currentLetter])

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
          isStepComplete={isStepCompleted}
        />
      </S.Container>
    </Card>
  )
}
