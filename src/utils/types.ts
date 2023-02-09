export type EventType = { target: { value: string } }

export type Action = {
  text: string
  icon: string
  type: string
  duration: string
  pointsEarned: string
  route: string
  actionTitle: string
  actionText: string
}

export type Nav = { text: string; route: string; icon: string; width?: number; height?: number }

export type Point = {
  id: string
  type: string
  points: number
}
