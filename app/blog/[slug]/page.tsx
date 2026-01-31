import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) return {}

  return {
    title: `${post.title} | BookB Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-border p-8 md:p-12">
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-accent hover:text-accent/80 font-medium mb-4 inline-block"
              >
                ← Back to Blog
              </Link>

              <div className="text-sm text-gray-500 mb-4">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                {' • '}
                {post.readingTime} min read
                {' • '}
                By {post.author}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600">{post.description}</p>
            </div>

            <div
              className="prose prose-lg max-w-none
                prose-headings:text-primary
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-primary prose-strong:font-bold
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-code:text-accent prose-code:bg-surface prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Ready to Transform Your Salon?
                </h3>
                <p className="text-gray-700 mb-4">
                  Start your 14-day free trial of BookB salon management software. No credit card required.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
