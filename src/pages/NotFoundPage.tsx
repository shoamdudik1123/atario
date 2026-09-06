import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <section className="section">
      <Seo
        title="העמוד לא נמצא | TAVA"
        description="העמוד שחיפשתם אינו קיים. אפשר לחזור לעמוד הבית או לריטריטים הקרובים."
        path="/404"
      />
      <div className="container cta-plain">
        <h1>העמוד לא נמצא</h1>
        <p>ייתכן שהכתובת השתנתה, או שהעמוד הזה מעולם לא היה כאן.</p>
        <div className="hero__actions">
          <Link to="/" className="btn btn-primary">
            חזרה לראשי
          </Link>
          <Link to="/retreats" className="btn btn-outline">
            לריטריטים הקרובים
          </Link>
        </div>
      </div>
    </section>
  )
}
