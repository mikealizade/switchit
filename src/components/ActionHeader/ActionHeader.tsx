import type { NextPage } from 'next'
import { HeaderContainer, Header, Subheader } from '@modules/Switching/PreSwitching.style'

type ActionHeader = {
  header: string
  subHeader: string
  text: string
}

export const ActionHeader: NextPage<ActionHeader> = ({ header, subHeader, text }): JSX.Element => {
  return (
    <HeaderContainer>
      <Header>{header}</Header>
      <Subheader>{subHeader}</Subheader>
      <p>{text}</p>
    </HeaderContainer>
  )
}
