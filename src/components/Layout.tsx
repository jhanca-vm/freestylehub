import { useRef } from 'react'
import { Work_Sans } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import Modal from './Modal'
import styles from '@/styles/Layout.module.scss'
import type { PropsWithChildren } from 'react'

const workSans = Work_Sans({ subsets: ['latin'] })

export default function Layout({ children }: PropsWithChildren) {
  const modalRef = useRef<HTMLDialogElement>(null)

  return (
    <div className={`${workSans.className} ${styles.container}`}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.webp" alt="Logo" width={28} height={28} />
        </Link>
        <Nav />
        <button onClick={() => modalRef.current?.showModal()}>
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
        <Modal ref={modalRef}>
          <Nav />
        </Modal>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>
          © 2023{' '}
          <a href="https://jhanca.site" target="_blank" rel="noreferrer">
            Jhan Viloria
          </a>
          . Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}
