import { Link } from 'react-router-dom'
import type { Retreat } from '../types/retreat'
import { formatDateRange, formatPrice } from '../utils/dates'
import { SafeImage } from './SafeImage'

type RetreatCardProps = {
  retreat: Retreat
  featured?: boolean
}

export function RetreatCard({ retreat, featured = false }: RetreatCardProps) {
  return (
    <article className={`retreat-card ${featured ? 'is-featured' : ''}`}>
      <Link to={`/retreat/${retreat.slug}`} className="retreat-card__media">
        <SafeImage src={retreat.image} alt={`תמונה מתוך ${retreat.title}`} />
        <span className="spot-badge">{retreat.remainingSpots} מקומות נותרו</span>
      </Link>
      <div className="retreat-card__body">
        <p className="eyebrow">{retreat.location}</p>
        <h3>
          <Link to={`/retreat/${retreat.slug}`}>{retreat.title}</Link>
        </h3>
        <p className="retreat-card__text">{retreat.shortDescription}</p>
        <dl className="retreat-meta">
          <div>
            <dt>תאריך</dt>
            <dd>{formatDateRange(retreat.date, retreat.endDate)}</dd>
          </div>
          <div>
            <dt>מעביר הריטריט</dt>
            <dd>{retreat.facilitator}</dd>
          </div>
          <div>
            <dt>משך</dt>
            <dd>{retreat.duration}</dd>
          </div>
          <div>
            <dt>מחיר</dt>
            <dd>{formatPrice(retreat.price)}</dd>
          </div>
        </dl>
        <ul className="tag-list">
          {retreat.categories.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Link to={`/retreat/${retreat.slug}`} className="btn btn-outline">
          לפרטים
        </Link>
      </div>
    </article>
  )
}
