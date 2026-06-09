// app/api/calendar/book/route.ts
import { google } from 'googleapis'
import { NextResponse } from 'next/server'

const CALENDAR_ID = 'ponchovegasol@gmail.com'

function getOAuthClient() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  )
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  })
  return oauth2Client
}

export async function POST(req: Request) {
  try {
    const { name, business, phone, type, start, end } = await req.json()

    const auth     = getOAuthClient()
    const calendar = google.calendar({ version: 'v3', auth })

    const event = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      requestBody: {
        summary: `Demo — ${business} (${type})`,
        description: `Name: ${name}\nBusiness: ${business}\nPhone: ${phone}\nType: ${type}\n\nBooked via answr.info`,
        start: { dateTime: start, timeZone: 'America/Los_Angeles' },
        end:   { dateTime: end,   timeZone: 'America/Los_Angeles' },
        attendees: [{ email: CALENDAR_ID }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 60 },
            { method: 'popup', minutes: 30 },
          ],
        },
      },
    })

    return NextResponse.json({ success: true, eventId: event.data.id })
  } catch (error) {
    console.error('Calendar booking error:', error)
    return NextResponse.json({ success: false, error: 'Failed to book appointment' }, { status: 500 })
  }
}
