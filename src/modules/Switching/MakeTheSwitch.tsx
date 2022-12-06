import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import * as S from '@components/Button/Button.style'
import { Content } from '@styles/common.style'

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
  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card>
            {`You've`} selected {linkConfig[bankName as keyof typeof linkConfig].name}
            <S.TextLink
              className='primary'
              href={linkConfig[bankName as keyof typeof linkConfig].link}
              target='_blank'
              rel='noreferrer'
            >
              Make The Switch
            </S.TextLink>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}

export default MakeTheSwitch
