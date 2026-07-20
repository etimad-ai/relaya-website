---
title: Introduction
description: What Relaya is, the idea behind an AI-native CRM, and how the pieces fit together.
---

Relaya is an **AI-native CRM**: instead of asking your team to type the relationship into a
database, it builds itself from the communications you already have. Connect email and calendar,
and Relaya reads those conversations, extracts what matters with the evidence attached, and turns it
into memory, deal health, and next-best-actions — while keeping a human in control of anything
consequential.

## The core idea

A traditional CRM is a system of *record*: someone remembers to log a call, update a stage, note an
objection. In practice most of the relationship never gets entered, and the pipeline is always a
little out of date.

Relaya is a system of *evidence*. Your real messages and meetings are the source of truth. The
product's job is to understand them — faithfully, with citations — and to act only within bounds you
set.

## The loop

Everything in Relaya runs on one continuous loop:

1. **Connect** — link Gmail, Outlook, and calendars over OAuth.
2. **Remember** — each message and meeting becomes structured, evidence-grounded memory.
3. **Understand** — memory and activity become signals, an explainable deal-health score, and
   ranked recommendations.
4. **Act** — agents draft follow-ups and briefings; consequential actions wait for your approval.

Connect once and the loop is self-sustaining: new activity flows through extraction and intelligence
automatically.

## Principles

- **Evidence over data entry.** Every remembered fact links back to the quote it came from.
- **Explainable, never opaque.** Deal health shows its signals and weighting — no black-box score.
- **Governed by design.** The model proposes; a human approves; the system keeps immutable receipts.
- **Yours to run.** Single-language TypeScript, a provider-neutral model gateway, and standard OIDC
  auth. Point it at any LLM or identity provider.

## Where to next

- [Quickstart](/quickstart) — get the whole stack running locally against a demo workspace.
- [Architecture](/concepts/architecture) — how the modular monolith is put together.
- [Connectors](/connectors/overview) — connect real Gmail, Outlook, and calendars.
