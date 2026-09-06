import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AccessibilityWidget } from './AccessibilityWidget'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        דילוג לתוכן
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  )
}
