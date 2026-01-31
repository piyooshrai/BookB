import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'

export const metadata: Metadata = {
  title: 'Salon Booking System | Online Appointment Scheduling - £15/month',
  description: '24/7 online booking for salons. Reduce no-shows by 40% with automated reminders. Easy setup, no coding required.',
}

export default function SalonBookingSystemPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Salon Booking System That Works 24/7</h1>
            <p className="text-xl mb-8">Online appointment scheduling that reduces no-shows by 40%. From £15/month.</p>
            <a href="/contact" className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-gray-100">Get Started</a>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard tier="starter" features={['Unlimited bookings', 'Online booking widget', 'Automated reminders', 'Calendar sync', 'Customer portal', 'Email notifications']} />
              <PricingCard tier="professional" featured features={['All Starter features', 'SMS reminders', 'No-show protection', 'Deposit collection', 'Multi-service booking', 'Priority support']} />
              <PricingCard tier="business" features={['All Professional features', 'Multi-location booking', 'Resource allocation', 'Group bookings', 'Custom branding', 'API access']} />
              <PricingCard tier="enterprise" features={['All Business features', 'White-label booking', 'Custom workflows', 'Enterprise integrations', 'SLA guarantee', 'Dedicated support']} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
