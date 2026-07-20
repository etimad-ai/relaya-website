---
title: Quickstart
description: Run the full Relaya stack locally and sign in to a seeded demo workspace.
---

This gets the whole stack — API, web app, and a local identity provider — running against a seeded
demo workspace, using the deterministic fixture connectors (no real accounts required).

## Prerequisites

- **Node.js 22+** and **npm**
- **PostgreSQL 15+** running locally
- The Relaya repository checked out

## 1. Install and configure

```bash
npm install
cp .env.example .env
```

The defaults in `.env` point at a local Postgres and the bundled dev identity provider — enough to
run everything locally.

## 2. Prepare the database

```bash
npm run db:migrate         # apply migrations
npm run db:provision-dev   # create the least-privilege login roles
npm run db:seed-demo       # demo workspace, users, and a sample account
```

## 3. Start the services

Run each in its own terminal:

```bash
npm run dev:idp    # local OpenID Provider on :8080
npm run dev:api    # API on :3000
npm run dev:web    # web app on :5173
```

## 4. Sign in

Open **http://localhost:5173**. You'll be sent to the sign-in screen. Use:

- **admin@demo.test** — workspace owner (full access)
- **viewer@demo.test** — read-only

The dev identity provider accepts any email with no password, so any other address starts a fresh
self-serve sign-up.

## 5. See the loop

With the fixture mailbox seeded, drive the pipeline from the UI:

1. **Connectors → Sync** to ingest the fixture mailbox.
2. **Extract** turns the new messages into memory.
3. **Recompute** turns memory into signals, deal health, and recommendations.
4. Open an **Opportunity** to see the explainable score, then run **Draft follow-up** and approve
   the proposed email from **Approvals**.

To connect a real mailbox or calendar instead of the fixture, see [Connectors](/connectors/overview).

## Verify everything

```bash
npm run verify           # format, lint, typecheck, unit tests, build
npm run test:integration # integration + tenant-isolation suites (needs a *_test database)
```
