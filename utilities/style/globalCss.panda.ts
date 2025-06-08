import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
    html: {
        scrollBehavior: 'smooth'
    },
    body: {
        backgroundColor: 'black',
        color: 'var(--colors-fg-default)',
        fontFamily: 'inter',
        fontWeight: 'light',
        '&::selection': {
            backgroundColor: 'var(--colors-violet-9)',
            color: 'white'
        }
    }
});
