import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import competitors from '@/content/competitors.json'
import cities from '@/content/cities.json'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bookb.io'

  // Static pages
  const staticPages = [
    '',
    '/pricing',
    '/contact',
    '/barbershop-software',
    '/nail-salon-software',
    '/hair-salon-software',
    '/salon-booking-system',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Competitor alternative pages
  const competitorPages = competitors.map((competitor) => ({
    url: `${baseUrl}/${competitor.slug}-alternative`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // City pages
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city.countryCode.toLowerCase()}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts
  const posts = await getAllPosts()
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...competitorPages, ...cityPages, ...blogPages]
}
