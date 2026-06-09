'use client'

import { useEffect, useState } from 'react'

const messages = [
  { from: 'system', text: 'Hi! This is ABC Plumbing. Sorry we missed your call — how can we help?', delay: 0 },
  { from: 'user',   text: 'Hi, I have a burst pipe, need someone ASAP', delay: 1400 },
  { from: 'system', text: 'We can have someone at your place within the hour. What\'s your address?', delay: 2800 },
  { from: 'user',   text: '142 NE 10th St, Bellevue', delay: 4200 },
  { from: 'system', text: '✅ Booked! Carlos will arrive at 2:30pm. You\'ll get a reminder 30 min before.', delay: 5600 },
]

export default function Hero() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    messages.forEach((msg, i) => {
      setTimeout(() => {
        setVisibleCount(i + 1)
      }, msg.delay + 600)
    })
  }, [])

  return (
    <section style={{
      backgroundColor: '#fff',
      padding: '80px 24px 96px',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
      }}
      className="hero-grid"
      >

        {/* Left: copy */}
        <div>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            Eastside Seattle · Bellevue · Sammamish · Redmond
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            color: '#1A2F4E',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            marginBottom: '20px',
          }}>
            Stop losing customers<br />
            to <span style={{ color: '#2BB5A0' }}>missed calls.</span>
          </h1>

          <p className="section-subtitle" style={{ marginBottom: '36px' }}>
            We text back every missed call in under 30 seconds — so your leads
            book with you, not your competitor. Works 24/7, zero effort from you.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a href="#contact" className="btn-primary">
              Book a Free Demo →
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See how it works
            </a>
          </div>

          {/* Social proof strip */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '30 sec', label: 'avg. response time' },
              { value: '24/7',   label: 'always on'          },
              { value: '60%',    label: 'leads recovered'    },
            ].map((stat) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#1A2F4E' }}>{stat.value}</span>
                <span style={{ fontSize: '13px', color: '#7A92A8' }}>{stat.label}</span>
                <span style={{ color: '#C8D5E0', fontSize: '18px', marginLeft: '4px' }}>·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: SMS mockup */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '300px',
            backgroundColor: '#1A2F4E',
            borderRadius: '32px',
            padding: '20px 16px 28px',
            boxShadow: '0 32px 80px rgba(26,47,78,0.18)',
          }}>
            {/* Phone top bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
              paddingBottom: '14px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: '#2BB5A0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', fontWeight: 700, color: '#fff',
              }}>A</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>ABC Plumbing</div>
                <div style={{ fontSize: '11px', color: '#9DB5C8' }}>+1 (425) 555-0192</div>
              </div>
              <div style={{
                marginLeft: 'auto',
                fontSize: '11px',
                backgroundColor: '#2BB5A0',
                color: '#fff',
                padding: '3px 8px',
                borderRadius: '20px',
                fontWeight: 600,
              }}>AI</div>
            </div>

            {/* Messages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: '240px' }}>
              {messages.slice(0, visibleCount).map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: msg.from === 'system' ? 'flex-start' : 'flex-end',
                    animation: 'fadeUp 0.3s ease',
                  }}
                >
                  <div style={{
                    maxWidth: '80%',
                    padding: '9px 13px',
                    borderRadius: msg.from === 'system' ? '4px 14px 14px 14px' : '14px 4px 14px 14px',
                    backgroundColor: msg.from === 'system' ? 'rgba(255,255,255,0.12)' : '#2BB5A0',
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: '#fff',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {visibleCount < messages.length && visibleCount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '4px 14px 14px 14px',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    display: 'flex', gap: '4px', alignItems: 'center',
                  }}>
                    {[0,1,2].map(i => (
                      <span key={i} style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        backgroundColor: '#9DB5C8',
                        animation: `bounce 1s infinite ${i * 0.15}s`,
                        display: 'inline-block',
                      }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom label */}
            <div style={{
              marginTop: '16px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              fontSize: '11px',
              color: '#9DB5C8',
            }}>
              Responded in 28 seconds ⚡
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%           { transform: translateY(-4px); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
