---
title: Memory & intelligence
description: How Relaya turns raw conversations into evidence-grounded memory and explainable deal health.
---

The heart of Relaya is the path from a raw message to something you can act on — kept faithful and
explainable at every step.

## Canonical interactions

Every source — an email, a calendar event — is normalized into one **canonical interaction** shape
before anything else touches it. Downstream code never sees provider-specific formats; it sees
participants, direction, timestamps, and normalized text. Identity resolution links each interaction
to the right account and contacts by email and domain.

## Memory extraction

Extraction turns interactions into **memory items** — structured facts such as a commitment, an
objection, a buying signal, a decision timeline, or a competitor mention. Each memory item carries:

- **The evidence** — the exact quote (and its source) the fact came from.
- **An epistemic state** — *observed* (stated directly) vs *inferred* (a hypothesis).
- **A confidence** and the **model provenance** that produced it.

Because facts are grounded in quotes, they can be shown, checked, and corrected — not taken on faith.

## Human correction

Memory is not the model's private notebook. Every item can be **confirmed**, **rejected**, or
**edited** — an edit supersedes the original with a human-authored version while preserving history.
Consolidation supersedes stale singletons so the active picture stays current.

## Explainable deal health

Intelligence turns memory and activity into **signals** (competitor present, unanswered request,
stalled next step, and so on), then a weighted **deal-health score**. The score is never a bare
number: it comes with the contributing factors, their weights, a plain-language narrative, and the
evidence behind each signal. It's a score you can defend in a forecast review.

From there, Relaya produces **ranked next-best-actions** and a **daily brief** that surfaces the
deals most in need of attention, worst-health-first.

## Why grounding matters

An AI CRM that invents context is worse than no CRM. Relaya's design goal is the opposite: if it
can't cite the evidence, it doesn't claim the fact — and where evidence is thin, it says so rather
than filling the gap.
