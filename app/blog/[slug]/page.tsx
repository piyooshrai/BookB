import { notFound } from 'next/navigation';
import { blogPosts } from '../posts';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: ['BookB'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <img src="/bookb-logo.svg" alt="BookB Logo" width="40" height="40" style={{ display: 'block' }} />
            <span>BookB</span>
          </a>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#trial" className="nav-cta">Start Free Trial</a></li>
          </ul>
        </div>
      </nav>

      <article className="blog-post">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <a href="/blog" style={{ color: '#8b5cf6', textDecoration: 'none', fontSize: '14px' }}>
              ← Back to Blog
            </a>
          </div>

          <header style={{ marginBottom: '40px' }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: '#f3f4f6',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#6b7280',
                marginRight: '12px'
              }}>
                {post.category}
              </span>
              <span style={{ fontSize: '14px', color: '#9ca3af' }}>{post.readTime}</span>
            </div>

            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '16px',
              color: '#111827'
            }}>
              {post.title}
            </h1>

            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '20px' }}>
              {post.excerpt}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid #e5e7eb',
              fontSize: '14px',
              color: '#6b7280'
            }}>
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
          </header>

          <div
            className="blog-content"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75',
              color: '#374151'
            }}
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n')
                .map(para => {
                  if (para.trim().startsWith('## ')) {
                    return `<h2 style="font-size: 2rem; font-weight: 700; margin: 48px 0 24px 0; color: #111827;">${para.replace('## ', '')}</h2>`;
                  } else if (para.trim().startsWith('### ')) {
                    return `<h3 style="font-size: 1.5rem; font-weight: 600; margin: 36px 0 16px 0; color: #111827;">${para.replace('### ', '')}</h3>`;
                  } else if (para.trim().startsWith('**') && para.trim().endsWith('**')) {
                    return `<p style="margin: 24px 0; font-weight: 600; color: #111827;">${para.replace(/\*\*/g, '')}</p>`;
                  } else if (para.trim().startsWith('- ')) {
                    return `<li style="margin: 8px 0 8px 20px;">${para.replace('- ', '')}</li>`;
                  } else if (para.trim()) {
                    return `<p style="margin: 20px 0;">${para}</p>`;
                  }
                  return '';
                })
                .join('')
            }}
          />

          <div style={{
            marginTop: '60px',
            padding: '40px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            borderRadius: '12px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '16px' }}>
              Ready to Transform Your Salon?
            </h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '32px', opacity: 0.9 }}>
              Start your free 30-day trial of BookB today. No credit card required.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: 'white',
                color: '#8b5cf6',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '1.125rem'
              }}
            >
              Start Free Trial
            </a>
          </div>

          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px' }}>
              Related Posts
            </h3>
            <div style={{ display: 'grid', gap: '20px' }}>
              {blogPosts
                .filter(p => p.category === post.category && p.slug !== post.slug)
                .slice(0, 3)
                .map(relatedPost => (
                  <a
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    style={{
                      display: 'block',
                      padding: '20px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontSize: '14px', color: '#8b5cf6', fontWeight: '500', marginBottom: '8px' }}>
                      {relatedPost.category}
                    </div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#111827' }}>
                      {relatedPost.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '12px' }}>
                      {relatedPost.excerpt}
                    </p>
                    <div style={{ fontSize: '14px', color: '#9ca3af' }}>
                      {relatedPost.readTime}
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </article>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="/features">Features</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="/hair-salon-software">Hair Salon Software</a></li>
                <li><a href="/barbershop-software">Barbershop Software</a></li>
                <li><a href="/nail-salon-software">Nail Salon Software</a></li>
                <li><a href="/beauty-therapist-software">Beauty Therapist Software</a></li>
                <li><a href="/day-spa-software">Day Spa Software</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/case-studies">Case Studies</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">© 2026 BookB. All rights reserved.</div>
          <div className="by-the-algorithm">
            Built by <a href="https://www.the-algo.com" target="_blank" rel="noopener noreferrer">The Algorithm</a>
          </div>
        </div>
      </footer>
    </>
  );
}
