import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  path?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.rel = rel
    document.head.appendChild(tag)
  }
  tag.href = href
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    const url = `https://tava.co.il${path}`
    document.title = title
    document.documentElement.lang = 'he'
    document.documentElement.dir = 'rtl'
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'he_IL')
    upsertMeta('property', 'og:url', url)
    upsertLink('canonical', url)
  }, [title, description, path])

  return null
}
