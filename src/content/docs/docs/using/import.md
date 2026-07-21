---
title: Import your data
description: Bring your existing accounts and contacts into Relaya from a CSV file.
---

You can bring your existing accounts and contacts into Relaya from a **CSV file** — a spreadsheet exported as comma-separated values.

## What you can import

Two kinds of records, from spreadsheet columns:

- **Accounts** — account name, industry, domain
- **Contacts** — contact name, email, phone, account

:::tip
Headers are matched flexibly, so your column names don't have to be exact. A column called "Company", "Account Name", or "Organization" can all map to the account name — no need to rename everything first.
:::

## Import is idempotent

Re-importing the same file **won't create duplicates**. Relaya matches:

- **Accounts by name**
- **Contacts by email**

If a record already exists, the import updates it rather than adding a second copy. That means you can safely re-run an import — for example after fixing a few rows — without making a mess.

## Bad rows are handled gracefully

One problem row never fails the whole file. Instead:

- Good rows import normally
- Each bad row is **reported individually with a reason**, so you can see exactly what to fix

Correct the flagged rows in your spreadsheet and import again — the idempotent matching keeps everything tidy.

:::note
Because contacts are matched by email, rows without an email address can't be de-duplicated reliably. Include an email for each contact wherever you can.
:::

## After importing

Your imported records appear in [Accounts and contacts](/docs/using/accounts-contacts), where you can review, edit, and link them.

## Where to go next

- Review what came in under [Accounts and contacts](/docs/using/accounts-contacts)
- Connect deals to imported companies in [Deals and pipeline](/docs/using/pipeline)
