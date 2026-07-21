---
title: Agents & approvals
description: How Relaya's agents propose actions and how the human-approval gate keeps you in control.
---

Relaya's agents are useful *because* they're bounded. They work from the same evidence you can see,
and anything that touches the outside world stops for your approval.

## The agents

- **Meeting prep** — a grounded briefing for an upcoming conversation: recent developments, open
  questions, risks, and talking points, each drawn from real memory with citations.
- **Draft follow-up** — drafts a follow-up email from the deal's evidence and proposes it as an
  action.
- **Deal intelligence** — an explainable read on where a deal stands and what's missing.
- **Copilot** — answers questions about an account or opportunity from evidence, and **abstains**
  when the evidence isn't there rather than guessing.

Because the agents are grounded, a freshly created deal with no activity yet produces a deliberately
thin briefing — connect a mailbox and sync, and it fills in.

## The approval gate

Actions are classified by consequence:

- **Internal, low-risk** actions (like creating a task) run immediately and record a receipt.
- **External, consequential** actions (like sending an email) are **proposed**, not executed. They
  wait in the Approvals queue with the full draft until a person approves or rejects them.

The lifecycle is explicit: **Propose → Approve → Execute → Verify → Receipt.**

## Execute-after-commit

Approval and execution are deliberately separated. Approving commits the decision first; the actual
send happens *after* that commit, driven from the outbox. The send is idempotency-keyed, so a retry
after a crash can never double-send. The result is recorded as an **immutable action receipt** —
what was proposed, who approved it, and what the provider returned.

## Why this shape

Autonomy without accountability is a liability. Relaya's stance is that an agent should be able to do
real work, but a human should always be able to answer "why did this happen, and who said yes?" — and
the system should make that answer trivial to find.
