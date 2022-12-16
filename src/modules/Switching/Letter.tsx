import React, { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import { useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { Card } from '@components/Card/Card'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { fetcher } from '@utils/functions'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from 'sanitize-html'
import { useToast } from '@hooks/useToast'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { LetterButtons } from './LetterButtons'
import * as S from '@modules/Switching/Switching.style'

type Letter = { type: string }

type LetterProps = {
  header: string
  subHeader: string
  headerText: string
  getDefaultLetterText: (selectedBank: string, nickname: string) => string
  onNext: () => void
  letterType: string
  step: number
}

const sanitizeConf = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div', 'br'],
  allowedAttributes: { a: ['href'] },
}

// TODO
// letters and tell us are particular to a journey also, but attach them to the switch journey?
// on new journey, save new letter to redux  or refetch letter from db whenever hitting letter page
// //TODO update hardcoded account type ie 'personal'
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
  const { currentJourney: { completedSteps = [] } = {} } = useGetCurrentJourney()
  const selectedBank = useSelector((state: RootState) => state.switchJourneys.currentSelectedBank)
  const user = useSelector((state: RootState) => state.user)
  const { nickname, letters = [] } = user
  const [letter] = letters.filter(({ type }: Letter) => type === letterType)
  const [currentLetter, setLetter] = useState('')
  const [isEditable, setEdit] = useState(false)
  const text = useRef('')
  const toast = useToast()
  const isStepCompleted = completedSteps.includes(step)

  const onSave = async () => {
    const letterText = sanitizeHtml(text.current, sanitizeConf)

    try {
      const body = {
        filter: { sub },
        payload: {
          $push: {
            [`letters`]: {
              type: letterType,
              dateSent: new Date(),
              letterText,
            },
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
      // TODO success msg even when errors!
      toast('Your letter was saved successfully', 'success')
    } catch (error) {
      toast('An error occurred saving your letter', 'error')
    }
  }

  const onSend = async () => {
    const letterText = sanitizeHtml(text.current, sanitizeConf)

    try {
      const body2 = {
        filter: {},
        payload: {
          $push: {
            [letterType]: {
              dateSent: new Date(),
              letterText,
              userId: sub,
            },
          },
        },
        collection: 'userLetters',
        upsert: false,
      }

      await fetcher(`/api/db/updateOne`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body2),
      })
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
      text.current = letter?.letterText
      setLetter(text.current)
    } else {
      if (nickname) {
        text.current = getDefaultLetterText(selectedBank, nickname)
        setLetter(text.current)
      }
    }
  }, [letter, text, selectedBank, nickname, letterType, getDefaultLetterText])

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
          html={text.current}
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
          step={step}
        />
      </S.Container>
    </Card>
  )
}
