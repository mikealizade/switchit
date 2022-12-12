import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { HeaderContainer, Header, Subheader, StepItem } from '@modules/Switching/PreSwitching.style'
import * as S from '@components/ActionHeader/ActionHeader.style'

type ActionHeader = {
  header: string
  subHeader: string
  text?: string
  step?: string
  isStepCompleted?: boolean
}

export const ActionHeader: NextPage<ActionHeader> = ({
  header,
  subHeader,
  text,
  step,
  isStepCompleted,
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
      <Header>
        {header}
        {isStepCompleted && (
          <StepItem>
            <Image src={`/icons/icon_radio_checked.svg`} alt='' width={35} height={35} />
          </StepItem>
        )}
      </Header>
      <Subheader>{subHeader}</Subheader>
      {!isStepCompleted && text && <p>{text}</p>}
    </HeaderContainer>
  )
}
