type ReviewCardProps = {
  name: string
  city: string
  rating: 4 | 5
  text: string
  retreatTitle?: string
}

export function ReviewCard({ name, city, rating, text, retreatTitle }: ReviewCardProps) {
  return (
    <blockquote className="review-card">
      <div className="review-card__stars" aria-label={`דירוג ${rating} מתוך 5`}>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < rating ? 'is-on' : ''}>
            ★
          </span>
        ))}
      </div>
      <p>{text}</p>
      <footer>
        <strong>{name}</strong>
        <span>
          {city}
          {retreatTitle ? ` · ${retreatTitle}` : ''}
        </span>
      </footer>
    </blockquote>
  )
}
