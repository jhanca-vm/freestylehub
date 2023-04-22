import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function useModal() {
  const router = useRouter()
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const handleRouteChange = () => {
      if (modalRef.current?.open) modalRef.current.close()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  return { modalRef }
}
