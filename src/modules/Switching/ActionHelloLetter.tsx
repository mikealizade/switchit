import React, { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText } from '@utils/constants'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

const defaultLetterText = 'Start your letter here'

export const ActionHelloLetter: NextPage = () => {
  const { push } = useRouter()
  const [isDisabled, setEdit] = useState('false')
  const [isLetterSent, setIsLetterSent] = useState(false)
  const [isLetterSaved, setIsLetterSaved] = useState(false)

  const letterRef = useRef<HTMLDivElement>(null)
  const letter = letterRef?.current!

  const onEdit = () => {
    setEdit('true')
  }

  const onSave = () => {
    setIsLetterSaved(true)
  }

  const onSend = () => {
    //
    setIsLetterSent(true)
  }

  const onNext = () => {
    push('/switching/action-post-to-socials')
  }

  useEffect(() => {
    if (letter?.innerHTML === '') {
      letter.innerHTML = defaultLetterText
    }
  }, [letter])

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded>
            <ActionHeader
              header='Action: Write Your Hello Letter'
              subHeader={`Tell your new bank why you've switched`}
              text={actionText.helloLetter}
              step='3'
            />

            <S.Container>
              <S.Content
                ref={letterRef}
                contentEditable={isDisabled}
                suppressContentEditableWarning
                onBlur={() => setEdit('false')}
              ></S.Content>
              <S.Buttons>
                <Button type='button' onClick={onEdit} size='small'>
                  Edit
                </Button>
                <Button type='button' size='small' onClick={onSave}>
                  Save
                </Button>
                <Button type='button' size='small' onClick={onSend}>
                  Send To BanK
                </Button>
                <Button
                  type='button'
                  size='small'
                  onClick={onNext}
                  disabled={!(isLetterSent || isLetterSaved)}
                >
                  Next
                </Button>
              </S.Buttons>
            </S.Container>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}
