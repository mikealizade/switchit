import type { NextPage } from 'next'
import { Header } from '@modules/Switching/Switching.style'
import { Subheader, ParagraphCopy } from '@styles/common.style'
import { HeaderContainer } from './ActionHeader.style'

type ActionHeader = {
  header: string
  subHeader?: string
  text?: string
  isStepCompleted?: boolean
  isHTML?: boolean
}

export const ActionHeader: NextPage<ActionHeader> = ({
  header,
  subHeader,
  text = '',
  isStepCompleted,
  isHTML = false,
}): JSX.Element => {
  const content = isHTML ? (
    <ParagraphCopy dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <p>{text}</p>
  )
  return (
    <HeaderContainer>
      <Header>
        <span>{header}</span>
      </Header>
      <Subheader>{subHeader}</Subheader>
      {!isStepCompleted && text && <>{content}</>}
    </HeaderContainer>
  )
}
