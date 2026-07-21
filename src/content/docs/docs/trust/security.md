---
title: Security
description: How Relaya protects your workspace, your credentials, and your customer data.
---

Relaya handles real customer communication, so protecting it is foundational rather than an afterthought. This page describes the safeguards in plain terms.

## Sign-in without passwords

You sign in through your own identity provider (such as Google or Microsoft). Relaya never asks for, sees, or stores a password — authentication is delegated to a provider you already trust, and your session is carried in an encrypted, browser-only cookie sent exclusively over HTTPS.

## Workspace isolation

Each workspace's data is strictly separated from every other workspace. Isolation is enforced at the database itself — every query is scoped to your workspace, so one workspace can never read another's records. Relaya also runs with least-privilege database access, meaning each part of the system can only touch the data it genuinely needs.

## Protecting connected mailboxes

When you connect Gmail, Outlook, or a calendar, Relaya receives a secure authorization from your provider — never your password. Those connector credentials are **encrypted at rest** using strong, industry-standard encryption (AES-256-GCM). You can disconnect a source at any time, which revokes Relaya's access.

## Encryption in transit and at rest

All traffic between you and Relaya runs over HTTPS/TLS. Sensitive stored secrets, including connector credentials, are encrypted at rest.

## Human control over agent actions

Relaya's agents can draft actions, but anything that leaves your workspace — such as sending an email — requires explicit human approval first. This is a deliberate safety boundary, not a setting. See [Approvals](/docs/using/approvals).

## Roles and access

Access within a workspace is governed by roles — Admin, Manager, Member, and Viewer — so you can give teammates exactly the access they need, and no more. Viewers are strictly read-only. See [Invite your team](/docs/using/team).

## Reporting a security issue

If you believe you've found a security vulnerability, please email **security@relayahq.com**. We welcome responsible disclosure and will work with you on any confirmed issue.

:::note
Relaya is offered as a private pilot. We're transparent about that stage: the safeguards above are in place today, and formal third-party certifications are part of our roadmap rather than something we claim prematurely. The specifics for your engagement — hosting region, data-processing terms, and our subprocessor list — are covered in your pilot agreement and on [Your data](/docs/trust/data).
:::
