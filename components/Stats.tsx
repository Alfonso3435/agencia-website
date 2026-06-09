'use client'
const stats = [
  {
    value: '30–60%',
    label: 'of missed calls recovered as booked jobs',
    source: 'Industry average',
  },
  {
    value: '< 30s',
    label: 'average AI response time vs 2+ hrs human average',
    source: 'Podium research',
  },
  {
    value: '8 min',
    label: 'window before a caller books your competitor',
    source: 'NetPartners analysis',
  },
]

export default function Stats() {
  return (
    <section style={{
      backgroundColor: '#1A2F4E',
      padding: '88px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#2BB5A0',
            marginBottom: '12px',
          }}>
            By the numbers
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 auto 16px',
          }}>
            The data doesn&apos;t lie.
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#9DB5C8',
            lineHeight: 1.65,
            maxWidth: '520px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            These aren&apos;t our numbers — they&apos;re industry averages from businesses just like yours.
          </p>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '56px',
        }}
        className="stats-grid"
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '32px 24px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 700,
                color: '#2BB5A0',
                lineHeight: 1,
                marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}>
                {stat.value}
              </div>
              <p style={{
                fontSize: '15px',
                color: '#C8DDE8',
                lineHeight: 1.5,
                margin: '0 0 12px',
              }}>
                {stat.label}
              </p>
              <span style={{
                fontSize: '11px',
                color: '#7A92A8',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                {stat.source}
              </span>
            </div>
          ))}
        </div>

        {/* Early Access Banner */}
        <div style={{
          backgroundColor: '#2BB5A0',
          borderRadius: '20px',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '8px',
            }}>
              Limited spots — Eastside businesses only
            </div>
            <h3 style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 700,
              color: '#fff',
              margin: '0 0 10px',
              lineHeight: 1.2,
            }}>
              Be one of our first 3 clients.<br />
              First 60 days, completely free.
            </h3>
            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              In exchange, we ask for an honest case study of your results.
              No credit card. No contracts. Just real results we can both point to.
            </p>
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#1A2F4E',
              color: '#fff',
              fontWeight: 700,
              fontSize: '15px',
              padding: '16px 32px',
              borderRadius: '10px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Claim Your Free Spot →
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
