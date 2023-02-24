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
        id: 'programs',
        badge: 'Programs Completed',
        total: 0,
      },
      {
        id: 'resources',
        badge: 'Articles Read',
        total: 0,
      },
      {
        id: 'people',
        badge: 'Friends Switched',
        total: 0,
      },
    ],
    switchItPoints: [
      { id: 'sharingCodes', type: 'Friends Engaged', points: 0 },
      { id: 'resources', type: 'Green Finance Knowledge', points: 0 },
      { id: 'campaigns', type: 'Program Participation', points: 0 },
      { id: 'actions', type: 'Switching Actions', points: 0 },
    ],
  },
  switchJourneys: [],
}
