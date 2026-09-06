import { PageHero } from '../components/PageHero'
import { RetreatCalendar } from '../components/RetreatCalendar'
import { Seo } from '../components/Seo'
import { images } from '../data/images'

export function CalendarPage() {
  return (
    <>
      <Seo
        title="לוח שנה | TAVA"
        description="לוח שנה אינטראקטיבי של ריטריטי TAVA: אוקטובר 2026 עד ינואר 2027. בחרו תאריך ועברו לעמוד הריטריט."
        path="/calendar"
      />
      <PageHero
        title="לוח שנה"
        text="הימים שבהם אפשר לעצור מסומנים בלוח. לחצו על ריטריט כדי לעבור לפרטים."
        image={images.hills}
        imageAlt="נוף פתוח באור רך"
        crumbs={[
          { label: 'ראשי', to: '/' },
          { label: 'לוח שנה' },
        ]}
      />
      <section className="section">
        <div className="container">
          <RetreatCalendar />
        </div>
      </section>
    </>
  )
}
