import type { NextPage } from 'next'
import { Header } from '@modules/Switching/Switching.style'
import { Subheader, ParagraphCopy } from '@styles/common.style'
import { HeaderContainer, ActionHeaderLink } from './ActionHeader.style'

type ActionHeader = {
  header: string
  subHeader?: string
  text?: string
  isStepCompleted?: boolean
  isHTML?: boolean
  component?: React.ReactNode
}

export const ActionHeader: NextPage<ActionHeader> = ({
  header,
  subHeader,
  text = '',
  isStepCompleted,
  isHTML = false,
  component,
}): JSX.Element => {
  const content = isHTML ? (
    <ParagraphCopy dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <ActionHeaderLink>
      {text}
      {component ?? ''}
    </ActionHeaderLink>
  )
  return (
    <HeaderContainer>
      <Header>
        <span>{header}</span>
      </Header>
      {subHeader && <Subheader>{subHeader}</Subheader>}
      {!isStepCompleted && text && <>{content}</>}
    </HeaderContainer>
  )
}
