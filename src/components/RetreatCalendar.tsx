import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { calendarBounds, getRetreatsOnDate, retreats } from '../data/retreats'
import type { Retreat } from '../types/retreat'
import {
  formatDateRange,
  getDaysInMonth,
  getWeekdaySundayFirst,
  monthLabel,
  parseISODate,
  toISODate,
} from '../utils/dates'

const weekdays = ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳']

function monthIndex(year: number, month: number) {
  return year * 12 + month
}

type RetreatCalendarProps = {
  compact?: boolean
}

export function RetreatCalendar({ compact = false }: RetreatCalendarProps) {
  const [year, setYear] = useState(calendarBounds.start.year)
  const [month, setMonth] = useState(calendarBounds.start.month)
  const [selected, setSelected] = useState<string | null>(null)

  const currentIndex = monthIndex(year, month)
  const minIndex = monthIndex(calendarBounds.start.year, calendarBounds.start.month)
  const maxIndex = monthIndex(calendarBounds.end.year, calendarBounds.end.month)

  const cells = useMemo(() => {
    const first = new Date(year, month, 1)
    const offset = getWeekdaySundayFirst(first)
    const days = getDaysInMonth(year, month)
    return Array.from({ length: offset + days }, (_, index) => {
      if (index < offset) return null
      return new Date(year, month, index - offset + 1)
    })
  }, [year, month])

  const monthRetreats = useMemo(
    () =>
      retreats.filter((retreat) => {
        const start = parseISODate(retreat.date)
        const end = parseISODate(retreat.endDate)
        const monthStart = new Date(year, month, 1)
        const monthEnd = new Date(year, month + 1, 0)
        return start <= monthEnd && end >= monthStart
      }),
    [year, month],
  )

  const selectedRetreats = selected ? getRetreatsOnDate(parseISODate(selected)) : monthRetreats

  function shiftMonth(delta: number) {
    const next = new Date(year, month + delta, 1)
    setYear(next.getFullYear())
    setMonth(next.getMonth())
    setSelected(null)
  }

  return (
    <div className={`calendar ${compact ? 'is-compact' : ''}`}>
      <div className="calendar-toolbar">
        <button
          type="button"
          className="icon-btn"
          onClick={() => shiftMonth(-1)}
          disabled={currentIndex <= minIndex}
          aria-label="החודש הקודם"
        >
          <span aria-hidden="true">›</span>
        </button>
        <h2>{monthLabel(year, month)}</h2>
        <button
          type="button"
          className="icon-btn"
          onClick={() => shiftMonth(1)}
          disabled={currentIndex >= maxIndex}
          aria-label="החודש הבא"
        >
          <span aria-hidden="true">‹</span>
        </button>
      </div>

      <div className="calendar-grid" role="grid" aria-label="לוח שנה של ריטריטים">
        {weekdays.map((day) => (
          <div key={day} className="calendar-weekday" role="columnheader">
            {day}
          </div>
        ))}
        {cells.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="calendar-cell is-empty" />
          }

          const iso = toISODate(date)
          const dayRetreats = getRetreatsOnDate(date)
          const isSelected = selected === iso

          return (
            <div
              key={iso}
              className={`calendar-cell ${dayRetreats.length ? 'has-event' : ''} ${isSelected ? 'is-selected' : ''}`}
            >
              <button
                type="button"
                className="calendar-day"
                onClick={() => setSelected(isSelected ? null : iso)}
                aria-pressed={isSelected}
                aria-label={
                  dayRetreats.length
                    ? `${date.getDate()} ${monthLabel(year, month)}, ${dayRetreats.length} ריטריטים`
                    : `${date.getDate()} ${monthLabel(year, month)}`
                }
              >
                <span>{date.getDate()}</span>
                {dayRetreats.length > 0 && <span className="calendar-dot" aria-hidden="true" />}
              </button>
              <div className="calendar-events">
                {dayRetreats.map((retreat) => (
                  <Link
                    key={retreat.id}
                    to={`/retreat/${retreat.slug}`}
                    className={`calendar-event event-${retreat.id}`}
                  >
                    {retreat.shortName}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="calendar-list">
        <h3>{selected ? 'ריטריטים ביום שנבחר' : 'ריטריטים בחודש זה'}</h3>
        {selectedRetreats.length === 0 ? (
          <p className="muted">אין ריטריטים בחודש הזה. אפשר לעבור לחודש הבא או הקודם.</p>
        ) : (
          <ul>
            {selectedRetreats.map((retreat) => (
              <CalendarListItem key={retreat.id} retreat={retreat} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function CalendarListItem({ retreat }: { retreat: Retreat }) {
  return (
    <li>
      <Link to={`/retreat/${retreat.slug}`} className="calendar-list__item">
        <span className={`calendar-swatch event-${retreat.id}`} aria-hidden="true" />
        <span>
          <strong>{retreat.title}</strong>
          <em>
            {formatDateRange(retreat.date, retreat.endDate)} · {retreat.location}
          </em>
        </span>
      </Link>
    </li>
  )
}
