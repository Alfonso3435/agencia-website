'use client'

import { useState } from 'react'
import { getAvailableSlots, createCalendarEvent, type AvailableDay, type TimeSlot } from '@/lib/google-calendar'

const businessTypes = ['Plumbing', 'HVAC', 'Dental / Medical', 'Salon / Spa', 'Restaurant', 'Other']

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', type: '' })
  const [step, setStep]                 = useState<'form' | 'calendar' | 'confirm' | 'done'>('form')
  const [days, setDays]                 = useState<AvailableDay[]>([])
  const [selectedDay, setSelectedDay]   = useState<AvailableDay | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [loading, setLoading]           = useState(false)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [error, setError]               = useState('')

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px', borderRadius: '8px',
    border: '1.5px solid #C8D5E0', fontSize: '15px', color: '#1A2F4E',
    backgroundColor: '#fff', outline: 'none', transition: 'border-color 0.15s',
    fontFamily: 'Inter, sans-serif',
  }
  const labelStyle: React.CSSProperties = {
    fontSize: '13px', fontWeight: 600, color: '#1A2F4E',
    marginBottom: '6px', display: 'block',
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoadingSlots(true)
    setError('')
    try {
      const available = await getAvailableSlots()
      setDays(available)
      setStep('calendar')
    } catch {
      setError('Could not load availability. Please try again.')
    } finally {
      setLoadingSlots(false)
    }
  }

  const handleBook = async () => {
    if (!selectedSlot) return
    setLoading(true)
    setError('')
    try {
      const result = await createCalendarEvent({ ...form, start: selectedSlot.start, end: selectedSlot.end })
      if (result.success) {
        setStep('done')
      } else {
        setError('Could not book the appointment. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const formattedDate = selectedDay
    ? new Date(selectedDay.date + 'T12:00:00').toLocaleDateString('en-US', {
        weekday: 'long', month: 'long', day: 'numeric'
      })
    : ''

  return (
    <section id="contact" style={{ backgroundColor: '#F0F4F8', padding: '88px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'start',
        }} className="contact-grid">

          {/* Left: copy */}
          <div style={{ paddingTop: '8px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Free demo</div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              See it work on your business.
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '36px' }}>
              Book a free 20-minute demo and we&apos;ll show you exactly how many leads
              you&apos;re losing — and how quickly Answr fixes it.
            </p>
            {[
              { icon: '⚡', text: 'Setup takes just a few hours — we handle everything' },
              { icon: '📅', text: 'Pick a time that works for you from our live calendar' },
              { icon: '🔒', text: 'No credit card. No contracts. No pressure.' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: '15px', color: '#4A6070', lineHeight: '1.5' }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Right: card */}
          <div style={{
            backgroundColor: '#fff', borderRadius: '20px', padding: '36px',
            border: '1px solid #E0E9F0', boxShadow: '0 8px 40px rgba(26,47,78,0.07)',
          }}>

            {/* STEP 1: Form */}
            {step === 'form' && (
              <form onSubmit={handleFormSubmit}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A2F4E', marginBottom: '24px' }}>
                  Book My Free Demo
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input type="text" required placeholder="John Smith" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#2BB5A0')}
                      onBlur={e  => (e.target.style.borderColor = '#C8D5E0')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Business Name *</label>
                    <input type="text" required placeholder="Smith Plumbing LLC" value={form.business}
                      onChange={e => setForm({ ...form, business: e.target.value })} style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#2BB5A0')}
                      onBlur={e  => (e.target.style.borderColor = '#C8D5E0')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input type="tel" required placeholder="(425) 555-0100" value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#2BB5A0')}
                      onBlur={e  => (e.target.style.borderColor = '#C8D5E0')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Type of Business *</label>
                    <select required value={form.type}
                      onChange={e => setForm({ ...form, type: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => (e.target.style.borderColor = '#2BB5A0')}
                      onBlur={e  => (e.target.style.borderColor = '#C8D5E0')}>
                      <option value="">Select your industry</option>
                      {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  {error && <p style={{ color: '#EF4444', fontSize: '13px', margin: 0 }}>{error}</p>}
                  <button type="submit" disabled={loadingSlots} style={{
                    width: '100%', padding: '15px', backgroundColor: '#2BB5A0',
                    color: '#fff', fontWeight: 700, fontSize: '16px', border: 'none',
                    borderRadius: '8px', cursor: loadingSlots ? 'wait' : 'pointer',
                    fontFamily: 'Inter, sans-serif', marginTop: '4px', opacity: loadingSlots ? 0.7 : 1,
                  }}>
                    {loadingSlots ? 'Loading availability…' : 'Next — Pick a Time →'}
                  </button>
                  <p style={{ fontSize: '12px', color: '#7A92A8', textAlign: 'center', margin: 0 }}>
                    We never share your info.
                  </p>
                </div>
              </form>
            )}

            {/* STEP 2: Calendar */}
            {step === 'calendar' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <button onClick={() => setStep('form')} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#7A92A8', fontSize: '18px', padding: '0', lineHeight: 1,
                  }}>←</button>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A2F4E', margin: 0 }}>
                    Pick a date
                  </h3>
                </div>

                {days.length === 0 ? (
                  <p style={{ color: '#7A92A8', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>
                    No available slots in the next 2 weeks. Please email us at hello@answr.info
                  </p>
                ) : (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '24px' }}>
                      {days.map((day) => (
                        <button key={day.date} onClick={() => { setSelectedDay(day); setSelectedSlot(null) }}
                          style={{
                            padding: '10px 8px', borderRadius: '8px', cursor: 'pointer',
                            border: selectedDay?.date === day.date ? '2px solid #2BB5A0' : '1.5px solid #C8D5E0',
                            backgroundColor: selectedDay?.date === day.date ? '#E8F7F5' : '#fff',
                            fontSize: '12px', fontWeight: 600,
                            color: selectedDay?.date === day.date ? '#0F6E5F' : '#1A2F4E',
                            transition: 'all 0.15s', fontFamily: 'Inter, sans-serif',
                          }}>
                          {day.label}
                        </button>
                      ))}
                    </div>

                    {selectedDay && (
                      <>
                        <p style={{ fontSize: '13px', fontWeight: 600, color: '#1A2F4E', marginBottom: '12px' }}>
                          Available times for {formattedDate}
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
                          {selectedDay.slots.map((slot) => (
                            <button key={slot.start} onClick={() => setSelectedSlot(slot)}
                              style={{
                                padding: '10px 6px', borderRadius: '8px', cursor: 'pointer',
                                border: selectedSlot?.start === slot.start ? '2px solid #2BB5A0' : '1.5px solid #C8D5E0',
                                backgroundColor: selectedSlot?.start === slot.start ? '#E8F7F5' : '#fff',
                                fontSize: '13px', fontWeight: 500,
                                color: selectedSlot?.start === slot.start ? '#0F6E5F' : '#4A6070',
                                transition: 'all 0.15s', fontFamily: 'Inter, sans-serif',
                              }}>
                              {slot.label}
                            </button>
                          ))}
                        </div>
                        {selectedSlot && (
                          <button onClick={() => setStep('confirm')} style={{
                            width: '100%', padding: '14px', backgroundColor: '#2BB5A0',
                            color: '#fff', fontWeight: 700, fontSize: '15px', border: 'none',
                            borderRadius: '8px', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                          }}>
                            Confirm {formattedDate} at {selectedSlot.label} →
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            )}

            {/* STEP 3: Confirm */}
            {step === 'confirm' && selectedDay && selectedSlot && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <button onClick={() => setStep('calendar')} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#7A92A8', fontSize: '18px', padding: '0', lineHeight: 1,
                  }}>←</button>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A2F4E', margin: 0 }}>
                    Confirm your demo
                  </h3>
                </div>
                <div style={{
                  backgroundColor: '#F0F4F8', borderRadius: '12px', padding: '20px',
                  marginBottom: '24px', border: '1px solid #E0E9F0',
                }}>
                  {[
                    { label: 'Name',     value: form.name     },
                    { label: 'Business', value: form.business },
                    { label: 'Phone',    value: form.phone    },
                    { label: 'Type',     value: form.type     },
                    { label: 'Date',     value: formattedDate },
                    { label: 'Time',     value: selectedSlot.label + ' (Pacific Time)' },
                  ].map(row => (
                    <div key={row.label} style={{
                      display: 'flex', justifyContent: 'space-between',
                      fontSize: '14px', padding: '6px 0', borderBottom: '1px solid #E0E9F0',
                    }}>
                      <span style={{ color: '#7A92A8', fontWeight: 500 }}>{row.label}</span>
                      <span style={{ color: '#1A2F4E', fontWeight: 600 }}>{row.value}</span>
                    </div>
                  ))}
                </div>
                {error && <p style={{ color: '#EF4444', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}
                <button onClick={handleBook} disabled={loading} style={{
                  width: '100%', padding: '15px', backgroundColor: '#2BB5A0',
                  color: '#fff', fontWeight: 700, fontSize: '16px', border: 'none',
                  borderRadius: '8px', cursor: loading ? 'wait' : 'pointer',
                  fontFamily: 'Inter, sans-serif', opacity: loading ? 0.7 : 1,
                }}>
                  {loading ? 'Booking…' : 'Book My Demo →'}
                </button>
                <p style={{ fontSize: '12px', color: '#7A92A8', textAlign: 'center', marginTop: '12px' }}>
                  You&apos;ll receive a calendar invite after booking.
                </p>
              </div>
            )}

            {/* STEP 4: Done */}
            {step === 'done' && selectedDay && selectedSlot && (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ fontSize: '52px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1A2F4E', marginBottom: '12px' }}>
                  You&apos;re booked!
                </h3>
                <div style={{
                  backgroundColor: '#E8F7F5', borderRadius: '12px', padding: '16px 20px',
                  marginBottom: '20px', border: '1px solid #B0DDD8',
                }}>
                  <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#0F6E5F' }}>
                    {formattedDate} at {selectedSlot.label}
                  </p>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#2BB5A0' }}>
                    Pacific Time · 20 minutes
                  </p>
                </div>
                <p style={{ fontSize: '14px', color: '#7A92A8', lineHeight: '1.6', margin: 0 }}>
                  A calendar invite is on its way. We&apos;ll show you exactly how many leads
                  you&apos;re losing and have your system running the same day.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
