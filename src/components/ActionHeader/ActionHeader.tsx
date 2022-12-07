import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { HeaderContainer, Header, Subheader } from '@modules/Switching/PreSwitching.style'
import * as S from '@components/ActionHeader/ActionHeader.style'

type ActionHeader = {
  header: string
  subHeader: string
  text?: string
  step?: string
}

export const ActionHeader: NextPage<ActionHeader> = ({
  header,
  subHeader,
  text,
  step,
}): JSX.Element => {
  const { back } = useRouter()

  return (
    <HeaderContainer>
      {step && (
        <S.StepContainer>
          <div onClick={() => back()}>
            <Image src={'/icons/icon_chevron_left.svg'} alt='' width={25} height={25} />
          </div>

          <S.StepCounter>Step {step} of 7</S.StepCounter>
        </S.StepContainer>
      )}
      <Header>{header}</Header>
      <Subheader>{subHeader}</Subheader>
      {text && <p>{text}</p>}
    </HeaderContainer>
  )
}
