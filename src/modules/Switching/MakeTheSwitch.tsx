import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import * as S from './Switching.style'
import { TextLink } from '@components/Button/Button.style'
import { Content, ButtonContainer } from '@styles/common.style'

const linkConfig = {
  starling: {
    link: 'https://www.starlingbank.com',
    name: 'Starling Bank',
  },
  monzo: {
    link: 'https://monzo.com',
    name: 'Monzo',
  },
  triodos: {
    link: 'https://www.triodos.co.uk',
    name: 'Triodos Bank',
  },
  nationwide: {
    link: 'https://www.nationwide.co.uk',
    name: 'Nationwide Building Society',
  },
}

const MakeTheSwitch: NextPage<{ bankName: string }> = ({ bankName }) => {
  const { push } = useRouter()
  const name = linkConfig[bankName as keyof typeof linkConfig].name

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column>
            <ActionHeader
              header='Choose Your Bank'
              subHeader={`You've selected ${name}`}
              step='1'
            />
            <S.TextContent>
              <S.Text>{`This will take you to ${name}'s`} website</S.Text>
              <S.Text>
                After switching make sure sure to come back and complete your switching journey
              </S.Text>
            </S.TextContent>
            <ButtonContainer alignLeft>
              <Button
                type='button'
                size='small'
                mode='secondary'
                onClick={() => push('/switching/green-banks')}
              >
                Back To Green Banks
              </Button>
              <TextLink
                className='primary'
                href={linkConfig[bankName as keyof typeof linkConfig].link}
                target='_blank'
                rel='noreferrer'
              >
                Make The Switch
              </TextLink>
            </ButtonContainer>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}

export default MakeTheSwitch
