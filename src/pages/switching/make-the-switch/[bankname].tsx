import MakeTheSwitch from '@modules/Switching/MakeTheSwitch'
import { useRouter } from 'next/router'

const MakeTheSwitchPage = (): JSX.Element => {
  const {
    query: { bankname = '' },
  } = useRouter()

  console.log('bankname', bankname)

  return <MakeTheSwitch bankName={String(bankname)} />
}

export default MakeTheSwitchPage
