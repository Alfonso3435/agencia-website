'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1A2F4E',
      padding: '56px 24px 32px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Top row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '40px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}>

          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <Image
              src="/answr_logo.png"
              alt="Answr"
              width={100}
              height={32}
              style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: '14px' }}
            />
            <p style={{ fontSize: '14px', color: '#9DB5C8', lineHeight: 1.65, margin: '0 0 16px' }}>
              AI-powered missed call text-back for local businesses in the Eastside.
              Every call. Every lead. Answered.
            </p>
            <p style={{ fontSize: '13px', color: '#7A92A8', margin: 0 }}>
              Mon–Fri, 10am–6pm PT
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontSize: '11px', fontWeight: 700, color: '#7A92A8',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px',
              }}>
                Services
              </div>
              {['Missed Call Text-Back', 'AI Voice Agent', 'Appointment Reminders', 'CRM & Pipeline'].map(s => (
                <div key={s} style={{ marginBottom: '10px' }}>
                  <Link href="#how-it-works" style={{ fontSize: '14px', color: '#9DB5C8', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#2BB5A0')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9DB5C8')}
                  >
                    {s}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <div style={{
                fontSize: '11px', fontWeight: 700, color: '#7A92A8',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px',
              }}>
                Industries
              </div>
              {['Plumbers', 'HVAC', 'Dentists', 'Salons & Spas'].map(i => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <Link href="#industries" style={{ fontSize: '14px', color: '#9DB5C8', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#2BB5A0')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9DB5C8')}
                  >
                    {i}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <div style={{
                fontSize: '11px', fontWeight: 700, color: '#7A92A8',
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px',
              }}>
                Contact
              </div>
              <div style={{ marginBottom: '10px' }}>
                <a href="tel:+14256528532" style={{ fontSize: '14px', color: '#9DB5C8', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#2BB5A0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9DB5C8')}
                >
                  +1 (425) 652-8532
                </a>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <a href="mailto:answrsupport@gmail.com" style={{ fontSize: '14px', color: '#9DB5C8', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#2BB5A0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9DB5C8')}
                >
                  answrsupport@gmail.com
                </a>
              </div>
              <a href="#contact" style={{
                display: 'inline-block',
                marginTop: '8px',
                backgroundColor: '#2BB5A0',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                padding: '9px 18px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}>
                Book a Demo →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <p style={{ fontSize: '13px', color: '#7A92A8', margin: 0 }}>
              © {new Date().getFullYear()} Answr. All rights reserved. · answr.info
            </p>
            <p style={{ fontSize: '13px', color: '#7A92A8', margin: 0 }}>
              Serving Sammamish · Bellevue · Redmond · Kirkland
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
