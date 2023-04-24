import { useRouter } from 'next/router'
import Link from 'next/link'
import useLeagues from '@/lib/hooks/useLeagues'
import styles from '@/styles/modules/Nav.module.scss'

export default function Nav() {
  const leagues = useLeagues()
  const { asPath } = useRouter()

  return (
    <nav className={styles.container}>
      <ul>
        {Array.from(leagues).map(([label, id]) => (
          <li key={id}>
            <Link
              className={
                asPath.includes(id) ? `${id} ${styles.active}` : undefined
              }
              href={`/fms/${id}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
