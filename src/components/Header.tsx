'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { COLOR, FMS } from '@/lib/constant'
import Menu from './Menu'
import styles from '@/styles/Header.module.scss'
import type { CSSProperties } from 'react'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.container}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="logo.webp"
          alt="FreestyleHub logo"
          width={32}
          height={32}
          priority
        />
      </Link>
      <nav>
        <ul>
          {Object.entries(FMS).map(([id, name]) => (
            <li key={id}>
              <Link
                style={
                  pathname.endsWith(`/fms/${id}`)
                    ? ({ '--color': COLOR[name] } as CSSProperties)
                    : undefined
                }
                href={`/fms/${id}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Menu />
    </header>
  )
}
