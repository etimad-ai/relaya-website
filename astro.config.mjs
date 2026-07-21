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
      // Link back to the marketing home from the docs header.
      components: {},
      sidebar: [
        {
          label: "Start here",
          items: [
            { label: "Introduction", slug: "docs/introduction" },
            { label: "Quickstart", slug: "docs/quickstart" },
          ],
        },
        {
          label: "Concepts",
          items: [
            { label: "Architecture", slug: "docs/concepts/architecture" },
            {
              label: "Memory & intelligence",
              slug: "docs/concepts/memory-and-intelligence",
            },
            {
              label: "Agents & approvals",
              slug: "docs/concepts/agents-and-approvals",
            },
            {
              label: "Tenancy & security",
              slug: "docs/concepts/tenancy-and-security",
            },
          ],
        },
        {
          label: "Connectors",
          items: [
            { label: "Overview", slug: "docs/connectors/overview" },
            { label: "Gmail & Outlook", slug: "docs/connectors/mail" },
            { label: "Calendar", slug: "docs/connectors/calendar" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Run it locally", slug: "docs/guides/local-development" },
            { label: "Configuration", slug: "docs/guides/configuration" },
          ],
        },
      ],
    }),
  ],
});
