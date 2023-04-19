import { forwardRef } from 'react'
import styles from '@/styles/modules/Modal.module.scss'
import type { MouseEvent, PropsWithChildren } from 'react'

const Modal = forwardRef<HTMLDialogElement, PropsWithChildren>(function Modal(
  { children },
  ref
) {
  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    const { nodeName } = event.target as Node

    if (nodeName === 'DIALOG') event.currentTarget.close()
  }

  return (
    <dialog ref={ref} className={styles.container} onClick={handleClick}>
      {children}
    </dialog>
  )
})

export default Modal
