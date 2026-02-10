// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
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
