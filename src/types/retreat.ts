export type RetreatCategory =
  | 'גוף ונפש'
  | 'יוגה'
  | 'מיינדפולנס'
  | 'התחדשות'
  | 'טבע'
  | 'סופ״ש'

export type ScheduleItem = {
  time: string
  title: string
}

export type ScheduleDay = {
  day: string
  items: ScheduleItem[]
}

export type IncludedItem = {
  key:
    | 'lodging'
    | 'meals'
    | 'practices'
    | 'workshops'
    | 'guidance'
    | 'nature'
    | 'freeTime'
  title: string
  text: string
}

export type Review = {
  id: string
  name: string
  city: string
  rating: 4 | 5
  text: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type Retreat = {
  id: string
  title: string
  slug: string
  shortName: string
  shortDescription: string
  description: string[]
  location: string
  locationNote: string
  date: string
  endDate: string
  duration: string
  nights: number
  days: number
  price: number
  image: string
  gallery: string[]
  categories: RetreatCategory[]
  remainingSpots: number
  capacity: number
  schedule: ScheduleDay[]
  included: IncludedItem[]
  suitableFor: string[]
  reviews: Review[]
  faq: FaqItem[]
  seoTitle: string
  seoDescription: string
}
