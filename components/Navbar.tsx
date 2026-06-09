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
            width={110}
            height={36}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Nav links — desktop */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }} className="desktop-nav">
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

        {/* CTA */}
        <a href="#contact" className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
          Book a Free Demo →
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{ fontSize: '22px', color: '#1A2F4E' }}>{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid #E8EEF3',
          backgroundColor: '#fff',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Industries',   href: '#industries'   },
            { label: 'Pricing',      href: '#pricing'      },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 500, color: '#1A2F4E', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
          <a href="#contact" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
            Book a Free Demo →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          header .btn-primary:not(.mobile-menu-btn ~ * .btn-primary) { display: none; }
        }
      `}</style>
    </header>
  )
}
