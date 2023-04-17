import Link from 'next/link'
import styles from '@/styles/Nav.module.scss'

export default function Nav() {
  const leagues: Array<[string, string]> = [
    ['spain', 'España'],
    ['caribbean', 'Caribe'],
    ['peru', 'Perú'],
    ['colombia', 'Colombia'],
    ['mexico', 'México'],
    ['chile', 'Chile'],
    ['argentina', 'Argentina']
  ]

  return (
    <nav className={styles.container}>
      <ul>
        {leagues.map(([id, label]) => (
          <li key={id}>
            <Link href={`/fms/${id}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
