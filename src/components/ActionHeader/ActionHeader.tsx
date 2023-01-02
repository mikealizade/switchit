import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { HeaderContainer, Header, Subheader } from '@modules/Switching/Switching.style'

type ActionHeader = {
  header: string
  subHeader: string
  text?: string
  isStepCompleted?: boolean
}

export const ActionHeader: NextPage<ActionHeader> = ({
  header,
  subHeader,
  text,
  isStepCompleted,
}): JSX.Element => {
  const { back } = useRouter()

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
