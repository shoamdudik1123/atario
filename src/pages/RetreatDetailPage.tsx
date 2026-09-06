import { Link, useParams } from 'react-router-dom'
import { FaqAccordion } from '../components/FaqAccordion'
import { IconCalendar, IconPin, includedIcons } from '../components/Icons'
import { RegistrationForm } from '../components/RegistrationForm'
import { ReviewCard } from '../components/Reviews'
import { SafeImage } from '../components/SafeImage'
import { Seo } from '../components/Seo'
import { getRetreatBySlug } from '../data/retreats'
import { formatDateRange, formatPrice } from '../utils/dates'
import { NotFoundPage } from './NotFoundPage'

export function RetreatDetailPage() {
  const { slug } = useParams()
  const retreat = slug ? getRetreatBySlug(slug) : undefined

  if (!retreat) {
    return <NotFoundPage />
  }

  return (
    <>
      <Seo title={retreat.seoTitle} description={retreat.seoDescription} path={`/retreat/${retreat.slug}`} />

      <section className="retreat-hero">
        <SafeImage
          src={retreat.image}
          alt={`נוף ואווירה מתוך ${retreat.title}`}
          className="retreat-hero__image"
          eager
        />
        <div className="retreat-hero__overlay" />
        <div className="container retreat-hero__content">
          <nav className="breadcrumbs light" aria-label="ניווט היררכי">
            <ol>
              <li>
                <Link to="/">ראשי</Link>
              </li>
              <li>
                <Link to="/retreats">הריטריטים שלנו</Link>
              </li>
              <li>
                <span>{retreat.shortName}</span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow light">{retreat.location}</p>
          <h1>{retreat.title}</h1>
          <ul className="hero-facts">
            <li>
              <IconCalendar />
              <span>{formatDateRange(retreat.date, retreat.endDate)}</span>
            </li>
            <li>
              <IconPin />
              <span>{retreat.location}</span>
            </li>
            <li>
              <span>{retreat.duration}</span>
            </li>
            <li>
              <span>{formatPrice(retreat.price)}</span>
            </li>
          </ul>
          <div className="hero__actions">
            <a href="#join" className="btn btn-light">
              אני רוצה להצטרף
            </a>
            <p className="spots-note">{retreat.remainingSpots} מקומות נותרו מתוך {retreat.capacity}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          <article className="prose-wrap">
            <h2>על הריטריט</h2>
            {retreat.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="tag-list">
              {retreat.categories.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
          <aside className="info-card">
            <h2>פרטים מהירים</h2>
            <dl>
              <div>
                <dt>תאריך</dt>
                <dd>{formatDateRange(retreat.date, retreat.endDate)}</dd>
              </div>
              <div>
                <dt>אזור</dt>
                <dd>{retreat.location}</dd>
              </div>
              <div>
                <dt>משך</dt>
                <dd>{retreat.duration}</dd>
              </div>
              <div>
                <dt>מחיר</dt>
                <dd>{formatPrice(retreat.price)}</dd>
              </div>
              <div>
                <dt>מקומות</dt>
                <dd>{retreat.remainingSpots} נותרו</dd>
              </div>
            </dl>
            <a href="#join" className="btn btn-primary">
              אני רוצה להצטרף
            </a>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container detail-layout">
          <div>
            <h2>איפה זה מתקיים?</h2>
            <p className="lead-small">
              הריטריט מתקיים ב{retreat.location}. {retreat.locationNote}
            </p>
          </div>
          <SafeImage
            src={retreat.gallery[1] || retreat.image}
            alt={`האווירה באזור ${retreat.location}`}
            className="rounded-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>תוכנית הריטריט</h2>
            <p>הימים בנויים, אבל נשאר בהם אוויר. ייתכנו שינויים קלים לפי מזג האוויר וקצב הקבוצה.</p>
          </div>
          <div className="schedule-grid">
            {retreat.schedule.map((day) => (
              <article className="schedule-card" key={day.day}>
                <h3>{day.day}</h3>
                <ol>
                  {day.items.map((item) => (
                    <li key={`${day.day}-${item.time}`}>
                      <time>{item.time}</time>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <h2>מה כלול</h2>
          </div>
          <div className="included-grid">
            {retreat.included.map((item) => {
              const Icon = includedIcons[item.key]
              return (
                <article className="included-card" key={item.key}>
                  <Icon className="included-card__icon" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>למי הריטריט מתאים?</h2>
            <ul className="check-list">
              {retreat.suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>מה המשתתפים מספרים</h2>
            <div className="review-stack">
              {retreat.reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <h2>שאלות נפוצות</h2>
          <FaqAccordion items={retreat.faq} />
        </div>
      </section>

      <section className="section" id="join">
        <div className="container form-panel form-panel--wide">
          <div className="section-head">
            <h2>הרשמה</h2>
            <p>השאירו פרטים ונחזור אליכם עם אישור ומסר להמשך. מספר המקומות מוגבל.</p>
          </div>
          <RegistrationForm selectedSlug={retreat.slug} />
        </div>
      </section>
    </>
  )
}
