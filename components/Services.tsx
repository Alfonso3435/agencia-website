'use client'
const industries = [
  {
    icon: '🔧',
    name: 'Plumbers',
    tagline: 'Emergency calls can\'t wait',
    body: 'When a pipe bursts at 2am, your customer can\'t wait until morning. Our AI texts back instantly so you get the job, not your competitor.',
    value: '$300–800 per job',
  },
  {
    icon: '❄️',
    name: 'HVAC',
    tagline: 'Peak season, zero missed leads',
    body: 'Summer AC calls and winter heating emergencies flood your phone. We make sure every single one turns into a booked appointment.',
    value: '$400–1,200 per job',
  },
  {
    icon: '🦷',
    name: 'Dentists',
    tagline: 'Empty chairs cost money',
    body: 'Every missed call is an empty appointment slot at $150–300. Our AI books patients directly into your calendar while your team focuses on care.',
    value: '$150–400 per visit',
  },
  {
    icon: '✂️',
    name: 'Salons & Spas',
    tagline: 'Your stylists are busy — we\'re not',
    body: 'Your team can\'t answer the phone mid-cut. We handle every missed call, book the appointment, and send a reminder so they don\'t no-show.',
    value: '$60–250 per booking',
  },
]

export default function Services() {
  return (
    <section id="industries" style={{
      backgroundColor: '#F0F4F8',
      padding: '88px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Built for you</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            We know your industry.<br />We know what you&apos;re losing.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Serving local businesses across Sammamish, Bellevue, Redmond, and Kirkland.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}
        className="industries-grid"
        >
          {industries.map((ind) => (
            <div
              key={ind.name}
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid #E0E9F0',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(26,47,78,0.09)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{
                  fontSize: '28px',
                  backgroundColor: '#E8F7F5',
                  borderRadius: '10px',
                  padding: '8px 12px',
                }}>
                  {ind.icon}
                </span>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A2F4E', margin: '0 0 2px' }}>
                    {ind.name}
                  </h3>
                  <span style={{ fontSize: '13px', color: '#2BB5A0', fontWeight: 600 }}>
                    {ind.tagline}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '14px', color: '#4A6070', lineHeight: '1.65', margin: 0 }}>
                {ind.body}
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#F0F4F8',
                borderRadius: '8px',
                padding: '6px 12px',
                alignSelf: 'flex-start',
                marginTop: '4px',
              }}>
                <span style={{ fontSize: '12px', color: '#7A92A8' }}>Avg. job value:</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1A2F4E' }}>{ind.value}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 680px) {
          .industries-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
