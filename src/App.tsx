import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { CalendarPage } from './pages/CalendarPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RetreatDetailPage } from './pages/RetreatDetailPage'
import { RetreatsPage } from './pages/RetreatsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/retreats" element={<RetreatsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/retreat/:slug" element={<RetreatDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
