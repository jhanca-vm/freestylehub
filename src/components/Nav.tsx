import Link from 'next/link'
import leagues from '@/lib/utils/leagues'
import styles from '@/styles/modules/Nav.module.scss'

export default function Nav() {
  return (
    <nav className={styles.container}>
      <ul>
        {Array.from(leagues).map(([label, id]) => (
          <li key={id}>
            <Link href={`/fms/${id}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
