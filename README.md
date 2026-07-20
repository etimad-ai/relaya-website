# Relaya website

Marketing site and documentation for **Relaya**, the AI-native CRM — built with
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build). This is a standalone
repository, independent of the Relaya application.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output in dist/
npm run preview
```

## Structure

- `src/pages/index.astro` — the marketing landing page (custom design).
- `src/content/docs/**` — the documentation, rendered by Starlight.
- `src/styles/` — design tokens (`tokens.css`), landing styles, and Starlight theme overrides.
- `astro.config.mjs` — Starlight configuration (title, sidebar, theme).

The landing page lives at `/`; the docs live at their content slugs (e.g. `/introduction`,
`/concepts/architecture`) with Starlight's sidebar, search, and dark mode.
