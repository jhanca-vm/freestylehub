import '@/styles/globals.scss'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { PropsWithChildren } from 'react'

const plusJakartaSans = Plus_Jakarta_Sans({
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <body className={plusJakartaSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
