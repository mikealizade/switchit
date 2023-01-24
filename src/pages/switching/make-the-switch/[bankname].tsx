import { useRouter } from 'next/router'
import MakeTheSwitch from '@modules/Switching/components/MakeTheSwitch/MakeTheSwitch'

const MakeTheSwitchPage = (): JSX.Element | null => {
  const {
    query: { bankname = '' },
  } = useRouter()

  return bankname ? <MakeTheSwitch bankName={String(bankname)} /> : null
}

export default MakeTheSwitchPage
