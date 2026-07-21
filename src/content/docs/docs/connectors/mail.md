---
title: Gmail & Outlook
description: Connect real mailboxes for two-way email — sync inbound and send outbound with approval.
---

The mail connectors bring real email into Relaya: inbound sync feeds the memory pipeline, and
approved agent drafts go out through the same account.

## Gmail (Google)

Create a Google Cloud **OAuth 2.0 "Web application"** client and set its authorized redirect URI to
your `GOOGLE_OAUTH_REDIRECT_URI`. Grant the delegated scopes for read and send.

```bash
GOOGLE_OAUTH_CLIENT_ID=...
GOOGLE_OAUTH_CLIENT_SECRET=...
# plus the connector secret + state signing keys (see Configuration)
```

Then connect from the app (**Connectors → Connect Gmail**) and consent. Sync pulls recent mail;
approved sends go out via the Gmail API.

## Outlook / Microsoft 365

Create an Azure **App registration** with the delegated Microsoft Graph permissions **Mail.ReadWrite**,
**Mail.Send**, **User.Read**, and **offline_access**, and register the redirect URI.

```bash
MICROSOFT_OAUTH_CLIENT_ID=...
MICROSOFT_OAUTH_CLIENT_SECRET=...
MICROSOFT_OAUTH_TENANT=common   # or organizations / consumers / a directory id
```

> **Why Mail.ReadWrite, not just Mail.Read?** The idempotent send creates a draft (carrying a
> deterministic message id) before sending it, so a retry can be de-duplicated instead of
> double-sending. That requires write access to the mailbox.

## Sending: execute-after-commit

Outbound sends never fire inside the approving transaction. Approval commits first; the send runs
after, keyed to the action's idempotency key, so a crash-and-retry cannot send twice. Each send is
recorded as an immutable receipt.

## Choosing which mailbox sends

When more than one mailbox is connected, Relaya sends from the account that has actually been
corresponding with that opportunity — the connector of the most recent linked interaction — falling
back to the oldest connected mailbox only when there's no prior correspondence.
