import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FMS } from '@/lib/constant'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import styles from '@/styles/Menu.module.scss'

export default function Menu() {
  const pathname = usePathname()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { matches } = useMediaQuery('(max-width: 1023px)')

  useEffect(() => {
    if (dialogRef.current?.open) dialogRef.current.close()
  }, [pathname])

  if (!matches) return null

  return (
    <>
      <button
        className={styles.button}
        onClick={() => dialogRef.current?.showModal()}
      >
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round">
          <path d="M4 8h16M4 16h16" />
        </svg>
      </button>
      <dialog ref={dialogRef}>
        <div className={styles.container}>
          <button onClick={() => dialogRef.current?.close()}>
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.25}
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <ul>
            {Object.entries(FMS).map(([id, name]) => (
              <li key={`menu-${id}`}>
                <Link
                  className={
                    pathname.endsWith(`/fms/${id}`) ? styles.active : undefined
                  }
                  href={`/fms/${id}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  )
}
