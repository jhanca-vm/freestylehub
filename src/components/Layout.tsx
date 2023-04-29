import { Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import useModal from '@/lib/hooks/useModal'
import Nav from './Nav'
import Modal from './Modal'
import styles from '@/styles/modules/Layout.module.scss'
import type { PropsWithChildren } from 'react'

const plusJakartaSans = Plus_Jakarta_Sans({
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function Layout({ children }: PropsWithChildren) {
  const { modalRef } = useModal()

  return (
    <div className={`${plusJakartaSans.className} ${styles.container}`}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.webp" alt="Logo" width={28} height={28} />
        </Link>
        <Nav />
        <button aria-label="Menú" onClick={() => modalRef.current?.showModal()}>
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
        <Modal ref={modalRef}>
          <Nav />
        </Modal>
      </header>
      <main className={styles.main}>{children}</main>
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
