// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lucie-berkovitch.fr'

  const routes = ['', '/resume', '/press', '/links', '/contact', '/publications']
  const locales = ['fr', 'en']

  const urls: MetadataRoute.Sitemap = []

  locales.forEach(locale => {
    routes.forEach(route => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '/press' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return urls
}
