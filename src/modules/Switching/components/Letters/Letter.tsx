import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import React, { useState, useRef, useEffect } from 'react'
import ContentEditable from 'react-contenteditable'
import { useSelector } from 'react-redux'
import sanitizeHtml from 'sanitize-html'
import useSWR, { SWRResponse } from 'swr'
import useSWRMutation from 'swr/mutation'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { ButtonLink } from '@components/Button/Button.style'
import { Card } from '@components/Card/Card'
import { Modal } from '@components/Modal/Modal'
import { useCopyText } from '@hooks/useCopyText'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useModal } from '@hooks/useModal'
import { useNextStep } from '@hooks/useNextStep'
import { useToast } from '@hooks/useToast'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import { Container } from '@modules/Switching/Switching.style'
import { RootState } from '@state/store'
import { Text, Buttons } from '@styles/common.style'
import { goodBanksConfig, badBanksConfig, sanitiseConfig } from '@utils/data'
import { sendRequest, fetcher, onCopy, htmlToNewLine } from '@utils/functions'
import * as S from './Letter.style'
import { LetterButtons } from './LetterButtons'

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

type BreakUpInstructionsProps = {
  text: string
  bank: {
    breakupLink: string
    breakupText: string
    buttonText: string
  }
  bankName: string
}

// NOTE: letters are not stored in redux as local state is maintained between pages through text.current useRef
// and on page reload the letters are retrieved from the db

const BreakUpInstructions: NextPage<BreakUpInstructionsProps> = ({
  text,
  bank: { breakupLink = '', breakupText = '', buttonText = '' } = {},
  bankName,
}) => {
  const [hasCopied, setHasCopied] = useCopyText()

  const onCopyText = (text: string) => {
    onCopy(htmlToNewLine(text))()
    setHasCopied(true)
  }

  return (
    <>
      <Text>{breakupText.replace('$', bankName)}</Text>
      <Buttons align='right'>
        <Button type='button' onClick={() => onCopyText(text)}>
          {hasCopied ? 'Copied' : 'Copy Letter Text'}
        </Button>
        <ButtonLink href={breakupLink} size='normal' target='_blank' rel='noreferrer'>
          {buttonText}
        </ButtonLink>
      </Buttons>
    </>
  )
}

export const Letter: NextPage<LetterProps> = ({ header, subHeader, headerText, getDefaultLetterText, onNext, letterType, step }) => {
  const { user: { sub = '' } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const { addPoints } = useUpdatePoints('actions')
  const nextStep = useNextStep()
  const text = useRef('')
  const toast = useToast()
  const { currentJourneyId, currentJourney: { badBank = '', goodBank = '', completedSteps = [] } = {} } = useGetCurrentJourney()
  const { nickname } = useSelector((state: RootState) => state.user)
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(sub ? `/api/db/findSwitchJourneys?id=${sub}` : null, fetcher, {
    revalidateOnFocus: false,
  }) as SWRResponse
  const [{ breakupLetter = '', helloLetter = '' } = {}] = switchJourneys.filter(({ id }: JourneyId) => id === currentJourneyId)
  const [, setLetter] = useState('')
  const [isEditable, setEdit] = useState(false)
  const [isModalVisible, setToggleModal] = useModal()
  const isStepCompleted = completedSteps.includes(step)
  const isBadBank = letterType === 'breakup'
  const letter = isBadBank ? breakupLetter : helloLetter
  const bank = badBanksConfig[badBank as keyof typeof badBanksConfig]
  const bankName = isBadBank ? badBank : goodBanksConfig[goodBank as keyof typeof goodBanksConfig]?.fullName
  const breakupLink = bank?.breakupLink

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
      nextStep(step)
      addPoints(isBadBank ? 150 : 50, true)

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

  const onToggleModal = (isVisible: boolean) => (): void => {
    setToggleModal(isVisible!)
  }

  const getEmailLink = () => `mailto:${breakupLink}?subject=Goodbye&body=${encodeURIComponent(htmlToNewLine(text.current))}`

  useEffect(() => {
    if (isStepCompleted) {
      toast('Your letter has already been sent', 'success')
    }
  }, [])

  useEffect(() => {
    if (letter) {
      text.current = letter
      setLetter(text.current)
    } else {
      text.current = getDefaultLetterText(isBadBank ? badBank : goodBank, nickname)
      setLetter(text.current)
    }
  }, [letter, text, badBank, goodBank, nickname, getDefaultLetterText])

  return (
    <Card column padded rowGap={30}>
      <ActionHeader header={header} subHeader={subHeader} text={headerText} isStepCompleted={isStepCompleted} />

      <Container>
        <S.LetterContainer>
          <ContentEditable
            className='editable'
            tagName='div'
            html={isValidating ? 'Loading letter...' : text.current}
            disabled={!isEditable}
            onChange={onChange}
            onBlur={onToggleEditable}
          />

          <LetterButtons
            bankName={bankName}
            onToggleEditable={onToggleEditable}
            onToggleModal={onToggleModal}
            onSave={onSave}
            onSend={onSend}
            onNext={onNext}
            getEmailLink={getEmailLink}
            isEmail={breakupLink.includes('@')}
            isDisabled={!text.current || isStepCompleted}
            isNextDisabled={isStepCompleted}
          />
        </S.LetterContainer>
        {isModalVisible && (
          <Modal
            title='How to send your break up letter:'
            confirmText='Done'
            showCancel={false}
            onConfirm={onToggleModal(false)}
            onClose={onToggleModal(false)}
          >
            <BreakUpInstructions text={text.current} bank={bank} bankName={bankName} />
          </Modal>
        )}
      </Container>
    </Card>
  )
}
