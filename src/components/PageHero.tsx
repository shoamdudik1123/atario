import { Link } from 'react-router-dom'
import { SafeImage } from './SafeImage'

type Crumb = {
  label: string
  to?: string
}

type PageHeroProps = {
  title: string
  text?: string
  image: string
  imageAlt: string
  crumbs?: Crumb[]
}

export function PageHero({ title, text, image, imageAlt, crumbs }: PageHeroProps) {
  return (
    <section className="page-hero">
      <SafeImage src={image} alt={imageAlt} className="page-hero__image" eager />
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        {crumbs && (
          <nav className="breadcrumbs" aria-label="ניווט היררכי">
            <ol>
              {crumbs.map((crumb) => (
                <li key={crumb.label}>
                  {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}
