// lib/google-calendar.ts
// Utility functions for Google Calendar API integration

export interface TimeSlot {
  start: string  // ISO string
  end: string    // ISO string
  label: string  // e.g. "10:00 AM"
}

export interface AvailableDay {
  date: string        // e.g. "2024-01-15"
  label: string       // e.g. "Mon Jan 15"
  slots: TimeSlot[]
}

// Business hours: 10am - 6pm, slots every 30 minutes
const SLOT_DURATION_MINUTES = 60
const BUSINESS_START_HOUR   = 10
const BUSINESS_END_HOUR     = 18

function generateSlotsForDay(dateStr: string, busyPeriods: { start: string; end: string }[]): TimeSlot[] {
  const slots: TimeSlot[] = []

  for (let hour = BUSINESS_START_HOUR; hour < BUSINESS_END_HOUR; hour++) {
    for (let min = 0; min < 60; min += SLOT_DURATION_MINUTES) {
      const start = new Date(`${dateStr}T${String(hour).padStart(2,'0')}:${String(min).padStart(2,'0')}:00`)
      const end   = new Date(start.getTime() + SLOT_DURATION_MINUTES * 60 * 1000)

      // Skip if slot is in the past
      if (start < new Date()) continue

      // Check if slot overlaps with any busy period
      const isBusy = busyPeriods.some(busy => {
        const busyStart = new Date(busy.start)
        const busyEnd   = new Date(busy.end)
        return start < busyEnd && end > busyStart
      })

      if (!isBusy) {
        const label = start.toLocaleTimeString('en-US', {
          hour: 'numeric', minute: '2-digit', hour12: true
        })
        slots.push({ start: start.toISOString(), end: end.toISOString(), label })
      }
    }
  }

  return slots
}

export async function getAvailableSlots(): Promise<AvailableDay[]> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const twoWeeksLater = new Date(today)
  twoWeeksLater.setDate(today.getDate() + 14)

  // Fetch busy times from our API route
  const res = await fetch('/api/calendar/check-availability', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timeMin: today.toISOString(),
      timeMax: twoWeeksLater.toISOString(),
    }),
  })

  const busyTimes: { start: string; end: string }[] = res.ok ? await res.json() : []

  const days: AvailableDay[] = []

  for (let i = 0; i < 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)

    // Skip Sundays (0)
    if (date.getDay() === 0) continue

    const dateStr = date.toISOString().split('T')[0]
    const label   = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    const slots   = generateSlotsForDay(dateStr, busyTimes)

    // Only include days that have at least 1 available slot
    if (slots.length > 0) {
      days.push({ date: dateStr, label, slots })
    }
  }

  return days
}

export async function createCalendarEvent(data: {
  name: string
  business: string
  phone: string
  type: string
  start: string
  end: string
}): Promise<{ success: boolean; eventId?: string; error?: string }> {
  const res = await fetch('/api/calendar/create-booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  return res.json()
}
