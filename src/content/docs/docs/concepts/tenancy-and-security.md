---
title: Tenancy & security
description: How Relaya isolates tenants at the database and keeps least-privilege boundaries throughout.
---

Relaya is multi-tenant from the ground up, and isolation is enforced where it's hardest to get
wrong — at the database — not just in application code.

## Forced row-level security

Every tenant-owned table has **forced row-level security** keyed on a transaction-local
`app.tenant_id`. The application connects as a least-privilege role that is neither superuser nor
`BYPASSRLS`, so the policies are always in effect. A bug in the application cannot read or write
across tenants, because the database itself refuses.

Access always goes through a `withTenantContext` helper that sets the tenant for the duration of a
transaction. Composite `(tenant_id, id)` foreign keys ensure a relationship can never point across
tenants.

## Least-privilege roles

Distinct database roles keep blast radius small:

- **App role** — ordinary domain reads and writes, tenant-scoped by RLS.
- **Dispatch role** — the async dispatcher's only cross-tenant surface: read/update on the outbox,
  and nothing else.
- **Provision role** — may insert new tenants and their first user, used only by self-serve sign-up.

Runtime connections use per-environment login roles that inherit from these; credentials live in
environment secrets, never in migrations.

## Authentication

Authentication is standard **OIDC**. The web app runs an authorization-code + PKCE flow and presents
the verified ID token to the API, which checks it against the provider's JWKS. Because it's
discovery-driven, pointing at an external identity provider is configuration, not code.

Membership lookup is itself tenant-safe: the API resolves which workspaces a verified subject belongs
to without bypassing RLS, and the workspace selector can never be used to claim membership.

## Secrets at rest

Connector OAuth tokens are **encrypted at rest** with AES-256-GCM before they touch the database —
the database only ever holds ciphertext, a per-record IV, and the auth tag. Raw refresh tokens never
sit beside the connection row.

## Auditability

Every mutation writes to an **append-only audit log**, and consequential agent actions carry
immutable receipts. The record of what happened is designed to be complete and tamper-evident.
