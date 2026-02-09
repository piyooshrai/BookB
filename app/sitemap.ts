import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

// Recursively find all page.tsx files and convert to routes
function getAllStaticRoutes(dir: string, baseDir: string = dir): string[] {
  const routes: string[] = []

  try {
    const items = readdirSync(dir)

    for (const item of items) {
      const fullPath = join(dir, item)
      const stat = statSync(fullPath)

      if (stat.isDirectory()) {
        // Skip api, components, and dynamic routes
        if (item === 'api' || item === 'components' || item.startsWith('[')) {
          continue
        }
        routes.push(...getAllStaticRoutes(fullPath, baseDir))
      } else if (item === 'page.tsx' || item === 'page.ts' || item === 'page.jsx' || item === 'page.js') {
        // Convert file path to route
        const route = dir
          .replace(baseDir, '')
          .replace(/\\/g, '/')
        routes.push(route || '/')
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }

  return routes
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bookb.io'
  const appDir = join(process.cwd(), 'app')

  // Get all static routes automatically
  const allRoutes = getAllStaticRoutes(appDir)

  const staticPages = allRoutes.map((route) => {
    // Determine priority based on route
    let priority = 0.7
    if (route === '/') priority = 1.0
    else if (route === '/pricing' || route === '/features' || route === '/contact') priority = 0.9
    else if (route.includes('-alternative')) priority = 0.8
    else if (route.startsWith('/blog/')) priority = 0.6

    return {
      url: `${baseUrl}${route === '/' ? '' : route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    }
  })

  // Blog posts (these will be dynamic [slug] routes)
  const posts = await getAllPosts()
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...blogPages]
}
