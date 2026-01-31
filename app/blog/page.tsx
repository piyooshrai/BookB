import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Salon Business Tips & Guides | BookB Blog',
  description: 'Expert advice on running a successful salon. Learn about queue management, client retention, marketing, and more.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Salon Business Blog
            </h1>
            <p className="text-xl text-gray-600">
              Tips, guides, and insights to grow your salon business
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                      {' • '}
                      {post.readingTime} min read
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.author}</span>
                      <span className="text-accent font-medium">Read more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
