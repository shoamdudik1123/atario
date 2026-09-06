import { useMemo, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { RetreatCard } from '../components/RetreatCard'
import { Seo } from '../components/Seo'
import { images } from '../data/images'
import { getRetreatsByCategory } from '../data/retreats'
import { filterOptions } from '../data/site'

export function RetreatsPage() {
  const [filter, setFilter] = useState<(typeof filterOptions)[number]>('כל הריטריטים')
  const visible = useMemo(() => getRetreatsByCategory(filter), [filter])

  return (
    <>
      <Seo
        title="הריטריטים שלנו | TAVA"
        description="מצאו את הריטריט שמתאים לכם: גוף ונפש בהרי ירושלים, יוגה בגליל, או התחדשות במדבר יהודה."
        path="/retreats"
      />
      <PageHero
        title="הריטריטים שלנו"
        text="מצאו את הריטריט שמתאים לכם"
        image={images.yogaField}
        imageAlt="אדם בתרגול שקט בטבע"
        crumbs={[
          { label: 'ראשי', to: '/' },
          { label: 'הריטריטים שלנו' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>כל הריטריטים הקרובים</h2>
            <p>אפשר לסנן לפי סוג התרגול, האווירה או סוף שבוע. כל התאריכים זהים גם בלוח השנה ובעמודי הריטריט.</p>
          </div>
          <div className="filter-bar" role="group" aria-label="סינון ריטריטים">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`chip ${filter === option ? 'is-active' : ''}`}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="empty-note">אין כרגע ריטריט בקטגוריה הזו. אפשר לבחור סינון אחר.</p>
          ) : (
            <div className="card-grid card-grid--rich">
              {visible.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} featured />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
