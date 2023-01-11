import type { NextPage } from 'next'
import { Header } from '@modules/Switching/Switching.style'
import { Subheader } from '@styles/common.style'
import { HeaderContainer } from './ActionHeader.style'

type ActionHeader = {
  header: string
  subHeader?: string
  text?: string
  isStepCompleted?: boolean
}

export const ActionHeader: NextPage<ActionHeader> = ({
  header,
  subHeader,
  text,
  isStepCompleted,
}): JSX.Element => {
  return (
    <HeaderContainer>
      <Header>
        <span>{header}</span>
      </Header>
      <Subheader>{subHeader}</Subheader>
      {!isStepCompleted && text && <p>{text}</p>}
    </HeaderContainer>
  )
}
