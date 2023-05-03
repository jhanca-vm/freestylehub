import useMatchdayForm from '@/lib/hooks/useMatchdayForm'
import Schedule from '../Schedule'
import styles from '@/styles/modules/MatchdayForm.module.scss'

export default function MatchdayForm() {
  const { formRef, matchday, handleSubmit, save } = useMatchdayForm()

  return (
    <section className={styles.container}>
      <div>
        <h2>Añadir Jornada</h2>
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
          <input type="number" name="number" placeholder="#" min={1} required />
          <input type="text" name="fms" placeholder="FMS" required />
          <input type="text" name="city" placeholder="Ciudad" required />
          <input type="date" name="date" placeholder="Fecha" required />
          <input type="text" name="image" placeholder="Imagen" required />
          <button type="submit">Previsualizar</button>
        </form>
      </div>
      <div>
        <Schedule matchdays={matchday} />
        {matchday.length > 0 && <button onClick={save}>Guardar</button>}
      </div>
    </section>
  )
}
