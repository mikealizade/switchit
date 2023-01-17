import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch } from 'react-redux'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { Content, BoldLink, Buttons } from '@styles/common.style'
import { goodBanksConfig } from '@utils/data'
import * as S from './MakeTheSwitch.style'
import monzo from '../../../../../public/icons/icon_monzo.png'
import nationwide from '../../../../../public/icons/icon_nationwide.png'
import triodos from '../../../../../public/icons/icon_triodos.png'
import starling from '../../../../../public/images/logo_starling.svg'

const logoConfig = {
  starling: {
    img: starling,
    width: 149,
    height: 88,
  },
  monzo: {
    img: monzo,
    width: 60,
    height: 58,
  },
  triodos: {
    img: triodos,
    width: 119,
    height: 15,
  },
  nationwide: {
    img: nationwide,
    width: 121,
    height: 27,
  },
}

const MakeTheSwitch: NextPage<{ bankName: string }> = ({ bankName }) => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const nextStep = useNextStep()
  const { currentJourney } = useGetCurrentJourney()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const bank = goodBanksConfig[bankName as keyof typeof goodBanksConfig]
  const logo = logoConfig[bankName as keyof typeof logoConfig]
  const hasMadeSwitch = currentJourney?.completedSteps.includes(steps.makeSwitch)

  const onMakeTheSwitch = () => {
    nextStep(steps.makeSwitch, null, { goodBank: bank.name })
    window.open(bank.link, '_blank', 'noreferrer')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column stretch>
            <ActionHeader
              header='Choose Your Bank'
              subHeader={`You've selected ${bank?.fullName}`}
            />
            <Image
              src={logo?.img.src}
              alt={bank?.fullName}
              width={logo?.width}
              height={logo?.height}
            />
            <S.TextContent>
              <S.Text>{`Let's`} do this.</S.Text>
              <S.Text>{`This will take you to ${bank?.fullName}'s`} website</S.Text>
              <S.Text>
                Now {`you've`} selected your bank, you just need to fill out a few details on their
                website to open your new account and the Current Account Switch Service will handle
                the rest.
              </S.Text>
              <S.Text>
                {`You're`} nearly done now - this will only take a few minutes! Then, {`you'll`}{' '}
                just need to come back to this page to verify your switch.
              </S.Text>
              <BoldLink onClick={() => dispatch(toggleDrawer('dontWasteYourSwitch'))}>
                {`Don't`} Waste Your Switch
              </BoldLink>
              <BoldLink onClick={() => dispatch(toggleDrawer('disclaimer'))}>Disclaimer</BoldLink>
            </S.TextContent>
            <Buttons>
              <Button
                type='button'
                size='small'
                mode='secondary'
                onClick={() => push('/switching/green-banks')}
              >
                Back
              </Button>
              <Button type='button' size='small' mode='primary' onClick={onMakeTheSwitch}>
                Make The Switch
              </Button>
              <Button
                type='button'
                size='small'
                mode='primary'
                disabled={!hasMadeSwitch}
                onClick={() => push('/switching/confirm-switch')}
              >
                I Made The Switch, Take Me To Verify
              </Button>
            </Buttons>
          </Card>
          <ProgressBar step={steps.chooseGreenBank} />
        </Content>
      </ErrorBoundary>
    </>
  )
}

export default MakeTheSwitch
