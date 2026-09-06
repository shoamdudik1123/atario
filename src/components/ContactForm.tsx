import { useState, type FormEvent } from 'react'

const emptyForm = {
  fullName: '',
  phone: '',
  email: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  function update(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (!form.fullName.trim()) next.fullName = 'נא למלא שם מלא'
    if (!form.phone.trim()) next.phone = 'נא למלא מספר טלפון'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'נא למלא כתובת אימייל תקינה'
    if (!form.message.trim()) next.message = 'נא לכתוב הודעה קצרה'
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="form-success" role="status">
        <h3>ההודעה התקבלה. נחזור אליכם בהקדם.</h3>
        <p>תודה שפניתם אל TAVA.</p>
      </div>
    )
  }

  return (
    <form className="stack-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="contact-name">שם מלא</label>
        <input
          id="contact-name"
          value={form.fullName}
          onChange={(event) => update('fullName', event.target.value)}
          autoComplete="name"
        />
        {errors.fullName && <p className="field-error">{errors.fullName}</p>}
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-phone">טלפון</label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
            autoComplete="tel"
          />
          {errors.phone && <p className="field-error">{errors.phone}</p>}
        </div>
        <div className="field">
          <label htmlFor="contact-email">אימייל</label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            autoComplete="email"
          />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-message">הודעה</label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
        />
        {errors.message && <p className="field-error">{errors.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        שליחת ההודעה
      </button>
    </form>
  )
}
