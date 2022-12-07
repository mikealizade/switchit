import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Card } from '@components/Card/Card'
import { CheckList } from '@components/CheckList/CheckList'

const asideConfig = {
  '/switching/selectBank': (
    <Card stretch column>
      <h2>Impact Card</h2>
    </Card>
  ),
}

export const Aside = (): JSX.Element => {
  const { pathname } = useRouter()

  console.log('pathname', pathname)

  return asideConfig[pathname as keyof typeof asideConfig]
}
