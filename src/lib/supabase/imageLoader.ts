import { SUPABASE_URL } from '../constant'
import type { ImageLoaderProps } from 'next/image'

export default function imageLoader({ src }: ImageLoaderProps) {
  return `${SUPABASE_URL}/storage/v1/object/public/images/${src}`
}
