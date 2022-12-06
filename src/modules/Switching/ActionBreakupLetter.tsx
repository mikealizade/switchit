import React, { useState, useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText } from '@utils/constants'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

// Import the Slate editor factory.
// import { createEditor } from 'slate'
// import 'slate.css'
// // Import the Slate components and React plugin.
// import { Slate, Editable, withReact } from 'slate-react'
// import { BaseEditor, Descendant } from 'slate'
// import { ReactEditor } from 'slate-react'

// type CustomElement = { type: 'paragraph'; children: CustomText[] }
// type CustomText = { text: string }

// declare module 'slate' {
//   interface CustomTypes {
//     Editor: BaseEditor & ReactEditor
//     Element: CustomElement
//     Text: CustomText
//   }
// }

// const initialValue = [
//   {
//     type: 'paragraph',
//     children: [{ text: 'A line of text in a paragraph.' }],
//   },
// ]
const defaultLetterText = 'Start your letter here'

export const ActionBreakupLetter: NextPage = () => {
  const { push } = useRouter()
  // const [editor] = useState(() => withReact(createEditor()))
  const [isDisabled, setEdit] = useState('false')
  const [isLetterSent, setIsLetterSent] = useState(false)
  const [isLetterSaved, setIsLetterSaved] = useState(false)
  // const [canSave, setCanSave] = useState(false)

  // console.log('canSave', canSave)

  const letterRef = useRef<HTMLDivElement>(null)
  const letter = letterRef?.current!

  const onEdit = () => {
    setEdit('true')
  }

  const onSave = () => {
    setIsLetterSaved(true)
    console.log('letter', letter.innerHTML)
    const letterText = JSON.stringify(letter.innerHTML)

    console.log('letterText', letterText)

    //
  }

  const onSend = () => {
    //
    setIsLetterSent(true)
  }

  const onNext = () => {
    push('/switching/action-hello-letter')
  }

  useEffect(() => {
    if (letter?.innerHTML === '') {
      letter.innerHTML = defaultLetterText
    }
    // if (letter?.innerHTML !== defaultLetterText && letter?.innerHTML !== null) {
    //   setCanSave(true)
    // }
  }, [letter])

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
            {/* <Slate editor={editor} value={initialValue}>
                <Editable />
              </Slate> */}
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}
