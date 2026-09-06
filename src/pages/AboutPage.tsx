import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { images } from '../data/images'

export function AboutPage() {
  return (
    <>
      <Seo
        title="אודות TAVA | ריטריטים, טבע והתחדשות"
        description="TAVA הוא מרחב שמאפשר לעצור, לצאת מהשגרה ולהקדיש כמה ימים לטבע, לתנועה ולשקט."
        path="/about"
      />
      <PageHero
        title="אודות TAVA"
        text="מרחב שמאפשר לאנשים לעצור."
        image={images.mist}
        imageAlt="יער באובך קל"
        crumbs={[
          { label: 'ראשי', to: '/' },
          { label: 'אודות TAVA' },
        ]}
      />

      <section className="section">
        <div className="container prose-wrap">
          <h2>למה TAVA קיים</h2>
          <p>
            TAVA נולד מתוך תחושה פשוטה: רובנו יודעים שאנחנו צריכים לעצור, אבל השגרה כמעט אף פעם לא
            מציעה את זה מעצמה. הריטריטים שלנו נועדו לפתוח כמה ימים שבהם זה כן קורה.
          </p>
          <p>
            אנחנו בונים ימים שיש בהם מבנה, אבל לא עומס. יש תרגול, יש ארוחות, יש אנשים, ויש גם שעות
            שבהן לא קורה כלום בכוונה. ההנחה שלנו היא שההתחדשות לא מגיעה מגירוי נוסף, אלא ממקום
            שמאפשר לנשום.
          </p>
          <p>
            המיקומים נבחרים לפי תחושת ההתנתקות שהם מאפשרים: הרי ירושלים, הגליל ומדבר יהודה. לא מפרסמים
            כתובת מדויקת מראש, כדי לשמור על השקט של המקום ושל מי שמגיע.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container about-grid">
          <article>
            <h3>מה אנחנו לא</h3>
            <p>
              TAVA אינו ספא, אינו כנס תוכן ואינו תוכנית לשינוי חיים בסוף שבוע. אין כאן הבטחה
              דרמטית. יש כמה ימים בנויים היטב, במקום יפה, עם הנחיה ברורה.
            </p>
          </article>
          <article>
            <h3>איך זה מרגיש</h3>
            <p>
              הקבוצות קטנות בכוונה. אפשר להגיע לבד. אפשר לשתוק. אפשר גם לדבר. הטון אישי, אבל המרחב
              אינו סובב סביב דמות אחת. הוא סובב סביב הימים עצמם.
            </p>
          </article>
          <article>
            <h3>למי זה</h3>
            <p>
              למי שמרגיש שהשגרה מלאה מדי. למי שרוצה לחזור לגוף. למי שנמשך לטבע. ולמי שפשוט צריך כמה
              לילות שבהם אין מה להספיק.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container cta-plain">
          <h2>רוצים להכיר מקרוב?</h2>
          <p>אפשר להתחיל מהריטריטים הקרובים, או לכתוב לנו ונעזור לבחור.</p>
          <div className="hero__actions">
            <Link to="/retreats" className="btn btn-primary">
              לריטריטים הקרובים
            </Link>
            <Link to="/contact" className="btn btn-outline">
              צור קשר
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
