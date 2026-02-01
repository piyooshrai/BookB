'use client';

import { BlogPost } from './posts';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '32px',
      marginTop: '40px'
    }}>
      {posts.map((post) => {
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        return (
          <article
            key={post.slug}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              background: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <a href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ marginBottom: '16px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  background: '#f3f4f6',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#8b5cf6',
                  marginRight: '8px'
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '13px', color: '#9ca3af' }}>{post.readTime}</span>
              </div>

              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: '#111827',
                lineHeight: '1.3'
              }}>
                {post.title}
              </h2>

              <p style={{
                color: '#6b7280',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                {post.excerpt}
              </p>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <time style={{ fontSize: '14px', color: '#9ca3af' }}>
                  {formattedDate}
                </time>
                <span style={{
                  color: '#8b5cf6',
                  fontWeight: '600',
                  fontSize: '14px'
                }}>
                  Read More →
                </span>
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );
}
