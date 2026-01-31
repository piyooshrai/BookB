const features = [
  {
    title: 'Queue Management',
    description: 'Real-time queue tracking, walk-in management, and smart waiting list. Never lose a customer to long waits.',
    icon: '📋',
  },
  {
    title: 'Online Booking',
    description: '24/7 online bookings with automated confirmations and reminders. Reduce no-shows by 40%.',
    icon: '📅',
  },
  {
    title: 'Point of Sale',
    description: 'Fast checkout, inventory management, and sales tracking. Accept all payment methods.',
    icon: '💳',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track revenue, popular services, staff performance, and customer trends in real-time.',
    icon: '📊',
  },
  {
    title: 'Staff Management',
    description: 'Shift scheduling, commission tracking, and performance metrics. Keep your team organized.',
    icon: '👥',
  },
  {
    title: 'Customer CRM',
    description: 'Track customer history, preferences, and visit patterns. Build lasting relationships.',
    icon: '💼',
  },
]

export function FeatureShowcase() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-primary mb-3">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
