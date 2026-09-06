type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`logo ${className}`}>
      <svg className="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M8 30c8-11 24-11 32 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="24" cy="16" r="4.2" fill="currentColor" />
      </svg>
      <span className="logo__word">TAVA</span>
    </span>
  )
}
