import { Link } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{site.tagline}</p>
          <p className="footer-copy">
            כמה ימים מחוץ לשגרה, במקומות שקטים בארץ, עם תנועה, טבע וזמן לעצמכם.
          </p>
        </div>

        <div>
          <h2 className="footer-title">ניווט</h2>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">יצירת קשר</h2>
          <ul className="footer-links">
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.emailHref}>{site.email}</a>
            </li>
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                שיחה בוואטסאפ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} TAVA. כל הזכויות שמורות.</p>
      </div>
    </footer>
  )
}
