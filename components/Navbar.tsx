'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #E8EEF3',
    }}>

      {/* Top contact bar — hidden on mobile via CSS */}
      <div className="contact-bar" style={{
        backgroundColor: '#1A2F4E',
        padding: '7px 24px',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '24px',
        alignItems: 'center',
      }}>
        <a href="tel:+14256528532" style={{
          fontSize: '13px', color: '#9DB5C8', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = '#2BB5A0')}
          onMouseLeave={e => (e.currentTarget.style.color = '#9DB5C8')}
        >
          📞 +1 (425) 652-8532
        </a>
        <a href="mailto:answrsupport@gmail.com" style={{
          fontSize: '13px', color: '#9DB5C8', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = '#2BB5A0')}
          onMouseLeave={e => (e.currentTarget.style.color = '#9DB5C8')}
        >
          ✉️ answrsupport@gmail.com
        </a>
        <span style={{ fontSize: '12px', color: '#7A92A8' }}>
          Mon–Fri, 10am–6pm PT
        </span>
      </div>

      {/* Main navbar */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/answr_logo.png"
            alt="Answr"
            width={260}
            height={152}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Nav links — desktop only */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}>
          {[
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Industries',   href: '#industries'   },
            { label: 'Pricing',      href: '#pricing'      },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#4A6070',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2BB5A0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4A6070')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA — desktop only */}
        <a href="#contact" className="desktop-cta btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
          Book a Free Demo →
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          <span style={{ fontSize: '24px', color: '#1A2F4E', lineHeight: 1 }}>
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid #E8EEF3',
          backgroundColor: '#fff',
          padding: '20px 24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Industries',   href: '#industries'   },
            { label: 'Pricing',      href: '#pricing'      },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '16px', fontWeight: 500, color: '#1A2F4E',
                textDecoration: 'none', padding: '4px 0',
              }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ borderTop: '1px solid #E8EEF3', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="tel:+14256528532" style={{ fontSize: '15px', color: '#4A6070', textDecoration: 'none' }}>
              📞 +1 (425) 652-8532
            </a>
            <a href="mailto:answrsupport@gmail.com" style={{ fontSize: '15px', color: '#4A6070', textDecoration: 'none' }}>
              ✉️ answrsupport@gmail.com
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '14px',
              backgroundColor: '#2BB5A0',
              color: '#fff',
              fontWeight: 700,
              fontSize: '15px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Book a Free Demo →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .contact-bar  { display: none !important; }
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
