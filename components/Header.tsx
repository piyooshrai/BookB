import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            BookB
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
