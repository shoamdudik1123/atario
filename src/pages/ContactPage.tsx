import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { images } from '../data/images'
import { site } from '../data/site'

export function ContactPage() {
  return (
    <>
      <Seo
        title="צור קשר | TAVA"
        description="צרו קשר עם TAVA: טופס פנייה, טלפון, אימייל ווואטסאפ. נשמח לעזור לבחור ריטריט."
        path="/contact"
      />
      <PageHero
        title="צור קשר"
        text="שאלה לפני הרשמה, התאמה לריטריט או כל דבר אחר. כתבו לנו."
        image={images.sunrise}
        imageAlt="שמים בהירים מעל קו נוף"
        crumbs={[
          { label: 'ראשי', to: '/' },
          { label: 'צור קשר' },
        ]}
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-card">
            <h2>פרטי התקשרות</h2>
            <ul className="contact-details">
              <li>
                <span>טלפון</span>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <span>אימייל</span>
                <a href={site.emailHref}>{site.email}</a>
              </li>
              <li>
                <span>וואטסאפ</span>
                <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                  שיחה קצרה בוואטסאפ
                </a>
              </li>
            </ul>
            <a className="btn btn-primary" href={site.whatsappHref} target="_blank" rel="noreferrer">
              כתיבה בוואטסאפ
            </a>
          </div>
          <div className="form-panel">
            <h2>טופס יצירת קשר</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
