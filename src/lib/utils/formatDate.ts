export default function formatDate(timestamp: string) {
  const date = new Date(timestamp)
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    timeZone
  }

  if (date.getHours()) {
    options.hour = '2-digit'
    options.minute = '2-digit'
  }

  return date.toLocaleString('es', options)
}
