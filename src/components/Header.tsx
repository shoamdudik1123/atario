import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/site'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="TAVA, עמוד הבית" onClick={() => setOpen(false)}>
          <Logo />
          <span className="brand__tag">ריטריטים, טבע והתחדשות</span>
        </Link>

        <nav className="nav" aria-label="ניווט ראשי">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className="nav__link">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/retreats" className="btn btn-primary header-cta">
          לריטריטים הקרובים
        </Link>

        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'סגירת התפריט' : 'פתיחת התפריט'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav className="mobile-menu__nav" aria-label="תפריט נייד">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="mobile-menu__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/retreats" className="btn btn-primary" onClick={() => setOpen(false)}>
            לריטריטים הקרובים
          </Link>
        </nav>
      </div>
    </header>
  )
}
