import { useEffect, useId, useRef, useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import { IconAccessibility, IconClose } from './Icons'

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const a11y = useAccessibility()

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const first = panelRef.current?.querySelector<HTMLElement>('button')
    first?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="a11y-widget">
      <button
        ref={buttonRef}
        type="button"
        className="a11y-toggle"
        aria-label="נגישות"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <IconAccessibility className="a11y-toggle__icon" />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        className="a11y-panel"
        hidden={!open}
        role="dialog"
        aria-label="תפריט נגישות"
      >
        <div className="a11y-panel__head">
          <h2>תפריט נגישות</h2>
          <button type="button" className="icon-btn" onClick={() => setOpen(false)} aria-label="סגירת תפריט הנגישות">
            <IconClose />
          </button>
        </div>
        <div className="a11y-actions">
          <button type="button" onClick={a11y.increaseText}>
            הגדלת טקסט
          </button>
          <button type="button" onClick={a11y.decreaseText}>
            הקטנת טקסט
          </button>
          <button
            type="button"
            aria-pressed={a11y.highContrast}
            className={a11y.highContrast ? 'is-active' : ''}
            onClick={a11y.toggleHighContrast}
          >
            ניגודיות גבוהה
          </button>
          <button
            type="button"
            aria-pressed={a11y.grayscale}
            className={a11y.grayscale ? 'is-active' : ''}
            onClick={a11y.toggleGrayscale}
          >
            גווני אפור
          </button>
          <button
            type="button"
            aria-pressed={a11y.underlineLinks}
            className={a11y.underlineLinks ? 'is-active' : ''}
            onClick={a11y.toggleUnderlineLinks}
          >
            הדגשת קישורים
          </button>
          <button type="button" onClick={a11y.reset}>
            איפוס הגדרות
          </button>
        </div>
      </div>
    </div>
  )
}
