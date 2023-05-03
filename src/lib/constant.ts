import { Plus_Jakarta_Sans } from 'next/font/google'

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const FONT = Plus_Jakarta_Sans({
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const LEAGUES: Array<[string, string]> = [
  ['España', 'spain'],
  ['Caribe', 'caribbean'],
  ['Perú', 'peru'],
  ['Colombia', 'colombia'],
  ['México', 'mexico'],
  ['Chile', 'chile'],
  ['Argentina', 'argentina']
]

export const BANNERS = new Map<string, [string, string]>([
  ['spain', ['65jTHcZ', 'quO01vH']],
  ['caribbean', ['XjcA9vG', 'Z5Atj54']],
  ['peru', ['C1wjcGW', 'KI9OKjX']],
  ['colombia', ['APiZmIg', 'fOIv0Ig']],
  ['mexico', ['LDbqlQv', 'inzZS87']],
  ['chile', ['xiuJGQh', '6JHRozm']],
  ['argentina', ['ebw2enc', 'AK4NDDN']]
])
