import type { NextPage } from 'next'
import { useEffect, useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { Button } from '@components/Button/Button'
import { Buttons } from '@styles/common.style'
import { onCopy } from '@utils/functions'
import * as S from './EditableContent.style'

export type EditableContentProps = {
  data: string
  type: string
  btnText: string
  meta?: any
}

export const EditableContent: NextPage<EditableContentProps> = ({ data, type, btnText, meta }): JSX.Element => {
  const [isEditable, setEdit] = useState(false)
  const text = useRef('')
  const editableRef = useRef<HTMLDivElement>(null)
  const [, setCopy] = useState('')

  const onEdit = () => {
    setEdit(true)
  }

  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    text.current = value
  }

  const onToggleEditable = () => {
    setEdit(!isEditable)
  }

  const actions = {
    post() {
      const post = text.current
      //TODO add correct url and hashtag,
      const links = {
        twitter: `http://twitter.com/share?text=${encodeURIComponent(post)}&url=https://switchit.green&hashtags=switchit`,
        // facebook: `https://www.facebook.com/sharer/sharer.php?u=https://switchit.green&quote=${encodeURIComponent(
        //   text,
        // )}`,
      }

      window.open(links[meta as keyof typeof links], '_blank', 'noreferrer')
    },
    copy() {
      onCopy(text.current)()
      setEdit(false)
    },
  }

  useEffect(() => {
    text.current = data
    setCopy(text.current)
  }, [data, text])

  return (
    <S.EditableContent>
      <S.Container>
        <S.Content>
          <S.InnerWrapper>
            <ContentEditable
              innerRef={editableRef}
              className={`editable ${isEditable ? 'disabled' : ''}`}
              tagName='div'
              html={text.current}
              disabled={!isEditable}
              onChange={onChange}
              onBlur={onToggleEditable}
            />
          </S.InnerWrapper>
        </S.Content>
        <Buttons align='right'>
          <Button mode='secondary' colour='blue' type='button' onClick={onEdit} size='small'>
            Edit
          </Button>
          <Button type='button' colour='blue' size='small' onClick={actions[type as keyof typeof actions]}>
            {btnText}
          </Button>
        </Buttons>
      </S.Container>
    </S.EditableContent>
  )
}
