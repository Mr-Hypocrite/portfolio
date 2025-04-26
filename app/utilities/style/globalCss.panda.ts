import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
    html: {
        scrollBehavior: 'smooth'
    },
    body: {
        backgroundColor: 'var(--colors-bg-canvas)',
        color: 'var(--colors-fg-default)'
    }
});
