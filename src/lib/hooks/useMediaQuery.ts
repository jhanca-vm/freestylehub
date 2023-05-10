import { useEffect, useState } from 'react'

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQueryList = matchMedia(query)
    const handleChange = ({ matches }: MediaQueryListEvent) => {
      setMatches(matches)
    }

    if (mediaQueryList.matches) setMatches(true)

    mediaQueryList.addEventListener('change', handleChange, true)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange, true)
    }
  }, [query])

  return { matches }
}
