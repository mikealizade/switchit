import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch } from 'react-redux'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { useNextStep } from '@hooks/useNextStep'
import { goodBanksConfig } from '@utils/data'
import * as S from './MakeTheSwitch.style'
import { Content, BoldLink, Buttons } from '@styles/common.style'

import starling from '../../../../../public/images/logo_starling.svg'
import monzo from '../../../../../public/icons/icon_monzo.png'
import triodos from '../../../../../public/icons/icon_triodos.png'
import nationwide from '../../../../../public/icons/icon_nationwide.png'

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
  const hasMadeSwitch = currentJourney!?.completedSteps.includes(steps.makeSwitch)

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
              <S.Text>{`This will take you to ${bank?.fullName}'s`} website</S.Text>
              <S.Text>
                After switching make sure sure to come back and complete your switching journey
              </S.Text>
            </S.TextContent>
            <BoldLink onClick={() => dispatch(toggleDrawer('disclaimer'))}>Disclaimer</BoldLink>
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
