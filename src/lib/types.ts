export interface Matchday {
  id: string
  number: number
  league: string
  city: string
  date: string
  image: string
}

export interface Transfer {
  id: number
  from: string | null
  freestyler: string
  to: string
}