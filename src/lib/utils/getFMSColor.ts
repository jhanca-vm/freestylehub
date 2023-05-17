import { FMS } from '$lib/constants'

export default function getFMSColor(fms: string) {
  return FMS.find(([_color, name]) => name === fms)?.[0]
}
