---
title: Connectors overview
description: How Relaya's connectors work, and what happens when you connect a real mailbox or calendar.
---

Connectors are how Relaya reads (and, for mail, writes) your real communications. They all implement
one contract, so the ingestion pipeline treats every source the same way.

## What's supported

| Provider | Inbound | Outbound | Notes |
| --- | --- | --- | --- |
| **Gmail** | ✓ sync | ✓ send | Google OAuth |
| **Outlook / Microsoft 365** | ✓ sync | ✓ send | Microsoft Graph |
| **Google Calendar** | ✓ sync | — | read-only |
| **Microsoft Calendar** | ✓ sync | — | read-only |
| **Fixture mailbox** | ✓ | — | deterministic, for local dev + tests |

## How a connection is made

1. From **Connectors** in the app, start the OAuth flow for a provider.
2. You're redirected to the provider's consent screen; on approval, the callback stores the tokens
   **encrypted at rest** and activates the connection.
3. The connector's **provider-verified email** — not anything you typed — becomes its account
   identity.

Under the hood the OAuth flow is provider-generic: each provider is a URL segment
(`/connectors/oauth/{provider}/start`) sharing the same signed-state, token-exchange, and
encrypted-storage machinery.

## How sync works

A sync pulls messages or events, normalizes each into a **canonical interaction**, resolves it to the
right account and contacts, and writes it once (ingestion is idempotent, so overlapping syncs land as
duplicates, not double rows). Large backfills can run **off the request path** via the outbox.

Everything downstream — memory, deal health, agents — is source-type agnostic. A meeting from a
calendar and an email from a mailbox flow through the same pipeline.

## Disconnecting

Disconnecting a connector makes a best-effort token revocation with the provider, deletes the stored
credentials, and marks the connection inactive. Historical interactions are retained; only the
ability to sync or send is removed.

See [Gmail & Outlook](/docs/connectors/mail) and [Calendar](/docs/connectors/calendar) for the specifics of
each.
