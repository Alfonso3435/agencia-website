'use client'
const withoutService = [
  'Missed call = lead lost forever',
  'Customer calls your competitor next',
  'You lose $300–800 per unanswered call',
  'No coverage nights, weekends, or holidays',
  'No idea how many leads you lose weekly',
]

const withService = [
  'Every missed call gets a text in 30 seconds',
  'AI qualifies the lead and books the appointment',
  'Recover 30–60% of missed calls as paying jobs',
  'System works 24/7 — even at 3am on Sunday',
  'Dashboard shows leads captured and jobs booked',
]

export default function BeforeAfter() {
  return (
    <section style={{
      backgroundColor: '#F0F4F8',
      padding: '80px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>The difference</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            What changes when you use Answr
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            A single missed call on a Saturday can cost you an $800 job.
            Here&apos;s what that looks like with and without us.
          </p>
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}
        className="ba-grid"
        >

          {/* Without */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid #E0E9F0',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '28px',
            }}>
              <span style={{
                fontSize: '20px',
                backgroundColor: '#FEE2E2',
                borderRadius: '8px',
                padding: '6px 10px',
              }}>❌</span>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A2F4E', margin: 0 }}>
                Without Answr
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {withoutService.map((item) => (
                <li key={item} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '15px',
                  color: '#4A6070',
                  lineHeight: '1.5',
                }}>
                  <span style={{ color: '#EF4444', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div style={{
            backgroundColor: '#1A2F4E',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid #1A2F4E',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '28px',
            }}>
              <span style={{
                fontSize: '20px',
                backgroundColor: '#E8F7F5',
                borderRadius: '8px',
                padding: '6px 10px',
              }}>✅</span>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>
                With Answr
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {withService.map((item) => (
                <li key={item} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '15px',
                  color: '#C8DDE8',
                  lineHeight: '1.5',
                }}>
                  <span style={{ color: '#2BB5A0', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom callout */}
        <div style={{
          marginTop: '32px',
          backgroundColor: '#E8F7F5',
          borderRadius: '12px',
          padding: '20px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          border: '1px solid #B0DDD8',
        }}>
          <span style={{ fontSize: '20px' }}>💡</span>
          <p style={{ margin: 0, fontSize: '14px', color: '#0F6E5F', fontWeight: 500 }}>
            Industry average: a plumber or HVAC tech misses 30–60% of inbound calls.
            At $400 per job, that&apos;s up to $8,000/month walking out the door.
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 680px) {
          .ba-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
