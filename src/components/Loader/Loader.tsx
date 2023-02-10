import type { NextPage } from 'next'
import Image from 'next/image'
import { LoaderContainer } from '@styles/common.style'

export const Loader: NextPage<{ height?: number }> = ({ height = 150 }): JSX.Element => {
  return (
    <LoaderContainer key='loading' height={height}>
      <Image src={'/images/loader.svg'} alt='' width={340} height={120} />
    </LoaderContainer>
  )
}
