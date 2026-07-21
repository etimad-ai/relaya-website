// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// The marketing landing lives at `/` as a custom Astro page (src/pages/index.astro).
// Starlight owns the documentation, nested under src/content/docs/docs/** so every doc route is
// served at /docs/* (e.g. /docs/introduction) alongside the marketing site at the apex.
export default defineConfig({
  site: "https://relayahq.com",
  integrations: [
    starlight({
      title: "Relaya",
      tagline: "The AI-native CRM that builds itself from your conversations.",
      description:
        "Relaya turns your real customer communications into evidence-grounded memory, explainable deal health, and governed agents with human approval.",
      customCss: ["./src/styles/tokens.css", "./src/styles/starlight.css"],
      logo: { src: "./src/assets/mark.svg", replacesTitle: false },
      // Dark-only docs, matching the product: replace the theme toggle with an empty component.
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      sidebar: [
        {
          label: "Get started",
          items: [
            { label: "Welcome to Relaya", slug: "docs/introduction" },
            { label: "Sign in & your workspace", slug: "docs/sign-in" },
            {
              label: "Connect email & calendar",
              slug: "docs/connect-email-calendar",
            },
          ],
        },
        {
          label: "Using Relaya",
          items: [
            { label: "Your day in Today", slug: "docs/using/today" },
            { label: "Deals & pipeline", slug: "docs/using/pipeline" },
            {
              label: "Accounts & contacts",
              slug: "docs/using/accounts-contacts",
            },
            { label: "Tasks", slug: "docs/using/tasks" },
            {
              label: "Approvals & governed agents",
              slug: "docs/using/approvals",
            },
            { label: "Import your data", slug: "docs/using/import" },
            { label: "Invite your team", slug: "docs/using/team" },
          ],
        },
        {
          label: "How it works",
          items: [{ label: "How Relaya works", slug: "docs/how-relaya-works" }],
        },
        {
          label: "Trust & privacy",
          items: [
            { label: "Security", slug: "docs/trust/security" },
            { label: "Privacy", slug: "docs/trust/privacy" },
            { label: "Your data", slug: "docs/trust/data" },
          ],
        },
        {
          label: "Support",
          items: [{ label: "Get help", slug: "docs/support" }],
        },
      ],
    }),
  ],
});
