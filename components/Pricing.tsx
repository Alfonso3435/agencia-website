'use client'

const plans = [
  {
    name:     'Starter',
    price:    '$297',
    period:   '/mo',
    setup:    '$197 one-time setup fee',
    tagline:  'Perfect to get started',
    features: [
      'Missed call text-back (24/7)',
      'Local 425 phone number',
      'AI conversation & lead capture',
      'CRM contact pipeline',
      'Monthly performance report',
    ],
    cta:      'Get Started',
    featured: false,
  },
  {
    name:     'Growth',
    price:    '$497',
    period:   '/mo',
    setup:    'No setup fee',
    tagline:  'Most popular for service businesses',
    features: [
      'Everything in Starter, plus:',
      'AI Voice Agent (answers calls 24/7)',
      'Appointment booking + calendar sync',
      'Automated reminder sequences',
      'Full CRM sales pipeline',
      'Weekly performance report',
    ],
    cta:      'Get Started',
    featured: true,
  },
  {
    name:     'Pro',
    price:    '$497–$3,000',
    period:   '/mo',
    setup:    'No setup fee',
    tagline:  'Multi-location or custom needs',
    features: [
      'Everything in Growth, plus:',
      'Multi-location setup',
      'Custom AI integrations',
      'Dedicated account manager',
      'Priority support',
      'Custom reporting',
    ],
    cta:      'Contact Us',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{
      backgroundColor: '#fff',
      padding: '88px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Pricing</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Simple, transparent pricing
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            One recovered lead pays for months of service.
            No contracts — cancel anytime.
          </p>
        </div>

        {/* ROI callout */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          padding: '14px',
          backgroundColor: '#E8F7F5',
          borderRadius: '10px',
          border: '1px solid #B0DDD8',
          maxWidth: '560px',
          margin: '0 auto 48px',
        }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#0F6E5F', fontWeight: 500 }}>
            🎯 The average plumber loses $400/job. One recovered call covers your first month.
          </p>
        </div>

        {/* Plans */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          alignItems: 'start',
        }}
        className="pricing-grid"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                borderRadius: '16px',
                padding: '32px 28px',
                border: plan.featured ? '2px solid #2BB5A0' : '1px solid #E0E9F0',
                backgroundColor: plan.featured ? '#1A2F4E' : '#fff',
                position: 'relative',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => {
                if (!plan.featured)
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#2BB5A0',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 16px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                }}>
                  ⭐ Most Popular
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: plan.featured ? '#9DB5C8' : '#7A92A8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                  marginBottom: '6px',
                }}>
                  {plan.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                  <span style={{
                    fontSize: plan.name === 'Pro' ? '28px' : '44px',
                    fontWeight: 700,
                    color: plan.featured ? '#fff' : '#1A2F4E',
                    lineHeight: 1,
                  }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ fontSize: '16px', color: plan.featured ? '#9DB5C8' : '#7A92A8' }}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '13px', color: '#2BB5A0', fontWeight: 500 }}>
                  {plan.setup}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: plan.featured ? '#9DB5C8' : '#7A92A8',
                  marginTop: '4px',
                }}>
                  {plan.tagline}
                </div>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {plan.features.map((f) => (
                  <li key={f} style={{
                    fontSize: '14px',
                    color: plan.featured ? '#C8DDE8' : '#4A6070',
                    lineHeight: 1.5,
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{ color: '#2BB5A0', flexShrink: 0, fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '13px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  backgroundColor: plan.featured ? '#2BB5A0' : 'transparent',
                  color: plan.featured ? '#fff' : '#1A2F4E',
                  border: plan.featured ? 'none' : '1.5px solid #C8D5E0',
                  transition: 'background-color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  if (!plan.featured) {
                    e.currentTarget.style.borderColor = '#2BB5A0'
                    e.currentTarget.style.backgroundColor = '#E8F7F5'
                  }
                }}
                onMouseLeave={e => {
                  if (!plan.featured) {
                    e.currentTarget.style.borderColor = '#C8D5E0'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '32px',
          fontSize: '13px',
          color: '#7A92A8',
        }}>
          No contracts. Cancel anytime.
        </p>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
