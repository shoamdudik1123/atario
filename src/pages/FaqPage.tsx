import { FaqAccordion } from '../components/FaqAccordion'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { images } from '../data/images'
import { generalFaq } from '../data/site'

export function FaqPage() {
  return (
    <>
      <Seo
        title="שאלות נפוצות | TAVA"
        description="תשובות לשאלות על ריטריטי TAVA: הרשמה, מחיר, ציוד, מיקום, ביטולים והתאמה למתחילים."
        path="/faq"
      />
      <PageHero
        title="שאלות נפוצות"
        text="הדברים שאנשים שואלים לפני שהם נרשמים."
        image={images.forestLight}
        imageAlt="אור בין ענפי עצים"
        crumbs={[
          { label: 'ראשי', to: '/' },
          { label: 'שאלות נפוצות' },
        ]}
      />
      <section className="section">
        <div className="container narrow">
          <div className="section-head">
            <h2>תשובות קצרות לפני שנרשמים</h2>
          </div>
          <FaqAccordion items={generalFaq} />
        </div>
      </section>
    </>
  )
}
