import { Link } from 'react-router-dom'
import { ReviewCard } from '../components/Reviews'
import { RetreatCard } from '../components/RetreatCard'
import { SafeImage } from '../components/SafeImage'
import { Seo } from '../components/Seo'
import { images } from '../data/images'
import { getAllReviews, retreats } from '../data/retreats'

const values = [
  {
    title: 'זמן לעצור',
    text: 'כמה ימים שבהם אפשר להניח את השגרה בצד, בלי לברוח ממנה ובלי למלא אותם בעוד משימות.',
  },
  {
    title: 'טבע שמאפשר לנשום',
    text: 'המיקומים נבחרים כדי לאפשר התנתקות אמיתית: הרים, ירוק או מדבר. לא עוד חדר ישיבות עם נוף.',
  },
  {
    title: 'חוויה מעבר לסדנה',
    text: 'ריטריט שמשלב תוכן, אנשים, תנועה, טבע וזמן אישי. יש מבנה, ויש גם מקום לכלום.',
  },
  {
    title: 'קהילה',
    text: 'מרחב שמאפשר להכיר אנשים חדשים ולחוות יחד, בלי לחץ להיות מישהו אחר.',
  },
]

export function HomePage() {
  const reviews = getAllReviews()

  return (
    <>
      <Seo
        title="TAVA – ריטריטים, טבע והתחדשות"
        description="ריטריטים בישראל לגוף ולנפש. כמה ימים של שקט, טבע, תנועה והתחדשות עם TAVA."
        path="/"
      />

      <section className="hero">
        <SafeImage src={images.hero} alt="נוף הררי באור רך של בוקר" className="hero__image" eager />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="eyebrow light">TAVA</p>
          <h1>לפעמים כל מה שצריך הוא לעצור.</h1>
          <p className="lead">
            ריטריטים שנוצרו כדי לתת לכם כמה ימים של שקט, טבע, תנועה וזמן לעצמכם.
          </p>
          <div className="hero__actions">
            <Link to="/retreats" className="btn btn-light">
              לריטריטים הקרובים
            </Link>
            <Link to="/about" className="btn btn-ghost">
              לגלות את TAVA
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">הימים הקרובים</p>
            <h2>הריטריטים הקרובים</h2>
            <p>שלושה ריטריטים, שלושה אזורים, אותה כוונה: לתת כמה ימים אמיתיים מחוץ לשגרה.</p>
          </div>
          <div className="card-grid">
            {retreats.map((retreat) => (
              <RetreatCard key={retreat.id} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">הערכים שלנו</p>
            <h2>למה TAVA?</h2>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section">
        <SafeImage src={images.forestLight} alt="אור שמש בין עצים" />
        <div className="split-section__content">
          <p className="eyebrow">איך זה עובד</p>
          <h2>בוחרים ריטריט, מגיעים, ונותנים לימים לעשות את שלהם.</h2>
          <ol className="steps">
            <li>
              <strong>מוצאים את הריטריט</strong>
              <span>לפי אזור, תאריך או סוג תרגול. כל הפרטים מחכים בעמוד הריטריט.</span>
            </li>
            <li>
              <strong>משאירים פרטים</strong>
              <span>שולחים בקשה להצטרפות. אנחנו חוזרים עם אישור והכנה קצרה.</span>
            </li>
            <li>
              <strong>מגיעים ועוצרים</strong>
              <span>המיקום המדויק נשלח לנרשמים. משם, הימים כבר בנויים בשבילכם.</span>
            </li>
          </ol>
          <Link to="/calendar" className="btn btn-outline">
            לצפייה בלוח השנה
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">קולות מהשטח</p>
            <h2>מה המשתתפים מספרים</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <SafeImage src={images.sunrise} alt="זריחה מעל קו רכס" className="cta-band__image" />
        <div className="cta-band__overlay" />
        <div className="container cta-band__content">
          <h2>אולי הגיע הזמן לעצור לרגע.</h2>
          <p>בחרו את הריטריט שמתאים לכם ופתחו מקום לכמה ימים של טבע, שקט והתחדשות.</p>
          <Link to="/retreats" className="btn btn-primary">
            לריטריטים הקרובים
          </Link>
        </div>
      </section>
    </>
  )
}
