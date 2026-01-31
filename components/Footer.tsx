import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BookB</h3>
            <p className="text-gray-300 text-sm">
              Professional salon management software that doesn't break the bank.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/barbershop-software" className="text-gray-300 hover:text-white transition-colors">
                  Barbershop Software
                </Link>
              </li>
              <li>
                <Link href="/nail-salon-software" className="text-gray-300 hover:text-white transition-colors">
                  Nail Salon Software
                </Link>
              </li>
              <li>
                <Link href="/hair-salon-software" className="text-gray-300 hover:text-white transition-colors">
                  Hair Salon Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Compare</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/zenoti-alternative" className="text-gray-300 hover:text-white transition-colors">
                  vs Zenoti
                </Link>
              </li>
              <li>
                <Link href="/fresha-alternative" className="text-gray-300 hover:text-white transition-colors">
                  vs Fresha
                </Link>
              </li>
              <li>
                <Link href="/phorest-alternative" className="text-gray-300 hover:text-white transition-colors">
                  vs Phorest
                </Link>
              </li>
              <li>
                <Link href="/boulevard-alternative" className="text-gray-300 hover:text-white transition-colors">
                  vs Boulevard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© {currentYear} BookB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
