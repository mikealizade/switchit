import type { NextPage } from 'next'
import { Card } from '@components/Card/Card'
import { CheckList } from '@components/CheckList/CheckList'

import { useRouter } from 'next/router'

const asideConfig = {
  '/profile': (
    <Card shadow>
      <CheckList />
    </Card>
  ),
}

export const Aside = (): JSX.Element => {
  const { pathname } = useRouter()

  return asideConfig[pathname]
}
