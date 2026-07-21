---
title: Calendar
description: Sync Google and Microsoft calendars so meetings land on the same timeline as email.
---

Calendar connectors bring your meetings into Relaya as **calendar interactions** — on the same
timeline, and through the same intelligence pipeline, as email. They are read-only.

## What gets synced

Each event becomes a canonical interaction:

- **Direction** is *internal* (a meeting isn't inbound or outbound).
- **Participants** are the organizer and attendees; resource rooms and cancelled events are dropped.
- **Text** is the title plus description.

Identity resolution links the meeting to the right account by its attendees, exactly as it does for
email — so a synced meeting contributes to that account's memory and deal health.

## Google Calendar

Reuse the same Google OAuth client as Gmail with the read-only calendar scope, and register the
calendar redirect URI:

```bash
GOOGLE_CALENDAR_REDIRECT_URI=http://localhost:3000/api/v1/connectors/oauth/google-calendar/callback
```

Connect from **Connectors → Connect Google Calendar**.

## Microsoft Calendar

Reuse the same Azure app registration with the **Calendars.Read** delegated permission, and register
the calendar redirect URI:

```bash
MICROSOFT_CALENDAR_REDIRECT_URI=http://localhost:3000/api/v1/connectors/oauth/microsoft-calendar/callback
```

Connect from **Connectors → Connect Outlook Calendar**.

## After connecting

Sync the calendar the same way you sync a mailbox. Meetings then appear in the account timeline and
feed the same memory → signals → deal-health loop — no separate handling required.
