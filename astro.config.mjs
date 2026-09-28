// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from 'rehype-external-links';
import path from 'path';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/posts/projects/cli-dashboard': '/projects/cli-dashboard',
        '/posts/projects/three-body': '/projects/three-body',
    },
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
            theme: 'rose-pine'
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
