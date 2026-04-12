// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from 'rehype-external-links';
import path from 'path';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@layouts': path.resolve('./src/layouts'),
            }
        }
    },
    markdown: {
        shikiConfig: {
            theme: 'everforest-dark'
        },
        rehypePlugins: [
            [
                rehypeExternalLinks, {
                    target: '_blank',
                    rel: ['noopener', 'noreferrer'],
                },
            ]
        ]
    }
});
