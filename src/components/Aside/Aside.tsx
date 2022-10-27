import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Card } from '@components/Card/Card'
import { CheckList } from '@components/CheckList/CheckList'

const asideConfig = {
  '/profile': (
    <Card shadow>
      <CheckList />
    </Card>
  ),
}

export const Aside = (): JSX.Element => {
  const { pathname } = useRouter()

  return asideConfig[pathname as keyof typeof asideConfig]
}
