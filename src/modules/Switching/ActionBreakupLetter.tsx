import React, { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import { useUser } from '@auth0/nextjs-auth0'
import { useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText } from '@utils/constants'
import { fetcher } from '@utils/functions'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from 'sanitize-html'
import { useToast } from '@hooks/useToast'
import { LetterButtons } from './LetterButtons'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

type Letter = { type: string; accountType: string }

const getDefaultLetterText = (bankName: string = '[bank name]', nickname: string): string => {
  console.log('bankName', bankName, nickname)
  return `
  <div>
    Dear ${bankName} - default letter
    <div>
      <br />
    </div>
    <div>I have had a ${bankName} bank account for 12 years.</div>
    <div>
      <br />
    </div>
    <div>I am writing to inform you that I am leaving you due to your continued investment in fossil fuels. And I am not alone, with 19% of the UK population planning on switching to a sustainable bank in the next 12 months.</div>
    <div>
      <br />
    </div>
    <div>Your claims of compassion in the climate crisis are trivialised by your unwavering financial support for fossil fuel companies. Your sustainability report means nothing until you immediately divest funds which are supporting climate breakdown.</div>
    <div>
      <br />
    </div>
    <div>I want my money to be invested with a bank who cares about our shared future - not just future profits. I will be moving to an alternative provider who has made genuine commitments to **not** be part of the problem. A bank which is aligned with customer values will also be better equipped to effectively serve their audience across the board.</div>
    <div>
      <br />
    </div>
    <div>With growing awareness of the fact that current policies do not account for ${bankName}’s ownership stakes in coal companies set to build 73 new coal plants, with a combined emission potential of 15 billion tonnes of CO2, you are undoubtedly experiencing high numbers of switchers moving to more ethical banks, and will continue to do so until you address your inadequate and detrimental policies. (source - market forces).</div>
    <div>
      <br />
    </div>
    <div>In the meantime, I hope you aren’t too eaten up with guilt from profiting off your remaining customers while sending the planet into climate breakdown.</div>
    <div>
      <br />
    </div>
    <div>Your sincerely</div>
    <div>
      <br />
    </div>
    <div>${nickname}</div>
  </div>
  `
}

const sanitizeConf = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div', 'br'],
  allowedAttributes: { a: ['href'] },
}

export const ActionBreakupLetter: NextPage = () => {
  const { user: { sub = '' } = {} } = useUser()
  const { push } = useRouter()
  const selectedBank = useSelector((state: RootState) => state.selectedBank)
  const user = useSelector((state: RootState) => state.user)
  const { nickname, letters = [] } = user
  const [currentLetter, setLetter] = useState('')
  const [isEditable, setEdit] = useState(false)
  const [isLetterSent, setIsLetterSent] = useState(false)
  const [isLetterSaved, setIsLetterSaved] = useState(false)
  // const [canSave, setCanSave] = useState(false)
  const text = useRef('')
  const toast = useToast()

  const onSave = async () => {
    setIsLetterSaved(true)
    const letterText = sanitizeHtml(text.current, sanitizeConf)

    try {
      const body = {
        filter: { sub },
        payload: {
          $push: {
            [`letters`]: {
              type: 'breakup',
              accountType: 'personal',
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
    setIsLetterSaved(true)
    const letterText = sanitizeHtml(text.current, sanitizeConf)

    try {
      const body2 = {
        filter: {},
        payload: {
          $push: {
            //TODO update hardcoded account type
            [`breakup`]: { dateSent: new Date(), accountType: 'personal', letterText, userId: sub },
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

    setIsLetterSent(true)
  }

  const onNext = () => {
    push('/switching/action-hello-letter')
  }

  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    console.log('value', value)

    text.current = value
    console.log('text.current', text.current)
  }

  const onToggleEditable = () => {
    setEdit(!isEditable)
  }

  useEffect(() => {
    if (letters?.length) {
      const [letter] = letters.filter(
        ({ type, accountType }: Letter) => type === 'breakup' && accountType === 'personal',
      )
      setLetter(letter?.letterText)
    } else {
      if (nickname) {
        setLetter(getDefaultLetterText(selectedBank, nickname))
      }
    }
  }, [letters, selectedBank, nickname])

  useEffect(() => {
    if (currentLetter) {
      text.current = currentLetter
    }
  }, [currentLetter])

  console.log('text.current', text.current)

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded>
            <ActionHeader
              header='Action: Write Your Breakup Letter'
              subHeader='Tell your old bank how you really feel'
              text={actionText.breakupLetter}
              step='2'
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
                isLetterSent={isLetterSent}
                isLetterSaved={isLetterSaved}
              />
            </S.Container>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}
