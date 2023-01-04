import { badBanks } from '@utils/constants'

export const badBanksConfig = {
  [badBanks.barclays]: {
    trustPilot: 'www.barclays.co.uk',
    google: 'barclays',
  },
  [badBanks.halifax]: {
    trustPilot: 'www.halifax.co.uk',
    google: 'halifax',
  },
  [badBanks.lloyds]: {
    trustPilot: 'lloydsbank.com',
    google: 'lloyds+bank',
  },
  [badBanks.hsbc]: {
    trustPilot: 'www.hsbc.co.uk',
    google: 'hsbc',
  },
  [badBanks.santander]: {
    trustPilot: 'www.santander.co.uk',
    google: 'santander',
  },
  [badBanks.natwest]: {
    trustPilot: 'www.natwest.com',
    google: 'natwest',
  },
  [badBanks.bankOfScotland]: {
    trustPilot: 'www.bankofscotland.co.uk',
    google: 'bank+of+scotland',
  },
  [badBanks.rbs]: {
    trustPilot: 'personal.rbs.co.uk',
    google: 'rbs',
  },
  [badBanks.coop]: {
    trustPilot: 'co-operativebank.co.uk',
    google: 'coop+bank',
  },
  [badBanks.virgin]: {
    trustPilot: 'uk.virginmoney.com',
    google: 'virgin+money',
  },
  [badBanks.allianceLeicester]: {
    trustPilot: '',
    google: '',
  },
  [badBanks.bankOfIreland]: {
    trustPilot: 'bankofirelanduk.com',
    google: 'bank+of+ireland',
  },
  [badBanks.tsb]: {
    trustPilot: 'tsb.co.uk',
    google: 'tsb',
  },
  [badBanks.ulster]: {
    trustPilot: 'www.ulsterbank.co.uk',
    google: 'ulster+bank',
  },
  [badBanks.danske]: {
    trustPilot: 'danskebank.co.uk',
    google: 'danske+bank',
  },
  [badBanks.firstDirect]: {
    trustPilot: 'www.firstdirect.com',
    google: '',
  },
  [badBanks.marksSpencer]: {
    trustPilot: 'bank.marksandspencer.com',
    google: '',
  },
  [badBanks.metro]: {
    trustPilot: 'www.metrobankonline.co.uk',
    google: 'metro+bank',
  },
  [badBanks.revolut]: {
    trustPilot: 'www.revolut.com',
    google: '',
  },
  [badBanks.kroo]: {
    trustPilot: 'kroo.com',
    google: '',
  },
}
