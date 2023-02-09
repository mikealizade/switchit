export const defaultProfile = {
  isProfilePublic: true,
  friends: [],
  profile: {
    summary: {
      switchingStatement: '',
      campaigns: '',
      proudActions: '',
    },
    sharingCodes: [],
    badges: [
      {
        id: 'providers',
        badge: 'Providers Switched',
        total: 0,
      },
      {
        id: 'campaigns',
        badge: 'Campaigns Completed',
        total: 0,
      },
      {
        id: 'resources',
        badge: 'Academy Articles Read',
        total: 0,
      },
      {
        id: 'people',
        badge: 'People I helped Switch',
        total: 0,
      },
    ],
    climateImpactReport: {
      carbonRemoved: 0,
      trashRemoved: 0,
    },
    switchItPoints: [
      { type: 'Sharing Codes', points: 0 },
      { type: 'Resources Read', points: 0 },
      { type: 'Switching Campaigns', points: 0 },
      { type: 'Switching Actions', points: 0 },
    ],
  },
  switchingJourneys: {
    personal: [],
    student: [],
  },
}
