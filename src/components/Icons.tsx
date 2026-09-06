type IconProps = {
  className?: string
}

export function IconBed({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 18V9.5A1.5 1.5 0 0 1 4.5 8H10a4 4 0 0 1 4 4v6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 14h18v4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 12h5.5A1.5 1.5 0 0 1 21 13.5V14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconMeal({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 4v8a2 2 0 0 0 2 2h0V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 4v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 12V4c2.2 1.4 4 3.4 4 6.2S17.2 14 15 14v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconPractice({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="6.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 20l4-6 4 6M6.5 12.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconWorkshop({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16v11H4z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7V5h8v2M12 11v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconGuide({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 19c1.2-3.2 3.6-5 7-5s5.8 1.8 7 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconNature({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20V10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 17c-4 0-7-3-7-7 4 0 7 3 7 7z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 15c4 0 7-3 7-7-4 0-7 3-7 7z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconTime({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4.4L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconPin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="11" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconAccessibility({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="4" r="2" />
      <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45h-.02C12.66 6.85 12.19 6.8 11.7 6.88 10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
    </svg>
  )
}

export const includedIcons = {
  lodging: IconBed,
  meals: IconMeal,
  practices: IconPractice,
  workshops: IconWorkshop,
  guidance: IconGuide,
  nature: IconNature,
  freeTime: IconTime,
}
