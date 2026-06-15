// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://mattphillips.us',
  integrations: [
    mdx({
      // External links (http/https) open in a new tab; internal (/…) and
      // mailto: links are left untouched, so they stay in the same tab.
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      ],
    }),
    sitemap(),
  ],
});
