export function parseISODate(value: string): Date {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function toISODate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat('he-IL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parseISODate(value))
}

export function formatDateRange(start: string, end: string): string {
  const startDate = parseISODate(start)
  const endDate = parseISODate(end)
  const sameYear = startDate.getFullYear() === endDate.getFullYear()
  const sameMonth = sameYear && startDate.getMonth() === endDate.getMonth()

  if (sameMonth) {
    const monthYear = new Intl.DateTimeFormat('he-IL', {
      month: 'long',
      year: 'numeric',
    }).format(endDate)
    return `${startDate.getDate()}–${endDate.getDate()} ב${monthYear}`
  }

  const startLabel = new Intl.DateTimeFormat('he-IL', {
    day: 'numeric',
    month: 'long',
  }).format(startDate)
  const endLabel = formatDate(end)
  return `${startLabel} – ${endLabel}`
}

export function formatPrice(amount: number): string {
  return `${amount.toLocaleString('he-IL')} ₪`
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function isDateInRange(day: Date, start: string, end: string): boolean {
  const startDate = parseISODate(start)
  const endDate = parseISODate(end)
  const current = new Date(day.getFullYear(), day.getMonth(), day.getDate())
  return current >= startDate && current <= endDate
}

export function monthLabel(year: number, month: number): string {
  return new Intl.DateTimeFormat('he-IL', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month, 1))
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

export function getWeekdaySundayFirst(date: Date): number {
  return date.getDay()
}
