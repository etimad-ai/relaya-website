// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The marketing landing lives at `/` as a custom Astro page (src/pages/index.astro).
// Starlight owns the documentation under the routes generated from src/content/docs/**.
export default defineConfig({
  site: 'https://relayahq.com',
  integrations: [
    starlight({
      title: 'Relaya',
      tagline: 'The AI-native CRM that builds itself from your conversations.',
      description:
        'Relaya turns your real customer communications into evidence-grounded memory, explainable deal health, and governed agents with human approval.',
      customCss: ['./src/styles/tokens.css', './src/styles/starlight.css'],
      logo: { src: './src/assets/mark.svg', replacesTitle: false },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/relaya/relaya' },
      ],
      // Link back to the marketing home from the docs header.
      components: {},
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: 'Quickstart', slug: 'quickstart' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'Architecture', slug: 'concepts/architecture' },
            { label: 'Memory & intelligence', slug: 'concepts/memory-and-intelligence' },
            { label: 'Agents & approvals', slug: 'concepts/agents-and-approvals' },
            { label: 'Tenancy & security', slug: 'concepts/tenancy-and-security' },
          ],
        },
        {
          label: 'Connectors',
          items: [
            { label: 'Overview', slug: 'connectors/overview' },
            { label: 'Gmail & Outlook', slug: 'connectors/mail' },
            { label: 'Calendar', slug: 'connectors/calendar' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Run it locally', slug: 'guides/local-development' },
            { label: 'Configuration', slug: 'guides/configuration' },
          ],
        },
      ],
    }),
  ],
});
