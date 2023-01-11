import { useRouter } from 'next/router'
import MakeTheSwitch from '@modules/Switching/components/MakeTheSwitch/MakeTheSwitch'

const MakeTheSwitchPage = (): JSX.Element => {
  const {
    query: { bankname = '' },
  } = useRouter()

  return <MakeTheSwitch bankName={String(bankname)} />
}

export default MakeTheSwitchPage
