import { blogPosts } from './posts';
import BlogGrid from './BlogGrid';
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Salon Management Blog | BookB',
  description: 'Expert advice on salon management, marketing, operations, and growth. Practical tips to help salon owners succeed.',
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-content">
          <h1>Salon Management Blog</h1>
          <p className="hero-subtitle">
            Expert insights, best practices, and actionable strategies to help salon owners grow their business, improve operations, and deliver exceptional client experiences.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <BlogGrid posts={sortedPosts} />
        </div>
      </section>

      <Footer />
    </>
  );
}
