import { useRef, useState, type FormEvent } from 'react'
import wretch from 'wretch'
import type { Matchday } from '@/services/matchday'

export default function useMatchdayForm() {
  const [matchday, setMatchday] = useState<Matchday[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newMatchday: Matchday = Object.fromEntries(
      new FormData(formRef.current!)
    ) as any

    newMatchday.id = crypto.randomUUID()
    newMatchday.number = Number(newMatchday.number)

    setMatchday([newMatchday])
  }

  function save() {
    wretch('/api/matchday').post(matchday)
    formRef.current?.reset()
    setMatchday([])
  }

  return { formRef, matchday, handleSubmit, save }
}
