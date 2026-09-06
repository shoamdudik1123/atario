import { useState } from 'react'

type SafeImageProps = {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export function SafeImage({ src, alt, className = '', eager = false }: SafeImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className={`img-fallback ${className}`} role="img" aria-label={alt} />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
