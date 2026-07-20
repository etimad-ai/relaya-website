---
title: Run it locally
description: A fuller tour of running Relaya on your machine, including the async pipeline and tests.
---

The [Quickstart](/quickstart) gets you signed in fast. This guide fills in the rest: the async
pipeline, the demo walkthrough, and the test suites.

## Services and ports

| Command | What it starts | Port |
| --- | --- | --- |
| `npm run dev:idp` | Local OpenID Provider (discovery, authorize, token, JWKS) | 8080 |
| `npm run dev:api` | The API | 3000 |
| `npm run dev:web` | The web app | 5173 |

The dev identity provider is a real authorization-code + PKCE provider, so you authenticate exactly
as you would against a production IdP — it simply trusts any email with no password.

## The pipeline: manual vs automatic

The **Extract** and **Recompute** buttons in the app are manual triggers for the intelligence
pipeline, so you can watch each stage:

- **Extract** turns newly-ingested interactions into memory.
- **Recompute** turns memory and activity into signals, deal health, and recommendations.

In production the same stages run automatically. Set `OUTBOX_DISPATCH_ENABLED=true` and the outbox
dispatcher drives extraction after ingestion and recompute after memory changes on its own.

## Demo walkthrough

With the demo seeded and the fixture mailbox configured, you can drive the whole loop from the
browser: connect the fixture mailbox, sync, extract, recompute, then open an opportunity to see the
explainable deal health, run **Draft follow-up**, and approve the send from **Approvals**.

## Tests

```bash
npm run verify            # format, lint, typecheck, unit tests, build
npm run test:integration  # integration + tenant-isolation suites
```

Integration tests build a disposable `*_test` database from migrations and run as the least-privilege
application role — a superuser connection would vacuously pass the isolation assertions, so the
harness refuses one.

## Resetting the demo

Delete the demo tenant (it cascades) and re-seed:

```bash
npm run db:seed-demo
```
