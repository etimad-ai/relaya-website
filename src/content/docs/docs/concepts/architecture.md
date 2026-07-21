---
title: Architecture
description: How Relaya is structured — a single-language modular monolith with an async pipeline.
---

Relaya is a **modular monolith** written entirely in TypeScript. One language, one deployable API,
clear module boundaries, and an asynchronous pipeline for the work that shouldn't block a request.

## Packages and apps

The repository is an npm-workspaces monorepo:

- **`@relaya/domain`** — the canonical types and Zod schemas (interactions, CRM entities, agents).
  Branded IDs keep tenant and entity identifiers from being mixed up.
- **`@relaya/database`** — the Postgres access layer: tenant-context helpers, provisioning, and the
  test harness.
- **`@relaya/connectors`** — provider adapters (Gmail, Outlook, calendars) behind one contract.
- **`@relaya/model-gateway`** — the provider-neutral LLM interface and its OpenAI-compatible client.
- **`apps/api`** — the NestJS (Fastify) API where the domain modules live.
- **`apps/web`** — the Next.js App Router web app (a backend-for-frontend).
- **`apps/worker`** — the boundary the async pipeline promotes into.

## Request path

The web app is a **backend-for-frontend**: the browser only talks to Next.js, which holds the user's
OIDC token in an encrypted, httpOnly session cookie and calls the API server-side. No token reaches
the client, and there is no CORS surface.

## The async pipeline

Domain writes and their events commit in the same transaction to a **transactional outbox**. A
dispatcher then drives downstream work off the request path:

- `interaction.ingested` → memory extraction
- `memory.updated` → intelligence recompute
- `action.approved` → execute-after-commit of a consequential action (like an email send)
- `connector.sync.requested` → a mailbox/calendar backfill

Handlers are idempotent, so at-least-once delivery is safe. In development you can also trigger
extraction and recompute manually to watch each stage happen.

## Data model highlights

- Composite `(tenant_id, id)` foreign keys keep every relationship inside one tenant.
- Derived data (signals, recommendations) is recomputable and self-healing.
- An append-only audit log records every mutation.

See [Tenancy & security](/docs/concepts/tenancy-and-security) for how isolation is enforced, and
[Memory & intelligence](/docs/concepts/memory-and-intelligence) for what the pipeline produces.
