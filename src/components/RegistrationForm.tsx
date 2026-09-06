import { useEffect, useState, type FormEvent } from 'react'
import { retreats } from '../data/retreats'

type RegistrationFormProps = {
  selectedSlug?: string
}

const emptyForm = {
  fullName: '',
  phone: '',
  email: '',
  guests: '1',
  retreat: '',
  notes: '',
}

export function RegistrationForm({ selectedSlug = '' }: RegistrationFormProps) {
  const [form, setForm] = useState({ ...emptyForm, retreat: selectedSlug })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setForm((current) => ({ ...current, retreat: selectedSlug }))
  }, [selectedSlug])

  function update(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!form.fullName.trim()) next.fullName = 'נא למלא שם מלא'
    if (!/^0\d{8,9}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      next.phone = 'נא למלא מספר טלפון תקין'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'נא למלא כתובת אימייל תקינה'
    }
    if (!form.retreat) next.retreat = 'נא לבחור ריטריט'
    return next
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="form-success" role="status">
        <h3>קיבלנו את הפרטים שלך. תודה שבחרת ב־TAVA.</h3>
        <p>נחזור אליכם בהקדם עם אישור ומסר להמשך.</p>
      </div>
    )
  }

  return (
    <form className="stack-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="fullName">שם מלא</label>
        <input
          id="fullName"
          name="fullName"
          autoComplete="name"
          value={form.fullName}
          onChange={(event) => update('fullName', event.target.value)}
          aria-invalid={Boolean(errors.fullName)}
        />
        {errors.fullName && <p className="field-error">{errors.fullName}</p>}
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">טלפון</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <p className="field-error">{errors.phone}</p>}
        </div>
        <div className="field">
          <label htmlFor="email">אימייל</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="guests">מספר משתתפים</label>
          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={(event) => update('guests', event.target.value)}
          >
            <option value="1">משתתף אחד</option>
            <option value="2">שני משתתפים</option>
            <option value="3">שלושה משתתפים</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="retreat">בחירת ריטריט</label>
          <select
            id="retreat"
            name="retreat"
            value={form.retreat}
            onChange={(event) => update('retreat', event.target.value)}
            aria-invalid={Boolean(errors.retreat)}
          >
            <option value="">בחרו ריטריט</option>
            {retreats.map((retreat) => (
              <option key={retreat.id} value={retreat.slug}>
                {retreat.title}
              </option>
            ))}
          </select>
          {errors.retreat && <p className="field-error">{errors.retreat}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="notes">הערות</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={form.notes}
          onChange={(event) => update('notes', event.target.value)}
          placeholder="העדפות תזונה, שאלות או כל דבר שחשוב לנו לדעת"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        שליחת בקשה להצטרפות
      </button>
    </form>
  )
}
