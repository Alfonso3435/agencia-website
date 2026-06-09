'use client'
const steps = [
  {
    number: '01',
    title:  'We set up your system',
    body:   'We connect a local 425 number to your business and configure your automated text-back in just a few hours. No new equipment. No technical knowledge needed from you.',
    icon:   '⚡',
  },
  {
    number: '02',
    title:  'Every missed call gets a text',
    body:   'The moment someone calls and you can\'t answer, our AI sends a personalized SMS in under 30 seconds. It keeps the conversation going so the lead doesn\'t go cold.',
    icon:   '💬',
  },
  {
    number: '03',
    title:  'You get booked appointments',
    body:   'The AI qualifies the lead, answers questions, and books the appointment directly into your calendar. You only step in when it\'s time to show up.',
    icon:   '📅',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      backgroundColor: '#fff',
      padding: '88px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Simple process</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Quick setup.<br />Running forever.
          </h2>
          
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          position: 'relative',
        }}
        className="steps-grid"
        >
          {steps.map((step, i) => (
            <div key={step.number} style={{ position: 'relative' }}>

              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '36px',
                  right: '-16px',
                  width: '32px',
                  height: '2px',
                  backgroundColor: '#2BB5A0',
                  opacity: 0.4,
                  zIndex: 1,
                }} className="step-connector" />
              )}

              <div style={{
                backgroundColor: '#F0F4F8',
                borderRadius: '16px',
                padding: '32px 28px',
                height: '100%',
                border: '1px solid #E0E9F0',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(26,47,78,0.10)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
              >
                {/* Icon + number */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    width: '52px', height: '52px',
                    backgroundColor: '#1A2F4E',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#2BB5A0',
                    letterSpacing: '0.05em',
                  }}>
                    STEP {step.number}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#1A2F4E',
                  marginBottom: '12px',
                  lineHeight: '1.25',
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#4A6070',
                  lineHeight: '1.65',
                  margin: 0,
                }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: 'center',
          marginTop: '40px',
          fontSize: '14px',
          color: '#7A92A8',
        }}>
          No contracts. Cancel anytime. Setup typically takes just a few hours.
        </p>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .step-connector { display: none !important; }
        }
      `}</style>
    </section>
  )
}
