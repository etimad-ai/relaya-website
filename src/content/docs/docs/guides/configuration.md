---
title: Configuration
description: The environment variables that configure the database, auth, connectors, and the model gateway.
---

Relaya is configured through environment variables. Copy `.env.example` to `.env` and adjust. This
page groups the ones that matter; the example file is the full reference.

## Database

Distinct connection strings keep least-privilege boundaries explicit:

```bash
DATABASE_URL=postgresql://relaya_app_login:...@localhost:5432/relaya
MIGRATION_DATABASE_URL=postgresql://relaya:...@localhost:5432/relaya
DISPATCH_DATABASE_URL=postgresql://relaya_dispatch_login:...@localhost:5432/relaya
PROVISION_DATABASE_URL=postgresql://relaya_provision_login:...@localhost:5432/relaya
```

The app connects as the least-privilege login role; migrations and provisioning use their own.

## Authentication (OIDC)

The API verifies the OIDC **ID token**, whose audience is the OIDC client id — so this works with the
dev provider and any external IdP.

```bash
OIDC_ISSUER=http://localhost:8080/realms/relaya
OIDC_AUDIENCE=relaya-web        # = the OIDC client id
```

For an external provider such as Google, point `OIDC_ISSUER` at their issuer, set `OIDC_AUDIENCE` to
your web client id, and (for a confidential client) set `OIDC_CLIENT_SECRET` on the web app.

## The model gateway

Relaya's LLM access is provider-neutral over an OpenAI-compatible interface. Unset, it uses a
deterministic fixture extractor (so CI stays hermetic); set a base URL + model to use a real model.

```bash
LLM_BASE_URL=https://api.openai.com/v1
LLM_API_KEY=...
LLM_MODEL=gpt-4o-mini
```

The same three variables point at Anthropic's OpenAI-compatible endpoint, Gemini's, a local Ollama,
or anything else that speaks the protocol.

## Connectors

Mail and calendar connectors reuse one OAuth client per provider. See
[Gmail & Outlook](/docs/connectors/mail) and [Calendar](/docs/connectors/calendar) for the client setup, plus:

```bash
# Encrypts connector OAuth tokens at rest, and signs the short-lived OAuth state.
CONNECTOR_SECRET_KEY=            # base64 of 32 random bytes
CONNECTOR_OAUTH_STATE_SECRET=
```

Generate the key with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Transactional email

Notification delivery (invites today; approval and daily-brief emails next) is provider-neutral. In
development the `log` transport prints emails to the console — nothing is delivered, so local dev and
CI stay hermetic. Set `smtp` with an `SMTP_URL` to deliver for real.

```bash
EMAIL_TRANSPORT=log                 # or 'smtp'
# SMTP_URL=smtp://user:pass@smtp.example.com:587
# EMAIL_FROM=Relaya <no-reply@relaya.local>
WEB_PUBLIC_URL=http://localhost:5173   # builds links (e.g. the invite accept URL)
```

Emails are delivered **through the outbox**, so they are only sent when the dispatcher is running
(`OUTBOX_DISPATCH_ENABLED=true`). The invite link is always available to copy from the Members page
regardless.

## The async dispatcher

```bash
OUTBOX_DISPATCH_ENABLED=false    # true runs the pipeline off the request path
```

Leave it off in local development to trigger extraction and recompute manually; turn it on to have
the pipeline — extraction, recompute, and notification email — run automatically.
