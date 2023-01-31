import type { NextPage } from 'next'
import Image from 'next/image'
import { LoaderContainer } from '@styles/common.style'

export const Loader: NextPage = (): JSX.Element => {
  return (
    <LoaderContainer key='loading' height={200}>
      <Image src={'/images/loader.svg'} alt='' width={340} height={120} />
    </LoaderContainer>
  )
}
