// app/api/calendar/availability/route.ts
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
    const { timeMin, timeMax } = await req.json()

    const auth     = getOAuthClient()
    const calendar = google.calendar({ version: 'v3', auth })

    const freeBusy = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        items: [{ id: CALENDAR_ID }],
      },
    })

    const busy = freeBusy.data.calendars?.[CALENDAR_ID]?.busy ?? []

    return NextResponse.json(busy)
  } catch (error) {
    console.error('Calendar availability error:', error)
    // Return empty array so the form still works — all slots shown as available
    return NextResponse.json([])
  }
}
