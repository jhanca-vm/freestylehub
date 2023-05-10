import styles from '@/styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p>
        {'© 2023 '}
        <a href="https://jhanca.site" target="_blank" rel="noreferrer">
          Jhan Viloria
        </a>
        . Todos los derechos reservados.
      </p>
    </footer>
  )
}
